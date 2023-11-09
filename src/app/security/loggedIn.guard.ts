import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanLoad, CanActivate, Route, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{
    
    constructor(private loginService:LoginService){}

    checkAuthentication(path : string) : boolean{
        const loggedIn = this.loginService.isLoggedIn();
        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`);
        }
        return loggedIn;
    }
    
    canLoad(route: Route): boolean{
        console.log('load');
        return this.checkAuthentication(route.path);
    }

    canActivate(activatedRoute : ActivatedRouteSnapshot, routerState : RouterStateSnapshot) : boolean{
        console.log('activate');
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }
}