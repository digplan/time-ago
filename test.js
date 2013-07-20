require('./timeago.js')();

console.log(
    _timefriendly('1 hour'), _timefriendly('1 hour')===1000*60*60,
    _timefriendly('2 days'), _timefriendly('2 days')===1000*60*60*48,
    _timefriendly('2 weeks'), _timefriendly('2 weeks')===1000*60*60*24*14
);
