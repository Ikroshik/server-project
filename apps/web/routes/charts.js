const express = require('express');
const moment = require('moment');

const {
  Task, Server
} = require('../../../models');

const chartsRouter = express.Router();

chartsRouter.get('/daily-tasks', async (req, res) => {
  try {
    console.log('get chart daily-tasks');

    const name = 'Монитор серверов за день по часам';
    const servers_task_list = [];
    const labels = Array.from({ length: 24 }, (_, i) => i);
    const received_date = req.query.day;
    const servers = await Server.find({});

    const selected_day = {
      start: moment(received_date).startOf('day'),
      end: moment(received_date).endOf('day')
    };

    for (server of servers) {
      const serverId = server._id.valueOf();
      const server_name = server.name;

      const tasks_per_hour = [];

      for (start = moment(selected_day.start); start <= selected_day.end; start.add(1, 'hour')) {
        const date = {
          $gte: start.format('YYYY-MM-DD HH:00:00'),
          $lte: start.format('YYYY-MM-DD HH:59:59'),
        };

        const complete_tasks_count = await Task.countDocuments({
          serverId,
          date,
          isComplete: true,
        });

        tasks_per_hour.push(complete_tasks_count);
      }

      servers_task_list.push({
        name: server_name,
        tasks: tasks_per_hour,
      });
    }

    res.json({
      name: name,
      tasks: {
        labels: labels,
        complete: servers_task_list,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      name: name,
      tasks: [],
    });
  }
});

chartsRouter.get('/:serverId', async (req, res) => {
  try {
    const serverId = req.params.serverId;
    const end = moment();
    const start = moment().subtract(30, 'days');
    const labels = [];
    const complete = [];
    const notComplete = [];
    for (; start <= end; start.add(1, 'days')) {
      const date = {
        $gte: start.format('YYYY-MM-DD 00:00:00'),
        $lte: start.format('YYYY-MM-DD 23:59:59'),
      };
      labels.push(start.format('DD.MM'));
      complete.push(await Task.countDocuments({
        serverId,
        date,
        isComplete: true,
      }));
      notComplete.push(await Task.countDocuments({
        serverId,
        date,
        isComplete: false,
      }));
    }
    res.json({
      tasks: {
        labels,
        complete,
        notComplete,
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      tasks: {
        labels: [],
        complete: [],
        notComplete: [],
      },
    });
  }
});
module.exports = {
  chartsRouter,
};