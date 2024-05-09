import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup

  constructor() { 
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      dataIda: new FormControl(''),
      dataVolta: new FormControl(''),
      destino: new FormControl(''),
      origem: new FormControl(''),
      qtdPassageiros: new FormControl(1),
    })
  }
}
