import { Component, Input, OnInit } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.sass'],
})
export class RankingListComponent implements OnInit {
  rankings :any;
  
  constructor(private service:RankingService,private router: Router) {
    this.service.rankings.subscribe(data => {
      this.rankings = data;
    });
  }
  
  ngOnInit() {
    this.service.getRankings('android','US','2023-01-26');
  }

  goToDetail(product){
    console.log('clicked',product.app_id);
    this.router.navigate(['/detail', product.app_id]);
  }
}
