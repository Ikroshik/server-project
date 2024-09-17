const express = require('express');


const {serversRouter} = require('./servers');
const {journalsRouter} = require('./journals');
const {tasksRouter} = require('./tasks');
const {chartsRouter} = require('./charts');
const {groupsRouter} = require('./groups');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    account: req.account,
    user: req.user,
    apps: req.relatedApplications,
  });
});

router.use('/servers', serversRouter);
router.use('/journals', journalsRouter);
router.use('/tasks', tasksRouter);
router.use('/charts', chartsRouter);
router.use('/groups', groupsRouter);

module.exports = router;
