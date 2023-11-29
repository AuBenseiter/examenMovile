import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss'],
})
export class LoginHeaderComponent  implements OnInit {

  @Input() titulo: string;
  constructor() {  this.titulo = '';}

  ngOnInit() {}

}
