import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ganhos',
  templateUrl: './ganhos.page.html',
  styleUrls: ['./ganhos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GanhosPage implements OnInit {

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
  pageconfiguracoes(){
    this.navCtrl.navigateRoot('/configuracao')
  }

}
