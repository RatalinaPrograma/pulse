import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegParamedicoPage } from './reg-paramedico.page';

describe('RegParamedicoPage', () => {
  let component: RegParamedicoPage;
  let fixture: ComponentFixture<RegParamedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegParamedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
