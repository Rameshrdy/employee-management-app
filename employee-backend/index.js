const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

let employees = [];

app.use(cors());
app.use(express.json());

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.post('/employees', (req, res) => {
    const employee = req.body;
    employees.push(employee);
    res.status(201).json(employee);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
