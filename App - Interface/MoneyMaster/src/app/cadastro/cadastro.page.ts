import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastroPage implements OnInit {

  nomeUsuario!: string;
  erroNome: string = ''; // Adicionando valor padrão
  botaoAtivo: boolean = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  pageOpcaoLogin(){
    this.navCtrl.navigateRoot('/opcao-login');
  }

  validarNome(){
    if (this.nomeUsuario && this.nomeUsuario.length < 2){
      this.erroNome = 'O nome deve ter pelo menos duas letras';
    } else if (/\d/.test(this.nomeUsuario)){
      // /\d\ = Expressão regular para dectar números
      this.erroNome = 'O nome não pode conter números';
    } else {
      this.erroNome = '';
      this.botaoAtivo = true;
    }
  }

  
}
