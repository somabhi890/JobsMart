import { IAppState, INITIAL_STATE } from "..";
import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { loginReducer } from "./login.reducer";
import { homeReducer } from "./home.reducer";
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
import { BaseAction, STORAGE } from "../actions/base.actions";
import { LOGOUT_SUCCESS } from "../actions/login.actions";

// export function localStorageSyncReducer(reducer: ActionReducer<IAppState, BaseAction>): ActionReducer<IAppState, BaseAction> {
//     return (state: IAppState, action: BaseAction) => {
//         const keys = [
//             { loginState: ['isLoggedIn', 'token', 'client', '_id', 'assignedTask', 'dashboards', 'name', 'role', 'firstTime', 'emailVerified', 'tutorialStage'] }
//         ];
//         if (action.type == LOGOUT_SUCCESS) {
//             return localStorageSync({ keys, rehydrate: true })(reducer)(INITIAL_STATE, action);
//         }

//         if (action.type === STORAGE && keys.includes(action.payload)) {
//             const rehydratedState = rehydrateApplicationState([action.payload], localStorage, k => k, true);
//             return { ...state, ...rehydratedState };
//         }

//         return localStorageSync({ keys, rehydrate: true })(reducer)(state, action);
//     }
// }

// export const metaReducers: Array<MetaReducer<IAppState, BaseAction>> = [localStorageSyncReducer];

export const appReducer: ActionReducerMap<IAppState, BaseAction> = {
    loginState: loginReducer,
    homeState: homeReducer
};
