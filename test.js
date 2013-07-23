require('./timeago.js')();

console.log(
	_timeago(new Date()-1000), _timeago(new Date()-1000)==='1 second ago',
	_timeago(new Date()-60000*180), _timeago(new Date()-60000*180)==='3 hours ago',
    new Date(1), _timeago(new Date(1))==='44 years ago'
);
console.log(
    'Today is ' + _today()
);
console.log(
    _timefriendly('1 hour'), _timefriendly('1 hour')===1000*60*60,
    _timefriendly('2 days'), _timefriendly('2 days')===1000*60*60*48,
    _timefriendly('2 weeks'), _timefriendly('2 weeks')===1000*60*60*24*14
);
