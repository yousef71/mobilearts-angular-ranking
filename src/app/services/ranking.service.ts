import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {filter} from 'rxjs/operators';
import {debug} from 'util';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public rankings=new BehaviorSubject<any>([]);
  currentrankings=this.rankings.asObservable();

  public singleapp=new BehaviorSubject<any>([]);
  currentsingleapp=this.singleapp.asObservable();
   
  constructor(private httpClient: HttpClient) {

   }

  getRankings(os:string,cn:string,date:string){
    const url='https://localhost:44323/mobilearts/rankings/os/'+os+'/date/'+date+'/country/'+cn;
    this.httpClient.get(url).subscribe(data => {
      this.rankings.next(data);
    });
  }

  getSingleApp(os:string,cn:string,id:string){
    const url='https://localhost:44323/mobilearts/singleapp/'+id+'/os/'+os+'/country/'+cn;
    this.httpClient.get(url).subscribe(data => {
      this.singleapp.next(data);
    });
  }
  
}
