import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})



export class RecuperarPassPage implements OnInit {


  registerUser: Usuario = {
    email: '',
    clave:'',
    clave2:'',
    nombre: '',
    direccion: '',
    num_documento: '',
    tipo_documento: '',
    sexo: '',
    telefonoMovil: '',
    foto: '',
    foto2:'',
    foto3:'',
    foto4: '',
    foto5: '',
    foto6: '',
    foto7: '',
    foto8: '',
    dato:  '',
    dato2: '',
    dato3: '',
    dato4: '',
    dato5: '',
    dato6: '',
    dato7: '',
    dato8: ''
  };
  

  constructor(private navCtrl:NavController,private uiService: UiServiceService, private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }
    console.log(this.registerUser);

    const valido = await this.usuarioService.actualizarPassword( this.registerUser );

    if ( valido ) {
      // navegar al tabs
      this.uiService.alertaInformativa('Se ha enviado un correo de confirmación para continuar con el proceso de recuperacion de contraseña.');
      //this.mostrarRegistro();
      this.navCtrl.navigateRoot( '/login', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Su correo no se encuentra registrado en FASTMER.');
    }


  }


}
