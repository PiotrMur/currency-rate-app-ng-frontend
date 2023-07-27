import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValueRequestListComponent} from "./valuerequest-list/value-request-list.component";
import {ValuerequestFormComponent} from "./valuerequest-form/valuerequest-form.component";

const routes: Routes = [
  {path: 'requests', component: ValueRequestListComponent},
  {path: 'currencyrate', component: ValuerequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
