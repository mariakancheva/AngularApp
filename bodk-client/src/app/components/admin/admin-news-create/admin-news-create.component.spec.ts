import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsCreateComponent } from './admin-news-create.component';

describe('AdminNewsCreateComponent', () => {
  let component: AdminNewsCreateComponent;
  let fixture: ComponentFixture<AdminNewsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
