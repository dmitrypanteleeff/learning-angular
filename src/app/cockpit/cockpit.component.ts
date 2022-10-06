import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({ 
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // newName = '';
  // newContent = '';



  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputItem: HTMLInputElement) {
    //console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: inputItem.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(inputItem: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: inputItem.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
