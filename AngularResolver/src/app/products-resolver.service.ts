import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ProductService } from './products/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {
  constructor(private product: ProductService) {
    alert('injected ProductService and ProductsResolverService constructor works');
  }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
