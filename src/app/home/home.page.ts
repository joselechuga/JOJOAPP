
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
})
export class HomePage {
  data: any; 

  constructor(private activeroute: ActivatedRoute,
     private router: Router,
     public navCtrl : NavController) {
   
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data) 
      }else{this.router.navigate(["/login"])} 
    });
  }



  irtienda(){
    this.router.navigate(['/producto'])
  }
}
