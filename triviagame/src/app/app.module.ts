import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TeamScoresComponent } from './team-scores/team-scores.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionanswerComponent } from './questionanswer/questionanswer.component';
import { QuestionAnswerService } from './questionanswer/questionanswer.service';

@NgModule({
  declarations: [
    AppComponent,
    TeamScoresComponent,
    QuestionsComponent,
    QuestionanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxAudioPlayerModule
  ],
  providers: [QuestionAnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
