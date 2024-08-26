import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamedicoPage } from './paramedico.page';

describe('ParamedicoPage', () => {
  let component: ParamedicoPage;
  let fixture: ComponentFixture<ParamedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
