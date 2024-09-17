import {Server} from './Server.factory';
import {Task} from './Task.factory';
import {Charts} from './Charts.factory';
import {Group} from './Group.factory'

export const factoriesModule = angular.module('factories', [])
    .factory('Server', Server)
    .factory('Task', Task)
    .factory('Group', Group)
    .factory('Charts', Charts);
