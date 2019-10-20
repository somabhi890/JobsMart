import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, timer, interval } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { loginActions } from '../actions';
import { map, catchError, withLatestFrom, exhaustMap, switchMap } from 'rxjs/operators';
import { LoginService} from '../../services';
import { IAPIResponse } from '../../../interfaces';
import { BaseAction } from "../actions/base.actions";
import { IAppState } from '..';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginEffects {
    IDLE_TIMEOUT_MS = 10800 * 1000;

    constructor(private store: Store<IAppState>, private actions$: Actions, private loginService: LoginService, private toastr: ToastrService) { }

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(loginActions.LOGIN),
        exhaustMap((x: BaseAction) => {
            return this.loginService.login(x.payload).pipe(map((response: IAPIResponse) => {
                if (response.error || !response.result) {
                    return new loginActions.LoginFailureAction(response.result);
                }
                return new loginActions.LoginSuccessAction(response.result);
            }), catchError(() => of(new loginActions.LoginFailureAction())));
        })
    );

//     @Effect()
//     logout$: Observable<Action> = this.actions$.pipe(
//         ofType(loginActions.LOGOUT),
//         withLatestFrom(this.store.select(x => x.loginState.token)),
//         exhaustMap<[BaseAction, string], BaseAction>(([x, token]) => {
//             return this.loginService.logout(token).pipe(map((response: IAPIResponse) => {
//                 if (response.error) {
//                     return new loginActions.LogoutFailureAction(response.result);
//                 }
//                 return new loginActions.LogoutSuccessAction(response.result);
//             }), catchError(() => of(new loginActions.LogoutFailureAction())));
//         })
//     );

//     @Effect()
//     changePassword$: Observable<Action> = this.actions$.pipe(
//         ofType(loginActions.CHANGE_PASSWORD),
//         withLatestFrom(this.store.select(x => x.loginState.token)),
//         exhaustMap<[BaseAction, string], BaseAction>(([x, token]) => {
//             return this.loginService.changePassword(token, x.payload).pipe(map((response: IAPIResponse) => {
//                 if (response.error) {
//                     return new loginActions.ChangePasswordFailureAction(response.result);
//                 }
//                 return new loginActions.ChangePasswordSuccessAction(response.result);
//             }), catchError(() => of(new loginActions.ChangePasswordFailureAction())));
//         })
//     );

//     @Effect()
//     signup$: Observable<Action> = this.actions$.pipe(
//         ofType(loginActions.SIGNUP),
//         exhaustMap((x: BaseAction) => {
//             return this.loginService.signup(x.payload).pipe(map((response: IAPIResponse) => {
//                 if (response.error) {
//                     this.toastr.error("Unable to create account!", "Error");
//                     return new loginActions.SignupFailureAction(response.result);
//                 }
//                 return new loginActions.SignupSuccessAction(response.result);
//             }), catchError(() => {
//                 this.toastr.error("Unable to create account!", "Error");
//                 return of(new loginActions.SignupFailureAction());
//             }));
//         })
//     );

//     @Effect()
//     userExists$: Observable<Action> = this.actions$.pipe(
//         ofType(loginActions.USER_EXISTS),
//         switchMap((x: BaseAction) => {
//             return this.loginService.userExists(x.payload).pipe(map((response: IAPIResponse) => {
//                 if (response.error) {
//                     return new loginActions.UserExistsFailureAction({ data: true, key: x.payload.key });
//                 }
//                 return new loginActions.UserExistsSuccessAction({ data: response.result, key: x.payload.key });
//             }), catchError(() => of(new loginActions.UserExistsFailureAction({ data: true, key: x.payload.key }))));
//         })
//     );

}