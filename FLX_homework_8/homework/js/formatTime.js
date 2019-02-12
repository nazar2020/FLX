function formatTime(n){
 let day = Math.floor(n/1440);
 let hour = Math.floor((n%1440)/60);
 let minute = Math.floor((n%1440)%60);
 return day + " day(s) " + hour + " hour(s) " + minute + " minute(s)";
}
formatTime(120);
formatTime(59);
formatTime(3601);