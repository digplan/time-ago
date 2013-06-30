function timeago(nd){
    var second = 1000, minute = second*60, hour = minute*60, day = hour*24, week = day*7, month = day*30, 
    year = month*12, r = Math.round, pl = function(v, n){ return n + ' ' + v + (n>1 ? 's':'') + ' ago'};
    var ts = new Date().getTime() - new Date(nd).getTime();
    if(ts < second) return ts + ' ms ago';
    if(ts > second && ts < minute) return pl('second', r(ts/second));
    if(ts > minute && ts < hour) return pl('minute', r(ts/minute));
    if(ts > hour && ts < day) return pl('hour', r(ts/hour));
    if(ts > day && ts < week) return pl('day', r(ts/day));
    if(ts > week && ts < month) return pl('week', r(ts/week));
    if(ts > month && ts < year) return pl('month', r(ts/month));
    return pl('year', r(ts/year));
}
