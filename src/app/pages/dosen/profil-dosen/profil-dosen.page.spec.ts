import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilDosenPage } from './profil-dosen.page';

describe('ProfilDosenPage', () => {
  let component: ProfilDosenPage;
  let fixture: ComponentFixture<ProfilDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
