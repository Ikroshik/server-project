const Group = [
    '$resource',
    function($resource) {
      return $resource('/groups/:id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        },
        delete: {
          method: 'DELETE'
        }
      });
    },
  ];
  
  export { Group };