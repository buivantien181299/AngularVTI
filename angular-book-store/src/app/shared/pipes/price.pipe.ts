import { Pipe, PipeTransform } from '@angular/core';
// ng g pipe(p) 'name'
@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number, groupSymbol: string = '.', decimalSymbol: string = ',', unit: string = 'vnd'): string {
    if (!price) {
      return;
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, groupSymbol) + unit;
  }

}
