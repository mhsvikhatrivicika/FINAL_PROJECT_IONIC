
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from '../../../api/api-service.service';

@Component({
  selector: 'app-dashboard-dosen',
  templateUrl: './dashboard-dosen.page.html',
  styleUrls: ['./dashboard-dosen.page.scss'],
})
export class DashboardDosenPage implements OnInit {
  history: any;

  DataUser : any;

  constructor(
    private api : ApiServiceService,
    private router : Router
  ) { }

  // details() {
  //   this.router.navigateByUrl('tabs-dosen/dashboard-dosen/detail-history-dosen')
  // }

  ngOnInit(): void {
    
    this.GetAllHistory();
  }

  GetAllHistory() {

    const token = localStorage.getItem('token');
    if (token) {
      this.api.getHistoryDosen(token).subscribe(
        (response:any) => {
          console.log(response);

          this.history = response.data.history;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  DetailAbsensi(id_tms : any, tanggal : any){

  const data = { id: id_tms, tanggal: tanggal }; // The data you want to send
  this.router.navigateByUrl('tabs-dosen/dashboard-dosen/detail-history-dosen', { state: data });
  }

}


