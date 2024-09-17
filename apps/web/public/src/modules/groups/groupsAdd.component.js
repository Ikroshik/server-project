import template from './groupsAdd.template';

const groupsAdd = {
  template: template(),
  controller: [
    'Group',
    '$stateParams',
    '$state',
    'NotificationService',
    function(Group, $stateParams, $state, NotificationService) {
      if ($stateParams.id) {
        this.group = group.get({id: $stateParams.id});
      } else {
        this.group = new Group();
      }
      this.save = function() {
        this.group.$save(function() {
          NotificationService.showSuccess('Группа сохранена');
          $state.go('groups', {}, {reload: true});
        });
      };
    }],
};

export {groupsAdd};
