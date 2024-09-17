const Charts = [
  '$resource',
  function($resource) {
    return $resource('/charts', {}, {
      serverCharts: {
        url: '/charts/:serverId',
        method: 'get',
        isArray: false,
      }
    });
  },
];

export { Charts };