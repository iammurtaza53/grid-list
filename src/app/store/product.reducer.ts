
import { createReducer, on } from '@ngrx/store';

import * as ProductActions from './product.actions';

export const productsFeatureKey = 'products';

export interface ProductState {
  products: []
}

export const initialState: ProductState = {
  products: []
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts,
    (state, action) => ({ ...state, products: action.products })
  ),
  on(ProductActions.requestLoadProducts,
    (state, action) => ({ ...state, products: [] })
  )
);


export const selectAll = (state: ProductState) => { return state.products }
