import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let retval = value;
    switch(value){
      case 'Active':
      value='Available';
      break
      case 'ACTIVE':
      value='Available';
      break
    }

    if(value==='Available'){
      retval = '<i class="material-icons green600  status-icons">cloud_done</i> ' + value;
    }else{
      retval = '<i class="material-icons orange600 status-icons" >cloud_off</i> ' + value ;
    }

    return retval ;
  }

}