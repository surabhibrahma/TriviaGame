import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TeamScoresDataSource, TeamScoresItem } from './team-scores-datasource';

@Component({
  selector: 'app-team-scores',
  templateUrl: './team-scores.component.html',
  styleUrls: ['./team-scores.component.css']
})
export class TeamScoresComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TeamScoresItem>;
  @ViewChild('team1') team1score: ElementRef;
  @ViewChild('team2') team2score: ElementRef;
  @ViewChild('team3') team3score: ElementRef;
  @ViewChild('team4') team4score: ElementRef;
  @ViewChild('team5') team5score: ElementRef;
  dataSource: TeamScoresDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Team1','Team2','Team3', 'Team4', 'Team5'];
  team1 = 0;
  team2 = 0;
  team3 = 0;
  team4 = 0;
  team5 = 0;
  TEAM_DATA: TeamScoresItem[] = [
    {team1: this.team1, team2: this.team2, team3: this.team3, team4: this.team4, team5: this.team5},
  ];



  ngOnInit() {
    this.dataSource = new TeamScoresDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.TEAM_DATA;
  }

  addToTeamOne(x:number){
    this.team1 = this.team1+(+x);
    this.team1score.nativeElement.value = " ";
  }

  addToTeamTwo(x:number){
    this.team2 = this.team2+(+x);
    this.team2score.nativeElement.value = " ";
  }

  addToTeamThree(x:number){
    this.team3 = this.team3+(+x);
    this.team3score.nativeElement.value = " ";
  }

  addToTeamFour(x:number){
    this.team4 = this.team4+(+x);
    this.team4score.nativeElement.value = " ";
  }

  addToTeamFive(x:number){
    this.team5 = this.team5+(+x);
    this.team5score.nativeElement.value = " ";
  }
}
