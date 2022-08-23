export class Student {
  name!: string;
   phone!: string;
   email!: string;
   address!: string;
  constructor(newName:string,newPhone:string,newEmail:string,newAddress:string) {
    
    this.name = newName;
    this.phone = newPhone;
    this.email = newEmail;
    this.address = newAddress;
  }
}
