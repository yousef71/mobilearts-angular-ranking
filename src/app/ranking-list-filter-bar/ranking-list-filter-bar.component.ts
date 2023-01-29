import {Component, OnInit} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import {RankingService} from '../services/ranking.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-ranking-list-filter-bar',
  templateUrl: './ranking-list-filter-bar.component.html',
  styleUrls: ['./ranking-list-filter-bar.component.sass'],
})
export class RankingListFilterBarComponent implements OnInit {
  public filterStructure;
  os:string="android";
  date:string="2023-01-26";
  selected_country = 'US';
  rankings: any;
  colorAndroid:string = 'red';
  colorIOS:string = 'black';
  stringArray=["AO", "AI", "AL", "AE", "AR", "AM", "AG", "AU", "AT", "AZ", "BE", "BJ", "BF", "BG", "BH", "BS", "BY", "BZ", "BM", "BO", "BR", "BB", "BN", "BT", "BW", "CA", "CH", "CL", "CN", "CG", "CO", "CV", "CR", "KY", "CY", "CZ", "DE", "DM", "DK", "DO", "DZ", "EC", "EG", "ES", "EE", "FI", "FJ", "FR", "FM", "GB", "GH", "GM", "GW", "GR", "GD", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IN", "IE", "IS", "IL", "IT", "JM", "JO", "JP", "KZ", "KE", "KG", "KH", "KN", "KR", "KW", "LA", "LB", "LR", "LC", "LK", "LT", "LU", "LV", "MO", "MD", "MG", "MX", "MK", "ML", "MT", "MN", "MZ", "MR", "MS", "MU", "MW", "MY", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PK", "PA", "PE", "PH", "PW", "PG", "PL", "PT", "PY", "QA", "RO", "RU", "SA", "SN", "SG", "SB", "SL", "SV", "ST", "SR", "SK", "SI", "SE", "SZ", "SC", "TC", "TD", "TH", "TJ", "TM", "TT", "TN", "TR", "TW", "TZ", "UG", "UA", "UY", "US", "UZ", "VC", "VE", "VG", "VN", "YE", "ZA", "ZW"];

  constructor(private service:RankingService,private datePipe: DatePipe) {
    this.service.rankings.subscribe(data => {
      this.rankings = data;
    });
  }
  
  onChange(value: any) {
      this.selected_country = value.target.value;
      console.log("selected",value.target.value);
      this.service.getRankings(this.os,value.target.value,this.date);
  }

  onClickAndroid() {
    this.os="android";
    this.changeColorAndroid();
    this.service.getRankings(this.os,this.selected_country,this.date);
  }

  onClickApple() {
    this.os="itunes";
    this.changeColorIOS();
    this.service.getRankings(this.os,this.selected_country,this.date);
  }

  changeColorAndroid() {
    this.colorAndroid =  'red';
    this.colorIOS =  'black' ;
  }
  changeColorIOS() {
    this.colorAndroid =  'black';
    this.colorIOS =  'red' ;
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    let formattedDate = this.datePipe.transform(event.value, 'yyyy-MM-dd');
    console.log(formattedDate);
    this.date=formattedDate;
    this.service.getRankings(this.os,this.selected_country,this.date);
  }

  ngOnInit() {
    this.service.getRankings('android','US','2023-01-26');
  }

}
