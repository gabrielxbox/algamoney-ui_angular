import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriaServiceService {


categoriaUrl =  'http://localhost:8080/categoria';

  constructor(private http: HttpClient) { }

listaTodos(): Promise<any>{
  const params = new URLSearchParams();
  const headers = new HttpHeaders();

  headers.append('Authorization','BASIC Z2FicmllbHNfMTZAaG90bWFpbC5jb206YWRtaW4==');

  return this.http.get(this.categoriaUrl,
    {headers})
  .toPromise()
  .then(response => responseJson = response.json().content);
}

}
