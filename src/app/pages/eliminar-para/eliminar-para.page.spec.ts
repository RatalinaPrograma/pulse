import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarParaPage } from './eliminar-para.page';

describe('EliminarParaPage', () => {
  let component: EliminarParaPage;
  let fixture: ComponentFixture<EliminarParaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarParaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
