import { makeAutoObservable } from "mobx";

interface DeviceStoreTypes {
    _types: { 
        id: number; 
        name: string;
    } [];

    _brands: { 
        id: number; 
        name: string;
    } [];

    _devices: {
        id: number,
        title: string,
        description: string
    }[];

    _selectedType:  {
        id: number;
        name: string;
    }
    _selectedBrand:  {
        id: number;
        name: string;
    }
}

export default class DeviceStore implements DeviceStoreTypes {
    _types;
    _brands;
    _devices;
    _selectedType;
    _selectedBrand;

    constructor() {
        this._types = [{id: 1, name: "Смартфоны"}, {id: 2, name: "Смартфоны"}]
        this._brands = [{id: 1, name: "IPhone"}, {id: 2, name: "IPhone"}]
        this._devices = [{id: 1, title: "IPhone", description: "14Pro"}, {id: 2, title: "IPhone", description: "12mini"}]
        this._selectedType = {id: 1, name: "Смартфоны"}
        this._selectedBrand = {id: 1, name: "Iphone"}

        makeAutoObservable(this);
    }   

    setTypes(types: { id: number; name: string; }[]) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
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
