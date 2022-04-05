import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpecialiteComponent } from './all-specialite.component';

describe('AllSpecialiteComponent', () => {
  let component: AllSpecialiteComponent;
  let fixture: ComponentFixture<AllSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSpecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
