import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanAkunDosenPage } from './pengaturan-akun-dosen.page';

describe('PengaturanAkunDosenPage', () => {
  let component: PengaturanAkunDosenPage;
  let fixture: ComponentFixture<PengaturanAkunDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PengaturanAkunDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
