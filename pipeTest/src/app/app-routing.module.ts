import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditComponent } from './view/student-edit/student-edit.component';
import { StudentListComponent } from './view/student-list/student-list.component';

const routes: Routes = [
  { path: 'list', component: StudentListComponent},
  { path: 'edit', component: StudentEditComponent },
  //{ path:'',pathMatch:'full',redirectTo:'/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
