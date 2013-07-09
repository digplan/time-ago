timeago
=======

Simple _timeago(...) function takes same params as 'new Date(...)'

````
timeago(new Date()-1000);  =>  "1 second ago"
timeago(new Date()-2000);  =>  "2 seconds ago"

timeago(1);  =>  "44 years ago"

// takes twitter's created_at date format, in your timezone
timeago('Sun Jun 28 19:44:05 +0000 2013'); => "2 days ago"

// and UTC
timeago('1997-07-16T19:20+01:00'); => "16 years ago"

````

Simple today() function shows Day, Month, Date, Yr    
 ==> 'Monday, June 1, 1970'
