import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTemplateComponent } from './bootstrap-template.component';

describe('BootstrapTemplateComponent', () => {
  let component: BootstrapTemplateComponent;
  let fixture: ComponentFixture<BootstrapTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
