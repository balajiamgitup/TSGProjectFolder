import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'angpra';
greetUser(){

  return "Hello"+this.title;
}

}
