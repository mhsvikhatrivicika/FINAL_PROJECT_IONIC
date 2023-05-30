import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})

// awal pake reqres in
export class ApiServiceService {
  private jwtHelper: JwtHelperService;
  // authService: any;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  // API start
  // login dan register

  // export class ApiServiceService {
  // private jwtHelper: JwtHelperService;

  // constructor(private http: HttpClient) {
  //   this.jwtHelper = new JwtHelperService();
  // }

  public apiLogin(form: any) {
    return this.http.post(
      environment.ApiLink + '/api/login',
      {
        email: form.email,
        password: form.password,
      },
      {
        responseType: 'json',
      }
    );
  }

  public apiRegister(form: any) {
    return this.http.post(
      environment.ApiLink + '/api/register',
      {
        nim: form.nim,
        email: form.email,
        password: form.password,
      },
      {
        responseType: 'json',
      }
    );
  }
  

  // MAHASISWA
  public getProfileMahasiswa(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/mahasiswa/profil', {
      headers,
    });
  }

  public getHistoryMahasiswa(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/mahasiswa/history-absen', {
      headers,
    });
  }

  public setProfileMahasiswa(form: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.ApiLink}/api/mahasiswa/set-profile`;
    const body = {
      name: form.name_tmu,
      class: form.class_tmu,
      faculty: form.faculty_tmu,
      study_program: form.study_program_tmu,
      place_of_birth: form.place_of_birth_tmu,
      date_of_birth: form.date_of_birth_tmu,
      handphone: form.handphone_tmu,
      photo: form.photo_tmu,
      _method: 'PUT',
    };

    return this.http.post(url, body, {
      headers: headers,
      responseType: 'json',
    });
  }

  public setPasswordMahasiswa(form: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.ApiLink}/api/mahasiswa/set-password`;
    const body = {
      password: form.password
    };

    return this.http.post(url, body, {
      headers: headers,
      responseType: 'json',
    });
  }

  public getBeforeAbsenMahasiswa(token: string, id:any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/mahasiswa/before-absensi/'+id, {
      headers,
    });
  }

  public absenMahasiswa(form: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.ApiLink}/api/mahasiswa/absensi`;
    const body = {
      latitude: form.latitude,
      longitude: form.longitude,
      serial_number: form.serial_number,
      id_tml: form.id_tml,
    };

    return this.http.post(url, body, {
      headers: headers,
      responseType: 'json',
    });
  }

  // DOSEN
  public getProfileDosen(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/dosen/profil', {
      headers,
    });
  }

  public getBeforeAbsenDosen(token: string, id:any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/dosen/before-absensi/'+id, {
      headers,
    });
  }

  public absenDosen(form: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.ApiLink}/api/dosen/absensi`;
    const body = {
      latitude: form.latitude,
      longitude: form.longitude,
      serial_number: form.serial_number,
      id_tml: form.id_tml,
    };

    return this.http.post(url, body, {
      headers: headers,
      responseType: 'json',
    });
  }

  public getHistoryDosen(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/dosen/history-absen', {
      headers,
    });
  }

  public getHistoryAbsenMahasiswa(token: string, id:any, tanggal:any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/dosen/history-absen-mahasiswa/'+id+'/'+tanggal, {
      headers,
    });
  }

  public setProfileDosen(form: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.ApiLink}/api/dosen/set-profile`;
    const body = {
      name: form.name_tmu,
      faculty: form.faculty_tmu,
      study_program: form.study_program_tmu,
      place_of_birth: form.place_of_birth_tmu,
      date_of_birth: form.date_of_birth_tmu,
      handphone: form.handphone_tmu,
      photo: form.photo_tmu,
      _method: 'PUT',
    };

    return this.http.post(url, body, {
      headers: headers,
      responseType: 'json',
    });
  }

  public setPasswordDosen(form: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${environment.ApiLink}/api/dosen/set-password`;
    const body = {
      password: form.password
    };

    return this.http.post(url, body, {
      headers: headers,
      responseType: 'json',
    });
  }

  public getJadwalDosen(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(environment.ApiLink + '/api/dosen/history-jadwal', {
      headers,
    });
  }


  decodeToken(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  register(form: any) {
    return this.http.post(
      environment.ApiLink + 'api/register',
      {
        nim: form.nim,
        email: form.email,
        password: form.password,
      },
      { responseType: 'json' }
    );
  }

  // Dosen

  getProfilD() {
    return this.http.get(environment.ApiLink + '/api/dosen/profil', {});
  }

  setProfilD(form: any) {
    return this.http.post(
      environment.ApiLink + 'api/dosen/set-profile',
      {
        name: form.name,
        faculty: form.faculty,
        study_program: form.study_program,
        place_of_birth: form.place_of_birth,
        date_of_birth: form.place_of_birth,
        handphone: form.handphone,
        photo: form.photo,
      },
      { responseType: 'json' }
    );
  }
  setPasswordD(form: any) {
    return this.http.post(
      environment.ApiLink + 'api/dosen/set-password',
      {
        password: form.password,
      },
      { responseType: 'json' }
    );
  }
  GetHistoryAbsenD() {
    return this.http.get(environment.ApiLink + '/api/dosen/history-absen', {});
  }
  getHiMaD() {
    return this.http.get(
      environment.ApiLink + '/api/dosen/history-absen-mahasiswa/1/2023-05-24',
      {}
    );
  }
  getBeforeD() {
    return this.http.get(
      environment.ApiLink + '/api/dosen/before-absensi/1',
      {}
    );
  }
  postAbsensiD(form: any) {
    return this.http.post(
      environment.ApiLink + '/api/dosen/absensi',
      {
        latitude: form.latitude,
        mac_address: form.mac_address,
        longitude: form.longitude,
        id_tml: form.id_tml,
      },
      { responseType: 'json' }
    );
  }
  getHistoryJadwalD() {
    return this.http.get(environment.ApiLink + '/api/dosen/history-jadwal', {});
  }
  getDownload() {
    return this.http.get(environment.ApiLink + '/api/dosen/csv/1', {});
  }

  // Mahasiswa
  getProfilM(token: string) {
    return this.http.get(environment.ApiLink + '/api/mahasiswa/profil', {});
  }

  setProfilM(form: any) {
    return this.http.post(
      environment.ApiLink + 'api/dosen/set-profile',
      {
        name: form.name,
        class: form.class,
        faculty: form.faculty,
        study_program: form.study_program,
        place_of_birth: form.place_of_birth,
        date_of_birth: form.place_of_birth,
        handphone: form.handphone,
        photo: form.photo,
      },
      { responseType: 'json' }
    );
  }
  setPasswordm(form: any) {
    return this.http.post(
      environment.ApiLink + 'api/mahasiswa/set-password',
      {
        password: form.password,
      },
      { responseType: 'json' }
    );
  }
  GetHistoryAbsenM() {
    return this.http.get(
      environment.ApiLink + '/api/mahasiswa/history-absen',
      {}
    );
  }
  postAbsensiM(form: any) {
    return this.http.post(
      environment.ApiLink + '/api/mahasiswa/absensi',
      {
        latitude: form.latitude,
        mac_address: form.mac_address,
        longitude: form.longitude,
        id_tml: form.id_tml,
      },
      { responseType: 'json' }
    );
  }
  getBeforeM() {
    return this.http.get(
      environment.ApiLink + '/api/mahasiswa/before-absensi/1',
      {}
    );
  }

  //  API end

  GetListUser() {
    return this.http.get(environment.ApiURL + '/api/users?page=2', {});
  }
  GetList() {
    return this.http.get(environment.ApiURL + '/api/unknown', {});
  }
  GetJadwal() {
    return this.http.get(environment.ApiURL + '/api/users?page=2', {});
  }
  GetUser() {
    return this.http.get(environment.ApiURL + '/api/users/2', {});
  }
  // login(form: any) {
  //   return this.http.post(environment.ApiURL + '/api/login',
  //   {
  //     email: form.email,
  //     password: form.password,
  //   },
  //   {
  //     responseType: 'json',
  //   });
  // }
  // decodeToken(token: string) {
  //   return this.jwtHelper.decodeToken(token);
  // }
}

// akhir pake reqres in
