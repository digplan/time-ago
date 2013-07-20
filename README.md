timeago
=======

Simple _timeago(...) function takes same params as 'new Date(...)'

````
_timeago(new Date()-1000);  =>  "1 second ago"
_timeago(new Date()-2000);  =>  "2 seconds ago"

_timeago(1);  =>  "44 years ago"

// takes twitter's created_at date format, in your timezone
_timeago('Sun Jun 28 19:44:05 +0000 2013'); => "2 days ago"

// and UTC
_timeago('1997-07-16T19:20+01:00'); => "16 years ago"

````

_today() function shows Day, Month, Date, Yr    
 ==> 'Monday, June 1, 1970'    
    
_timefriendly('1 hour')  // convert to ms: seconds, minutes, hours, days, weeks, months, years 
 ==> 3600000