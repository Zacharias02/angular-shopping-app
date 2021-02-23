import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /* Initialize an event emitter so that the
  *  components can access the value in this event
  */
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(feature: string) {
    /* This is used to emit
    *  values out the component
    */
    this.featureSelected.emit(feature);
  }

}
