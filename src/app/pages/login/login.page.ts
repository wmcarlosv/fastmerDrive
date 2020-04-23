import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  flashCardFlipped: boolean = false;
  
  logo = 'https://robsa.com.py/fastmer/assets/fastmer_logo.jpg'
  loginPic = 'https://robsa.com.py/fastmer/assets/login.gif';
  

  loginUser = {
    email: '',
    password: ''
  };




  validations_form: FormGroup;
  errorMessage: string = '';

  constructor( 
            public router: Router, 
              private usuarioService: UsuarioService,
               private navCtrl: NavController,
               private uiService: UiServiceService, 
               public menuCtrl: MenuController ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);


    
  }


  mostrarRegistro() {
    this.router.navigate(['/register',{animated:true}]);
    //this.navCtrl.navigateRoot('register',{animated:true});
  }

  mostrarPass() {
    this.router.navigate(['/recuperar-pass',{animated:true}]);
    //this.navCtrl.navigateRoot('register',{animated:true});
  }

  validation_messages = {
'email': [
{ type: 'required', message: 'Email es requerido.' },
      { type: 'pattern', message: 'Introduzca un correo electrónico válido.' }
    ],
    'password':[
      { type: 'required', message: 'Password es requerido.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 5 caracteres.'}
    ]
  };
 
 
 
  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
    //this.router.navigate(['signup']);
  }


  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/home', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }


  }





}
