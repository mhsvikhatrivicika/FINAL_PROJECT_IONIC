import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from '../../../api/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mahasiswa',
  templateUrl: './home-mahasiswa.page.html',
  styleUrls: ['./home-mahasiswa.page.scss'],
})
export class HomeMahasiswaPage implements OnInit {
  profil: any;

  constructor(
    private api: ApiServiceService,
    private router : Router,) { }

  ngOnInit() {
  }
  

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

  onScan(){
    this.router.navigateByUrl('tabs-mahasiswa/scan-mahasiswa');
  }

}
