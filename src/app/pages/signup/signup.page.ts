import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiServiceService } from '../../api/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // BENTUK FORM
  form = {
    nim: '',
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private alert: AlertController,
    private api: ApiServiceService,
    private toastController: ToastController
  ) {}

  // LOGIN
  doLogin() {
    this.router.navigateByUrl('login');
  }

  private async presentAlert(title: any, message: any) {
    const alert = await this.alert.create({
      // header: 'Sample Form',
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async doRegister() {
    this.api.apiRegister(this.form).subscribe(
      async (data: any) => {
        const toast = await this.toastController.create({
          message: 'Anda berhasil melakukan Registrasi',
          duration: 2000,
        });
        await toast.present();
        this.doLogin();
      },
      async (err:any) => {
        const toast = await this.toastController.create({
          message: 'Gagal melakukan Registrasi '+err.nim,
          duration: 2000,
        });
        await toast.present();
      }
    );
  }

  ngOnInit() {}
}
