import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeSintomasPage } from './informe-sintomas.page';

describe('InformeSintomasPage', () => {
  let component: InformeSintomasPage;
  let fixture: ComponentFixture<InformeSintomasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
