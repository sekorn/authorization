import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Protected - you should be here if you're not signed in</h1>
  `
})
export class ProtectedComponent {
}
