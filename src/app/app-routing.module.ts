import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientenBestandComponent} from './clienten-bestand/clienten-bestand.component';
import { RemindersComponent } from './reminders/reminders.component';
import { DashboardComponent }   from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clienten', component: ClientenBestandComponent },
  { path: 'taken', component: RemindersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
