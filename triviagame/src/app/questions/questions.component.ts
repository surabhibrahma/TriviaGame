import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { QuestionAnswerService } from '../questionanswer/questionanswer.service';
import { QuestionsDataSource, QuestionsItem } from './questions-datasource';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<QuestionsItem>;
  dataSource;
  disptick = false;

  constructor(public qaserv: QuestionAnswerService){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['categories', 'ten', 'twenty', 'thirty', 'forty', 'fifty'];
  questionOnDisplay: string="hello";
  toggletable: boolean = false;
  catpoint = "enable";

  ngOnInit() {
    this.dataSource = [
      {categories: 'Movies', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
      {categories: 'TV Shows', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
      {categories: 'Bollywood Music', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
      {categories: 'Books', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
      {categories: 'Science', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
    ];
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  settoggle(categories,points){
    this.qaserv.displayQuestion(categories,points);
  }

  clickedOn(points, categories, row){
    this.qaserv.setCurrentCategory(categories,points);
    this.settoggle(categories,points);
    switch(points){
      case 10: 
      if(this.qaserv.dispQ){
        row.ten = 'DONE';
      }
        break;
      case 20: 
      if(this.qaserv.dispQ){
        row.twenty = 'DONE';
      }
        break;
      case 30: 
      if(this.qaserv.dispQ){
        row.thirty = 'DONE';
      }
        break;
      case 40:
        if(this.qaserv.dispQ){
          row.forty = 'DONE';
        }
        break;
      case 50:
        if(this.qaserv.dispQ){
          row.fifty = 'DONE';
        }
        break;

    }
  }
}
