import { Component, Input} from '@angular/core';
import {GreeterService} from './greeter.service'

@Component({
  selector: 'hello',
  templateUrl: 'app/hello.component.html',
  styles:[`
    .colorText {
      color:green;
    }
    .specialFont {
      font-family: "Times New Roman";
    }`
  ]
})
export class HelloComponent {
  @Input()
  name:string = "";
  @Input()
  txtColor:string = 'black';
  @Input()
  customStyles = {};

  constructor(private greeterService: GreeterService) {}
  msg = this.greeterService.getMessage();
}
