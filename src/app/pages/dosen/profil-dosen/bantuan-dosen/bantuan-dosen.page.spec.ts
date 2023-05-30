import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BantuanDosenPage } from './bantuan-dosen.page';

describe('BantuanDosenPage', () => {
  let component: BantuanDosenPage;
  let fixture: ComponentFixture<BantuanDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BantuanDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
