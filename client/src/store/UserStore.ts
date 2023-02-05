import { makeAutoObservable } from "mobx";

interface UserStoreTypes {
    _isAuth: boolean;
    _user: unknown;
}

export default class UserStore implements UserStoreTypes {
    _isAuth;
    _user: unknown;

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }   
    
    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }
    setUser(user: unknown) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}
