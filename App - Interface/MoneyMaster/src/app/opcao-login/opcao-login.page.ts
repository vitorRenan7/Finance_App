import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-opcao-login',
  templateUrl: './opcao-login.page.html',
  styleUrls: ['./opcao-login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OpcaoLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
