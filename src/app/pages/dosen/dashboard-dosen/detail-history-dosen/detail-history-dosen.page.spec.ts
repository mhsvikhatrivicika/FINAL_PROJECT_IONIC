import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailHistoryDosenPage } from './detail-history-dosen.page';

describe('DetailHistoryDosenPage', () => {
  let component: DetailHistoryDosenPage;
  let fixture: ComponentFixture<DetailHistoryDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailHistoryDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
