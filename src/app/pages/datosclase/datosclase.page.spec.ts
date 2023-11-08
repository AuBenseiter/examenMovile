import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosclasePage } from './datosclase.page';

describe('DatosclasePage', () => {
  let component: DatosclasePage;
  let fixture: ComponentFixture<DatosclasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
