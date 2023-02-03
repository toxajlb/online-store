import { makeAutoObservable } from "mobx";

interface DeviceStoreTypes {
    _types: unknown[];
    _brands: unknown[];
    _devices: unknown[];
    setTypes: (arg: unknown[]) => void;
    setBrands: (arg: unknown[]) => void;
    setDevices: (arg: unknown[]) => void;
}

export default class DeviceStore implements DeviceStoreTypes {
    _types: unknown[];
    _brands: unknown[];
    _devices: unknown[];

    constructor() {
        this._types = []
        this._brands = []
        this._devices = []

        makeAutoObservable(this);
    }   

    setTypes(types: unknown[]) {
        this._types = types
    }
    setBrands(brands: unknown[]) {
        this._brands = brands
    }
    setDevices(devices: unknown[]) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
