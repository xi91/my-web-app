import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WatchingLogComponent } from './watching-log/watching-log.component';
import { QaViewComponent } from './qa-view/qa-view.component';
import { QaQuestionComponent } from './qa-question/qa-question.component';
import { QaAnswerComponent } from './qa-answer/qa-answer.component';
import { MessageComponent } from './message/message.component'


import { from } from 'rxjs';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'watching', component: WatchingLogComponent },
  { path: 'qa', component: QaViewComponent },
  { path: 'question', component: QaQuestionComponent },
  { path: 'answer', component: QaAnswerComponent },
  { path: 'message',component:MessageComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
