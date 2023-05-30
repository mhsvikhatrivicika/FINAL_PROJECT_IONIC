import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';

import { ApiServiceService } from '../../../../../api/api-service.service';

@Component({
  selector: 'app-ganti-password-mahasiswa',
  templateUrl: './ganti-password-mahasiswa.page.html',
  styleUrls: ['./ganti-password-mahasiswa.page.scss'],
})
export class GantiPasswordMahasiswaPage implements OnInit {

  form={
    password:''
  };

  constructor(
    private router: Router,
    private alert: AlertController,
    private api: ApiServiceService,
    private toastController: ToastController
  ) {

  }

  ngOnInit() {
  }


  profilM() {
    this.router.navigateByUrl(
      '/tabs-mahasiswa/profil-mahasiswa/pengaturan-akun-mahasiswa'
    );
  }

  //UPDATE
  private async presentAlert(title: any, message: any) {
    const alert = await this.alert.create({
      // header: 'Sample profil',
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }


  async doUpdateProfil() {
    const token = localStorage.getItem('token');
    if (token) {
      this.api.setPasswordMahasiswa(this.form, token).subscribe(
        async (data: any) => {
          const toast = await this.toastController.create({
            message: 'Berhasil melakukan Update Profil',
            duration: 2000,
          });
          await toast.present();
          this.router.navigateByUrl('login');
        },
        async (err) => {
          const toast = await this.toastController.create({
            message: 'Gagal melakukan Update Profil '+err.error,
            duration: 2000,
          });
          await toast.present();
        }
      );
    }
  }
  

}
