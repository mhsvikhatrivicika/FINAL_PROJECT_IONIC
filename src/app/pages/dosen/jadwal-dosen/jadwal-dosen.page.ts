import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-jadwal-dosen',
  templateUrl: './jadwal-dosen.page.html',
  styleUrls: ['./jadwal-dosen.page.scss'],
})
export class JadwalDosenPage implements OnInit {

  jadwal:any;

  constructor(
    private api : ApiServiceService,
    private router : Router
  ) { }
  
  GetAllJadwal() {

    const token = localStorage.getItem('token');
    if (token) {
      this.api.getJadwalDosen(token).subscribe(
        (response:any) => {
          console.log(response);

          this.jadwal = response.data.history_jadwal;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }


  ngOnInit() {
    this.GetAllJadwal();
  }

}
