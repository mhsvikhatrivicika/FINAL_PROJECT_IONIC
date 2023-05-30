import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GantiPasswordMahasiswaPage } from './ganti-password-mahasiswa.page';

describe('GantiPasswordMahasiswaPage', () => {
  let component: GantiPasswordMahasiswaPage;
  let fixture: ComponentFixture<GantiPasswordMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GantiPasswordMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
