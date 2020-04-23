import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 token: string = null;
 private usuario: Usuario = {};

  constructor( private http: HttpClient,
               private storage: Storage,
               private navCtrl: NavController ) { }


  login( email: string, password: string ) {

    const data = { 'email':email, 'clave':password };

    return new Promise( resolve => {

      this.http.post(`${ URL }/auth/autenticar`, data )
        .subscribe( async resp => {
          console.log(resp);

          if ( resp['result'] ) {

            await this.guardarToken( resp['result'] );
            resolve(true);
            
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }

        });

    });

  }

  logout() {
    this.token   = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  registro( usuario: Usuario ) {

    return new Promise( resolve => {

      this.http.post(`${ URL }/usuario/insertar`, usuario )
          .subscribe( async resp => {
            console.log(resp);

            if ( resp['estado'] ) {
              //await this.guardarToken( resp['token'] );
              resolve(true);
            } else {
              this.token = null;
              this.storage.clear();
              resolve(false);
            }

          }, (err)=>{
              resolve(false);
            //this.navCtrl.navigateRoot('/login');
          
          });


    });


  }

  getUsuario() {

    if ( !this.usuario._id ) {
      this.validaToken();
    }

    return { ...this.usuario };

  }


  async guardarToken( token: string ) {

    this.token = token;
    await this.storage.set('token', token);

    await this.validaToken();


  }

  async cargarToken() {

    this.token = await this.storage.get('token') || null;

  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>( resolve => {

      const headers = new HttpHeaders({
        'APP-TOKEN': this.token
      });

      this.http.get(`${ URL }/usuario/auth/validate`, { headers })
        .subscribe( resp => {
          
          
          console.log('repuesta: ',resp);
          
          if ( resp ) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/home');
            resolve(false);
          }

        }, (err)=>{
          this.navCtrl.navigateRoot('/login');
        }
        );


    });

  }


  actualizarUsuario( usuario: Usuario ) {


    const headers = new HttpHeaders({
      'x-token': this.token
    });


    return new Promise( resolve => {

      this.http.post(`${ URL }/user/update`, usuario, { headers })
        .subscribe( resp => {

          if ( resp['ok'] ) {
            this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            resolve(false);
          }

        });

    });



  }


  actualizarPassword( usuario: Usuario ) {

    return new Promise( resolve => {

      this.http.post(`${ URL }/usuario/recuperarPassword`  , usuario )
          .subscribe( async resp => {
            
              if (resp['estado']) {
                
                if(this.enviarCorreo( resp['codigo'],resp['nombre'],resp['email'] )){
                  resolve(true);
                }
                
              }else{
                resolve(false);
              }

          });


    });


  }



  enviarCorreo( codigo, nombre, correo) {
    return new Promise( resolve => {
      this.http.post( `https://robsa.com.py/fastmer/servicios/app/model/maillocal/php/enviar.php?email=`+ correo + '&nombre=' + nombre + '&codigo=' + codigo , codigo)
          .subscribe( async resp => {            
              if (resp === 1) {
                return true;
              }else{
                return false;
              }
              //resolve(true);

          });
    });
  }
}
