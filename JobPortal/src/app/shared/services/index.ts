
import { HomeService } from './home.services';
import { LoginService } from './login.services';


export * from './home.services';
export * from './login.services';


export let allServices = [
    HomeService,
    LoginService,
];