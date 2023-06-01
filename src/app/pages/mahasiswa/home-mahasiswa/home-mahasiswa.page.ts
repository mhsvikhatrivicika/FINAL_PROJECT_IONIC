import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home-mahasiswa',
  templateUrl: './home-mahasiswa.page.html',
  styleUrls: ['./home-mahasiswa.page.scss'],
})
export class HomeMahasiswaPage implements OnInit {
  profil: any;
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(
    private api: ApiServiceService,
    private router : Router) { }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  
  onScan(){
    this.router.navigateByUrl('tabs-mahasiswa/scan-mahasiswa');
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

  

  ngOnInit() {
  }
}
