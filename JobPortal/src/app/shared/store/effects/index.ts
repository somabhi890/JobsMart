import { HomeEffects } from './home.effects';
import { LoginEffects } from './login.effects';


export * from './home.effects';
export * from './login.effects';

export let allEffects = [
    HomeEffects,
    LoginEffects
];