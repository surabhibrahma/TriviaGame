import { Component, OnInit } from '@angular/core';
import { QuestionAnswerService } from './questionanswer.service';

@Component({
  selector: 'app-questionanswer',
  templateUrl: './questionanswer.component.html',
  styleUrls: ['./questionanswer.component.css']
})
export class QuestionanswerComponent implements OnInit {
  question: string;
  answer: string;
  answerbutton:boolean = true;
  answerrevealed: boolean = false;
  qpts: number;
  revealSoundtrackelement: boolean = false;
  revealSong10: boolean = false;
  revealSong20: boolean = false;
  revealSong30: boolean = false;
  revealSong40: boolean = false;
  revealSong50: boolean = false;
  revealBookCover: boolean = false;
  guessconnection: boolean = false;
  constructor(private qaserv: QuestionAnswerService) { }

  ngOnInit(): void {
    var qa = this.qaserv.getQuestion().split(';');
  
    if(qa.length == 1){
      return;
    }
    if(qa.length == 2){
    this.question = qa[0];
    this.answer = qa[1];
    
    }else{
      this.question = qa[0];
      this.answer = qa[1];

      if(qa[2] == 'Soundtrack'){
      this.revealSoundtrackelement = true;
      }
      if(qa[2] == 'Song10'){
        this.revealSong10 = true;
        }
      if(qa[2] == 'Song20'){
          this.revealSong20 = true;
          }
      if(qa[2] == 'Song30'){
      this.revealSong30 = true;
      }
      if(qa[2] == 'Song40'){
        this.revealSong40 = true;
        }
      if(qa[2] == 'Song50'){
          this.revealSong50 = true;
          }
      if(qa[2] == 'BookCover'){
        this.revealBookCover = true;
      }
      if(qa[2] == 'GuessConnection'){
        this.guessconnection = true;
      }
    }
  }

  onRevelaAnswer(){
    this.answerbutton = false;
    this.answerrevealed = true;
  }

  onClose(){
    this.qaserv.clearQuestion();
    this.qaserv.clearCurrentCategoryAndNumberFlag();
    this.qaserv.resetDisp();
    this.answerbutton = true;
    this.answerrevealed = false;
    this.revealSoundtrackelement = false;
    this.revealSong10 = false;
    this.revealSong20 = false;
    this.revealSong30 = false;
    this.revealSong40 = false;
    this.revealSong50 = false;
    this.revealBookCover = false;
  }

}
