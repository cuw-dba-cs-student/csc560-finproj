import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlEncodePipe'
})
export class UrlEncodePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return encodeURI(value);
  }

}
