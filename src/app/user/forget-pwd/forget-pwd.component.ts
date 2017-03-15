import { Component, OnInit, Input } from '@angular/core';

import {ForgetPwdService} from './forget-pwd.service';
import {User} from '../model/user-model';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss']
})
export class ForgetPwdComponent implements OnInit {
  public user:User = new User();
  public message: string;
  public messageType: string;

  constructor(public fogetPwdService: ForgetPwdService) { }

  ngOnInit() {
  }

  public sendValidationEmail(): void {
    this.fogetPwdService.sendValidationEmail(this.user.email)
      .subscribe(
        data => {
          this.message = data.message;
          this.messageType = 'success';
        },
        error => {
          this.message = error.message;
          this.messageType = 'danger';
        }
      )
  }

}
