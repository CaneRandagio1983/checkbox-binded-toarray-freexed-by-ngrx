import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { MockService } from '../mock.service';
import * as brandsActions from './brands.actions'
import { mergeMap, map } from 'rxjs/operators'
import { Brand } from "../interface";

@Injectable()
export class BrandsEffects {

    constructor( private actions$: Actions, private mockService: MockService ) {}

    getAllCars$ = createEffect(() => 
        this.actions$.pipe(
            ofType(brandsActions.getBrands.type),
            mergeMap( () => this.mockService.getBrands()),
            map( (brands:Brand[]) => brandsActions.getBrandsSuccess({brands}))
        )
    )

}