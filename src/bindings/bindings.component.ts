import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {

  title: string = 'Hello Fullstack Java Cyber';
  enabled: boolean = false;

  changeTitle() {
    this.title = 'I Love Coffee';
  }

  disabledMe() {
    this.title = 'I deactivated the button';
    this.enabled = !this.enabled;
  }
}
