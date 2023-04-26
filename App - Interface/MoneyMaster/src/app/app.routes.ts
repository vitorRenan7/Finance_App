import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'opcao-login',
    loadComponent: () => import('./opcao-login/opcao-login.page').then( m => m.OpcaoLoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'ganhos',
    loadComponent: () => import('./ganhos/ganhos.page').then( m => m.GanhosPage)
  },
  {
    path: 'gastos',
    loadComponent: () => import('./gastos/gastos.page').then( m => m.GastosPage)
  },
  {
    path: 'relatorio',
    loadComponent: () => import('./relatorio/relatorio.page').then( m => m.RelatorioPage)
  },
  {
    path: 'configuracao',
    loadComponent: () => import('./configuracao/configuracao.page').then( m => m.ConfiguracaoPage)
  },
];
