$(document).ready(function(){
 /*     
    *   PAGE | Twitter 
    *   
    *   CONFIGURE FIRST
    *
    *   Pull latest tweets from user.
    *   Configuration: /plugins/twitter/index.php*/
    
    $('.twitterfeed').tweet({
        modpath: '../../plugins/twitter/',
        username: 'eculic17',
        count: 5
    });
    
    
});
