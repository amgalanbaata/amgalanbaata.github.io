console.log(studentData); // шалгах

// filter хийх жишээ
const studentsInGrade = studentData.filter(s => s.grade === "6-1");
console.log(studentsInGrade);
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
            const spoj = encodeURIComponent(JSON.stringify(matchedStudent.spoj || []));
            const scratch = encodeURIComponent(JSON.stringify(matchedStudent.scratch || []));
            const image = encodeURIComponent(JSON.stringify(matchedStudent.image || ""));
            window.location.href = `studentDetail.html?grade=${grade}&name=${encodeURIComponent(selectedName)}&image=${image}&scratch=${scratch}&spoj=${spoj}&certificates=${certs}`;
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
const spoj = params.get('spoj') || "[]";
const scratch = params.get('scratch') || "";
const image = params.get('image') || "";

const certContainer = document.getElementById('certificatesContainer');
const imageElement = document.getElementById('studentImage');
const gradeTypeElement = document.getElementById("gradeType");
const spojCerf = document.getElementById("spojCertificate");
const scratchWork = document.getElementById("scratchWork");

// Хувийн зураг оруулах
if (grade) {
    imageElement.src = `images/students/${grade}${name}.jpg`;
} else {
    imageElement.src = 'images/default.jpg'; // анги байхгүй үед default зураг
}

// Сэдвийн гарчиг (gradeType) тогтоох
if (["6-1", "6-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Бүтээлийн Нэр:";
    certContainer.textContent = decodeURIComponent(scratch);
    if(image) {
        scratchWork.src = `images/6-scratch-images/${grade}${name}.png`;
        console.log("hooson: ", image);
        // console.log("image/6-scratch-images/6-1Б.Ангараг.png")
    } else {
        scratchWork.src = "images/6-scratch-images/scratch-default.png";
        console.log(image);
    }
    if(certsRaw) {
        // scratchWork.src = `images/6-scratch-images/${grade}${name}.png`;
        spojCerf.src = `images/spoj-certificate/${grade}${name}.png`;
    }
} else if (["7-1", "7-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Spoj.com Алгоритмчилал";
    certContainer.textContent = decodeURIComponent(spoj);
    if(certsRaw) {
        spojCerf.src = `images/spoj-certificate/${grade}${name}.png`;
    }
} else if(["8-1", "8-2"].includes(grade)) {
    gradeTypeElement.innerHTML = "Spoj.com Алгоритмчилал";
    certContainer.textContent = decodeURIComponent(spoj);
    spojCerf.src = `images/certificate-glade-8/${grade}${name}.jpg`;
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





// class-6-detail.js

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("studentCards");

    console.log("studentData: ", studentData)
    // Зөвхөн 6-1 ангийн сурагчдыг шүүж авна
    const students = studentData.filter(s => s.grade === "6-1");

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "col-sm-6 col-lg-4 wow fadeIn";
        card.innerHTML = `
            <div class="post-minimal">
                <figure class="post-minimal-media">
                    <a href="#">
                        <img class="post-minimal-image" src="${student.image}" alt="${student.name}" width="370" height="260"/>
                    </a>
                </figure>
                <div class="post-minimal-meta">
                    <ul class="list-inline">
                        <li class="list-inline-item">${student.grade} анги</li>
                        <li class="list-inline-itema"><a href="#">${student.name}</a></li>
                    </ul>
                </div>
                <h6 class="post-minimal-title">Scratch Хялбар Програмчлал</h6>
                <h6 class="post-minimal-title">Тоглоом бүтээх</h6>
                <h6 class="post-minimal-title">нэр: <strong>${student.scratch}</strong></h6>
            </div>
        `;
        container.appendChild(card);
    });
});



