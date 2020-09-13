import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailsComponent } from './components/mails/mails.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'mail-component', component: MailsComponent },
  { path: '', redirectTo: '/mail-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
