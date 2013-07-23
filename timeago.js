module.exports = function(){
    
    var o = { second: 1000, minute: 60*1000, hour: 60*1000*60, day: 24*60*1000*60, week: 7*24*60*1000*60,
			month: 30*24*60*1000*60, year: 365*24*60*1000*60 };

    global._timeago = function(nd){
       	var r = Math.round, pl = function(v, n){ return n + ' ' + v + (n>1 ? 's':'') + ' ago'},
       		ts = new Date().getTime() - new Date(nd).getTime(), ii;
    	for(i in o){
    		if(r(ts) <= o[i]) return pl(ii||'m', r(ts/(o[ii]||1)))
    		ii = i;
    	}
    	return pl(i, r(ts/o[i]));
    }
    
    global._today = function(){
        var now = new Date();
        var Weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var Month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        return Weekday[now.getDay()]+", "+Month[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear();
    }

    global._timefriendly = function(s){
        var t = s.match(/(\d).([a-z]*?)s?$/);
        return t[1] * eval(o[t[2]]);
    }
}
