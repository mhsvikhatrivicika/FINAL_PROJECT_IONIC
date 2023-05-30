import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from '../../api/api-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //BENTUK FORM
  form = {
    email : '',
    password : ''
  }


  //ROLE
  userRole: string = '';

  constructor(
    private router : Router,
    private alert: AlertController,
    private api: ApiServiceService
  ) { }

  
  private async presentAlert(title: any, message: any) {
    const alert = await this.alert.create({
      // header: 'Sample Form',
      header: title,
      message: message,
      buttons: ['OK'],
    });
    
    await alert.present();
  }
  
  
  // CEK FORM
  doSubmitWithValidateFormInput() {
    var doSubmitForm = true;

    if (this.form.email == null || this.form.email == '') {
      this.presentAlert('Peringatan', 'Anda Belum Isi Email');
      doSubmitForm = false;
    }else if (this.form.password == null || this.form.password == '') {
      this.presentAlert('Peringatan', 'Anda Belum Isi Password');
      doSubmitForm = false;
    }

    if (doSubmitForm) {
      this.doLogin();
    }
  }

  // FUNCTIOn LOGIN
  doLogin() {
    this.api.apiLogin(this.form).subscribe(
      (data: any) => {
        const jsonResponse = JSON.parse(JSON.stringify(data));
        const token = data.token;
        const userRole = data.data.level;

        // Simpan token dan nama pengguna ke dalam sessionStorage
        localStorage.setItem('token', token);

  
        if (userRole === 'DOSEN') {
          this.router.navigateByUrl('tabs-dosen');
        } else if (userRole === 'MAHASISWA') {
          this.router.navigateByUrl('tabs-mahasiswa');
        }
      },
      (err) => {
        this.presentAlert(
          'Gagal Login',
          "Harap Cek Email dan Password"
        );
      }
    );
  }
  
  
  

  signup() {
    this.router.navigateByUrl('signup')

  }

  ngOnInit() {
  }
}