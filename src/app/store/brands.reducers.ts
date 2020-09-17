import { createEntityAdapter } from '@ngrx/entity';
import { BrandsState } from './models';
import { createReducer, on, Action } from '@ngrx/store';
import * as brandsActions from './brands.actions'
import { Brand } from '../interface';

export const adapter = createEntityAdapter<Brand>({
    
})

export const initialBrandsState = adapter.getInitialState()

export const brandsReducers = createReducer(
    initialBrandsState,
    on(brandsActions.getBrandsSuccess, (state, action) => adapter.addAll(action.brands, state)),
);

export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: BrandsState | undefined, action: Action) {
    return brandsReducers(state, action)
}