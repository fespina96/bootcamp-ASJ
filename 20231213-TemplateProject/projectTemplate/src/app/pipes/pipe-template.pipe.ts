import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTemplate'
})
export class PipeTemplatePipe implements PipeTransform {

    transform(input: Array<any>, sep = ", "): any {

        let output = "";

        let outputArray = [];
        
        for(let x=0;x<input.length;x++){
            x==1? output=input[x]:output+=sep+input[x];
           
        }

        return output;
      }

}
