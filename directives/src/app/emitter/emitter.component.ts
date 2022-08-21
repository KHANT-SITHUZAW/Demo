import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
