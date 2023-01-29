import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingListFilterBarComponent } from './ranking-list-filter-bar.component';

describe('RankingListFilterBarComponent', () => {
  let component: RankingListFilterBarComponent;
  let fixture: ComponentFixture<RankingListFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingListFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
