import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-par-to-child',
  templateUrl: './from-par-to-child.component.html',
  styleUrls: ['./from-par-to-child.component.css']
})
export class FromParToChildComponent implements OnInit {
  @Input() testItem: {
    name: string,
    desc: string
  }

  constructor() { }

  ngOnInit(): void {
  }

}
