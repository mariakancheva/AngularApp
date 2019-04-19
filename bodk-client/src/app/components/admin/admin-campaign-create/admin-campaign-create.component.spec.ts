import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCampaignCreateComponent } from './admin-campaign-create.component';

describe('AdminCampainCreateComponent', () => {
  let component: AdminCampaignCreateComponent;
  let fixture: ComponentFixture<AdminCampaignCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCampaignCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCampaignCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
