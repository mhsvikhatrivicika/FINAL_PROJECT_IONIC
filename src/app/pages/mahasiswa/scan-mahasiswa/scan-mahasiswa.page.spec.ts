import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanMahasiswaPage } from './scan-mahasiswa.page';

describe('ScanMahasiswaPage', () => {
  let component: ScanMahasiswaPage;
  let fixture: ComponentFixture<ScanMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
