import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilMahasiswaPage } from './profil-mahasiswa.page';

describe('ProfilMahasiswaPage', () => {
  let component: ProfilMahasiswaPage;
  let fixture: ComponentFixture<ProfilMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
