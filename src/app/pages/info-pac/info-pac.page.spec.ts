import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPacPage } from './info-pac.page';

describe('InfoPacPage', () => {
  let component: InfoPacPage;
  let fixture: ComponentFixture<InfoPacPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
