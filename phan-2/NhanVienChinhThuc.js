let NhanVien = require("./NhanVien")

class NhanVienChinhThuc extends NhanVien{

    constructor(name, id){
        super(name, id);
    }

    signContract(){
        console.log(this.name + " Can di den phong HR ky hdld");
    }
}

module.exports = NhanVienChinhThuc;