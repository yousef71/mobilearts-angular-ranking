import {Component, OnInit} from '@angular/core';
import {RankingService} from './services/ranking.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:  [ RankingService ],
})
export class AppComponent implements OnInit {
  title = 'MobileArts';
  constructor(private service: RankingService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
