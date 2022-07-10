const express = require('express');
const EmployeesRecords = require('../models/employees');
const router = express.Router();

router.post('/employees', async (req, res) => {
  try {
    const record = new EmployeesRecords(req.body);
    const recordInserted = await record.save();
    res.status(201).send(recordInserted);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/employees', async (req, res) => {
  try {
    const records = await EmployeesRecords.find();
    res.send(records);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/employees/:id', async (req, res) => {
  try {
    const record = await EmployeesRecords.findById(req.params.id);
    res.send(record);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch('/employees/:id', async (req, res) => {
  try {
    const record = await EmployeesRecords.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/employees/:id', async (req, res) => {
  try {
    const record = await EmployeesRecords.findByIdAndDelete(req.params.id);
    res.send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;