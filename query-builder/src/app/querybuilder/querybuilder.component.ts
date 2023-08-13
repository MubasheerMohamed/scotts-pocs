import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { QuerychipComponent } from '../querychip/querychip.component';
import { Observable, delay, map, startWith, of, tap, switchMap } from 'rxjs';

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.scss']
})
export class QuerybuilderComponent implements AfterContentInit {

  @ContentChildren(QuerychipComponent) QuerychipArray: QueryList<QuerychipComponent> | undefined;

  QuerychipArray$: Observable<QuerychipComponent[] | undefined> | undefined;

  hiddenChips$: Observable<QuerychipComponent[]> = of([]);

  ngAfterContentInit(): void {
    this.QuerychipArray$ = this.QuerychipArray?.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(
        map(() => {
          return this.QuerychipArray?.toArray().filter((i) => i.show === true);
        })
      );
    this.hiddenChips$ = of(this.QuerychipArray?.toArray().filter((i) => i.show === false) || []);
  }

  addChip(chip: any) {
    this.hiddenChips$.pipe(
      map(chipArray => chipArray.filter(ch => ch !== chip)),
      tap(updatedHiddenChips => this.hiddenChips$ = of(updatedHiddenChips)),
      switchMap(() => this.QuerychipArray$ || of([]))
    ).subscribe(chipArray => {
      if (chipArray) {
        this.QuerychipArray$ = of([...chipArray, chip]);
      }
    });
  }

  removeChip(chip: any) {
    this.hiddenChips$.pipe(
      map(chipArray => [...chipArray, chip]),
      tap(updatedHiddenChips => this.hiddenChips$ = of(updatedHiddenChips)),
      switchMap(() => this.QuerychipArray$ || of([]))
    ).subscribe(chipArray => {
      this.QuerychipArray$ = of(chipArray?.filter(ch => ch !== chip));
    });
  }
}
