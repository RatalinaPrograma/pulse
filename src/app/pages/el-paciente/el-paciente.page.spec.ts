import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElPacientePage } from './el-paciente.page';

describe('ElPacientePage', () => {
  let component: ElPacientePage;
  let fixture: ComponentFixture<ElPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
