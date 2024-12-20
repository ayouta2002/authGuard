import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop';
  // t = 20;
  // list=["a","b","c","d"];

  mfp='message from parent';
  ReceivedFromChild(data:string){
alert(data);

  }
}
