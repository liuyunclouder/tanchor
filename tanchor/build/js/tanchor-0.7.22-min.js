var Tanchor=(function(window,document,undefined){var anchor=document.createElement("a");var isObject=function(o){return typeof o==="object"&&o!==null;};var isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]";};var extend=function(o,o2){var i;for(i in o2){if(o2.hasOwnProperty(i)){o[i]=o2[i];}}return o;};var append=function(o,key,val){if(isObject(o)&&o.hasOwnProperty(key)){if(isArray(o[key])){o[key].push(val);}else{o[key]=[o[key],val];}}else{o[key]=val;}};var stringify=function(key,val){var s="",i,l;if(isArray(val)){for(i=0,l=val.length;i<l;i++){s+="&"+key+"="+val[i];}}else{s+="&"+key+"="+val;}return s;};var update=function(o,key,val){if(isObject(o)){if(val===undefined){delete o[key];}else{o[key]=val;}}};var toObject=function(s){var list=s&&s.split("&")||[],o={},i,l,pair;for(i=0,l=list.length;i<l;i++){pair=list[i].split("=");append(o,pair[0],pair[1]);}return o;};var toString=function(o){var s="",i;for(i in o){if(o.hasOwnProperty(i)){s+=stringify(i,o[i]);}}return s.replace(/^\&/,"");};var cache={};var getUrlVars=function(type){var vars;if(cache.hasOwnProperty(this.href)){vars=cache[this.href];}else{vars={search:toObject(this.search.replace(/^\?/,"")),hash:toObject(this.hash.replace(/^\#/,""))};}cache[this.href]=vars;return type?vars[type]:vars;};var setUrlVars=function(type,map){var vars=getUrlVars.call(this,type),i;for(i in map){if(map.hasOwnProperty(i)){update(vars,i,map[i]);}}return toString(vars);};var methods={getSearchVars:function(){return getUrlVars.call(this,"search");},getHashVars:function(){return getUrlVars.call(this,"hash");},setSearchVars:function(map){this.search=setUrlVars.call(this,"search",map);return this;},setSearchVar:function(key,val){var o={};o[key]=val;return this.setSearchVars(o);},setHashVars:function(map){this.hash=setUrlVars.call(this,"hash",map);return this;},setHashVar:function(key,val){var o={};o[key]=val;return this.setHashVars(o);},delSearchVar:function(key){return this.setSearchVar(key);},delHashVar:function(key){return this.setHashVar(key);}};var Anchor=function(href){this.href=href;};Anchor.prototype=extend(anchor,methods);return function(href){return new Anchor(href);};})(window,document);