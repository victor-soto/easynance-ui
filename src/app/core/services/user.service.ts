import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): User | undefined {

    return undefined;
  }
}
