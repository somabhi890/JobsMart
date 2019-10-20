import { IHomeState, defaultApiStatus } from "..";
import { BaseAction } from "../actions/base.actions";
import { homeActions } from "../actions";

export function homeReducer(state: IHomeState = null, action: BaseAction): IHomeState {
    switch (action.type) {
        case homeActions.GET_API_FAILURE_RESET: return Object.assign({}, state, <IHomeState>{ taskRequest: { status: defaultApiStatus } });

        case homeActions.TASK_REQUEST: return Object.assign({}, state, <IHomeState>{ taskRequest: { status: { isActive: true } } });
        case homeActions.TASK_REQUEST_SUCCESS: return Object.assign({}, state, <IHomeState>{ taskRequest: { data: action.payload, status: defaultApiStatus } });
        case homeActions.TASK_REQUEST_FAILURE: return Object.assign({}, state, <IHomeState>{ taskRequest: { status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_ASSIGN_STATS: return Object.assign({}, state, <IHomeState>{ assignStats: { data: [], status: { isActive: true } } });
        case homeActions.GET_ASSIGN_STATS_SUCCESS: return Object.assign({}, state, <IHomeState>{ assignStats: { data: action.payload.data, count: action.payload.count, status: defaultApiStatus } });
        case homeActions.GET_ASSIGN_STATS_FAILURE: return Object.assign({}, state, <IHomeState>{ assignStats: { data: [], status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_NEW_STATS: return Object.assign({}, state, <IHomeState>{ newStats: { data: [], status: { isActive: true } } });
        case homeActions.GET_NEW_STATS_SUCCESS: return Object.assign({}, state, <IHomeState>{ newStats: { data: action.payload, status: defaultApiStatus } });
        case homeActions.GET_NEW_STATS_FAILURE: return Object.assign({}, state, <IHomeState>{ newStats: { data: [], status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_FASHION_ADMIN_STATS: return Object.assign({}, state, <IHomeState>{ fashionAdminStats: { filter: action.payload.filter, data: [], status: { isActive: true } } });
        case homeActions.GET_FASHION_ADMIN_STATS_SUCCESS: return Object.assign({}, state, <IHomeState>{ fashionAdminStats: { filter: action.payload.filter, data: action.payload.data, count: action.payload.count, status: defaultApiStatus } });
        case homeActions.GET_FASHION_ADMIN_STATS_FAILURE: return Object.assign({}, state, <IHomeState>{ fashionAdminStats: { filter: action.payload.filter, data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        case homeActions.GET_DASHBOARD_JOBS: return Object.assign({}, state, <IHomeState>{ dashboardJobs: { filter: action.payload.filter, data: [], status: { isActive: true } } });
        case homeActions.GET_DASHBOARD_JOBS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboardJobs: { filter: action.payload.filter, data: action.payload.data, count: action.payload.count, status: defaultApiStatus } });
        case homeActions.GET_DASHBOARD_JOBS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboardJobs: { filter: action.payload.filter, data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        case homeActions.GET_DASHBOARD_TASKS: return Object.assign({}, state, <IHomeState>{ dashboardTasks: { status: { isActive: true } } });
        case homeActions.GET_DASHBOARD_TASKS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboardTasks: { data: action.payload, status: defaultApiStatus } });
        case homeActions.GET_DASHBOARD_TASKS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboardTasks: { status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_DASHBOARD_SETS: return Object.assign({}, state, <IHomeState>{ dashboardTasksSet: { status: { isActive: true } } });
        case homeActions.GET_DASHBOARD_SETS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboardTasksSet: { data: action.payload.data, count: action.payload.count, status: defaultApiStatus } });
        case homeActions.GET_DASHBOARD_SETS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboardTasksSet: { status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_DASHBOARD_SETS_ITEMS: return Object.assign({}, state, <IHomeState>{ dashboardTaskItemsSet: { status: { isActive: true } } });
        case homeActions.GET_DASHBOARD_SETS_ITEMS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboardTaskItemsSet: { data: action.payload, status: defaultApiStatus } });
        case homeActions.GET_DASHBOARD_SETS_ITEMS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboardTaskItemsSet: { status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_JOB_ITEMS: return Object.assign({}, state, <IHomeState>{ dashboarJobItems: { status: { isActive: true } } });
        case homeActions.GET_JOB_ITEMS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboarJobItems: { data: action.payload, status: defaultApiStatus } });
        case homeActions.GET_JOB_ITEMS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboarJobItems: { status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_ERRORED_TASKS: return Object.assign({}, state, <IHomeState>{ dashboardErrorTasks: { filter: action.payload.filter, data: [], status: { isActive: true } } });
        case homeActions.GET_ERRORED_TASKS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboardErrorTasks: { filter: action.payload.filter, data: action.payload.data, status: defaultApiStatus } });
        case homeActions.GET_ERRORED_TASKS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboardErrorTasks: { filter: action.payload.filter, data: [], status: { isActive: false, error: true, message: action.payload.msg } } });

        case homeActions.RERUN_ERRORED_TASKS: return Object.assign({}, state, <IHomeState>{ dashboardRerunErrorTask: { data: [], status: { isActive: true } } });
        case homeActions.RERUN_ERRORED_TASKS_SUCCESS: return Object.assign({}, state, <IHomeState>{ dashboardRerunErrorTask: { data: action.payload, status: defaultApiStatus } });
        case homeActions.RERUN_ERRORED_TASKS_FAILURE: return Object.assign({}, state, <IHomeState>{ dashboardRerunErrorTask: { data: [], status: { isActive: false, error: true, message: action.payload } } });

        case homeActions.GET_FILTERED_TASKS: return Object.assign({}, state, <IHomeState>{ filteredTasksList: { data: [], status: { isActive: true } } });
        case homeActions.GET_FILTERED_TASKS_SUCCESS: return Object.assign({}, state, <IHomeState>{ filteredTasksList: { data: action.payload, status: defaultApiStatus } });
        case homeActions.GET_FILTERED_TASKS_FAILURE: return Object.assign({}, state, <IHomeState>{ filteredTasksList: { data: [], status: { isActive: false, error: true, message: action.payload } } });

        default: return state;
    }
}
