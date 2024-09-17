import { groupsList } from './groupsList.component';
import { groupsAdd } from './groupsAdd.component';

export const groupsModule = angular.module('groups', [])
  .component('groupsList', groupsList)
  .component('groupsAdd', groupsAdd);