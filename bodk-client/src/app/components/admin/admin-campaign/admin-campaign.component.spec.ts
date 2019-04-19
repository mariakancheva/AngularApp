import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCampaignComponent } from './admin-campaign.component';

describe('AdminCampainComponent', () => {
  let component: AdminCampaignComponent;
  let fixture: ComponentFixture<AdminCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
