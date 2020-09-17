import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Model, ModelFactory } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserModelService {
  private model: Model<User>;
  user$: Observable<User>;
 
  constructor(private modelFactory: ModelFactory<User>) {
    this.model = this.modelFactory.create({
      identity: '',
      avatar: '',
      name: '',
      lastLogin: new Date(),
      accounts: [],
      wallets: [],
      notifications: [],
      messages: [],
      jwt: ''

    });
    this.user$ = this.model.data$;
  }
 
  setUser(newUser: User) {
    this.model.set(newUser);
  }
 
  getUser(): User {
    return this.model.get();
  }
}
