var orm = require("../config/orm.js")

var burger = {
    findall: function(){
        orm.selectAll('burgers')
    }
}