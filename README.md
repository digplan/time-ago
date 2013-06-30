timeago
=======

Simple timeago function takes same params as 'new Date(...)'

````
timeago(new Date()-1000);  =>  "1 second ago"
timeago(new Date()-2000);  =>  "2 seconds ago"

timeago(1);  =>  "44 years ago"

// takes twitter's created_at date format, in your timezone
timeago('Sun Jun 28 19:44:05 +0000 2013'); => "2 days ago"

````
