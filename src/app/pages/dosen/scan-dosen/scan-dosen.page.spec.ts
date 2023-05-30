import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanDosenPage } from './scan-dosen.page';

describe('ScanDosenPage', () => {
  let component: ScanDosenPage;
  let fixture: ComponentFixture<ScanDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
