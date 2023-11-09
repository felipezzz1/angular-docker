"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "teste@user.com": new User('teste@user.com', 'teste', 'teste123'),
    "teste2@user.com": new User('teste2@user.com', 'teste2', 'teste123'),
    "teste3@user.com": new User('teste3@user.com', 'teste3', 'teste123')
};
