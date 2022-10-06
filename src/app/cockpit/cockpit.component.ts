import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({ 
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string }>();

  // newName = '';
  newContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputItem: HTMLInputElement) {
    console.log(inputItem.value);
    this.serverCreated.emit({
      serverName: inputItem.value, 
      serverContent: this.newContent
    });
  }

  onAddBlueprint(inputItem: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: inputItem.value,
      blueprintContent: this.newContent
    });
  }

}
