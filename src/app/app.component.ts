import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from './store/product.actions';
import * as fromStore from './store/product.reducer';
import * as fromSelector from './store/products.selectors';
import { Product } from './models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  products$: Observable<Product[]>;
  layout: string="grid";
  
  constructor(private store: Store<fromStore.ProductState>) {
    this.store.dispatch(fromActions.requestLoadProducts());
    this.products$ = this.store.select(fromSelector.products);
  }

}
