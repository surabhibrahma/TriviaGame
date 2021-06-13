import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TeamScoresItem {
  team1: number;
  team2: number;
  team3: number;
  team4: number;
  team5: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TeamScoresItem[] = [
  {team1: 10, team2: 10, team3: 10, team4: 10, team5: 10},
];

/**
 * Data source for the TeamScores view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TeamScoresDataSource extends DataSource<TeamScoresItem> {
  data: TeamScoresItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TeamScoresItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      //this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TeamScoresItem[]) {
    // const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
     return data.splice(0, 0);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TeamScoresItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'team1': return compare(a.team1, b.team1, isAsc);
        case 'team2': return compare(+a.team2, +b.team2, isAsc);
        case 'team3': return compare(+a.team3, +b.team3, isAsc);
        case 'team4': return compare(+a.team4, +b.team4, isAsc);
        case 'team5': return compare(+a.team5, +b.team5, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
