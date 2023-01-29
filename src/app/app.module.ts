import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { RankingListItemComponent } from './ranking-list-item/ranking-list-item.component';
import { RankingListPaginatorComponent } from './ranking-list-paginator/ranking-list-paginator.component';
import { RankingListFilterBarComponent } from './ranking-list-filter-bar/ranking-list-filter-bar.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { AppDetailsComponent } from './app-details/app-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TokenInterceptor } from './helpers/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RankingListComponent,
    RankingListItemComponent,
    RankingListPaginatorComponent,
    RankingListFilterBarComponent,
    AppDetailsComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    DatePipe, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
