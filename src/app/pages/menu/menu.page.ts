import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  arrayMenu:Menu[]=[];

  loading:boolean = true;


  constructor(
                private router:Router, 
                private animationCtrl: AnimationController,
                private helper:HelperService
                
                ) { }

  cargarMenu(){
    this.arrayMenu.push
    (
      {
        id:1,
        titulo:"Menú uno",
        icono:"airplane-outline",
        url:"/123/menu-uno",
        disabled:true
      },
      {
        id:2,
        titulo:"Menú dos",
        icono:"car-sport-outline",
        url:"/menu-dos"
      },
      
    )
  }

  simularCargaMenu = () => {
    this.loading = false;
  }


  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }



  play(){
    this.animation.play();
  }


  pause(){
    this.animation.pause();
  }

  stop(){
    this.animation.stop();
  }



  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    console.log("inicio del componente");
    this.cargarMenu();
    setTimeout(this.simularCargaMenu, 4000);
  }

  ionViewWillEnter(){
    console.log("Entrando a la vista");
  }

  ionViewDidEnter(){
    console.log("Vista cargada");
  }

  ionViewWillLeave(){
    console.log("Abandonando la vista");
  }

  ionViewDidLeave(){
    console.log("Abandonó la vista");
  }




  async logOut(){
    //

    var corfirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      this.router.navigateByUrl("login");
    }
  }


  menuUno(){
    var parametroN1 = 123456;
    this.router.navigateByUrl(parametroN1 + "/menu-uno");
  }



  menuDos(){
    this.router.navigateByUrl("menu-dos");
  }
}
