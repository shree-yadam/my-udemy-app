import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>WARNING!!<p>
  `,
  styles: [`
  p {
    color: red;
  }
  `]
})
export class WarningAlert {

}
