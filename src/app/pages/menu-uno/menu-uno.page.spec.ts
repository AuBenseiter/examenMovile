import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuUnoPage } from './menu-uno.page';

describe('MenuUnoPage', () => {
  let component: MenuUnoPage;
  let fixture: ComponentFixture<MenuUnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
