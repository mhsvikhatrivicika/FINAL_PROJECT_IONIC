import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengaturan-akun-dosen',
  templateUrl: './pengaturan-akun-dosen.page.html',
  styleUrls: ['./pengaturan-akun-dosen.page.scss'],
})
export class PengaturanAkunDosenPage implements OnInit {

  
  constructor(
    private router : Router
  ) { }

  profilD() {
    this.router.navigateByUrl('/profil-dosen/pengaturan-akun-dosen/akun-dosen')
  }
  gPasswordD() {
    this.router.navigateByUrl('/profil-dosen/pengaturan-akun-dosen/ganti-password-dosen')
  }

  ngOnInit() {
  }

}
