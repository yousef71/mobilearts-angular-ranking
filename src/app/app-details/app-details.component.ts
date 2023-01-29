import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.sass']
})
export class AppDetailsComponent implements OnInit {
  id: string;
  singleapp:any;
  currentRate:any;

  constructor(private route: ActivatedRoute,private service:RankingService) {
    this.service.singleapp.subscribe(data => {
      this.singleapp = data[0];
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.service.getSingleApp('android','US',this.id);

  }

}
