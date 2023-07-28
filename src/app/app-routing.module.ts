import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValueRequestListComponent} from "./valuerequest-list/value-request-list.component";
import {ValuerequestFormComponent} from "./valuerequest-form/valuerequest-form.component";
import {DeleterequestFormComponent} from "./deleterequest-form/deleterequest-form.component";
import {FetchrequestFormComponent} from "./fetchrequest-form/fetchrequest-form.component";

const routes: Routes = [
  {path: 'requests', component: ValueRequestListComponent},
  {path: 'singlerequest', component: FetchrequestFormComponent},
  {path: 'currencyrate', component: ValuerequestFormComponent},
  {path: 'deleterequest', component: DeleterequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
