import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  clr="black"
 
  ser=1
  servervar=1
  idx=0
  clrarray=["red","blue","green","pink","lightgray","cyan"]
  clicking()
  {
    this.servervar++
    if(this.servervar==5)
    {
      this.servervar=1
    }
    this.clr=this.clrarray[this.idx]
    this.idx++
    if(this.idx==6)
      this.idx=0
  }
}
