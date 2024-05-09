import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable, shareReplay } from 'rxjs';
import { IUnidadeFederativa } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<IUnidadeFederativa[]>;

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<IUnidadeFederativa[]> {
    if(!this.cache$){
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      )
    }

    return this.cache$;
  }

  private requestEstados(): Observable<IUnidadeFederativa[]> {
    return this.http.get<IUnidadeFederativa[]>(`${this.apiUrl}/estados`)
  }
}
