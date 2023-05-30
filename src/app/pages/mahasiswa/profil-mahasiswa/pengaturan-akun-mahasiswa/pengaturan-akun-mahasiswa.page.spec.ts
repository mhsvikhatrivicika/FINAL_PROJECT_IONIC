import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanAkunMahasiswaPage } from './pengaturan-akun-mahasiswa.page';

describe('PengaturanAkunMahasiswaPage', () => {
  let component: PengaturanAkunMahasiswaPage;
  let fixture: ComponentFixture<PengaturanAkunMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PengaturanAkunMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
