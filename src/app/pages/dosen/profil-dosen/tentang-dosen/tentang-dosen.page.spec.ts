import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TentangDosenPage } from './tentang-dosen.page';

describe('TentangDosenPage', () => {
  let component: TentangDosenPage;
  let fixture: ComponentFixture<TentangDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TentangDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
