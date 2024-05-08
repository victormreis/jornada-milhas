import { Component, Input } from '@angular/core';
import { IPromocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {

  @Input() promocao! : IPromocao 

}
