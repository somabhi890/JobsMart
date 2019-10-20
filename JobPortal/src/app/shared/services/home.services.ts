import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { IAPIResponse } from "src/app/interfaces";
import { Http, Headers, RequestOptionsArgs, RequestOptions, RequestMethod } from "@angular/http";

const HostNameApi= "http://localhost:3000";

@Injectable()
export class HomeService {
    constructor(public http: Http) { }

    public defaultHeaders: Headers = new Headers();
    public getDashboard(reqObj) {
        let headers = new Headers();
        headers.set("Content-Type", "application/json");

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            body: reqObj
        });

        return this.http.request(HostNameApi + "/getAllJobs",requestOptions)
            .pipe(
                map(res => {
                    return res.json();
                })
            );
    }
}