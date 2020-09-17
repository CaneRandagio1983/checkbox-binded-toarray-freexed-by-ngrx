import { createAction, props } from '@ngrx/store'
import { Brand } from '../interface'

export const getBrands = createAction(
    '[conteiner] get Brands'
);

export const getBrandsSuccess = createAction(
    '[conteiner] Get Brands Success',
    props<{brands:Brand[]}>()
)