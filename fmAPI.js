var $fm = {
 version:0.1, // the version of the code
 use: false, // if the value was TRUE, then you can use the code. if the value was FALSE, then you can't use the code. this would also prevent from using it when it's false
 author:'Hitsu', // obviously. it was me who'd make the code
 cookie: {
  cook: function(name,value) { my_setcookie(name,value); },
  take: function(name) { return my_getcookie(name); },
  eat: function(name) { document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; console.log('Yummy cookies!');}
 },
 // on construction.
};
if($fm.use === false) { var $fm=false; }
if($fm.version < 0.1) { var $fm=false; console.log('Please update to 0.1 first.'); }
if($fm.author != 'Hitsu') { alert('This code was originally written by Hitsu. Do not reclaim it as ' + $fm.author + ' !'); }