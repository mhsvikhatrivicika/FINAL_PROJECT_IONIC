import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TentangMahasiswaPage } from './tentang-mahasiswa.page';

describe('TentangMahasiswaPage', () => {
  let component: TentangMahasiswaPage;
  let fixture: ComponentFixture<TentangMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TentangMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
