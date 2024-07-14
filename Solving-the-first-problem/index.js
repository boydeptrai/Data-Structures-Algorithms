// cấu trúc dữ liệu
const studentsDatabase = ["Tuan", "Hoa", "Hue","Hang"];

// thuật toán tìm kiếm một người dùng cụ thể
const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Found ${studentName}`);
        }
    }
}

findStudent(studentsDatabase, "Tuan");