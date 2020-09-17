import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brand } from './interface';
import * as brandsActions from './store/brands.actions'
import * as brandsSelectors from './store/brands.selectors'

@Component({
    selector: 'app-root',
    templateUrl: './conteiner.component.html',
    styleUrls: ['./conteiner.component.css']
})

export class ConteinerComponent implements OnInit {

    brands$:Observable<Brand[]>

    constructor(private store:Store){}

    ngOnInit():void{
        this.store.dispatch(brandsActions.getBrands())
        this.brands$ = this.store.select(brandsSelectors.getBrands)
    }

}
