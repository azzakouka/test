import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateperso'
})
export class DatepersoPipe implements PipeTransform {

  transform(value: any, ): any {
    return  value.getday()+"/"+value.getmonth();
  }

}
