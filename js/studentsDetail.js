const studentData = [
    {
        grade: "6-1",
        name: "Б.Ангараг",
        certificates: [
            "shooter"
        ]
    },
    {
        grade: "6-1",
        name: "А.Мөнгөнзул",
        certificates: [
            "duck"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Аригбөх",
        certificates: [
            "coockie clicker"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Арми",
        certificates: [
            "flappy bird"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Болд-Оргил",
        certificates: [
            "sigma ronaldo"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Есүй",
        certificates: [
            "jumping"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Тэнүүнтөрч",
        certificates: [
            "jumping"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Хишигжаргал",
        certificates: [
            "change of clothes"
        ],
    },
    {
        grade: "6-1",
        name: "Б.Хүслэн",
        certificates: [
            "change of clothes"
        ],
    },
    {
        grade: "6-1",
        name: "Г.Тэмүүлэн",
        certificates: [
            "change of clothes"
        ],
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
const selectedGrade = document.getElementById('searchGrade').value;
const studentNameSelect = document.getElementById('studentName');

// clear old options
studentNameSelect.innerHTML = '<option value="">--Нэр сонгох--</option>';

if (!selectedGrade) return;

const filteredStudents = studentData.filter(student => student.grade === selectedGrade);

filteredStudents.forEach(student => {
    const option = document.createElement('option');
    option.value = student.name;
    option.textContent = student.name;
    studentNameSelect.appendChild(option);
});
}

// Жишээ: хайлт хийх функц (нэр эсвэл ангиар)
function filterStudents() {
    const grade = document.getElementById('searchGrade').value;
    const selectedName = document.getElementById('studentName').value;

    if (grade && !selectedName) {
        const studentsInGrade = studentData.filter(s => s.grade === grade);
        const encodedData = encodeURIComponent(JSON.stringify(studentsInGrade));
        window.location.href = `studentDetail.html?grade=${encodeURIComponent(grade)}&students=${encodedData}`;
    } else if (grade && selectedName) {
        const matchedStudent = studentData.find(s => s.grade === grade && s.name === selectedName);
        if (matchedStudent) {
            const certs = encodeURIComponent(JSON.stringify(matchedStudent.certificates || []));
            window.location.href = `studentDetail.html?grade=${grade}&name=${encodeURIComponent(selectedName)}&certificates=${certs}`;
        } else {
            alert("Сурагч олдсонгүй.");
        }
    } else {
        alert("Анги сонгоно уу.");
    }
}

// URL параметруудыг авах
const params = new URLSearchParams(window.location.search);
const grade = params.get('grade') || "";
const name = params.get('name') || "";
const certsRaw = params.get('certificates') || "[]";

const certContainer = document.getElementById('certificatesContainer');
const imageElement = document.getElementById('studentImage');
const gradeTypeElement = document.getElementById("gradeType");

// Хувийн зураг оруулах
if (grade) {
    imageElement.src = `images/students/${grade}${name}.jpg`;
} else {
    imageElement.src = 'images/default.jpg'; // анги байхгүй үед default зураг
}

// Сэдвийн гарчиг (gradeType) тогтоох
if (["6-1", "6-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Бүтээлийн Нэр:";
    certContainer.textContent = decodeURIComponent(certsRaw);
} else if (["7-1", "7-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Spoj.com Алгоритмчилтал";
    certContainer.textContent = decodeURIComponent(certsRaw);
} else if (grade) {
    gradeTypeElement.innerHTML = "Сертификатууд:";

    let certificates = [];
    try {
        certificates = JSON.parse(decodeURIComponent(certsRaw));
    } catch (e) {
        console.error("Сертификатыг задлахад алдаа гарлаа:", e);
    }

    if (Array.isArray(certificates) && certificates.length > 0) {
        certificates.forEach((url, index) => {
            const a = document.createElement('a');
            a.href = url;
            a.target = "_blank";
            a.textContent = `Сертификат${index + 1}, `;
            certContainer.appendChild(a);
        });
    } else {
        certContainer.textContent = "Сертификат мэдээлэл алга.";
    }
}

// Ерөнхий мэдээллийг харуулах
if (grade) {
    document.getElementById('sectionTitle').textContent = `${grade} анги - ${name} сурагч`;
    document.getElementById('gradeText').textContent = `Анги: ${grade}`;
    document.getElementById('studentName').textContent = `Нэр: ${name}`;
}


