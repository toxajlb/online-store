import { makeAutoObservable } from "mobx";

interface DeviceStoreTypes {
    _types: { 
        id: string 
        name: string
    } [];

    _brands: { 
        id: string 
        name: string
    } [];

    _devices: {
        id: string
        title: string
        description: string
        name: string
        price: number
        rating: number
        img: string
    }[];

    _selectedType:  {
        id: string
        name: string
    };
    _selectedBrand:  {
        id: string,
        name: string
    };
    _page: number
    _totalCount: number
    _limit: number
}

export default class DeviceStore implements DeviceStoreTypes {
    _types: { id: string; name: string}[];
    _brands: { id: string; name: string}[];
    _devices: { id: string; title: string; description: string; name: string; price: number; rating: number; img: string}[];
    _selectedType:  {id: string; name: string};
    _selectedBrand: {id: string; name: string};
    _page;
    _totalCount;
    _limit;

    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {id: '', name: ''}
        this._selectedBrand = {id: '', name: ''}
        this._page = 1
        this._totalCount = 0
        this._limit = 3

        makeAutoObservable(this);
    }   

    setTypes(types: { id: string; name: string; }[]) {
        this._types = types
    }
    setBrands(brands: { id: string; name: string; }[]) {
        this._brands = brands
    }
    setDevices(devices: { id: string; title: string; description: string; name: string; price: number; rating: number; img: string}[]) {
        this._devices = devices
    }
    setSelectedType(type: { id: string; name: string; }) {
        this._selectedType = type
    }
    setSelectedBrand(brand: { id: string; name: string; }) {
        this._selectedBrand = brand
    }
    setPage(page: number) {
        this._page = page
    }
    setTotalCount(count: number) {
        this._totalCount = count
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
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
