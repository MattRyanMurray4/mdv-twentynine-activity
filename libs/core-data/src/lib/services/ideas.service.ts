import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea } from '@playground/api-interfaces';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  private model = 'activity';
  constructor(private http: HttpClient) {}

  all(): Observable<any> {
    return this.http.get<Idea>(this.getApi());
  }

  find(id: string): Observable<Idea> {
    return this.http.get<Idea>(this.getApiById(id));
  }

  private getApi() {
    return `${environment.apiUrl}${this.model}`;
  }
  private getApiById(id: string) {
    return `${this.getApi()}/${id}`;
  }
}
