import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMahasiswaPage } from './home-mahasiswa.page';

describe('HomeMahasiswaPage', () => {
  let component: HomeMahasiswaPage;
  let fixture: ComponentFixture<HomeMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
