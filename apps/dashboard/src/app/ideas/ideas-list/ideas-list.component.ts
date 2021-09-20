import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Idea } from '@playground/api-interfaces';

@Component({
  selector: 'playground-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss'],
})
export class IdeasListComponent {
  @Input() ideas: Idea[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
