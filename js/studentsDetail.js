const studentData = [
    {
        grade: "6-1",
        name: "Б.Ангараг",
        certificates: [
            "shooter"
        ]
    },
    {
        grade: "11-2",
        name: "Д.Эрмүүн",
        certificates: [
            "https://www.sololearn.com/certificates/CC-SC2YPODE",
            "https://www.sololearn.com/certificates/CC-JQVM0AAR",
            "https://www.sololearn.com/certificates/CC-2I7PPWXM"
        ]
    },
    {
        grade: "10-2",
        name: "Ангараг",
        certificates: [
            "https://www.sololearn.com/certificates/CC-ABC12345"
        ]
    }
];

// Анги сонгоход тухайн ангийн нэрсийг оруулна
function updateStudentNames() {
    const grade = document.getElementById('searchGrade').value;
    const nameSelect = document.getElementById('studentName');

    // өмнөх сонголтыг арилгах
    nameSelect.innerHTML = '<option value="">--Нэр сонгох--</option>';

    // тухайн ангийн бүх сурагчдыг олох
    const studentsInGrade = studentData.filter(s => s.grade === grade);

    // нэр бүрээр option нэмэх
    studentsInGrade.forEach(student => {
        const option = document.createElement('option');
        option.value = student.name;
        option.textContent = student.name;
        nameSelect.appendChild(option);
    });
}

// Жишээ: хайлт хийх функц (нэр эсвэл ангиар)
function filterStudents() {
    const grade = document.getElementById('searchGrade').value;
    const name = document.getElementById('searchName').value.toLowerCase();
    const selectedName = document.getElementById('studentName').value;

    const studentName = selectedName || name;

    if (grade !== "" && studentName !== "") {
        // Тухайн сурагчийг олно
        const matchedStudent = studentData.find(s =>
            s.grade === grade && s.name.toLowerCase() === studentName.toLowerCase()
        );

        if (matchedStudent) {
            const certs = matchedStudent.certificates || [];

            // Сертификатуудыг JSON.stringify хийж encodeURIComponent ашиглана
            const certificatesParam = encodeURIComponent(JSON.stringify(certs));

            window.location.href = `studentDetail.html?grade=${grade}&name=${encodeURIComponent(studentName)}&certificates=${certificatesParam}`;
        } else {
            alert("Тухайн сурагч олдсонгүй.");
        }
    } else {
        alert("Анги болон нэрийг сонгоно уу.");
    }
}

// studentDetail page
// URL-аас параметруудыг авна
const params = new URLSearchParams(window.location.search);
const grade = params.get('grade') || "";
const name = params.get('name') || "";
const certsRaw = params.get('certificates') || "[]";
// Зургийн нэрийг ангийн нэртэй уялдуулан динамик өгнө
const imageElement = document.getElementById('studentImage');
if (grade) {
    imageElement.src = `images/${grade}${name}.jpg`;
    console.log("grade: ", grade);
} else {
    imageElement.src = 'images/default.jpg'; // анги байхгүй бол default зураг
}

let certificates = [];
try {
    certificates = JSON.parse(decodeURIComponent(certsRaw));
} catch (e) {
    console.error("Сертификатыг задлахад алдаа гарлаа:", e);
}

// DOM руу утгуудыг оруулах
document.getElementById('sectionTitle').textContent = `${grade} анги - ${name} сурагч`;
document.getElementById('gradeText').textContent = `Анги: ${grade}`;
document.getElementById('studentName').textContent = `Нэр: ${name}`;

const certContainer = document.getElementById('certificatesContainer');
if (certificates.length > 0) {
    certificates.forEach((url, index) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = "_blank";
        a.textContent = `Сертификат ${index + 1}`;
        certContainer.appendChild(a);
    });
} else {
    certContainer.textContent = "Сертификат мэдээлэл алга.";
}
