import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomaineDactiviteComponent } from './add-domaine-dactivite.component';

describe('AddDomaineDactiviteComponent', () => {
  let component: AddDomaineDactiviteComponent;
  let fixture: ComponentFixture<AddDomaineDactiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomaineDactiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDomaineDactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
