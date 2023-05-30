import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public status!: boolean;
  public userInfo!: string;

  public login: boolean = true;

  inLogin() {
    this.login = !this.login
    if (this.login === false) {
      this.userInfo = "You login"
    } else this.userInfo = ""
  }
}
