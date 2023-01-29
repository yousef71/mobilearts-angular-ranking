import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingListItemComponent } from './ranking-list-item.component';

describe('RankingListItemComponent', () => {
  let component: RankingListItemComponent;
  let fixture: ComponentFixture<RankingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
