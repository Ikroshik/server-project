const Charts = [
  '$resource',
  function($resource) {
    return $resource('/charts/daily-tasks', {param: '@param'}, {
      serverCharts: {
        url: '/charts/:serverId',
        method: 'get',
        isArray: false,
      }
    });
  },
];

export { Charts };