import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface QuestionsItem {
  categories: string,
  ten: number,
  twenty: number,
  thirty: number,
  forty: number,
  fifty: number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: QuestionsItem[] = [
  {categories: 'Movies', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
  {categories: 'TV SHows', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
  {categories: 'Bollywood Music', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
  // {categories: 'Football', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50},
  {categories: 'Books', ten: 10, twenty: 20, thirty: 30, forty: 40, fifty: 50}
];

/**
 * Data source for the Questions view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class QuestionsDataSource extends DataSource<QuestionsItem> {
  data: QuestionsItem[] = EXAMPLE_DATA;
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
  connect(): Observable<QuestionsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
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
  private getPagedData(data: QuestionsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: QuestionsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'categories': return compare(a.categories, b.categories, isAsc);
        case 'ten': return compare(+a.ten, +b.ten, isAsc);
        case 'twenty': return compare(+a.twenty, +b.twenty, isAsc);
        case 'thirty': return compare(+a.thirty, +b.thirty, isAsc);
        case 'forty': return compare(+a.forty, +b.forty, isAsc);
        case 'fifty': return compare(+a.fifty, +b.fifty, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
