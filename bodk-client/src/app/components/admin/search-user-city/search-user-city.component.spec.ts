import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserCityComponent } from './search-user-city.component';

describe('SearchUserCityComponent', () => {
  let component: SearchUserCityComponent;
  let fixture: ComponentFixture<SearchUserCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
