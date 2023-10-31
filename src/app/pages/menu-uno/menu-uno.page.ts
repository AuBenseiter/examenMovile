import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-uno',
  templateUrl: './menu-uno.page.html',
  styleUrls: ['./menu-uno.page.scss'],
})
export class MenuUnoPage implements OnInit {

  parametronumeroUno:number | undefined;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroUno);
    
  }

}
