import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController, ToastController } from '@ionic/angular';

//Serial NUmber
import { Device } from '@capacitor/device';

//Location
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { ApiServiceService } from '../../../api/api-service.service';

@Component({
  selector: 'app-scan-mahasiswa',
  templateUrl: './scan-mahasiswa.page.html',
  styleUrls: ['./scan-mahasiswa.page.scss'],
})
export class ScanMahasiswaPage implements OnInit, OnDestroy {
  absen: any;
  absen_lab: any;
  absen_name: any;

  result: string | null = null;
  scanActive = false;

  //location
  latitude: number = 0;
  longitude: number = 0;

  serial = '';

  absensi = {
    latitude: 0,
    longitude: 0,
    serial_number: '',
    id_tml: '',
  };

  constructor(
    private api: ApiServiceService,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnDestroy(): void {
    this.stopScanner();
  }

  async ionViewDidEnter() {}

  // async startScanner() {
  //   this.scanActive = true;
  //   await BarcodeScanner.hideBackground();
  //   const result = await BarcodeScanner.startScan();

  //   if (result.hasContent) {
  //     this.result = result.content;
  //     this.scanActive = false;

  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       this.api.getBeforeAbsenMahasiswa(token, result.content).subscribe(
  //         (response: any) => {
  //           this.absen = response.data.ket['0'].course;
  //           console.log(this.absen);

  //           const alert = await this.alertController.create({
  //             header: 'Konfirmasi',
  //             message:
  //               'Apakah Anda benar-benar ingin melakukan Absensi pada Mata Kuliah ' +
  //               this.absen,
  //             buttons: [
  //               {
  //                 text: 'Batal',
  //                 role: 'cancel',
  //                 handler: async () => {
  //                   // Navigasi ke halaman "Home"
  //                   this.router.navigate(['tabs-mahasiswa']);

  //                   // Tampilkan pesan toast berhasil
  //                   const toast = await this.toastController.create({
  //                     message: 'Anda membatalkan Absensi',
  //                     duration: 2000,
  //                   });
  //                   toast.present();
  //                 },
  //               },
  //               {
  //                 text: 'Ya',
  //                 handler: async () => {
  //                   // Navigasi ke halaman "Home"
  //                   this.router.navigate([
  //                     'tabs-mahasiswa/dashboard-mahasiswa',
  //                   ]);

  //                   // Tampilkan pesan toast berhasil
  //                   const toast = await this.toastController.create({
  //                     message: 'Anda berhasil melakukan pemindaian',
  //                     duration: 2000,
  //                   });
  //                   toast.present();
  //                 },
  //               },
  //             ],
  //           });

  //           await alert.present();
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   }
  // }

  async startScanner() {
    this.scanActive = true;
    await BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.result = result.content;
      this.scanActive = false;

      const token = localStorage.getItem('token');
      if (token) {
        try {
          this.api.getBeforeAbsenMahasiswa(token, result.content).subscribe(
            async (response: any) => {
              this.absen = response.data.ket[0].course;
              this.absen_lab = response.data.ket[0].room;
              this.absen_name = response.data.ket[0].name;

              const alert = await this.alertController.create({
                header: 'Konfirmasi',
                message:
                  'Apakah Anda benar-benar ingin melakukan Absensi pada Lab ' +
                  this.absen_lab +
                  ' dan Mata Kuliah ' +
                  this.absen +
                  ' dengan Dosen ' +
                  this.absen_name,
                buttons: [
                  {
                    text: 'Batal',
                    role: 'cancel',
                    handler: async () => {
                      // Navigasi ke halaman "Home"
                      this.router.navigate(['tabs-mahasiswa']);

                      // Tampilkan pesan toast berhasil
                      const toast = await this.toastController.create({
                        message: 'Anda membatalkan Absensi',
                        duration: 2000,
                      });
                      toast.present();
                    },
                  },
                  {
                    text: 'Ya',
                    handler: async () => {
                      this.absensi.id_tml = result.content;
                      this.absensi.latitude = this.latitude;
                      this.absensi.longitude = this.longitude;
                      this.absensi.serial_number = this.serial;

                      console.log(this.latitude);
                      console.log(this.longitude);
                      console.log(this.serial);

                      try {
                        this.api.absenMahasiswa(this.absensi, token).subscribe(
                          async (data: any) => {
                            const toast = await this.toastController.create({
                              message: 'Anda berhasil melakukan pemindaian',
                              duration: 2000,
                            });
                            toast.present();

                            // Navigasi ke halaman "Dashboard Mahasiswa"
                            this.router.navigate([
                              'tabs-mahasiswa/dashboard-mahasiswa',
                            ]);
                          },
                          async (err) => {
                            console.log(err)
                            const toast = await this.toastController.create({
                              message: err.error.data.ket,
                              duration: 2000,
                            });
                            toast.present();

                            this.router.navigate([
                              'tabs-mahasiswa/home-mahasiswa',
                            ]);
                          }
                        );
                      } catch (error) {}
                    },
                  },
                ],
              });

              await alert.present();
            },
            async (err) => {
              const toast = await this.toastController.create({
                message: err.error.data.ket,
                duration: 2000,
              });
              toast.present();

              this.router.navigate(['tabs-mahasiswa/home-mahasiswa']);
            }
          );
        } catch (error) {
        }
      }
    }
  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        const alert = await this.alertController.create({
          header: 'No Permission',
          message: 'Tolong Ijinkan Kamera',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
            },
            {
              text: 'Open Settings',
              handler: () => {
                BarcodeScanner.openAppSettings, resolve(false);
              },
            },
          ],
        });
      } else {
        resolve(false);
      }
    });
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  async getSerialNumber() {
    try {
      const info = await Device.getId();
      this.serial = info.identifier;
    } catch (error) {}
  }

  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    } catch (error) {}
  }

  ngOnInit() {
    const allowed = this.checkPermission();

    if (!allowed) {
      BarcodeScanner.prepare();
      console.log('tidak aktif');
    } else {
      this.startScanner();
      console.log('aktif');
      this.getSerialNumber();
      this.getCurrentLocation();
    }
  }
}
