import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarPacPage } from './buscar-pac.page';

describe('BuscarPacPage', () => {
  let component: BuscarPacPage;
  let fixture: ComponentFixture<BuscarPacPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
