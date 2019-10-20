import { INITIAL_STATE, ILoginState, defaultApiStatus } from '../index';
import { loginActions } from '../actions';
import { BaseAction } from "../actions/base.actions";

export function loginReducer(state: ILoginState = null, action: BaseAction): ILoginState {
    switch (action.type) {
        case loginActions.LOGIN:
        case loginActions.LOGOUT:
            return Object.assign({}, state, <ILoginState>{ isActive: true });

        case loginActions.LOGIN_SUCCESS: let newState = <ILoginState>{
            _id: action.payload._id,
            apiFailed:false,
            isActive: false,
            isLoggedIn: true,
            token: action.payload.token,
            role: action.payload.role,
            name: action.payload.name,
            assignedTask: action.payload.assignedTask,
            emailVerified: action.payload.emailVerified,
            dashboards: action.payload.dashboards,
            signupState: {
                status: defaultApiStatus,
                data: false
            }
        };
            // localStorage.setItem('loginState', JSON.stringify(newState));
            // window.location.reload();
            return Object.assign({}, state, newState);

        case loginActions.LOGIN_FAILURE: return Object.assign({}, state, <ILoginState>{
            apiFailed: true,
            isActive: false
        });

        case loginActions.LOGIN_FAILURE_RESET: return Object.assign({}, state, <ILoginState>{
            apiFailed: false
        });

        case loginActions.LOGOUT_SUCCESS:
            // localStorage.removeItem('loginState');
            return INITIAL_STATE.loginState;

        case loginActions.LOGOUT_FAILURE:
            return Object.assign({}, state, <ILoginState>{ isActive: false });


        case loginActions.SIGNUP: return Object.assign({}, state, <ILoginState>{ signupState: { status: { isActive: true } } });
        case loginActions.SIGNUP_SUCCESS: return Object.assign({}, state, <ILoginState>{ signupState: { data: action.payload, status: defaultApiStatus } });
        case loginActions.SIGNUP_FAILURE: return Object.assign({}, state, <ILoginState>{ signupState: { status: { error: true, isActive: false, message: action.payload } } });

        default:
            return state;
    }
}