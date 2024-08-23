import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignosVitPage } from './signos-vit.page';

describe('SignosVitPage', () => {
  let component: SignosVitPage;
  let fixture: ComponentFixture<SignosVitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignosVitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
