import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RelatorioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
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
