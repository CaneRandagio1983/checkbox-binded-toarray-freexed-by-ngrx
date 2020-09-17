import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brand } from './interface';
import { brands } from './mockData';

@Injectable({
    providedIn: 'root'
})
export class MockService{
    getBrands():Observable<Brand[]>{
        return of(brands)
    }
}
