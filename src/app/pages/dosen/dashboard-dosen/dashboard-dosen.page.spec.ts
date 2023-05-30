import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDosenPage } from './dashboard-dosen.page';

describe('DashboardDosenPage', () => {
  let component: DashboardDosenPage;
  let fixture: ComponentFixture<DashboardDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
