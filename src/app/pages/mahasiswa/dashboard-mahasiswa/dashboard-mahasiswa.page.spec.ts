import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMahasiswaPage } from './dashboard-mahasiswa.page';

describe('DashboardMahasiswaPage', () => {
  let component: DashboardMahasiswaPage;
  let fixture: ComponentFixture<DashboardMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
