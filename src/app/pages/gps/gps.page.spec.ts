import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpsPage } from './gps.page';

describe('GpsPage', () => {
  let component: GpsPage;
  let fixture: ComponentFixture<GpsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
