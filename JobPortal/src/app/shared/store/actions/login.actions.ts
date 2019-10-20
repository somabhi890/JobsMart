import { BaseAction } from "./base.actions";

export const DEFAULT = 'DEFAULT';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_FAILURE_RESET = 'LOGIN_FAILURE_RESET';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const USER_EXISTS = 'USER_EXISTS';
export const USER_EXISTS_SUCCESS = 'USER_EXISTS_SUCCESS';
export const USER_EXISTS_FAILURE = 'USER_EXISTS_FAILURE';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

export const RESET_FORGOT_PASSWORD = 'RESET_FORGOT_PASSWORD';
export const RESET_FORGOT_PASSWORD_SUCCESS = 'RESET_FORGOT_PASSWORD_SUCCESS';
export const RESET_FORGOT_PASSWORD_FAILURE = 'RESET_FORGOT_PASSWORD_FAILURE';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const CHANGE_PASSWORD_RESET = 'CHANGE_PASSWORD_RESET';

export const VERIFY_USER = 'VERIFY_USER';
export const VERIFY_USER_SUCCESS = 'VERIFY_USER_SUCCESS';
export const VERIFY_USER_FAILURE = 'VERIFY_USER_FAILURE';

export const UNMARK_FIRST_TIME = 'UNMARK_FIRST_TIME';
export const SHOW_TOUR_ACTION = 'SHOW_TOUR_ACTION';
export const HIDE_TOUR_ACTION = 'HIDE_TOUR_ACTION';
export const REDUCE_CREDITS = 'REDUCE_CREDITS';

export class DefaultAction extends BaseAction {
    readonly type = DEFAULT;
}

export class LoginAction extends BaseAction {
    readonly type = LOGIN;
}

export class LoginSuccessAction extends BaseAction {
    readonly type = LOGIN_SUCCESS;
}

export class LoginFailureAction extends BaseAction {
    readonly type = LOGIN_FAILURE;
}

export class LoginFailureResetAction extends BaseAction {
    readonly type = LOGIN_FAILURE_RESET;
}

export class LogoutAction extends BaseAction {
    readonly type = LOGOUT;
}

export class LogoutSuccessAction extends BaseAction {
    readonly type = LOGOUT_SUCCESS;
}

export class LogoutFailureAction extends BaseAction {
    readonly type = LOGOUT_FAILURE;
}
export class SignupAction extends BaseAction {
    readonly type = SIGNUP;
}

export class SignupSuccessAction extends BaseAction {
    readonly type = SIGNUP_SUCCESS;
}

export class SignupFailureAction extends BaseAction {
    readonly type = SIGNUP_FAILURE;
}

export class UserExistsAction extends BaseAction {
    readonly type = USER_EXISTS;
}

export class UserExistsSuccessAction extends BaseAction {
    readonly type = USER_EXISTS_SUCCESS;
}

export class UserExistsFailureAction extends BaseAction {
    readonly type = USER_EXISTS_FAILURE;
}

export class ForgotPasswordAction extends BaseAction {
    readonly type = FORGOT_PASSWORD;
}

export class ForgotPasswordSuccessAction extends BaseAction {
    readonly type = FORGOT_PASSWORD_SUCCESS;
}

export class ForgotPasswordFailureAction extends BaseAction {
    readonly type = FORGOT_PASSWORD_FAILURE;
}

export class ResetForgotPasswordAction extends BaseAction {
    readonly type = RESET_FORGOT_PASSWORD;
}

export class ResetForgotPasswordSuccessAction extends BaseAction {
    readonly type = RESET_FORGOT_PASSWORD_SUCCESS;
}

export class ResetForgotPasswordFailureAction extends BaseAction {
    readonly type = RESET_FORGOT_PASSWORD_FAILURE;
}

export class ChangePasswordAction extends BaseAction {
    readonly type = CHANGE_PASSWORD;
}

export class ChangePasswordSuccessAction extends BaseAction {
    readonly type = CHANGE_PASSWORD_SUCCESS;
}

export class ChangePasswordFailureAction extends BaseAction {
    readonly type = CHANGE_PASSWORD_FAILURE;
}

export class ChangePasswordResetAction extends BaseAction {
    readonly type = CHANGE_PASSWORD_RESET;
}

export class VerifyUserAction extends BaseAction {
    readonly type = VERIFY_USER;
}

export class VerifyUserSuccessAction extends BaseAction {
    readonly type = VERIFY_USER_SUCCESS;
}

export class VerifyUserFailureAction extends BaseAction {
    readonly type = VERIFY_USER_FAILURE;
}

export class UnmarkFirstTimeAction extends BaseAction {
    readonly type = UNMARK_FIRST_TIME;
}

export class ShowTourAction extends BaseAction {
    readonly type = SHOW_TOUR_ACTION;
}
export class HideTourAction extends BaseAction {
    readonly type = HIDE_TOUR_ACTION;
}

export class ReduceCreditsAction extends BaseAction {
    readonly type = REDUCE_CREDITS;
}