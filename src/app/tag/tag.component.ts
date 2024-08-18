import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  

  constructor() { }
  public tags = [
    {"name":"All"},
    {"name":"Starter"},
    {"name":"Lunch"},
    {"name":"Dinner"},
    {"name":"Tiffin"},
    {"name":"Shakes"},
    {"name":"FastFood"}
  ]

  ngOnInit(): void {  }

}
