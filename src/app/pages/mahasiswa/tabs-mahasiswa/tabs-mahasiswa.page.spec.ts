import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsMahasiswaPage } from './tabs-mahasiswa.page';

describe('TabsMahasiswaPage', () => {
  let component: TabsMahasiswaPage;
  let fixture: ComponentFixture<TabsMahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
