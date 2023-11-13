import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationStart, NavigationCancel, Event } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-dos',
  templateUrl: './menu-dos.page.html',
  styleUrls: ['./menu-dos.page.scss'],
})
export class MenuDosPage implements OnInit, OnDestroy {
  private routerSubscription!: Subscription;
  
  constructor(private authService: AuthService, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart Event:', event);
      } else if (event instanceof NavigationCancel) {
        console.log('NavigationCancel Event:', event);
        // Log additional information about the event
      }
    });
  }
  


  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  logout(){
    console.log('Logout button clicked');
    this.authService.logout();
    
  }
}
