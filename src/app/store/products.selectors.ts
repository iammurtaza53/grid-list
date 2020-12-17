import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './product.reducer';

const productsSelector = createFeatureSelector<fromStore.ProductState>(fromStore.productsFeatureKey);

export const products = createSelector(productsSelector, fromStore.selectAll);

