// http://avacweb.forumotion.co.uk/t2476-hitsu-s-sandbox#23521
(function() {
var $fm = {
 version:1.2,
 use: true,
 author:'Hitsu', // don't edit this. editing this will consider you as a thief.
 cookie: {
  cook: function(name,value) { my_setcookie(name,value); },
  take: function(name) { return my_getcookie(name); },
  eat: function(name) { document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; console.log('Yummy cookies!');}
 },
  forumData: {
  username: _userdata.username,
  guest: function () { if(_userdata.session_logged_in === 0) { return true; }else{ return false; } },
  member: function() { if(_userdata.session_logged_in == 1) { return true; }else{ return false; } },
  memberAvatar: _userdata.avatar
 },
 utilities: {
  log: function(text,person) { if(arguments[1].value > 0) { console.log(text, + " by" + person); }else{ console.log(text); }
  }
 }
};
// don't remove the lines below, removing it might consider you as a thief
if($fm.use === false) { var $fm=false; }
if($fm.version < 1.2) { var $fm=false; console.log('Please update to 1.2 first.'); }
if($fm.author != 'Hitsu') { document.innerHTML = "The original author of fmAPI was Hitsu. Don't steal from her."; } // and yes, I'm female lol
})();
