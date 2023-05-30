import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../../api/api-service.service';

@Component({
  selector: 'app-profil-mahasiswa',
  templateUrl: './profil-mahasiswa.page.html',
  styleUrls: ['./profil-mahasiswa.page.scss'],
})
export class ProfilMahasiswaPage implements OnInit {
  profil:any;

  constructor(
    private router : Router,
    private api: ApiServiceService,
  ) { }


  //ROUTE
  about() {
    this.router.navigateByUrl('tabs-mahasiswa/profil-mahasiswa/tentang-mahasiswa')
  }
  help() {
    this.router.navigateByUrl('tabs-mahasiswa/profil-mahasiswa/bantuan-mahasiswa')
  }
  settingD() {
    this.router.navigateByUrl('tabs-mahasiswa/profil-mahasiswa/pengaturan-akun-mahasiswa')
  }
  keluar() {
    this.router.navigateByUrl('login')
  }

  ngOnInit() {
  }


  //VIEW
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

}
