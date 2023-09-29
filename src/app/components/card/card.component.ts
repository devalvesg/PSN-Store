import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameImg:string = ''
  @Input()
  gameLabel:string = ''
  @Input()
  gamePlatform:string = ''
  @Input()
  gamePricing:string = ''
  @Input()
  mouseHover:string = ""

}
