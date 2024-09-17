import { serversList } from './serversList.component';
import { serversEdit } from './serversEdit.component';
import { serversView } from './serversView.component';
import { serverUserActionTable } from './serverUserActionTable.directive';
import { serverTasksTable } from './serverTasksTable.directive';
import { tasksChart } from './tasksChart.component';
import { showPayloadModal } from './showPayloadModal.component';
import { showPayloadButton } from './showPayloadButton.component';

export const serversModule = angular.module('servers', [])
    .component('serversList', serversList)
    .component('serversEdit', serversEdit)
    .component('serversView', serversView)
    .directive('serverUserActionTable', serverUserActionTable)
    .directive('serverTasksTable', serverTasksTable)
    .component('tasksChart', tasksChart)
    .component('showPayloadModal', showPayloadModal)
    .component('showPayloadButton', showPayloadButton)