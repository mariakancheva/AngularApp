import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCampainComponent } from './admin-campain.component';

describe('AdminCampainComponent', () => {
  let component: AdminCampainComponent;
  let fixture: ComponentFixture<AdminCampainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCampainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCampainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
