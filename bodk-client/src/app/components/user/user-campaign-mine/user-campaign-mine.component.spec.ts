import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampaignMineComponent } from './user-campaign-mine.component';

describe('UserCampaignMineComponent', () => {
  let component: UserCampaignMineComponent;
  let fixture: ComponentFixture<UserCampaignMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCampaignMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampaignMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
