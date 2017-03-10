import { Component } from '@angular/core';

@Component({
  selector: 'my-header',
  template: `

    <header>
      <nav class="navbar navbar-default">
        <div class="container-field">

          <ul class="nav navbar-nav">

            <li><a [routerLink]="['signup']">Sign Up</a></li>
            <li><a [routerLink]="['signin']">Sign In</a></li>
            <li><a [routerLink]="['protected']">Protected</a></li>

          </ul>
          <ul class="nav navbar-nav navbar-right">

            <li><a>Logout</a></li>

          </ul>
        </div><!-- /.container-fluid-->

      </nav>

    </header>
  `
})
export class HeaderComponent {
}
