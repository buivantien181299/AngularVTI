import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReacticeFormComponent } from './admin-reactice-form.component';

describe('AdminReacticeFormComponent', () => {
  let component: AdminReacticeFormComponent;
  let fixture: ComponentFixture<AdminReacticeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReacticeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReacticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
