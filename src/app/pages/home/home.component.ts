import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Observable } from 'rxjs';
import { IPromocao } from './../../core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes: IPromocao[]  = []

  constructor(
    private promocaoService: PromocaoService
  ) {}

  ngOnInit(): void {
    this.listarPromocoes()
  }

  listarPromocoes(){
    this.promocaoService.listarPromocoes().subscribe((response) => {
      this.promocoes = response
      console.log(this.promocoes)
    })
  }




}
