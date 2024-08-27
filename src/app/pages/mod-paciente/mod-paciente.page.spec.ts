import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModPacientePage } from './mod-paciente.page';

describe('ModPacientePage', () => {
  let component: ModPacientePage;
  let fixture: ComponentFixture<ModPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
