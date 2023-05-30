import { Component, OnInit } from '@angular/core';
import { Router, Navigation, NavigationExtras } from '@angular/router';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-detail-history-dosen',
  templateUrl: './detail-history-dosen.page.html',
  styleUrls: ['./detail-history-dosen.page.scss'],
})
export class DetailHistoryDosenPage implements OnInit {
  history:any;

  constructor(private api: ApiServiceService, private router: Router) {
    
  }

  GetAllHistory() {
    const navigation: Navigation | null = this.router.getCurrentNavigation();
    if (navigation && navigation.extras?.state) {
      const data = navigation.extras.state;
      const token = localStorage.getItem('token');
    if (token) {
      this.api.getHistoryAbsenMahasiswa(token, data['id'], data['tanggal']).subscribe(
        (response:any) => {
          console.log(response);

          this.history = response.data.history_mahasiswa;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
    }

    

 

  ngOnInit() {
    this.GetAllHistory();
  }
}
