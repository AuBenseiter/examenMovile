import { Component, OnInit } from '@angular/core';
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent  implements OnInit {
  darkMode = false;
  constructor() { }

  ngOnInit() {
    //parametros que se ejecutan al iniciar el componente
    this.chaeckAppMode();
  }
  async chaeckAppMode(){
    //const checkIsDarkMode = localStorage.getItem('darkModeActive');
    const checkIsDarkMode = await Preferences.get({key:'darkModeActive'});
    checkIsDarkMode?.value == 'true'
      ? (this.darkMode = true)
      : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    if(this.darkMode){
      Preferences.set({key: 'darkModeActive', value:'true'});
  }else{
      //localStorage.setItem('darkModeActive', 'false');
      Preferences.set({key: 'darkModeActive', value:'false'});
    }
  }

}
