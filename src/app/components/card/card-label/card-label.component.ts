import { Component, Input, SimpleChanges } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent {

  @Input()
  gameLabel:string = ''
  @Input()
  mouseHover:string = ''
 
}
