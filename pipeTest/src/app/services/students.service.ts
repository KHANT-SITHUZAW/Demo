import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  stu1 = new Student('Kurosaki','09789794540','ichigo@gmail.com','Fukushima,Japan');
  stu2= new Student('Luffy','09771970954','monkeyD@mail.com','Hiroshima,Japan'); 
  constructor() { }
  getAll() {
    return [
      this.stu1,
      this.stu2
    ]
  }
}
