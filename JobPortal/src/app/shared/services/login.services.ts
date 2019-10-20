import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Http, Headers, RequestOptionsArgs, RequestOptions, RequestMethod } from "@angular/http";

const HostNameApi = "http://localhost:3000"
@Injectable()
export class LoginService {
    constructor(public http: Http) { }

    public login(reqObj) {
        let headers = new Headers();
        headers.set("Content-Type", "application/json");

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: reqObj
        });

        return this.http.request(HostNameApi + "/login", requestOptions).pipe(
            map(res => {
                return res.json();
            })
        );
    }
}