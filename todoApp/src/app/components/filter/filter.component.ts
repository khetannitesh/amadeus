import { FilterActions } from './../../../store/actions/filter.actions';
import { AppState } from './../../../store/interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() currentFilter: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  setFilter(filter) {
    this.store.dispatch({
      type: FilterActions.SET_FILTER,
      payload: filter
    });
  }

}
