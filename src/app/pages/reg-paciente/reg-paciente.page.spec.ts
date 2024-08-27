import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegPacientePage } from './reg-paciente.page';

describe('RegPacientePage', () => {
  let component: RegPacientePage;
  let fixture: ComponentFixture<RegPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
