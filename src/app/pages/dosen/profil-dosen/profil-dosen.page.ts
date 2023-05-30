import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-profil-dosen',
  templateUrl: './profil-dosen.page.html',
  styleUrls: ['./profil-dosen.page.scss'],
})
export class ProfilDosenPage implements OnInit {

  profil:any;

  constructor(
    private router : Router,
    private api: ApiServiceService,
  ) { }

  about() {
    this.router.navigateByUrl('tabs-dosen/profil-dosen/tentang-dosen')
  }
  help() {
    this.router.navigateByUrl('tabs-dosen/profil-dosen/bantuan-dosen')
  }
  settingD() {
    this.router.navigateByUrl('tabs-dosen/profil-dosen/pengaturan-akun-dosen')
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
      this.api.getProfileDosen(token).subscribe(
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
