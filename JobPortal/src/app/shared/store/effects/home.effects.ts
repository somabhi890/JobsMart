import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action, Store } from "@ngrx/store";
import { homeActions } from "../actions";
import { BaseAction } from "../actions/base.actions";
import { switchMap, map, catchError, withLatestFrom, exhaustMap } from "rxjs/operators";
import { IAPIResponse } from "../../../interfaces";
import { HomeService } from "../../services";
import { IAppState } from "..";

@Injectable()
export class HomeEffects {
    constructor(private store: Store<IAppState>, private actions$: Actions, private homeService: HomeService) { }


    // @Effect()
    // getDashboardJobs$: Observable<Action> = this.actions$.pipe(
    //     ofType(homeActions.GET_DASHBOARD_JOBS),
    //     withLatestFrom(this.store.select(x => x.loginState.token)),
    //     switchMap<[BaseAction, string], BaseAction>(([x, token]) => {
    //         return this.homeService.getDashboardJobs(token, x.payload).pipe(map((response: IAPIResponse) => {
    //             if (response.error) {
    //                 return new homeActions.GetDashboardJobsFailureAction({ filter: x.payload, msg: "Unable to fetch jobs!" });
    //             }
    //             return new homeActions.GetDashboardJobsSuccessAction(Object.assign(response.result, { filter: x.payload.filter }));
    //         }), catchError(() => {
    //             return of(new homeActions.GetDashboardJobsFailureAction({ filter: x.payload.filter, msg: "Unable to fetch jobs!" }));
    //         }));
    //     })
    // );
}