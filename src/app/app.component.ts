import { Component } from '@angular/core';

import { faker } from "@faker-js/faker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  randomText=faker.hacker.phrase();
  enteredText=''


  onChange($event:any){
    this.enteredText=$event.target.value;
    // console.log($event.target.value);
  }

  generateMoreWords($event:any){
    this.randomText=faker.hacker.phrase();
    // faker.hacker.phrase()
    this.enteredText='';
   
  }
  compare(randomLetter:string,enteredLetter:string){

    if(!enteredLetter){
      return 'pending';
    }
   

    return randomLetter===enteredLetter ? 'correct' :'incorrect';


  }
}
