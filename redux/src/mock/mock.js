/**
 * Created by 57467 on 2017/3/15.
 */
var discover = require('./m-discover.json')
var willshow1=require ("./willshow1.json")
var willshow2=require ("./willshow2.json")
var willshow3=require ("./willshow3.json")
module.exports = function () {
    return{
        'discover.php':discover,
        "willshow1.php":willshow1,
		"willshow2.php":willshow2,
		"willshow3.php":willshow3
    }
}
