import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from '../../../api/api-service.service';

@Component({
  selector: 'app-dashboard-mahasiswa',
  templateUrl: './dashboard-mahasiswa.page.html',
  styleUrls: ['./dashboard-mahasiswa.page.scss'],
})
export class DashboardMahasiswaPage implements OnInit {
  history: any;

  non_history:any;

  constructor(
    private router : Router,
    private api: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.GetAllHistory();
  }

  detail() {
    this.router.navigateByUrl('tabs-mahasiswa/dashboard-mahasiswa/history-detail-mahasiswa')
  }

  GetAllHistory() {
  

    const token = localStorage.getItem('token');
    if (token) {
      this.api.getHistoryMahasiswa(token).subscribe(
        (response:any) => {
          this.history = response.data.history;
        },
        (error) => {
        }
      );
    }
  }

}
