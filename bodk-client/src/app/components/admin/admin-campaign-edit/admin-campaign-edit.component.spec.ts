import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCampaignEditComponent } from './admin-campaign-edit.component';

describe('AdminCampaignEditComponent', () => {
  let component: AdminCampaignEditComponent;
  let fixture: ComponentFixture<AdminCampaignEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCampaignEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCampaignEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
