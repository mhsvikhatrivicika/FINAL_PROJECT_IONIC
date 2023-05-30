import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JadwalDosenPage } from './jadwal-dosen.page';

describe('JadwalDosenPage', () => {
  let component: JadwalDosenPage;
  let fixture: ComponentFixture<JadwalDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JadwalDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
