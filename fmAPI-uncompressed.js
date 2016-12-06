(function() {
 $fm = {
  currentVer:"1.4.6",
  cookie: {
   cook: function(name,value) { my_setcookie(name,value); },
   take: function(name) { return my_getcookie(name); },
   eat:  function(name) { document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"; console.log("Yummy cookies!"); }
  },
  forumData: {
   memberData: [_userdata.avatar, _userdata.user_id, _userdata.user_posts, _userdata.user_nb_privmsg, _userdata.point_reputation, _userdata.user_lang],
   member: _userdata.session_logged_in != -1 ? true : false,
   isTopic: window.location.pathname.indexOf("/t") > -1 ? true : false,
   isTopicID: function(topicid) { if(window.location.pathname.indexOf("/t") && window.location.pathname.indexOf(topicid)) { return true; }else{ return false; } },
   isPM: function() { window.location.pathname.indexOf("/privmsg") > -1 ? true : false; },
   isAdmin: _userdata.user_level !== 0 ? true : false,
   isViewUser: document.title.indexOf("Viewing profile") != -1 ? true : false,
   isViewUserID: function(userid) { if(window.location.pathname.indexOf("/u") !== -1 && window.location.pathname.indexOf(userid) !== -1) { return true; }else{ return false; }
  },
  utilities: {
   log: function(text) { console.log(text); },
   warning: function(text) { console.warn(text); },
   error: function(text) { console.error(text); },
   boardInformation: [window.location.hostname]
   }
  }
 };
  $.getJSON("https://hitsuserver.000webhostapp.com/javascripts/fmapi.json", function(data) {
   var datas = [];
   $.each(data, function() {
    if(currentVer != //ongoing) {
       }
     });
  });
}());
