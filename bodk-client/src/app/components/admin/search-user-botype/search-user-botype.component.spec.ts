import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserBotypeComponent } from './search-user-botype.component';

describe('SearchUserBotypeComponent', () => {
  let component: SearchUserBotypeComponent;
  let fixture: ComponentFixture<SearchUserBotypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserBotypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserBotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
