(function() {
 $fm = {
  version:"1.4.4",
  author:"Hitsu",
  cookie: {
   cook: function(name,value) { my_setcookie(name,value); },
   take: function(name) { return my_getcookie(name); },
   eat:  function(name) { document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"; console.log("Yummy cookies!"); }
  },
  forumData: {
   username: _userdata.username,
   member: function() { if(_userdata.session_logged_in) { return true; }else{ return false; } },
   memberAvatar: _userdata.avatar,
   isTopic: function() { if(window.location.pathname.indexOf("/t") > -1) { return true; }else{ return false; } },
   isTopicID: function(topicid) { if(window.location.pathname.indexOf("/t") && window.location.pathname.indexOf(topicid)) { return true; }else{ return false; } },
   isPM: function() { if(window.location.pathname.indexOf("/privmsg")) { return true; }else{ return false; } },
   memberID: _userdata.user_id,
   isAdmin: function() { if(_userdata.user_level) { return true; }else{ return false; } },
   memberPosts: _userdata.user_posts,
   memberPM: _userdata.user_nb_privmsg,
   memberRep: _userdata.point_reputation,
   memberLang: _userdata.user_lang
  },
  utilities: {
   log: function(text) { console.log(text); },
   warning: function(text) { console.warn(text); },
   boardInformation: {
     boardURL: window.location.hostname
   }
  }
 };
  if($fm.version != "1.4.4") { $fm = false; console.log("Please update to 1.4.4 first."); }
  if($fm.author != "Hitsu") { document.innerHTML = "The original author of fmAPI was Hitsu. Don't steal from her."; }
}());
