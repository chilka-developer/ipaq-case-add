import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseAddComponent } from './create-case-add.component';

describe('CreateCaseAddComponent', () => {
  let component: CreateCaseAddComponent;
  let fixture: ComponentFixture<CreateCaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCaseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
