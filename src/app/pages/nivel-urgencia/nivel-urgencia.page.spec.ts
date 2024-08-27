import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelUrgenciaPage } from './nivel-urgencia.page';

describe('NivelUrgenciaPage', () => {
  let component: NivelUrgenciaPage;
  let fixture: ComponentFixture<NivelUrgenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelUrgenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
