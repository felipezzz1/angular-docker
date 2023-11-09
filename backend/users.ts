export class User{
    constructor(
        public email:string,
        public name: string,
        private password : string
    ){}

    matches(another : User): boolean{
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

export const users: {[key:string]: User} ={
    "teste@user.com" : new User('teste@user.com', 'teste', 'teste123'),
    "teste2@user.com" : new User('teste2@user.com', 'teste2', 'teste123'),
    "teste3@user.com" : new User('teste3@user.com', 'teste3', 'teste123')
}