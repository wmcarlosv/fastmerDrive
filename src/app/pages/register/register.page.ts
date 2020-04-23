import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NgForm } from '@angular/forms';
import { DocumentViewer, DocumentViewerOptions, DocumentViewerOriginal } from '@ionic-native/document-viewer';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  isEnabled :any = true;
  isEnabled2 :any = true;
  isEnabled3 :any = true;
  isEnabled4 :any = true;
  isEnabled5 :any = true;
  isEnabled6 :any = true;
  isEnabled7 :any = true;
  isEnabled8 :any = true;

  registerUser: Usuario = {
    email: '',
    clave:'',
    clave2:'',
    nombre: '',
    direccion: '',
    num_documento: '',
    tipo_documento: '',
    tipoVehiculo: '',
    sexo: '',
    telefonoMovil: '',
    foto: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto2:'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto3:'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto4: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto5: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto6: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto7: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    foto8: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato:  'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato2: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato3: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato4: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato5: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato6: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato7: 'https://www.robsa.com.py/fastmer/assets/noimage.png',
    dato8: 'https://www.robsa.com.py/fastmer/assets/noimage.png'
  };

  df1 = false;
  df2 = false;
  df3 = false;
  df4 = false;
  df5 = false;
  df6 = false;
  df7 = false;
  df8 = false;


  hideA=true;
  hideB=false;
  hideC=false;
  hideT=false;

  r1=false;
  r2=false;
  r3=false;
  r4=false;
  r5=false;
  r6=false;
  r7=false;
  r8=false;
  T1=false;
  T2=false;


  constructor(  private iap: InAppBrowser,private router:Router, private navCtrl:NavController,private uiService: UiServiceService, private usuarioService:UsuarioService ,private camera:Camera) { 

  }

  ngOnInit() {

  }

  filtrarVehiculo(){


    if ( this.registerUser.tipoVehiculo === '1' ) {


      this.r1 = true;
      this.r2 = true;
      this.r3 = true;
      this.r4 = false;
      this.r5 = false;
      this.r6 = true;
      this.r7 = false;
      this.r8 = false;
      this.T1 = false;
      this.T2 = true;


    }

    if ( this.registerUser.tipoVehiculo === '2' ) {
      

      this.r1 = true;
      this.r2 = true;
      this.r3 = true;
      this.r4 = true;
      this.r5 = true;
      this.r6 = true;
      this.r7 = true;
      this.r8 = true;
      this.T1 = true;
      this.T2 = false;



    }

    if ( this.registerUser.tipoVehiculo === '3' ) {


      this.r1 = true;
      this.r2 = true;
      this.r3 = true;
      this.r4 = true;
      this.r5 = true;
      this.r6 = true;
      this.r7 = true;
      this.r8 = true;
      this.T1 = true;
      this.T2 = false;


    }

    if ( this.registerUser.tipoVehiculo === '4' ) {


      this.r1 = true;
      this.r2 = true;
      this.r3 = true;
      this.r4 = true;
      this.r5 = true;
      this.r6 = true;
      this.r7 = true;
      this.r8 = true;
      this.T1 = true;
      this.T2 = false;


    }



  }

  terminosCondiciones(){
    this.iap.create("https://robsa.com.py/fastmer/documentos/tcv1.pdf","_system");
  }

  fhideA() {
    this.hideA = true;
    this.hideB = false;
    this.hideC = false;
    this.hideT = false;
  }

  fhideB() {
    this.hideA = false;
    this.hideB = true;
    this.hideC = false;
    this.hideT = false;

  }

  fhideC() {
    this.hideA = false;
    this.hideB = false;
    this.hideC = true;
    this.hideT = false;

  }

  fhideT() {
    this.hideA = false;
    this.hideB = false;
    this.hideC = false;
    this.hideT = true;

  }

  sacarFoto(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }
    


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato=this.registerUser.foto;
        this.df1 = true;
    }, (err) => {
        console.log(err);
    });
  }

  sacarFoto2(){


    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto2= "data:image/jpeg;base64," + imageData;
        this.registerUser.dato2=this.registerUser.foto2;
        this.df2 = true;

    }, (err) => {
        console.log(err);
    });
  }


  sacarFoto3(){


    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto3 = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato3=this.registerUser.foto3;
        this.df3 = true;

    }, (err) => {
        console.log(err);
    });
  }
  sacarFoto4(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto4 = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato4=this.registerUser.foto4;
        this.df4 = true;
    }, (err) => {
        console.log(err);
    });
  }
  sacarFoto5(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto5 = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato5=this.registerUser.foto5;
        this.df5 = true;

    }, (err) => {
        console.log(err);
    });
  }
  

  sacarFoto6(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto6 = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato6=this.registerUser.foto6;
        this.df6 = true;

    }, (err) => {
        console.log(err);
    });
  }

  sacarFoto7(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto7 = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato7=this.registerUser.foto7;
        this.df7 = true;

    }, (err) => {
        console.log(err);
    });
  }

  sacarFoto8(){

    let cameraOptions : CameraOptions = {
        quality: 50,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    }


    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is a base64 encoded string
        this.registerUser.foto8 = "data:image/jpeg;base64," + imageData;
        this.registerUser.dato8=this.registerUser.foto8;
        this.df8 = true;

    }, (err) => {
        console.log(err);
    });
  }
  
  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }
    console.log(this.registerUser);

    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {
      // navegar al tabs
      this.uiService.alertaInformativa('Se ha registrado a Fastmer.');
      //this.mostrarRegistro();
      this.navCtrl.navigateRoot( '/login', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }


  }



}
