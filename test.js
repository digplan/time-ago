
var ta = (typeof module !== 'undefined' && module.exports) ?
		require('./timeago.js')() :	timeago();


console.log(
	ta.ago(new Date()-1000), ta.ago(new Date()-1000)==='1 second ago',
	ta.ago(new Date()-60000*180), ta.ago(new Date()-60000*180)==='3 hours ago',
    new Date(1), ta.ago(new Date(1)), ta.ago(new Date(1))==='45 years ago'
);

console.log(
    'Today is ' + ta.today()
);

console.log(
    ta.timefriendly('1 hour'), ta.timefriendly('1 hour')===1000*60*60,
    ta.timefriendly('2 days'), ta.timefriendly('2 days')===1000*60*60*48,
    ta.timefriendly('2 weeks'), ta.timefriendly('2 weeks')===1000*60*60*24*14
);

var i = 0, text = '';
while(i++ < 600) text += 'text ';
console.log(text.length, 'chars, min to read', ta.mintoread(text));
