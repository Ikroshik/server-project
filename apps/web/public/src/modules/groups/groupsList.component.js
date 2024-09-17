import template from './groupsList.template';

const groupsList = {
  template: template(),
  controller: [
    'Group',
    'NotificationService',
    function(Group, NotificationService) {
      this.groups = Group.query();
      this.deleteGroup = function(groupId) {
        if (confirm('Вы хотите удалить эту группу?')) {
          Group.delete({ id: groupId }, () => {
            NotificationService.showSuccess('Группа удалена');
            this.groups = Group.query(); // Refresh the list
          }, (error)=> {
            NotificationService.showError('Ошибка при удалении группы');
            console.error(error);
          });
        }
      };
    }],
};
 
export { groupsList };