import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModParamedicoPage } from './mod-paramedico.page';

describe('ModParamedicoPage', () => {
  let component: ModParamedicoPage;
  let fixture: ComponentFixture<ModParamedicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModParamedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
