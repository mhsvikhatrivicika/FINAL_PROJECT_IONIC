import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GantiPasswordDosenPage } from './ganti-password-dosen.page';

describe('GantiPasswordDosenPage', () => {
  let component: GantiPasswordDosenPage;
  let fixture: ComponentFixture<GantiPasswordDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GantiPasswordDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
