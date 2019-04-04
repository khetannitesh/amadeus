import { Book } from './../../models/interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() selectedAuthor: string;
  @Output() rateUpBtnClick: EventEmitter<any>;
  @Output() rateDownBtnClick: EventEmitter<any>;
  @Input() hideBtns: boolean;
  @Input() showTitleAsText: boolean;

  constructor() {
    this.rateUpBtnClick = new EventEmitter();
    this.rateDownBtnClick = new EventEmitter();
  }

  ngOnInit() {
    
  }

  onRateUpClick() {
    this.rateUpBtnClick.emit(this.book);
  }

  onRateDownClick() {
    this.rateDownBtnClick.emit(this.book);
  }

}
