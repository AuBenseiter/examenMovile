import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuDosPage } from './menu-dos.page';

describe('MenuDosPage', () => {
  let component: MenuDosPage;
  let fixture: ComponentFixture<MenuDosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
