import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WatchingLogComponent } from './watching-log/watching-log.component';
import { QaQuestionComponent } from './qa-question/qa-question.component';
import { QaAnswerComponent } from './qa-answer/qa-answer.component';
import { QaViewComponent } from './qa-view/qa-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { UpdateMessageComponent} from './message/update/update.message.component'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    WatchingLogComponent,
    QaQuestionComponent,
    QaAnswerComponent,
    QaViewComponent,
    DashboardComponent,
    MessageComponent,
    UpdateMessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
