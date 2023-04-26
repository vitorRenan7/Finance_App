import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanhosPage } from './ganhos.page';

describe('GanhosPage', () => {
  let component: GanhosPage;
  let fixture: ComponentFixture<GanhosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GanhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
