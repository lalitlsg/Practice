const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const EmployeesRecords = new mongoose.model('EmployeesRecords', employeeSchema);
module.exports = EmployeesRecords;