import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-home-dosen',
  templateUrl: './home-dosen.page.html',
  styleUrls: ['./home-dosen.page.scss'],
})
export class HomeDosenPage implements OnInit {
  profil: any;

  constructor(private router: Router, private api: ApiServiceService) {}

  scan() {
    this.router.navigateByUrl('tabs-dosen/scan-dosen'); // Ganti '/home' dengan rute halaman tujuan setelah login
  }

  ngOnInit() {
  }

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
