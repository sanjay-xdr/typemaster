import { Component } from '@angular/core';

import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  randomText=lorem.sentence();
  enteredText=''


  onChange($event:any){
    this.enteredText=$event.target.value;
    // console.log($event.target.value);
  }

  generateMoreWords($event:any){
    this.randomText=lorem.sentence();
    this.enteredText='';
   
  }
  compare(randomLetter:string,enteredLetter:string){

    if(!enteredLetter){
      return 'pending';
    }
   

    return randomLetter===enteredLetter ? 'correct' :'incorrect';


  }
}
