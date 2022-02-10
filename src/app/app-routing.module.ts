import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  { path: "", redirectTo:"/registration", pathMatch:"full"},
  { path: "registration", component: RegistrationFormComponent},
  { path: "update/:index", component: UpdateFormComponent},
  { path: "details", component: DetailsComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
