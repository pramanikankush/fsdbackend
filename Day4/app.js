const express = require('express');
const fs = require('fs');



const dataFile = 'data.json';
const readUsers = () => {
    if (!fs.existsSync(dataFile)) {
        fs.writeFileSync(dataFile, JSON.stringify([])); // Create file if it doesn't exist
    }
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
};

// Function to write users to data.json
const writeUsers = (users) => {
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
};

const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
})


app.get('/api/users', (req, res) => {
    res.json(readUsers());
});

app.post('/api/users', (req, res) => {
    const users = readUsers();
    const name = req.body;
    const newUser = {
        "id": users.length > 0 ? users[users.length - 1].id + 1: 0 ,
        ...name
    }
    users.push(newUser);
    writeUsers(users);
    res
        .status(200)
        .json(newUser);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});