import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouristePage } from './touriste.page';

describe('TouristePage', () => {
  let component: TouristePage;
  let fixture: ComponentFixture<TouristePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TouristePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
