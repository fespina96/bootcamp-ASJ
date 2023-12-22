import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyecto-5',
  templateUrl: './proyecto-5.component.html',
  styleUrl: './proyecto-5.component.css'
})
export class Proyecto5Component {
    
    outputArray:Array<any> = [];
    
    formInput = {
        minNum:'',
        maxNum:'',
    }

    obtenerPrimos(formPrimos:NgForm){
        this.outputArray = [];
        for(let x=formPrimos.value.min_num;x<formPrimos.value.max_num;x++){
            let flag = false;
            if(x==1){
                this.outputArray.push(x);
            }else if(x>1){
                for(let y=2;y<(x-1);y++){
                    if(x%y==0){
                        flag = true;
                        break
                    }
                }
                if(flag==false){
                    this.outputArray.push(x);
                }
            }

        }
        console.log(this.outputArray);
    }


}
