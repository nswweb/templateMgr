import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    html:string = "<div>hello template</div>";
    valueChanged(value:string){
      this.html = value;
    }
}
