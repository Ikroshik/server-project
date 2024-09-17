const express = require('express');
const { Group } = require('../../../models');

const groupsRouter = express.Router();

groupsRouter.get('/', async (req, res) => {
  try {
    console.log('get groups');
    const groups = await Group.find({});
    res.json(groups);
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

groupsRouter.get('/:id', async (req, res) => {
  try {
    console.log('get group id ', req.params.id);
    res.json(await Group.findOne({ _id: req.params.id }));
  } catch (err) {
    console.log(err);
    res.json({});
  }
});

groupsRouter.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const group = new Group(req.body);
    res.json(await group.save());
  } catch (err) {
    console.log(err);
    res.json({});
  }
});

groupsRouter.put('/:id', async (req, res) => {
  try {
    console.log('put group id ', req.params.id);
    const group = await Group.findOne({ _id: req.params.id });
    if (group) {
      res.json(await (Object.assign(group, req.body)).save());
    } else {
      res.json({});
    }
  } catch (err) {
    console.log(err);
    res.json({});
  }
});

groupsRouter.delete('/:id', async (req, res) => {
  try {
    console.log('delete group id ', req.params.id);
    await Group.deleteOne({ _id: req.params.id });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = {
    groupsRouter,
}