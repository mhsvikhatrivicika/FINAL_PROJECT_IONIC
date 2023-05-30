import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDosenPage } from './home-dosen.page';

describe('HomeDosenPage', () => {
  let component: HomeDosenPage;
  let fixture: ComponentFixture<HomeDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
