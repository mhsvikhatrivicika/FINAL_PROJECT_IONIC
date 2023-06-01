import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home-dosen',
  templateUrl: './home-dosen.page.html',
  styleUrls: ['./home-dosen.page.scss'],
})
export class HomeDosenPage implements OnInit {
  profil: any;
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;


  constructor(
    private router: Router,
    private api: ApiServiceService) {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

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
