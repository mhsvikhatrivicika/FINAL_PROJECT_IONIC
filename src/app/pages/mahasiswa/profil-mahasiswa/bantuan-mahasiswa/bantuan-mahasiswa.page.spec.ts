import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BantuanMahasiswaPage } from './bantuan-mahasiswa.page';

describe('BantuanMahasiswaPage', () => {
  let component: BantuanMahasiswaPage;
  let fixture: ComponentFixture<BantuanMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BantuanMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
