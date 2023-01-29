import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDetailsComponent } from './app-details/app-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RankingListComponent} from './ranking-list/ranking-list.component';
const routes: Routes = [
  {path: '', redirectTo: 'page/1', pathMatch: 'full' },
  {path: 'page/:id', component: RankingListComponent},
  {path: 'detail/:id', component: AppDetailsComponent},
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
