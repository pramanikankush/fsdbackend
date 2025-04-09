const fs = require('fs');

const students = [
    {
        name: "John Doe",
        roll_no: "101",
        class: "10",
        section: "A"
    },
    {
        name: "Jane Smith",
        roll_no: "102",
        class: "10",
        section: "A"
    }
];

fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('students.json has been created successfully!');
    }
});

const readStudents = async () => {
    try {
        const data = await fs.promises.readFile('students.json', 'utf8');
        const students = JSON.parse(data);
        console.log(students);
    } catch (error) {
        console.error('Error reading from file', error);
    }
}

