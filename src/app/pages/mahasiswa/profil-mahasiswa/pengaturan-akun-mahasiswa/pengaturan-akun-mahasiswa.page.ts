import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengaturan-akun-mahasiswa',
  templateUrl: './pengaturan-akun-mahasiswa.page.html',
  styleUrls: ['./pengaturan-akun-mahasiswa.page.scss'],
})
export class PengaturanAkunMahasiswaPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  profilM() {
    this.router.navigateByUrl('/profil-mahasiswa/pengaturan-akun-mahasiswa/akun-mahasiswa')
  }
  gPasswordM() {
    this.router.navigateByUrl('/profil-mahasiswa/pengaturan-akun-mahasiswa/ganti-password-mahasiswa')
  }

  ngOnInit() {
  }

}
