import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    // canActivate: [ UsuarioGuard ]
    canLoad: [ UsuarioGuard ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' ,
  // canActivate: [ UsuarioGuard ]
  canLoad: [ UsuarioGuard ]},
  { path: 'recuperar-pass', loadChildren: './pages/recuperar-pass/recuperar-pass.module#RecuperarPassPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
