import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  pageRelatorio(){
    this.navCtrl.navigateRoot('/relatorio')
  }
  pageGanhos(){
    this.navCtrl.navigateRoot('/ganhos')
  }
  pageHome(){
    this.navCtrl.navigateRoot('/home')
  }
  pageGastos(){
    this.navCtrl.navigateRoot('/gastos')
  }
  pageConfiguracoes(){
    this.navCtrl.navigateRoot('/configuracao')
  }
}
