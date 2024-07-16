import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { LoginInterface } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://127.0.0.1:8000/api/login_check";
  constructor(private http:HttpClient) { }
      fetchAll(){
        return this.http.get<LoginInterface[]>(this.url);
      }
  
  }
