import { BaseAction } from "./base.actions";

export const GET_API_FAILURE_RESET = 'GET_API_FAILURE_RESET';

export const TASK_REQUEST = "TASK_REQUEST";
export const TASK_REQUEST_SUCCESS = "TASK_REQUEST_SUCCESS";
export const TASK_REQUEST_FAILURE = "TASK_REQUEST_FAILURE";

export const GET_ASSIGN_STATS = "GET_ASSIGN_STATS";
export const GET_ASSIGN_STATS_SUCCESS = "GET_ASSIGN_STATS_SUCCESS";
export const GET_ASSIGN_STATS_FAILURE = "GET_ASSIGN_STATS_FAILURE";

export const GET_NEW_STATS = "GET_NEW_STATS";
export const GET_NEW_STATS_SUCCESS = "GET_NEW_STATS_SUCCESS";
export const GET_NEW_STATS_FAILURE = "GET_NEW_STATS_FAILURE";

export const GET_FASHION_ADMIN_STATS = "GET_FASHION_ADMIN_STATS";
export const GET_FASHION_ADMIN_STATS_SUCCESS = "GET_FASHION_ADMIN_STATS_SUCCESS";
export const GET_FASHION_ADMIN_STATS_FAILURE = "GET_FASHION_ADMIN_STATS_FAILURE";

export const GET_DASHBOARD_JOBS = "GET_DASHBOARD_JOBS";
export const GET_DASHBOARD_JOBS_SUCCESS = "GET_DASHBOARD_JOBS_SUCCESS";
export const GET_DASHBOARD_JOBS_FAILURE = "GET_DASHBOARD_JOBS_FAILURE";

export const GET_DASHBOARD_SETS = "GET_DASHBOARD_SETS";
export const GET_DASHBOARD_SETS_SUCCESS = "GET_DASHBOARD_SETS_SUCCESS";
export const GET_DASHBOARD_SETS_FAILURE = "GET_DASHBOARD_SETS_FAILURE";

export const GET_DASHBOARD_SETS_ITEMS = "GET_DASHBOARD_SETS_ITEMS";
export const GET_DASHBOARD_SETS_ITEMS_SUCCESS = "GET_DASHBOARD_SETS_ITEMS_SUCCESS";
export const GET_DASHBOARD_SETS_ITEMS_FAILURE = "GET_DASHBOARD_SETS_ITEMS_FAILURE";

export const GET_DASHBOARD_TASKS = "GET_DASHBOARD_TASKS";
export const GET_DASHBOARD_TASKS_SUCCESS = "GET_DASHBOARD_TASKS_SUCCESS";
export const GET_DASHBOARD_TASKS_FAILURE = "GET_DASHBOARD_TASKS_FAILURE";

export const GET_JOB_ITEMS = "GET_JOB_ITEMS";
export const GET_JOB_ITEMS_SUCCESS = "GET_JOB_ITEMS_SUCCESS";
export const GET_JOB_ITEMS_FAILURE = "GET_JOB_ITEMS_FAILURE";

export const GET_ERRORED_TASKS = "GET_ERRORED_TASKS";
export const GET_ERRORED_TASKS_SUCCESS = "GET_ERRORED_TASKS_SUCCESS";
export const GET_ERRORED_TASKS_FAILURE = "GET_ERRORED_TASKS_FAILURE";

export const RERUN_ERRORED_TASKS = "RERUN_ERRORED_TASKS";
export const RERUN_ERRORED_TASKS_SUCCESS = "RERUN_ERRORED_TASKS_SUCCESS";
export const RERUN_ERRORED_TASKS_FAILURE = "RERUN_ERRORED_TASKS_FAILURE";

export const GET_FILTERED_TASKS = "GET_FILTERED_TASKS";
export const GET_FILTERED_TASKS_SUCCESS = "GET_FILTERED_TASKS_SUCCESS";
export const GET_FILTERED_TASKS_FAILURE = "GET_FILTERED_TASKS_FAILURE";

export class GetApiFailureResetAction extends BaseAction {
    readonly type = GET_API_FAILURE_RESET;
}

export class TaskRequestAction extends BaseAction {
    readonly type = TASK_REQUEST;
}

export class TaskRequestSuccessAction extends BaseAction {
    readonly type = TASK_REQUEST_SUCCESS;
}

export class TaskRequestFailureAction extends BaseAction {
    readonly type = TASK_REQUEST_FAILURE;
}

export class GetAssignStatsAction extends BaseAction {
    readonly type = GET_ASSIGN_STATS;
}

export class GetAssignStatsSuccessAction extends BaseAction {
    readonly type = GET_ASSIGN_STATS_SUCCESS;
}

export class GetAssignStatsFailureAction extends BaseAction {
    readonly type = GET_ASSIGN_STATS_FAILURE;
}

export class GetNewStatsAction extends BaseAction {
    readonly type = GET_NEW_STATS;
}

export class GetNewStatsSuccessAction extends BaseAction {
    readonly type = GET_NEW_STATS_SUCCESS;
}

export class GetNewStatsFailureAction extends BaseAction {
    readonly type = GET_NEW_STATS_FAILURE;
}

export class GetFashionAdminStatsAction extends BaseAction {
    readonly type = GET_FASHION_ADMIN_STATS;
}

export class GetFashionAdminStatsSuccessAction extends BaseAction {
    readonly type = GET_FASHION_ADMIN_STATS_SUCCESS;
}

export class GetFashionAdminStatsFailureAction extends BaseAction {
    readonly type = GET_FASHION_ADMIN_STATS_FAILURE;
}
export class GetDashboardJobsAction extends BaseAction {
    readonly type = GET_DASHBOARD_JOBS;
}

export class GetDashboardJobsSuccessAction extends BaseAction {
    readonly type = GET_DASHBOARD_JOBS_SUCCESS;
}

export class GetDashboardJobsFailureAction extends BaseAction {
    readonly type = GET_DASHBOARD_JOBS_FAILURE;
}

export class GetDashboardTasksAction extends BaseAction {
    readonly type = GET_DASHBOARD_TASKS;
}

export class GetDashboardTasksSuccessAction extends BaseAction {
    readonly type = GET_DASHBOARD_TASKS_SUCCESS;
}

export class GetDashboardTasksFailureAction extends BaseAction {
    readonly type = GET_DASHBOARD_TASKS_FAILURE;
}

export class GetDashboardSetsAction extends BaseAction {
    readonly type = GET_DASHBOARD_SETS;
}

export class GetDashboardSetsSuccessAction extends BaseAction {
    readonly type = GET_DASHBOARD_SETS_SUCCESS;
}

export class GetDashboardSetsFailureAction extends BaseAction {
    readonly type = GET_DASHBOARD_SETS_FAILURE;
}

export class GetDashboardSetsItemsAction extends BaseAction {
    readonly type = GET_DASHBOARD_SETS_ITEMS;
}

export class GetDashboardSetsItemsSuccessAction extends BaseAction {
    readonly type = GET_DASHBOARD_SETS_ITEMS_SUCCESS;
}

export class GetDashboardSetsItemsFailureAction extends BaseAction {
    readonly type = GET_DASHBOARD_SETS_ITEMS_FAILURE;
}

export class GetJobItemsAction extends BaseAction {
    readonly type = GET_JOB_ITEMS;
}

export class GetJobItemsSuccessAction extends BaseAction {
    readonly type = GET_JOB_ITEMS_SUCCESS;
}

export class GetJobItemsFailureAction extends BaseAction {
    readonly type = GET_JOB_ITEMS_FAILURE;
}

export class GetErroredTasksAction extends BaseAction {
    readonly type = GET_ERRORED_TASKS;
}

export class GetErroredTasksSuccessAction extends BaseAction {
    readonly type = GET_ERRORED_TASKS_SUCCESS;
}

export class GetErroredTasksFailureAction extends BaseAction {
    readonly type = GET_ERRORED_TASKS_FAILURE;
}

export class RerunErroredTasksAction extends BaseAction {
    readonly type = RERUN_ERRORED_TASKS;
}

export class RerunErroredTasksSuccessAction extends BaseAction {
    readonly type = RERUN_ERRORED_TASKS_SUCCESS;
}

export class RerunErroredTasksFailureAction extends BaseAction {
    readonly type = RERUN_ERRORED_TASKS_FAILURE;
}

export class GetFilteredTasksAction extends BaseAction {
    readonly type = GET_FILTERED_TASKS;
}

export class GetFilteredTasksSuccessAction extends BaseAction {
    readonly type = GET_FILTERED_TASKS_SUCCESS;
}

export class GetFilteredTasksFailureAction extends BaseAction {
    readonly type = GET_FILTERED_TASKS_FAILURE;
}