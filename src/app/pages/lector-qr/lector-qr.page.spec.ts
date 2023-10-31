import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectorQRPage } from './lector-qr.page';

describe('LectorQRPage', () => {
  let component: LectorQRPage;
  let fixture: ComponentFixture<LectorQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LectorQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
