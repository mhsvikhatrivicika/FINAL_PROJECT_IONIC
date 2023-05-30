import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkunDosenPage } from './akun-dosen.page';

describe('AkunDosenPage', () => {
  let component: AkunDosenPage;
  let fixture: ComponentFixture<AkunDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AkunDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
