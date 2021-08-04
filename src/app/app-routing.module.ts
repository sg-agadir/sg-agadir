import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "../app/app.component";
import { VerifyComponent } from './verify/verify.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', component: SearchComponent },
  {path:'veify', component: VerifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
