import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsDosenPage } from './tabs-dosen.page';

describe('TabsDosenPage', () => {
  let component: TabsDosenPage;
  let fixture: ComponentFixture<TabsDosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
