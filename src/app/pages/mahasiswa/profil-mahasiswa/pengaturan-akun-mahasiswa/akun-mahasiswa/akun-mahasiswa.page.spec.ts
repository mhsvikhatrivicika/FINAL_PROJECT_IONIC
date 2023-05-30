import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkunMahasiswaPage } from './akun-mahasiswa.page';

describe('AkunMahasiswaPage', () => {
  let component: AkunMahasiswaPage;
  let fixture: ComponentFixture<AkunMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AkunMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
