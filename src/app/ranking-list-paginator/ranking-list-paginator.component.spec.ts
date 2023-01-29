import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingListPaginatorComponent } from './ranking-list-paginator.component';

describe('RankingListPaginatorComponent', () => {
  let component: RankingListPaginatorComponent;
  let fixture: ComponentFixture<RankingListPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingListPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
