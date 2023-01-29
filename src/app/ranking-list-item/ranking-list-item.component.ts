import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ranking-list-item',
  templateUrl: './ranking-list-item.component.html',
  styleUrls: ['./ranking-list-item.component.sass'],
})
export class RankingListItemComponent implements OnInit {

  @Input() product;
  constructor() {

  }

  ngOnInit() {
  }

}
