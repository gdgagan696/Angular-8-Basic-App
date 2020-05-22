import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges{
  @Input()rating: number;
  starWidth:number;
  @Output()ratingClicked: EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.starWidth=this.rating*75/5;
  }

  onClick():void{
    console.log(`the rating ${this.rating} was clicked !`);
    this.ratingClicked.emit(`the rating ${this.rating} was clicked !`);
  }

  ngOnInit() {
    // this.starWidth=this.rating*75/5;
  }

  
  
  
}
