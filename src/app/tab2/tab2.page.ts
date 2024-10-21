import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  display: string = '';
  operatorPressed: boolean = false;

  constructor() {}

  press(val: string) {
    if (this.operatorPressed && ['+', '-', '*', '/'].includes(val)) {
      return;
    }
    this.display += val;
    this.operatorPressed = ['+', '-', '*', '/'].includes(val);
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
  
}
