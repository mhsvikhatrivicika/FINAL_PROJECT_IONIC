import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ToastController } from '@ionic/angular';

import { ApiServiceService } from '../../../../../api/api-service.service';

@Component({
  selector: 'app-akun-mahasiswa',
  templateUrl: './akun-mahasiswa.page.html',
  styleUrls: ['./akun-mahasiswa.page.scss'],
})
export class AkunMahasiswaPage implements OnInit {


  profil: any;

  constructor(
    private router: Router,
    private alert: AlertController,
    private api: ApiServiceService,
    private toastController: ToastController
  ) {}

  profilM() {
    this.router.navigateByUrl(
      '/tabs-mahasiswa/profil-mahasiswa/pengaturan-akun-mahasiswa'
    );
  }

  ngOnInit() {}

  ionViewDidEnter() {
    const token = localStorage.getItem('token');
    if (token) {
      this.api.getProfileMahasiswa(token).subscribe(
        (response) => {
          this.profil = response;
        },
        (error) => {
          console.log(error);
          // Tampilkan pesan error atau lakukan operasi lain jika gagal mendapatkan profil
        }
      );
    }
  }

  //UPDATE
  async doUpdateProfil() {
    const token = localStorage.getItem('token');
    if (token) {
      this.api.setProfileMahasiswa(this.profil, token).subscribe(
        async (data: any) => {
          const toast = await this.toastController.create({
            message: 'Berhasil melakukan Update Profil',
            duration: 2000,
          });
          await toast.present();
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
