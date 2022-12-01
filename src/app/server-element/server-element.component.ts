import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit {
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  // @Input() element: {
  //   type: string,
  //   name: string,
  //   content: string
  // }
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log('Text content',this.header.nativeElement.textContent)
  }

  ngAfterContentInit(): void {
    console.log('Text content of paragraph', this.paragraph.nativeElement.textContent)
  }

}
