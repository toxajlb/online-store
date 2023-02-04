import { makeAutoObservable } from "mobx";

interface DeviceStoreTypes {
    _types: unknown[];
    _brands: unknown[];
    _devices: unknown[];
    _selectedType: object;
    setTypes: (arg: unknown[]) => void;
    setBrands: (arg: unknown[]) => void;
    setDevices: (arg: unknown[]) => void;
    setSelectedType: (arg: object) => void;
    setSelectedBrand: (arg: object) => void;
}

export default class DeviceStore implements DeviceStoreTypes {
    _types: unknown[];
    _brands: unknown[];
    _devices: unknown[];
    _selectedType: object;
    _selectedBrand: object;

    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}

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
    setSelectedType(type: object) {
        this._selectedType = type
    }
    setSelectedBrand(brand: object) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
