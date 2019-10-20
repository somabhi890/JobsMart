export interface IDictionaryState<T> {
    readonly [id: string]: T
}

export interface IApiStatus {
    readonly error: boolean,
    readonly message: string,
    readonly isActive: boolean
}
export interface IAppState {
    readonly loginState: ILoginState,
    readonly homeState: IHomeState
}

export interface ILoginState {
    readonly _id?: string,
    readonly isActive: boolean;
    readonly apiFailed: boolean,
    readonly isLoggedIn: boolean,
    readonly token: string,
    readonly role: { id?: string, role?: string },
    readonly name: string,
    readonly assignedTask: string,
    readonly dashboards: string[],
    readonly signupState: {
        readonly status: IApiStatus,
        readonly data: boolean
    }
}
export interface IHomeState {
    readonly taskRequest: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[]
    },
    readonly assignStats: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly count: number
    },
    readonly newStats: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
    },
    readonly fashionAdminStats: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly filter: IDictionaryState<any>,
        readonly count: number
    },
    readonly dashboardJobs: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly filter: IDictionaryState<any>,
        readonly count: number
    }
    readonly dashboardTasks: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly count: number
    }
    readonly dashboardTasksSet: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly count: number
    }
    readonly dashboardTaskItemsSet: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly count: number
    }
    readonly dashboarJobItems: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly count: number
    }
    readonly dashboardErrorTasks: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly filter: IDictionaryState<any>,
        readonly count: number
    }
    readonly dashboardRerunErrorTask: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[],
        readonly count: number
    },
    readonly filteredTasksList: {
        readonly status: IApiStatus,
        readonly data: IDictionaryState<any>[]
    }
}

export const defaultApiStatus: IApiStatus = {
    error: false,
    isActive: false,
    message: null
}

export const INITIAL_STATE: IAppState = {
    loginState: {
        isActive: false,
        apiFailed: false,
        isLoggedIn: false,
        token: null,
        role: {},
        name: null,
        assignedTask: null,
        dashboards: [],
        signupState: {
            status: defaultApiStatus,
            data: false
        }
    },
    homeState: {
        taskRequest: {
            data: [],
            status: defaultApiStatus
        },
        assignStats: {
            data: [],
            status: defaultApiStatus,
            count: 0
        },
        newStats: {
            data: [],
            status: defaultApiStatus
        },
        fashionAdminStats: {
            data: [],
            status: defaultApiStatus,
            filter: null,
            count: 0
        },
        dashboardJobs: {
            data: [],
            status: defaultApiStatus,
            filter: null,
            count: 0
        },
        dashboardTasks: {
            data: [],
            status: defaultApiStatus,
            count: 0
        },
        dashboardTasksSet: {
            data: [],
            status: defaultApiStatus,
            count: 0
        },
        dashboardTaskItemsSet: {
            data: [],
            status: defaultApiStatus,
            count: 0
        },
        dashboardErrorTasks: {
            data: [],
            status: defaultApiStatus,
            filter: null,
            count: 0
        },
        dashboarJobItems: {
            data: [],
            status: defaultApiStatus,
            count: 0
        },
        dashboardRerunErrorTask: {
            data: [],
            status: defaultApiStatus,
            count: 0
        },
        filteredTasksList: {
            data: [],
            status: defaultApiStatus
        }
    }
}