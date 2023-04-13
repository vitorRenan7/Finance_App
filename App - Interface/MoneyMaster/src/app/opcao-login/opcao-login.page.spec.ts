import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcaoLoginPage } from './opcao-login.page';

describe('OpcaoLoginPage', () => {
  let component: OpcaoLoginPage;
  let fixture: ComponentFixture<OpcaoLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcaoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
