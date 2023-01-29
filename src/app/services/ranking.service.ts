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

  // private url = 'https://localhost:44323/test/rankings3/os/android/date/2023-01-25/country/US';

  public rankings=new BehaviorSubject<any>([]);
  currentrankings=this.rankings.asObservable();

  public singleapp=new BehaviorSubject<any>([]);
  currentsingleapp=this.singleapp.asObservable();

  // setRankings(rankings: any) {
  //   this.rankings = rankings;
  // }


  


   
  constructor(private httpClient: HttpClient) {
        // this.getPosts('US')
        // .subscribe(response => {
        // //  console.log("res",response);
        // //  this.rankings=response;
        //  this.setRankings(response);
        // });
   }

  // setRankings(rankings: any) {
  //   this.rankings.next(rankings);
  // }
  
  // getPosts(){
  //   return this.httpClient.get(this.url);
  // }
  getRankings(os:string,cn:string,date:string){
    const url='https://localhost:44323/test/rankings3/os/'+os+'/date/'+date+'/country/'+cn;
    this.httpClient.get(url).subscribe(data => {
      this.rankings.next(data);
    });
  }

  getSingleApp(os:string,cn:string,id:string){
    const url='https://localhost:44323/test/singleapp2/'+id+'/os/'+os+'/country/'+cn;
    this.httpClient.get(url).subscribe(data => {
      this.singleapp.next(data);
    });
  }
  // private dataSource = {
  //   products: []
  // };
  // private filteredProducts;
  // private currentPage = 1;
  // private pageSize = 96;
  // private products: BehaviorSubject<any>;
  // private readonly globalCountValue: number;
  // private currentCountValue: Subject<number>;
  // private filters: Subject<{}>;
  // get currentProductList() {
  //   return this.products.asObservable();
  // }

  // get globalCount() {
  //   return this.globalCountValue;
  // }

  // get currentCount() {
  //   return this.currentCountValue.asObservable();
  // }

  // get currentAppliedFilters() {
  //   return this.filters.asObservable();
  // }
  // normalizeFilterableAttributes(data) {
  //   return data.map(({custom_attributes: customAttributes, ...rest}) => {
  //     const normalizedAttributes = customAttributes.map((attr) => {
  //       let value = attr.value;
  //       if (attr.attribute_code === 'material') {
  //         value = attr.value.split(',');
  //       }
  //       if (attr.attribute_code === 'size') {
  //         value = [attr.value];
  //       }
  //       return { ...attr, value };
  //     });
  //     return {...rest, custom_attributes: normalizedAttributes };
  //   });
  // }
  // cleanFaultyData(data) {
  //   return data.filter((product) => product.price );
  // }
  // prepareData(data) {
  //   let result = this.cleanFaultyData(data);
  //   result = this.normalizeFilterableAttributes(result);
  //   return result;
  // }
  // constructor() {
  //   const { items } = products;
  //   const filteredItems = this.prepareData(items);
  //   this.dataSource.products = filteredItems;
  //   this.filteredProducts = filteredItems;
  //   this.globalCountValue = filteredItems.length;
  //   this.products = new BehaviorSubject({ data: [], page: [] });
  //   this.filters = new BehaviorSubject({
  //     price: [],
  //     categories: [],
  //     size: [],
  //     material: [],
  //   });
  //   this.currentCountValue = new BehaviorSubject(filteredItems.length);
  // }
  // getCurrentPageItems() {
  //   const pageNumber = this.currentPage - 1;
  //   const { pageSize } = this;
  //   const pageData = this.filteredProducts.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  //   this.products.next({data: this.filteredProducts, page: [...pageData]});
  //   this.currentCountValue.next(this.filteredProducts.length);
  // }
  // updateCurrentPage( page: number = 1 ) {
  //   this.currentPage = page;
  //   this.getCurrentPageItems();
  // }
  // updateFilters(newFilterValue) {
  //   this.currentPage = 1;
  //   // @ts-ignore
  //   const filters = this.filters.getValue();
  //   const updateFilters = { ...filters, ...newFilterValue };
  //   this.filters.next(updateFilters);
  //   this.applyFilters();
  //   this.getCurrentPageItems();
  // }
  // applyFilters() {
  //   // @ts-ignore
  //   const filters = this.filters.getValue();
  //   const isFilteredByPrice = filters.price.length > 0;
  //   const isFilteredByCategories = filters.categories.length > 0;
  //   const isFilteredBySize = filters.size.length > 0;
  //   const isFilteredByMaterial = filters.material.length > 0;
  //   const isFiltered = isFilteredByPrice || isFilteredByCategories || isFilteredBySize || isFilteredByMaterial;
  //   if (!isFiltered) {this.filteredProducts = this.dataSource.products; return; }
  //   const data = this.dataSource.products;
  //   let result = data;
  //   if (filters.price.length > 0) {
  //     let allMin = null;
  //     let allMax = null;
  //     filters.price.map(([min, max]) => {
  //       if (allMin) {
  //         if (min < allMin) {
  //           allMin = min;
  //         }
  //       }else {
  //         allMin = min;
  //       }
  //       if (allMax) {
  //         if (max > allMax) {

  //         }
  //       } else {
  //         allMax = max;
  //       }

  //     });
  //     result = result.filter(({price}) => (price >= allMin && price <= allMax));
  //   }
  //   if (filters.categories.length > 0) {
  //     result = this.filterByAttribute('category_ids', filters.categories, result);
  //   }
  //   if (filters.size.length > 0) {
  //     result = this.filterByAttribute('size', filters.size, result);
  //   }
  //   if (filters.material.length > 0) {
  //     result = this.filterByAttribute('material', filters.material, result);
  //   }
  //   this.filteredProducts = result;
  // }
  // filterByAttribute(name, selected, result) {
  //   return result.filter(({custom_attributes: customAttributes = [] }) => {
  //     const attr = customAttributes.find((item) => item.attribute_code === name);
  //     if(attr) {
  //       const containsSelectedId = attr.value.filter((id) => selected.includes(+id)).length > 0;
  //       return containsSelectedId;
  //     } else {
  //       return false;
  //     }

  //   });
  // }



}
