import { makeAutoObservable } from "mobx";

interface UserStoreTypes {
    _isAuth: boolean;
    _user: object;
}

export default class UserStore implements UserStoreTypes {
    _isAuth;
    _user;

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }   
    
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}
