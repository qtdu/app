
  var root;
  var thietbi;
  var test = "w3s";
  var DefaultPage = "Express1";  //"Group";
  var batdau = true;

  var lengthOtp = 2;
  var rand = 0;
  var page = "Group";
  var LinkImage = "http://placekitten.com/400/200";
  var W = window.innerWidth;
  var H = window.innerHeight;

  window.addEventListener('DOMContentLoaded', (event) => { QT001(); });

  function QT001(){
    window.EID = function(NameID) {return document.getElementById(NameID);}
    window.ECN = function (target,NameClass) {
      var ele = EID(target) || target || document;
      return ele.getElementsByClassName(NameClass);
    }
    window.getEle = function(ele, arr) {
        for(var i=0; i<arr.length; i++){
          if (arr[i] == -1) { var ele = ele.parentElement; continue; }
          var ele = ele.children[arr[i]];
        }
        return ele;
    }
    window.childOf = function(c, p) { 
      while((c=c.parentNode)&&c!==p); return !!c; 
    }
    //iframe.contentWindow.postMessage(message, "*"); //gửi message từ parent tới iframe
    //
    window.addEventListener('message', function(event) {
      //alert("Message received from the parent: " + event.data); // Message received from parent
	//if (typeof window['xulyTinIframe'] != 'undefined' && window['xulyTinIframe'] != null) {
    	//	window['xulyTinIframe'](event.data);
	//}
	    try{ window['xulyTinIframe'](event.data); }
	    catch(err){}

    });

    //window.parent.postMessage(message, "*"); //gửi message từ iframe tới parent

		//clearInterval(myInterval);
		EID('HuongDan').style.display = 'none';

		function Qtimthietbi() {
			const toMatch = [
					/Android/i,
					/webOS/i,
					/iPhone/i,
					/iPad/i,
					/iPod/i,
					/BlackBerry/i,
					/Windows Phone/i
					];
			thietbi = toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem); });
			root = document.querySelector(':root');
		}
		Qtimthietbi();

    window.window['QGetThoiGian'] = function(num){
      var tzoffset = (new Date()).getTimezoneOffset() * 60000;
      var localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
      return localISOTime.replace(/[^0-9]/g, "").slice(0, num);
      //return window['Func_RemoveCharacter']('[^0-9]','g',localISOTime).slice(0, num);
    }

    

		function Qresize() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			var w = window.innerWidth;
			var h = window.innerHeight;

			if (thietbi == false) {
				root.style.setProperty('--heso-cotcontent',3);
				root.style.setProperty('--thietbi',1);
				if(w>401) {
					root.style.setProperty('--size-standard','100px');
				} else {
					root.style.setProperty('--size-standard','25vw');
				}
				if (w>400 && w<720){
					root.style.setProperty('--display-ngang','flex');
					root.style.setProperty('--display-doc','none');
					var nd = '<p>Máy tính có khung làm việc quá nhỏ để hiện thị đầy dủ nội dung.<br><br>Kích thước tối thiểu là:<br>rộng: 720px - cao: 480px</p>'
				} 
				if (w<240){
					root.style.setProperty('--display-ngang','flex');
					root.style.setProperty('--display-doc','none');
					var nd = '<p>Thiết bị có quá nhỏ quá nhỏ để hiện thị đầy dủ nội dung.<br><br>Kích thước tối thiểu là:<br>rộng: 240px - 400px<br>cao: 480px - 800px</p>';
				} 
				if (w>=240 && w<=400){
					if(h>=1.5*w) {
						root.style.setProperty('--display-ngang','none');
						root.style.setProperty('--display-doc','block');
						var nd='';
					} else {
						root.style.setProperty('--display-ngang','flex');
						root.style.setProperty('--display-doc','none');
						var nd = '<p>Thiết bị có quá nhỏ quá nhỏ để hiện thị đầy dủ nội dung.<br><br>Kích thước tối thiểu là:<br>rộng: 240px - 400px<br>cao: 480px - 800px</p>';
					}
					root.style.setProperty('--heso-cotcontent',1);
					root.style.setProperty('--display-content1','block');
					root.style.setProperty('--display-content2','none');
					root.style.setProperty('--display-content3','none');
				}
				if(w>=720){
					root.style.setProperty('--display-ngang','none');
					root.style.setProperty('--display-doc','block');
					root.style.setProperty('--display-content1','block');
					root.style.setProperty('--display-content2','block');
					root.style.setProperty('--display-content3','block');
				}
				EID('ngang').innerHTML = nd;

			} else {

				root.style.setProperty('--heso-cotcontent',1);
				root.style.setProperty('--display-content1','block');
				root.style.setProperty('--display-content2','none');
				root.style.setProperty('--display-content3','none');
				if(w >= 2*h) {
					root.style.setProperty('--display-ngang','flex');
					root.style.setProperty('--display-doc','none');
					var nd = '<p>Chương trình không được thiết kế để hoạt động theo chiều ngang của thiết bị</p>';

				} else {
					root.style.setProperty('--thietbi','2');
					root.style.setProperty('--display-ngang','none');
					root.style.setProperty('--display-doc','block');
					root.style.setProperty('--size-standard','200px');

					var nd = '';
				}
				EID('ngang').innerHTML = nd;
			}
		}
	  
	  	window.CaptchaLoad = false;
		window.charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";

		window.window['encrypt'] = function(key, value) {
			var result="";
			for(i=0;i<value.length;++i) {
				result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
			}
			return result;
		}
		window.window['decrypt'] = function(key, value) {
			var result="";
			for(i=0;i<value.length;++i) {
				result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
			}
			return result;
		}

		window.window['base64_encode'] = function(s) {      
			return btoa(unescape(encodeURIComponent(s)));
		}
		window.window['base64_decode'] = function(s) {      
			return decodeURIComponent(escape(atob(s)));
		}

		
	  
	  	var trangchinh = false;
	  	window.window['passLogin'] = false;

		function kiemtra(){
			let queryString = window.EID('Iframe_main').src;
			//let queryString = window.location.search;
			let urlParams = new URLSearchParams(queryString);
			let co = urlParams.get('co');
			let pr = urlParams.get('pr');
			let tk = urlParams.get('token');
			let pathname = window.location.pathname;
			let hostname = window.location.hostname;
			if(hostname + pathname != 'qtdu.github.io/app/') return;

			alert(co + "_" + pr)
      if(co == null && pr == null) {
        
				trangchinh = true;
      			}
			

		      if(tk != null) {
			tk = window['base64_decode'](tk);
			tk = window['decrypt']('Q.t.2011.0512',tk);
			var arrtk = tk.split(']QQQ[');
			var t = 1*window['QGetThoiGian'](17);
			try{
				      if(t - 1*arrtk[0] < 60000) { 
			    window['passLogin'] = true;
			  }else {
			    return; 
			  }
			}catch(err) {return;}

		      }

		}
		kiemtra();

		

/*
	  window.window['QWrite2Clipboard'] = function(ele) {
	      async function Write2Clipboard(ele) {
		if (!navigator.clipboard) { return }
		try{ var text = ele.innerText;
		  } catch(err) {var text = ele.value;}
		try { await navigator.clipboard.writeText(text);
		} catch (err) { console.error('Failed to copy!', err) }
	    }
	      Write2Clipboard(ele);
	  }
	  
	  window.window['QRead2Clipboard'] = function(ele) {
	      async function Read2Clipboard(ele) {
		if (!navigator.clipboard) { return }
		try {
		    var text = await navigator.clipboard.readText();
		      try{ ele.value = text;
		    } catch(err) { ele.innerHTML = text; }
		} catch (err) { console.error('Failed to copy!', err) }
	      }
	      Read2Clipboard(ele);
	  }
		window['QRead2Clipboard'](EID('temp'));
	  
*/	  
	  window.window['NenGiaiNenChuoi'] = function(loai, str) {
		  !function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).lzbase62=t()}}(function(){return function i(a,s,o){function l(n,t){if(!s[n]){if(!a[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(E)return E(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var _=s[n]={exports:{}};a[n][0].call(_.exports,function(t){return l(a[n][1][t]||t)},_,_.exports,i,a,s,o)}return s[n].exports}for(var E="function"==typeof require&&require,t=0;t<o.length;t++)l(o[t]);return l}({1:[function(t,n,e){n.exports={version:"2.0.0"}},{}],2:[function(t,n,e){var A=t("./config"),h=t("./util");function r(t){this._init(t)}r.prototype={_init:function(t){t=t||{},this._data=null,this._table=null,this._result=null,this._onDataCallback=t.onData,this._onEndCallback=t.onEnd},_createTable:function(){for(var t=h.createBuffer(8,A.TABLE_LENGTH),n=0;n<A.TABLE_LENGTH;n++)t[n]=A.BASE62TABLE.charCodeAt(n);return t},_onData:function(t,n){var e=h.bufferToString_fast(t,n);this._onDataCallback?this._onDataCallback(e):this._result+=e},_onEnd:function(){this._onEndCallback&&this._onEndCallback(),this._data=this._table=null},_search:function(){var t=2,n=this._data,e=this._offset,r=A.BUFFER_MAX;if(this._dataLen-e<r&&(r=this._dataLen-e),r<t)return!1;var _,i,a,s,o,l=e-A.WINDOW_BUFFER_MAX,E=n.substring(l,e+r),u=e+t-3-l;do{if(2===t){if(i=n.charAt(e)+n.charAt(e+1),!~(a=E.indexOf(i))||u<a)break}else 3===t?i+=n.charAt(e+2):i=n.substr(e,t);if(!~(s=A.STRING_LASTINDEXOF_BUG?n.substring(l,e+t-1).lastIndexOf(i):E.lastIndexOf(i,u)))break;_=l+(o=s);do{if(n.charCodeAt(e+t)!==n.charCodeAt(_+t))break}while(++t<r);if(a===s){t++;break}}while(++t<r);return 2!==t&&(this._index=A.WINDOW_BUFFER_MAX-o,this._length=t-1,!0)},compress:function(t){if(null==t||0===t.length)return"";var n,e=this._createTable(),r=h.createWindow(),_=h.createBuffer(8,A.COMPRESS_CHUNK_SIZE),i=0;this._result="",this._offset=r.length,this._data=r+t,this._dataLen=this._data.length,r=t=null;for(var a,s,o,l,E,u=-1,f=-1;this._offset<this._dataLen;)this._search()?(o=this._index<A.BUFFER_MAX?(s=this._index,0):(s=this._index%A.BUFFER_MAX,(this._index-s)/A.BUFFER_MAX),2===this._length?(_[i++]=e[o+A.COMPRESS_FIXED_START],_[i++]=e[s]):(_[i++]=e[o+A.COMPRESS_START],_[i++]=e[s],_[i++]=e[this._length]),this._offset+=this._length,~f&&(f=-1)):(a=this._data.charCodeAt(this._offset++))<A.LATIN_BUFFER_MAX?f===(u=a<A.UNICODE_CHAR_MAX?(s=a,o=0,A.LATIN_INDEX):(o=(a-(s=a%A.UNICODE_CHAR_MAX))/A.UNICODE_CHAR_MAX)+A.LATIN_INDEX)?_[i++]=e[s]:(_[i++]=e[u-A.LATIN_INDEX_START],_[i++]=e[s],f=u):(u=a<A.UNICODE_BUFFER_MAX?(s=a,o=0,A.UNICODE_INDEX):(o=(a-(s=a%A.UNICODE_BUFFER_MAX))/A.UNICODE_BUFFER_MAX)+A.UNICODE_INDEX,E=s<A.UNICODE_CHAR_MAX?(l=s,0):(s-(l=s%A.UNICODE_CHAR_MAX))/A.UNICODE_CHAR_MAX,f===u?(_[i++]=e[l],_[i++]=e[E]):(_[i++]=e[A.CHAR_START],_[i++]=e[u-A.TABLE_LENGTH],_[i++]=e[l],_[i++]=e[E],f=u)),i>=A.COMPRESS_CHUNK_MAX&&(this._onData(_,i),i=0);return 0<i&&this._onData(_,i),this._onEnd(),n=this._result,(this._result=null)===n?"":n}},n.exports=r},{"./config":3,"./util":6}],3:[function(t,n,e){var r=e.HAS_TYPED="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array,_=!1,i=!1;try{"a"===String.fromCharCode.apply(null,[97])&&(_=!0)}catch(t){}if(r)try{"a"===String.fromCharCode.apply(null,new Uint8Array([97]))&&(i=!0)}catch(t){}e.CAN_CHARCODE_APPLY=_,e.CAN_CHARCODE_APPLY_TYPED=i;var a=e.APPLY_BUFFER_SIZE=65533;e.APPLY_BUFFER_SIZE_OK=null;var s=!1;-1!=="abc\u307b\u3052".lastIndexOf("\u307b\u3052",1)&&(s=!0),e.STRING_LASTINDEXOF_BUG=s;var o=e.BASE62TABLE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=e.TABLE_LENGTH=o.length,E=Math.max(l,62)-Math.min(l,62);e.BUFFER_MAX=l-1;var u=e.WINDOW_MAX=1024;e.WINDOW_BUFFER_MAX=304;var f=e.COMPRESS_CHUNK_SIZE=a;e.COMPRESS_CHUNK_MAX=f-l;var A=e.DECOMPRESS_CHUNK_SIZE=a;e.DECOMPRESS_CHUNK_MAX=A+2*u;e.LATIN_BUFFER_MAX=132;var h=e.UNICODE_CHAR_MAX=40;e.UNICODE_BUFFER_MAX=h*(1+h),e.LATIN_INDEX=l+1,e.LATIN_INDEX_START=20+E,e.UNICODE_INDEX=l+5,e.DECODE_MAX=l-E-19;var c=e.LATIN_DECODE_MAX=7+h,C=e.CHAR_START=1+c,S=e.COMPRESS_START=1+C,D=e.COMPRESS_FIXED_START=5+S;e.COMPRESS_INDEX=5+D},{}],4:[function(t,n,e){var C=t("./config"),S=t("./util");function r(t){this._init(t)}r.prototype={_init:function(t){t=t||{},this._result=null,this._onDataCallback=t.onData,this._onEndCallback=t.onEnd},_createTable:function(){for(var t={},n=0;n<C.TABLE_LENGTH;n++)t[C.BASE62TABLE.charAt(n)]=n;return t},_onData:function(t){var n;if(this._onDataCallback){if(t)n=this._result,this._result=[];else{var e=C.DECOMPRESS_CHUNK_SIZE-C.WINDOW_MAX;n=this._result.slice(C.WINDOW_MAX,C.WINDOW_MAX+e),this._result=this._result.slice(0,C.WINDOW_MAX).concat(this._result.slice(C.WINDOW_MAX+e))}0<n.length&&this._onDataCallback(S.bufferToString_fast(n))}},_onEnd:function(){this._onEndCallback&&this._onEndCallback()},decompress:function(t){if(null==t||0===t.length)return"";this._result=S.stringToArray(S.createWindow());for(var n,e,r,_,i,a,s,o,l,E,u=this._createTable(),f=!1,A=null,h=t.length,c=0;c<h;c++)if(void 0!==(r=u[t.charAt(c)])){if(r<C.DECODE_MAX)i=f?u[t.charAt(++c)]*C.UNICODE_CHAR_MAX+r+C.UNICODE_BUFFER_MAX*A:A*C.UNICODE_CHAR_MAX+r,this._result[this._result.length]=i;else if(r<C.LATIN_DECODE_MAX)A=r-C.DECODE_MAX,f=!1;else if(r===C.CHAR_START)A=(_=u[t.charAt(++c)])-5,f=!0;else if(r<C.COMPRESS_INDEX){if(_=u[t.charAt(++c)],s=r<C.COMPRESS_FIXED_START?(a=(r-C.COMPRESS_START)*C.BUFFER_MAX+_,u[t.charAt(++c)]):(a=(r-C.COMPRESS_FIXED_START)*C.BUFFER_MAX+_,2),(o=this._result.slice(-a)).length>s&&(o.length=s),l=o.length,0<o.length)for(E=0;E<s;)for(e=0;e<l&&(this._result[this._result.length]=o[e],!(++E>=s));e++);A=null}this._result.length>=C.DECOMPRESS_CHUNK_MAX&&this._onData()}return this._result=this._result.slice(C.WINDOW_MAX),this._onData(!0),this._onEnd(),n=S.bufferToString_fast(this._result),this._result=null,n}},n.exports=r},{"./config":3,"./util":6}],5:[function(t,n,e){var r=t("./compressor"),_=t("./decompressor");e.version=t("../package.json").version,e.compress=function(t,n){return new r(n).compress(t)},e.decompress=function(t,n){return new _(n).decompress(t)}},{"../package.json":1,"./compressor":2,"./decompressor":4}],6:[function(t,n,e){var i=t("./config"),a=String.fromCharCode;e.createBuffer=function(t,n){if(!i.HAS_TYPED)return new Array(n);switch(t){case 8:return new Uint8Array(n);case 16:return new Uint16Array(n)}};var _=e.truncateBuffer=function(t,n){return t.length===n?t:t.subarray?t.subarray(0,n):(t.length=n,t)};e.bufferToString_fast=function(t,n){if(null==n?n=t.length:t=_(t,n),i.CAN_CHARCODE_APPLY&&i.CAN_CHARCODE_APPLY_TYPED){var e=t.length;if(e<i.APPLY_BUFFER_SIZE&&i.APPLY_BUFFER_SIZE_OK)return a.apply(null,t);if(null===i.APPLY_BUFFER_SIZE_OK)try{var r=a.apply(null,t);return e>i.APPLY_BUFFER_SIZE&&(i.APPLY_BUFFER_SIZE_OK=!0),r}catch(t){i.APPLY_BUFFER_SIZE_OK=!1}}return s(t)};var s=e.bufferToString_chunked=function(t){for(var n,e="",r=t.length,_=0;_<r;){if(n=t.subarray?t.subarray(_,_+i.APPLY_BUFFER_SIZE):t.slice(_,_+i.APPLY_BUFFER_SIZE),_+=i.APPLY_BUFFER_SIZE,!i.APPLY_BUFFER_SIZE_OK){if(null===i.APPLY_BUFFER_SIZE_OK)try{e+=a.apply(null,n),n.length>i.APPLY_BUFFER_SIZE&&(i.APPLY_BUFFER_SIZE_OK=!0);continue}catch(t){i.APPLY_BUFFER_SIZE_OK=!1}return o(t)}e+=a.apply(null,n)}return e},o=e.bufferToString_slow=function(t){for(var n="",e=t.length,r=0;r<e;r++)n+=a(t[r]);return n};e.stringToArray=function(t){for(var n=[],e=t&&t.length,r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},e.createWindow=function(){for(var t=8,n="        ";!(1024&t);)n+=n,t<<=1;return n}},{"./config":3}]},{},[5])(5)});

		  if(loai == 1) { //nén
		    //return LZUTF8.compress(str);
		    return lzbase62.compress(str);
		  }
		  if(loai == 2) { //nén
		    //return LZUTF8.decompress(str);
		    return lzbase62.decompress(str);
		  }
	  }

      

    window.window['NoSleep'] = function() {

      !function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.NoSleep=e():A.NoSleep=e()}(this,(function(){return function(A){var e={};function B(g){if(e[g])return e[g].exports;var o=e[g]={i:g,l:!1,exports:{}};return A[g].call(o.exports,o,o.exports,B),o.l=!0,o.exports}return B.m=A,B.c=e,B.d=function(A,e,g){B.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:g})},B.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},B.t=function(A,e){if(1&e&&(A=B(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var g=Object.create(null);if(B.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var o in A)B.d(g,o,function(e){return A[e]}.bind(null,o));return g},B.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return B.d(e,"a",e),e},B.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},B.p="",B(B.s=0)}([function(A,e,B){"use strict";var g=function(){function A(A,e){for(var B=0;B<e.length;B++){var g=e[B];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(A,g.key,g)}}return function(e,B,g){return B&&A(e.prototype,B),g&&A(e,g),e}}();var o=B(1),E=o.webm,n=o.mp4,C=function(){return"undefined"!=typeof navigator&&parseFloat((""+(/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))<10&&!window.MSStream},Q=function(){return"wakeLock"in navigator},i=function(){function A(){var e=this;if(function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,A),this.enabled=!1,Q()){this._wakeLock=null;var B=function(){null!==e._wakeLock&&"visible"===document.visibilityState&&e.enable()};document.addEventListener("visibilitychange",B),document.addEventListener("fullscreenchange",B)}else C()?this.noSleepTimer=null:(this.noSleepVideo=document.createElement("video"),this.noSleepVideo.setAttribute("title","No Sleep"),this.noSleepVideo.setAttribute("playsinline",""),this._addSourceToVideo(this.noSleepVideo,"webm",E),this._addSourceToVideo(this.noSleepVideo,"mp4",n),this.noSleepVideo.addEventListener("loadedmetadata",(function(){e.noSleepVideo.duration<=1?e.noSleepVideo.setAttribute("loop",""):e.noSleepVideo.addEventListener("timeupdate",(function(){e.noSleepVideo.currentTime>.5&&(e.noSleepVideo.currentTime=Math.random())}))})))}return g(A,[{key:"_addSourceToVideo",value:function(A,e,B){var g=document.createElement("source");g.src=B,g.type="video/"+e,A.appendChild(g)}},{key:"enable",value:function(){var A=this;return Q()?navigator.wakeLock.request("screen").then((function(e){A._wakeLock=e,A.enabled=!0,console.log("Wake Lock active."),A._wakeLock.addEventListener("release",(function(){console.log("Wake Lock released.")}))})).catch((function(e){throw A.enabled=!1,console.error(e.name+", "+e.message),e})):C()?(this.disable(),console.warn("\n        NoSleep enabled for older iOS devices. This can interrupt\n        active or long-running network requests from completing successfully.\n        See https://github.com/richtr/NoSleep.js/issues/15 for more details.\n      "),this.noSleepTimer=window.setInterval((function(){document.hidden||(window.location.href=window.location.href.split("#")[0],window.setTimeout(window.stop,0))}),15e3),this.enabled=!0,Promise.resolve()):this.noSleepVideo.play().then((function(e){return A.enabled=!0,e})).catch((function(e){throw A.enabled=!1,e}))}},{key:"disable",value:function(){Q()?(this._wakeLock&&this._wakeLock.release(),this._wakeLock=null):C()?this.noSleepTimer&&(console.warn("\n          NoSleep now disabled for older iOS devices.\n        "),window.clearInterval(this.noSleepTimer),this.noSleepTimer=null):this.noSleepVideo.pause(),this.enabled=!1}},{key:"isEnabled",get:function(){return this.enabled}}]),A}();A.exports=i},function(A,e,B){"use strict";A.exports={webm:"data:video/webm;base64,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",mp4:"data:video/mp4;base64,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"}}])}));

      //if(x==0) window.noSleep = new NoSleep();

      //if(x==1) noSleep.enable();
      //if(x==2) noSleep.disable();

    }  
    window['NoSleep']();
    

    EID('WaveLockInput').addEventListener('change', function(e) {
          if(e.target.value >= 80) {
            DontSleep.disable();
            
            try{window['OffSleep'](); }
            catch(err) {}
            
          }
        } , false); 



    window.window['QTDU_DB'] = function(NameDB, verDB, NameDBChild, loai, tenHamReturn, arrExp, arrObjDB, id) {
      //loai 1: tạo
      //loại 2: lấy thông tin
      //loại 3: delete id
      //loai 4: delete cả db
      // NameDB:  "qtdu"
      var indexedDB = window.indexedDB || window.mozIndexedDB || 	window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

      if(loai == 1 || loai == 2 || loai == 3) {
        var open = indexedDB.open(NameDB, verDB);

        if(loai == 1) {
          open.onupgradeneeded = function() {
              var db = open.result;
              var store = db.createObjectStore(NameDBChild, {keyPath: "id"});
              var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
          };
        }
        
        open.onsuccess = function() {
        
          var db = open.result;
          var tx = db.transaction(NameDBChild, "readwrite");
          var store = tx.objectStore(NameDBChild);
          var index = store.index("NameIndex");
      
          if(loai == 1) {
            //store.put({id: '12345q', v: 42});
            //store.put({id: '67890q', v: 35});
            for(var i=0; i<arrObjDB.length; i++) {
              store.put(arrObjDB[i]);
            }
          }
          if(loai == 2) {
            store.getAll().onsuccess = function(event) {
                      window[tenHamReturn](event.target.result, arrExp);
                        db.close();
                        
            };        
          }
            
          if(loai == 3) {
              for (var i=0; i< id.length; i++) {
                var v = id[i]; 
                store.get(v).onsuccess = function() {
                  store.delete(v);
                };
              }     
          }
        
          tx.oncomplete = function() {
            db.close();
          };
        }
      }

        
        if(loai == 4) {
        var req = indexedDB.deleteDatabase(NameDB);
        req.onsuccess = function () { return "OK"; };
        req.onerror = function () { return "No"; }; 
          req.onblocked = function () { return "blocked"; };
      }

    }
    window['QTDU_DB']("qtdu", 1, "WebContent", 1, 'none', ['none'], [], ['none']);
	  
	  window.window['copyToClipboard'] = function(textToCopy) {
		  var textArea;

		  function isOS() {
		    return navigator.userAgent.match(/ipad|iphone/i);
		  }

		  function createTextArea(text) {
		    textArea = document.createElement('textArea');
		    textArea.readOnly = true;
		    textArea.contentEditable = true;
		    textArea.value = text;
		    document.body.appendChild(textArea);
		  }

		  function selectText() {
		    var range, selection;

		    if (isOS()) {
		      range = document.createRange();
		      range.selectNodeContents(textArea);
		      selection = window.getSelection();
		      selection.removeAllRanges();
		      selection.addRange(range);
		      textArea.setSelectionRange(0, 999999);
		    } else {
		      textArea.select();
		    }
		  }

		  function copyTo() {
		    document.execCommand('copy');
		    document.body.removeChild(textArea);
		  }

		  createTextArea(textToCopy);
		  selectText();
		  copyTo();

		  //trigger animation---
		  if (typeof showNotification === 'undefined') {
		    showNotification = true;
		  }
		  if (typeof notificationText === 'undefined') {
		    notificationText = "Copied to clipboard";
		  }

		  var notificationTag = $("div.copy-notification");
		  if (showNotification && notificationTag.length == 0) {
		    notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
		    $("body").append(notificationTag);

		    notificationTag.fadeIn("slow", function () {
		      setTimeout(function () {
			notificationTag.fadeOut("slow", function () {
			  notificationTag.remove();
			});
		      }, 1000);
		    });
		  }
      
		}


	  

	  function worker_1(x0, x1){
	    var x2 = "NoLink";
	    var x3 = "function T(exp){ " +
				"if(exp[2] == 'myself') { postMessage(exp); return; }" + 
				"fetch (exp[1])" +
				  ".then(x => D(x,exp[2]))" +
				  ".then(y => postMessage([exp[0],y,exp[2],exp[3]]));" +
		      "} " +
		      "function Q() { self.addEventListener('message', function(e) { T(e.data); }, false); } " +
		      "function D(x, val) { " +
				"if(val=='json') {return x.json();} " +
				"if(val=='text') {return x.text();} " +
		      "} " +
		      "Q();";

	    var x4 = 'Func_Run02a';
	    var x5 = 'QT';
	    var x6 = 'Cộng hoà xã hội';
		  var x7 = 'text';
		  var x8 = 'loai1';

	    var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;

	    window['TaoHuyWorker'](exp);

	  }  

	  window.window['TaoHuyWorker'] = function(exp){
	    var arr = exp.split(']TTT[');
	    var x0 = arr[0].trim(); //xác định tạo hay xoá hay gửi thông tin
	    var x1 = arr[1].trim(); //Biến lưu trên worker.js
	    var x2 = arr[2].trim(); //Đường dẫn file worker.js
	    var x3 = arr[3].trim(); //Chuỗi tạo hàm chạy cho worker
	    var x4 = arr[4].trim(); //Hàm nhận thông tin worker trả về
	    var x5 = arr[5].trim(); //tên biến của Hàm nhận thông tin worker trả về
	    var x6 = arr[6].trim(); //Nội dung gửi worker
		  var x7 = arr[7].trim(); //loại dữ liệu trả về
		  var x8 = arr[8].trim(); //Nội dung gợi nhớ

	    function startWorker(){
	      if(typeof(Worker)!=="undefined") {
		      if(x3=='NoStringFunc'){
		        window.window[x1] = new Worker(x2); 
		      } else {
		        var blob = new Blob([x3]);
		        var blobURL = window.URL.createObjectURL(blob);
		        window.window[x1] = new Worker(blobURL);
		      }
		      window[x1].onmessage = function (event) { TraKetQua(event.data);};

	      } else {
		      alert("Sorry, your browser does not support Web Workers...");
	      }
	    }

	    function stopWorker(){ 
	      window[x1].terminate(); 
	    }
		  
		  function TraKetQua(data) {
		  	window[x4](data);
		  }

	    if(x0=='1') startWorker();
	    if(x0=='0') stopWorker();
	    if(x0=='2') window[x1].postMessage([x1, x6, x7, x8]);
	  }


		window.window['arrLink'] = [
			['AKfycbzQ', '2ubS-F', '6crdo', '2fewL', 'W-650mMz', '-UW0CJy', '_uZeoI', 'T2XnjZ7zYc', 'EHyVy3', 'To37M2', 'w5_8'],
      ['AKfycbz7', 'VmOveh', 'GdyoL', 'TQ76o', 'ku3rn-Z1', 'RgMmzyu', 'QNUaw_', '-8V-MdHGqa', '2tyggO', 'r-_YnW', 'MCl_f'],
      ['AKfycbyd', 'nw73Bg', 'AkjsB', 'FjDoA', 'Rw5lorU-', '78hV11N', 'Yn-Gob', 'hUirSpybgc', 'bv-JSs', '88tB9b', 'UdAEl'],
      ['AKfycbzk', '1oT1-I', 'Ft1If', 'MHSjy', 'LKK78bsv', 'AUD-PLn', 'oxMnMj', 'KdmV9c042x', 'TenuJq', 'QINjau', '1cZk'],
      ['AKfycbzp', '-J_L0W', 'GTdJL', 'fzSwP', 'b022iLOa', '8gBq8V0', '0TGV1-', 'H-O11H9BfN', 'wpSWzA', 'EGXol_', 'zIBA'],
      ['AKfycbwa', '3a2dZO', 'HzCOd', 'hysiW', 'WC3PXPu5', 'N4q2Ujz', 'YBeo6t', 'RqDkS7Dlya', 'af3ViT', '28mF8O', 'ymra1'],
      ['AKfycbyV', 'd9gND4', 'E672F', 'jknHC', 'SJTbmyCH', 'hotkoTp', 't6sA-7', 'G7s0iC9xz2', 'KqK_DR', 'ZlWXNB', 'MU00'],
      ['AKfycbwF', 'w1Zhjk', 'HQREI', 'JxQih', 'nrviDElD', 'YHoZKai', 'm9b2Au', '8tWGH4WNFH', 'TX36VK', 'ju0LgF', '7vp0'],
      ['AKfycbwj', '5F11l8', '2YkTr', 'DlZr2', '-KYKNbFb', 'IImEerf', 'NOhLNW', 'dL2MSWMUTJ', 'TeZ34W', 'pb5acY', 'y4M0w'],
      ['AKfycbyN', 'vt4TPH', 'q0Leh', 'pi9oV', 'kfU6nIGm', 'Ok2KBmr', 'HMCnzF', 'wWpcUErwI4', 'vpv7X5', 'Bq3Npf', 'EIZQ'],
      ['AKfycbw2', 'xxelbl', '523Pi', 'ZRBgw', 'LOSkfsve', 'xa98Zsh', 'pkg2B7', 'DaZdHxzjEq', 'v8dyT5', 'JfBtP-', 'JiY8'],
      ['AKfycbyB', 'wylMYJ', 'ISXM3', '0gNhf', '--HL5klr', 'TEIAMaU', 'qrs80z', 'g_yrO7VYjC', 'BY_baA', 'pWJC1E', 'XJts'],
      ['AKfycbxS', 'Tmv5eX', 'SJ5em', 'umgy3', 'qfHh1u05', 'uC46We9', 'A0cNsh', 'EQW0Fzlpr2', 'pC_0_i', 'vwmFMw', 'lnpxv'],
      ['AKfycbw_', '_6y0A5', 'Wws9A', 'FTk2T', 'xmWE5ET_', 'E8d8t4G', 'dklFJY', 'JoZcYOFdYs', 'bE6zpg', 'etePfb', 'aE5g_'],
      ['AKfycbyQ', 'jXyaPD', 'RbtYA', 'WzAy7', 'wjUQ5EmM', '4cKXtY8', '1hdgtd', 'AvatIaXiAm', '-O6ljE', 'gXiXqY', 'hhxu6'],
      ['AKfycbxJ', 'Ke1WoT', 'LiarG', '4DPsH', 'rw2l8a6Q', 'RrCQlhw', 'SP4TA6', 'T4ayCe_ycM', 'wUMpRO', 'jjlma_', 'sCR8'],
      ['AKfycbyZ', 'oVQ7kV', 'eEyLs', '2HWMe', 'YKlnvc1F', 'ZNiMGfV', 'WZbxGU', 'EABfi2ybAu', 'e3q8TP', 'ThDem_', 'xL8Cj'],
      ['AKfycbw6', 'L2YqbU', 'VWTvz', 'dRcoS', 'D0ish7Ff', 'WC-Ily6', 'wOjm26', 'MmcJ7gh_I8', '7DM5mG', 'Sl7yto', 'OQns'],
      ['AKfycbyW', 'h-DrKA', 'KTtBH', 'KXgWk', 'Q2bbD8IQ', 'nQjpRMG', 'rVr1HH', 'E-zpWeMhGs', 'wsM_in', '4nEYl-', 'fgjsH'],
      ['AKfycbw6', 'ZDNv0x', 'GrKT-', 'llYOH', 'XcFWE8WM', 'qiWCga2', 'DBoO00', 'wVhtzh45w8', 'JjZU9Y', 'ihb6y-', 'tEfI'],
      ['AKfycbxH', 'Na5mLr', 'lsxMP', 'bk0c3', 'BVdr6GSq', 'aTOjd7s', 'b-p3E-', 'cbmk-OOdBj', 'plqNhe', 'lnEZcv', '4AGKV'],
      ['AKfycbxn', 'ZkprAl', 'vAvlU', 'tRtlO', 'zX2eG-uA', '029sH0y', '76wiff', 'VbD0UzBeCs', 'WCpPNG', 'K-YBZT', 'OoIr6'],
      ['AKfycbyr', 'awu4EK', '1M369', 'LD7FZ', 'eSy2dTna', 'Z-rexpR', 'xy3p4d', 'aYvTseJde4', 'AUGAaI', 'ramvq0', '5hYU'],
      ['AKfycbyY', '_mOBDU', 'qLoMg', 'Hqysh', 'zSS2Kehi', 'M3AeBoX', 'rgoNCF', 'zPkmEDoxSN', 'khARc2', 'x4Nqqa', 'qkzR9'],
      ['AKfycbwa', 'Zb0ho6', 'vwTf_', 'Kt4eM', '3verqP72', 'xhJzx8P', 'uywnVh', 'IH_NEs0gpI', 'VWyq0g', 'jlA1My', 'Kwlh2'],
      ['AKfycbwk', 'mPoHCG', 'Pb7wy', 'kIBLV', 'XBz6UsTM', 'RhvzS6o', '6esrGv', 'vAKUe4-i0J', 'JSef7O', 'ctojxc', 'nx3s'],
      ['AKfycbyz', 'FPheos', '2pm7G', 'f6bl5', '3nbONZlY', '5NoqL3N', 'Zv1Gbe', 'rLCQdvsDC1', '4CQjFR', 'T3Hm8-', '5Mrc'],
      ['AKfycbxr', 'w_6ce8', 'SfJGd', 'wc4UB', 'PsKA8IHo', 'VBFJg1K', 'a2tmMr', '4AoA4Q53ep', '_tZOVk', 'j7ZW7x', '6glLm'],
      ['AKfycbzj', 'HHhe43', 'j-PqV', 'sEnww', 'fg9jCeid', 'Hwhhh5Y', 'qSXit-', 'DYhHvbowGa', 'LA7PuW', 'xVcFco', 'WtLHT'],
      ['AKfycbzk', 'DKjBCQ', 'mf-5B', 'mdy9-', 'xHwPaRMk', 'zy5DiEl', 'xXCHtY', 'UVPNF4p4xo', 'LfJsxF', 'MBv-Ln', 'cbBg8'],
      ['AKfycbyU', 'fB9LeY', 'hLd99', 'Sp8X8', 'mlZ0-kDH', '4E2Zaou', 'LSV3H-', 'BurhRpod8Q', '27xc3l', '2ZC-4Q', 'azXcD'],
      ['AKfycbxc', 'y2-7Fp', '7g77h', 'LHTV1', 'lOk__RvS', 'sqBxdiC', 'ijJ2Gz', 'SvaeYUwoae', 'n6kwKH', 'kmSle_', 'XMwY'],
      ['AKfycbzl', '2-lxwF', 'vl_jS', 'eu19K', '_OzJi6UN', 'wnz2OKf', 'f352ZP', 'hmQvFc8TCl', 'uYzAZd', '-m3p98', '1y4Cw'],
      ['AKfycbzh', 'zM6EWh', 'QB8WL', 'VaREm', 'h0msil_3', 'wH8aG23', '5noJke', 'I9phGqBQd6', '0tbvWM', 'bR4KPI', 'Ettc5'],
      ['AKfycbzO', 'kWuRmv', 'kKQlY', '5xnFO', 'yld3dAV9', 'HLc3aNG', 'ZIYoKy', 'H7qUXul-Eb', 'lkcLHN', 'YI0Vy6', 'BmZ3G'],
      ['AKfycbwL', 'z99ysG', 'SBBVs', 'op4TC', '4RrgqubO', 'erqrc_b', 'QrIll2', 'KeyfsRsfsr', 'AjpNPQ', 'wZSz0Z', 'FCtA'],
      ['AKfycbxF', '5eXhfN', 'TDUCb', 'HFzD9', '4nE1V867', 'XBl_LJ1', 'YjNLc8', 'z5JBqZBuAG', '0NkFof', 'OMbThi', 'nYjjw'],
      ['AKfycbwh', 'wMAGNf', '-Cofb', 'kYYW_', 'KcmEdfvz', '1W68oYD', 'lWzhRt', 'vC2Zj-adsE', 'Q4t3fj', 'qU0Pmw', '2pOM'],
      ['AKfycbxE', 'kSB1kk', '1W67r', 'tqWis', 'OvGd2haF', 'p44a6eS', '2_g9us', '4XExULQfUe', 'h2fAy6', 'j6qpRj', 'MMy4'],
      ['AKfycbxB', 'NYHHxc', '0jjem', 'WzjC7', 'uf0URSVh', 'DDixzI8', 'l83h0K', 'KXwDGlrrxP', 'hp1-vz', 'FrURCa', '2RC4'],
      ['AKfycbwD', 'INS-k5', '0rjMa', 'g__cn', 'ipou1fxR', 'bCsWScQ', 'Z7F7Be', '4SnM_Po5vh', 'Zyem-t', 'z4L2HC', '73bPA'],
      ['AKfycby0', 'Evn3Nj', 'M8sb7', 'WGRCp', '4PWrLLgG', '1RxyxIc', 'Mo5giI', 'FlXTJ1sH_y', 'GYBox_', '7NSau-', 'M4SO1'],
      ['AKfycbx-', 'Y8SApW', 'l3dq3', 'kX25F', 'mDxAl9TD', 'IAAOuK2', 'JRD7qA', 'm8F9I90obG', 'JNJxg_', '5WOScz', 'UlOsC'],
      ['AKfycbxc', 'da2kRS', 'Q_Hj5', 'ECbrh', 'Cu2yF2wx', 'AZuHKSF', 'KKpJnb', 'CtXaSc957h', 'A4RS8G', 'XnkYGt', 'fp7Y'],
      ['AKfycbye', 'j-EuFP', 'alJuw', 'cOcMo', 'jMbKOV-t', '2W9LzsK', 'j6FoDm', 'UTAURgp2HJ', 'S76SoL', 'PQaGef', 'JaHdE'],
      ['AKfycbzV', 'm7NOvf', 'oQ2DV', 'PpHBu', 'limD-Qba', 'd-mh5fu', 'HIpyoD', 'jXA_Sq6IyE', 'YffV3q', 'dKeZqI', 'EgRuu'],
      ['AKfycbzs', '6J4_eY', 'Hlwzw', 'Bc5Av', 'K-8ST85n', 'h8huIQ2', 'vMH0rz', 'qwZY0tFAFm', 'tYcg6j', 'xikLFl', 'z_EI'],
      ['AKfycbzp', 'af5JCh', 'AIrOo', '_Bm3e', 'fzjOwfZ1', 'Eui0Ky0', 'RZq3vE', 'i1LFUklv6t', 'llZStX', 'ucCB23', 'wAmk'],
      ['AKfycbwK', 'ZZpzLq', 'QzYxv', 'pk6GG', 'C__F4-K3', 'GEOWvMy', 'hIThsX', '4UnwDXJ4va', 'qpBJd8', 'voXu38', 'yiqM'],
      ['AKfycbwC', 'xpC-ki', 'pDfwB', 'KfhVk', 'bkYdO-il', 'd7dG6v5', 'm1u5HK', 'A-NT4PXbVN', '7FuAZ8', 'R6EEm5', 'CV-c'],
      ['AKfycbyh', 'xxJGSs', 'QVT5b', 'ix0vl', 'gyuXUVnR', '8Pw2Jaj', 'CmlxPt', '_PSW4KIrG0', 'vCg80u', 'LD_GxQ', 'qCTfG'],
      ['AKfycbyS', 'TuTHZe', 'xdVx5', 'GHk0U', 'vowWL8zS', 'ndUeF27', 'f5Lz8B', 'czxE0qfQdB', 'NlJ5PY', 'M6HouB', 'ePsdE'],
      ['AKfycbwW', 'aTb81-', 'TAP-I', 'rtNWf', 'A0qoBlYl', 'nb6zgOg', 'FM10Q6', 'R9EwRI1Gyc', '6IDG9t', 'eJ82uK', '6MHA'],
      ['AKfycbyZ', 'qg8vkY', 'kGUfb', '8fHk8', 'oJQ2Di9o', 'TAp7snp', 'U1I_-P', 'XJrCTMNtzp', '8gkO3O', 'a8uMpj', 'Jbms'],
      ['AKfycbza', 'GF5O8a', 'XaI6q', 'aEgr4', 'Gi2uRioJ', 'nLGNTXn', 'THpk4-', 'aE-Fg_5Rgy', 'gCSzsB', 's-xWPx', 'kFeh0'],
      ['AKfycbxW', '9SXHTe', 'P-0Y_', 'NlovO', '3t9Dj1u_', '2Bi-INr', 'mVLhSO', '7bZWwSpfpG', 'iMoPvY', '1Gabpn', '4UXdL'],
      ['AKfycbzO', 't4fqyX', 'RDjPY', 'LWEA1', 'dSUD6rlJ', 'YaXrMz2', 'H9aR6B', '1MWttmgmJC', 'fp7TW9', '_b_zds', 'zO9A'],
      ['AKfycbw9', '_zVQfD', 'xYXuV', '8yAPj', 'lvrv2wLj', 'z0qanNA', 'orG0yj', 'fdbwyhVZrZ', 'ixTi-s', 'gJMkFG', 'mb39n'],
      ['AKfycbzw', 'dy-94W', 'VDp1P', 'uAWRe', '3G7akUlV', 'ZLS8-3L', 'Anj6Vr', 'JMQnQnZCSr', 'v0-p4r', 'cdgb8U', '-K8o'],
      ['AKfycbzz', '5j4f07', 'BQfbG', 'q8edX', 'c6K1wvQW', 'UCNxbnx', 'zpVX0p', '20s-1RM79r', 'tkizmR', 'mc0uFZ', '4oaTG'],
      ['AKfycbye', '1sVVrw', 'ubE4-', 'SJ_d_', 'AJ-ED3cV', 'GWkpw4a', 'iU1EVE', 'Bj9mu5zG1i', 'GSTL-7', 'TjKWCx', '6LGEX'],
      ['AKfycbxm', 'D_FzVR', 'tFQLz', 'TGFGj', 'vvGHtoin', 'E07LECS', 'Y8MIBm', '8mrJEhyO1s', 'iZGOK2', 'Dzeat9', 'NFgH5'],
      ['AKfycbxL', 'Ng8VH9', 'xKaE9', '3eilZ', 'NP5NtQ70', '5t96yzw', 'IEpI0i', 'jGrWB93tEY', 'T7lEz3', '2ybxG1', 'tJMGd'],
      ['AKfycbwP', 'FpJt53', 'Y7y4v', 'RzwZl', '8b5oe5Oh', 'zuKC8Om', 'Y6_Kfq', '28utqUlHM7', 'sThINy', '0nCGVL', 'Kzwo'],
      ['AKfycbxs', 'm62fon', 'w4nRY', 'VziVK', 'odviPsrH', '2t1iQ5m', '4HuhoP', 'Ue-Oh89a8b', 'GF1wGh', 'rOljaO', 'Zoio'],
      ['AKfycbwR', 'nnSEJn', '-3utW', 'sWeti', 'AodOls1O', '1HwUvx_', 'kyPX-h', '7Bb5bo7vMo', 'Qt-vWB', '64HG-Y', 'qaEk'],
      ['AKfycbzW', 'WjQXMr', 'Z5bcw', 'Or2U9', '8NbiBRpg', 'YEyTVY7', 'dk8Cqh', 'EE6sHvxf6m', 'XzrmAc', 'yhNwej', 'kUCOd'],
      ['AKfycbxz', 'ur4_Mp', 'ByrHh', 'Ltbkb', 'V3-qdyGJ', 'oEfbLjm', 'Aye3Sh', 'PViC7f_85l', 'xzFvwi', 'eZ6Vvi', 'SNto'],
      ['AKfycbxv', 'fb2wGT', 'OtPl6', 'UACV9', 'AmqW7Ptm', 'Bda4ln4', '84yOYQ', 'Vd29Cas_qh', 'iZVx7u', 'X5QE5R', 'rb-KU'],
      ['AKfycbwz', '5pKk0D', 'SekpE', 'QiWwz', 'fgIKqiWi', 'msZpls2', 'q4zqv6', 'QtKeIowTWT', 'u6Azmb', 'uF4UwC', 'RA7KF'],
      ['AKfycby2', '8BT5Iv', 'peIKr', 'D88Eo', 'cN8nN0hu', 'kqdJXv_', 'BmTPOo', 'u2f7Cq-7mz', 'K0kWoH', 'Kfs4ea', 'PkWg'],
      ['AKfycbx7', 'dIK9Lz', 'Knv9V', 'jBbJD', '0tcsRD7e', 'UVo5KaY', 'hWx1A3', 'zmMmn6mZkG', '_4sHzh', 'f-jrtV', 'cTQ'],
      ['AKfycbym', 'Pvg_BJ', '921bV', 'a_Rfw', 'C9qNOjfy', 'PIATeqb', 'i3WZbp', '2Bp6LHOhwr', 'dggVXb', 'AGa4C4', 'fAwZv'],
      ['AKfycbzY', '36B7ou', 'iqTph', '77CwQ', '9vj4CxP2', 'qX_iuu5', 'tfRYjU', 'IzKQYMvHop', 'AC1bxo', 'vqFYLg', '3kaI'],
      ['AKfycbxN', 'BWwKNf', 'QP-5R', 'f9e3T', 'JS3FfL9L', 'i70K6J7', 'vQ6ccg', 'MxxobXdhJm', 'kcOL8X', '9dL-Et', 'n3QJJ'],
      ['AKfycbx3', 'w1fcKF', '1tFwL', 'gtfPb', 'NRuk4o4I', '39cSm0W', 'rJp2Nj', 'x4JnOIuiWF', '1-LTpo', 'YvHgzT', 'DfCrE'],
      ['AKfycbya', 'IV0XgE', 'IfU8X', '17FZF', 'BN-pA1VV', '6azoD2I', 'Nn9Xkd', 'fUKHRikR4q', 'rHi-h9', 'NADpsr', 'Zw5A'],
      ['AKfycbxM', 't9lRAt', 'sNDEe', 'NOSgn', 'WLispQJ0', 'wZLqDMc', 'LGtylu', 'KDn12f-t1k', 'GboK0M', 'yNiZcy', 'sjA'],
      ['AKfycbyJ', 'ImLVyJ', 'lLLdr', 'QdgIK', 'MxRKgM7Q', 'MD9i_Wb', 'SiBTUZ', 'fxRCZjcAI0', 'w0Hutp', 'QY5bTX', 'Vo8s'],
      ['AKfycbzp', 'X6pceE', 'MQw-4', 'JLa_S', 'aRsXGESu', 'wgHtXX7', 'fil3zC', 'SbyFD-FL7M', 'j-xIn5', '5ufsiO', 'rAY0'],
      ['AKfycbz5', 'vUD1uW', 'G9mrs', 'r-egU', 'vD1mBYd1', '9tYA_K4', '0mMpzd', 'ZewphNTp2z', 'Rheq95', 'VwtN_F', 'A8-I'],
      ['AKfycbwI', 'Uq2sER', 'KyisU', 'I0hVN', '316ZoNXe', 'riXHRaf', 'JSsJxt', 'tt8eDlTLij', 'w0MgX7', 'KixwmL', 'nO40'],
      ['AKfycbxb', 'wwZKsE', 'Ydm4b', 'yEf6V', 'XrAe1mvG', 'Mk6SC17', 'lAdXu0', 'LHa82LNsEt', 'YkpjDb', 'GfrP2v', 'akNGm'],
      ['AKfycbzJ', '7sKEDb', 'iqTNP', 'PZN7I', 'xBIMoKi8', 'h00vQeT', '9VAAu1', 'bPTHz_gusf', '1KVpT4', 'bu9FQu', 's7IU'],
      ['AKfycbzp', 'eAbJ4w', 'gqDbJ', 'IiHTL', '-Yw28wDX', 'TbuIQiP', 'Pq1bXY', 'l9XzrI3d9X', 'rNreNL', 'cPQVF5', 'bEFhf'],
      ['AKfycbwK', 'XBKBAB', 'Son5-', 'QD0rp', '6Xg7Rsnr', 'D5g-FIK', 'N6NITQ', 'VZb_1iir0g', 'LqEKa5', '3oC_DL', 'Jlf36'],
      ['AKfycbwr', 'S8gzrW', 'HUdDX', '-8aEu', 'fR8TrniL', 'Y54JX2n', 'RlQQ4u', 'iCBhXLJ9XE', 'vCn6ao', 'vhrPrl', 'lWT4'],
      ['AKfycbyw', 'QwxJeJ', 'j8p1A', 'naovF', 'eH45fspV', 'FU7X-24', 'fcWvZ7', 'lhqjLfwA2e', 'Hpew4g', '1QCWDm', 'sQGCd'],
      ['AKfycbzp', 'huxEtx', 'nttCS', 'TEoAr', 'eHANA-S9', 'xLCr8d-', 'CFvCo2', 'J7liULKufW', 'Hu4lOa', '0DEhMp', 'ORHQ7'],
      ['AKfycbws', 'vqePtE', 'XzAKV', 'cRN-q', 'TeD5VLXi', 'PiM0X7A', 'hCXF6c', '5lpnyT9RFD', '1kWyVo', 'wGbgKF', 'KdA'],
      ['AKfycbwP', 's1rdpT', 'xGVaB', 'CIQmn', 'YxHKZcJK', 'Ea1Xd1E', 'Ku5tJU', '0LQCME9w4v', 'P6VDWJ', 'xn-pJv', 'BySp5'],
      ['AKfycbzo', 'iN4VnP', 'NBQ6o', 'C-rqY', 'dBrs-YO6', 'iY7XHhF', 'mt4t8f', 'AmDIrnKkAW', 'egPzkN', 'srwzcO', 'QV2e4'],
      ['AKfycbxV', 'lRPwT4', '5rUs-', 'g0cJz', '61aDL5xL', '3TncUKl', 'FczcDg', 'f8CHkwjQ1v', 'p6h6Ac', '6gLs4A', 'WRxgC'],
      ['AKfycbx9', 'IcVqj1', '3BgSZ', '82_1B', 'nmrmxEpO', 'gUXH6hE', 'LlN9pa', '1Q3oXDoGCM', 'o0VBU1', 'Cy9WXe', 'XxHES'],
      ['AKfycbzh', 'IjO-c3', '1IQLB', 'NQy32', 'dmiOHfmx', 'M5_xzbQ', 'G8gd7C', 'bg03ECUpZi', '_jJnQ_', 'S4hMaq', '9OV8'],
      ['AKfycbxh', 'b2DIX6', 'J1Nwv', 'Vgen9', '16i826Aw', 'WXn6Wcs', 'Hqkbj_', 'iIBHqo1Nfv', 'rZt-b9', 'ewYAzp', 'cCco'],
      ['AKfycbwL', 'PJKf6B', 'o20aZ', 'mGjd4', 'br70_4NA', 'DRLLB01', 'goQpsp', 'bty-yjPGVQ', 'P4_f0p', 'eYJeYf', 'MBg'],
      ['AKfycbya', 'uakpIl', 'osXAx', 'ULm_O', 'PoBQyVlz', 'eaja3PX', 'xzbLY-', '81S4r8GSo3', 'puL_Au', '5F3TRA', '7ozw'],
      ['AKfycbx9', 'pUqq_-', 'nVFd8', 'gjlpv', 'MvrHCgEV', 'JcwvfMo', '6b7foW', 'LdjwwHU6bu', 'SewE9G', 'LmjWXO', '7ocWK'],
      ['AKfycbzH', '-ip7IC', 'C_sh4', 'uMI8z', '17lgYlZY', 'kAO-o3x', '4J7Bvw', 'AYqxyNvrEs', 'nbhJDt', 'q9AI63', 'kV4w']

		  ];

    window.window['getlink'] = function(x) {

      var arr = (x == 'none') ? window['arrLink'] : window[x];
      var rand = Math.floor(Math.random() * (arr.length-1));
      var script_id = '';	
      for(var i=0; i< arr[rand].length; i++) {
        script_id = script_id + arr[rand][i]
      }
      return window['base64_encode'](window['encrypt']('Q.t.2011.0512',script_id));
      //script_id = window['encrypt']('Q.t.2011.0512',script_id);
      //return window['base64_encode'](script_id);
    }

    window.window['Send_Worker_1'] = function(loai, id, dinhdang){ //loại 1 để lấy nội dung file google doc
      var x0 = '2';
      var x1 = 'getND'; //đang dư
      var x2 =  "NoLink"
      var x3 = "NoStringFunc";
      var x4 = 'Func_Run02a';
      var x5 = 'QT';

      var x6 = (dinhdang != 'myself') ? 'https://docs.google.com/feeds/download/documents/export/Export?id=' + id + '&exportFormat=txt' : id;
      var x7= dinhdang;
      var x8= loai;

      var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
      window['TaoHuyWorker'](exp);
    }

    window.window['Send_Worker_2'] = function(){ //để lấy nội dung file google sheet
      var x0 = '2';
      var x1 = 'getND';
      var x2 =  "NoLink"
      var x3 = "NoStringFunc";
      var x4 = 'Func_Run02a';
      var x5 = 'QT';

      script_id = window['decrypt']('Q.t.2011.0512',window['base64_decode'](window['getlink']('none')));

      var x6 = "https://script.google.com/macros/s/" + script_id + "/exec";
      //x6 = x6 + "?P=Express&para1=F001&para2=none]QQQ[" + '1xO2fOPwAjAEdeR_muzIRRPcSzG6lD3Z4VxTcOI9QP44'; //link MenuCuocQuocGia
      //x6 = x6 + "]QQQ[" + "00a";
      //x6 = x6 + "]QQQ[" + "select A, B, C, D, E";
      //var x6 = "https://script.google.com/macros/s/" + "AKfycbzBVrGSFTOjYKSH57U2XGRxfIkGdmkRb0FPR66_3K4ZgZIZ6q0dUeH6QnQ_SRa4BfZO" + "/exec";

      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      var co = urlParams.get('co');
      var pr = urlParams.get('pr');

      if(co==null && pr==null) {
              co = "Main";
              pr = "Main";
            }
            if(co==null && pr!=null) {
              co = "All";
            }

      x6 = x6 + "?para1=F001"; 
      x6 = x6+ "&para2=" + "GETFUNCTION"; //loại
      x6 = x6 + "]QQQ["  + 'Function_thuquang'; //id sheet (nếu có)
      x6 = x6 + "]QQQ["  + "none"; //sheet name (nếu có)
      x6 = x6 + "]QQQ["  + co; //tên công ty
      x6 = x6 + "]QQQ["  + pr; //tên chương trình
      x6 = x6 + "]QQQ["  + "none"; // unique dữ liệu (nếu có: UNIQUE)

      x7= 'json';
      x8= 'loai2';
      var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
      window['TaoHuyWorker'](exp);
    }
	  
    window.window['Send_Worker_3'] = function(loai, id, dinhdang){ //để lấy nội dung file google sheet
      var x0 = '2';
      var x1 = 'getND';
      var x2 =  "NoLink"
      var x3 = "NoStringFunc";
      var x4 = 'Func_Run02a';
      var x5 = 'QT';

      script_id = window['decrypt']('Q.t.2011.0512',window['base64_decode'](window['getlink']('none')));

      var x6 = "https://script.google.com/macros/s/" + script_id + "/exec";

      x6 = x6 + "?para1=F001"; 
      x6 = x6+ "&para2=" + "GET_TXT"; //loại
      x6 = x6 + "]QQQ["  + id; //id sheet (nếu có)

      x7= dinhdang;
      x8= loai;
      var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
      window['TaoHuyWorker'](exp);
    }

	  //window['Send_Worker_2']();
    window.soFile =0;
    window.HieuUng = [];
    

    window.window['TraketquaIndexedDB'] = function(x, arr) {
      var type;
	    //var keys = Object.keys(localStorage);

      var keys = [];
      for(var i=0; i< x.length; i++) {
        keys[i] = x[i]['id'];
      }

      var queryString = location.search;
        var urlParams = new URLSearchParams(queryString);
        var co = urlParams.get('co');
        var pr = urlParams.get('pr');
        var fm = urlParams.get('fm');

        if(co==null && pr==null) {
              co = "Main";
              pr = "Main";
            }
            if(co==null && pr!=null) {
              co = "All";
            }

            fm = (fm==null) ? "support" : fm;
	      
        var Multi_id = "";
        var l = keys.length;
        //var l = x.length;

        //alert(arr[1]);
        //  alert(arr[10]);
        //  alert(arr[11]);

        for(var i=1;i<=20;i++){
          for(var j=4; j<arr[i].length; j++) {
            if(arr[i][j] != '') {
              var len = HieuUng.length;
              HieuUng[len] = arr[i][j];
            }
            
          }
          
        }


          
        for (var k=0; k<l; k++) {
          var key = keys[k];
          
          
          var timthay = 0;
          for(i=21;i<arr.length;i+=2){
          
            for(j=4;j<arr[i].length;j++){
              var str = arr[i+1][j];
              if(arr[i+1][j] == '') continue;
              if (arr[i][j] != 'ELE' && arr[i][j] != 'CSS' && arr[i][j] != 'FUN') continue;

		          var arrstr = str.split(']TTT[');
              var tenham = arrstr[arrstr.length-2];
				      var arrtenham = tenham.split(' ');
              var tg = arrstr[arrstr.length-1];

              var f1 = co + '_' + pr + '_' + tg;
              var f2 = arrtenham[1] + '_' + co + '_' + pr + '_' + tg;
              if(keys[k] == 'ele_' + f1 || keys[k] == 'css_' + f1 || keys[k] == 'func_' + f2 || keys[k] == 'func_CodeChung_' + tg) {
                //alert(keys[k]);
                arr[i+1][j] = '';
                timthay = 1;
                break;
              } 

            }
            if(timthay == 1) break;

          }
          if(timthay == 0) {
            if(keys[k].indexOf(co + '_' + pr) >= 0 || keys[k].indexOf('func_CodeChung_') >= 0)
              //localStorage.removeItem(keys[k]);
              window['QTDU_DB']("qtdu", 1, "WebContent", 3, 'none', ['none'], 'none', [keys[k]]);

            
          }
          

        }

        for(i=21;i<arr.length;i+=2){
          for(j=4;j<arr[i].length;j++){
            if (arr[i][j] == 'ELE' || arr[i][j] == 'CSS' || arr[i][j] == 'FUN') {
              var str = arr[i+1][j];
		          var arrstr = str.split(']TTT[');

              if(str != '') {
                Multi_id = Multi_id + ']UUU[' + arrstr[0];
              }
            }else {
              //DisplayGoogleDoc_PDF(arr[i][j], arr[i+1][j]);
                EID(arr[i][j]).src = "https://docs.google.com/viewer?srcid=" + arr[i+1][j] + "&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
            }
          }
        }

        //alert(Multi_id);
        if(Multi_id != '') {
          Multi_id = Multi_id.substring(5, Multi_id.length);
          window['Send_Worker_3']('loai3', Multi_id, 'json');
        } else {
          RunFuncFromStorage();
        }
    }

    window.window['Func_Run02a'] = function(x5){
	    var dinhdang = x5[2];
      if (x5[2] == 'json') {
        var arr = x5[1].records.map(doc => Object.values(doc));
        arr = arr.map(function mapper(s) {
          if (Array.isArray(s)) {
            return s.map(mapper);
          } else {
            //return s.toString().trim();
            //s = window['NenGiaiNenChuoi'](2, s);
		  var st = window['decrypt']('Q.t.2011.0512', s.toString()).trim();
		  
            return  st;
          }
        });
          //window['xulyTinWorker'](arr);
          //return;
      }
      if (x5[2] == 'text') var arr = x5[1];

      var subfix = 1*x5[3].substring(4,x5[3].length);
      if(subfix >10) {
        window['xulyTinWorker'](x5);
        return;
      }
      if(x5[3] == 'loai2') {
        

        window['QTDU_DB']("qtdu", 1, "WebContent", 2, 'TraketquaIndexedDB', arr, 'none', ['none']);

	      

      }


      if(x5[3] == 'loai3') {
        XulyFunELECSS(arr[0]);
      }
	   
	
    }
	  
    window.window['GetInfoIndexedDB'] = function(x) {
      //var keys = Object.keys(localStorage);
      var keys = [];
      for(var i=0; i< x.length; i++) {
        keys[i] = x[i]['id'];
      }
	      
        var queryString = location.search;
            var urlParams = new URLSearchParams(queryString);
            var co = urlParams.get('co');
            var pr = urlParams.get('pr');
            var fm = urlParams.get('fm');

            if(co==null && pr==null) {
              co = "Main";
              pr = "Main";
            }
            if(co==null && pr!=null) {
              co = "All";
            }

            fm = (fm==null) ? "support" : fm;

	    
	    for(v=0; v<keys.length; v++) {
	    	if(keys[v].indexOf(co + '_' + pr)>=0 || keys[v].indexOf('func_CodeChung')>=0) {
			    if(keys[v].indexOf('func_')>=0) {

				    //var st = localStorage.getItem(keys[v]);
            var st = x[v]['v'];

				    st = window['NenGiaiNenChuoi'](2,st);
				    var arrFunc = st.split('*QTDU*');
			
			      var tenham = arrFunc[1].replace(/(\r\n|\n|\r)/gm, " ");
			      tenham = tenham.trim();

			      var ndham = arrFunc[2]
				    ndham = ndham.trim();

			      this['func_' + tenham] = new Function('return ' + ndham)();

			      try { this['func_' + tenham](); }
			      catch(err) {}
			    }
			
			    if(keys[v].indexOf('css_')>=0) {

				    //var st = localStorage.getItem(keys[v]);
            var st = x[v]['v'];

				    st = window['NenGiaiNenChuoi'](2,st);

		      	var arrStyle = st.split('*QTDU*');
		      
				    document.head.innerHTML +=  arrStyle[0];
			
			    }
			
			    if(keys[v].indexOf('ele_')>=0) {

				    //var st = localStorage.getItem(keys[v]);
            var st = x[v]['v'];
				    st = window['NenGiaiNenChuoi'](2,st);

		      	var arrFunc = st.split('*QTDU*');


			      for(var i=1; i<arrFunc.length-2; i+=2) {
				      var tenele = arrFunc[i].replace(/(\r\n|\n|\r)/gm, " ");
				      tenele = tenele.trim();
				      var arrtenele = tenele.split('||');

				      //var ndele = arrFunc[i+1].replace(/[“”]/g,"\"");
				      //ndele = ndele.replace(/[‘’]/g,"'");

				      var ndele = arrFunc[i+1];

				      var y0 = arrtenele[0].trim();
				      var y1 = arrtenele[1].trim();
				      var y2 = 1*arrtenele[2].trim();
				      if(y1 != 'none' && y2 != 'none') {
				        ECN(y0,y1)[y2].innerHTML = ndele;
				      } else {
				        EID(y0).innerHTML = ndele;
				      }

			      }
			
			    }
		    }
	    }
	    
	    window['func_' + pr]('OK');

    }
    function RunFuncFromStorage() {

      window['QTDU_DB']("qtdu", 1, "WebContent", 2, 'GetInfoIndexedDB', ['none'], 'none', ['none']);
	    
    }
	  
    function XulyFunELECSS(data)  {
	var queryString = location.search;
            var urlParams = new URLSearchParams(queryString);
            var co = urlParams.get('co');
            var pr = urlParams.get('pr');
            var fm = urlParams.get('fm');

            if(co==null && pr==null) {
              co = "Main";
              pr = "Main";
            }
            if(co==null && pr!=null) {
              co = "All";
            }

            fm = (fm==null) ? "support" : fm;

	    
      for(var j=0; j< data.length; j++) {
		var st = window['NenGiaiNenChuoi'](2,data[j]);

    

		if(st.substring(0,8) == '<script>') {

			var arrFunc = st.split('*QTDU*');
			
		  var tenham = arrFunc[1].replace(/(\r\n|\n|\r)/gm, " ");
		  tenham = tenham.trim();

		  var ndham = arrFunc[2]
			ndham = ndham.trim();
			

      if(tenham == 'CodeChung') {
        //localStorage.setItem('func_' + tenham + '_' + arrFunc[arrFunc.length - 1], data[j]);

        var arrObjDB = [{id: 'func_' + tenham + '_' + arrFunc[arrFunc.length - 1], v: data[j]}];
        window['QTDU_DB']("qtdu", 1, "WebContent", 1, 'none', ['none'], arrObjDB, ['none']);
      } else {
        //localStorage.setItem('func_' + tenham + '_' + co + '_' + pr + '_' + arrFunc[arrFunc.length - 1], data[j]);
        var arrObjDB = [{id: 'func_' + tenham + '_' + co + '_' + pr + '_' + arrFunc[arrFunc.length - 1], v: data[j]}];
        window['QTDU_DB']("qtdu", 1, "WebContent", 1, 'none', ['none'], arrObjDB, ['none']);
      }
      
			      
		}
		
		if(st.substring(0,7) == '<style>') {
		  var arrStyle = st.split('*QTDU*');
		  //localStorage.setItem('css_' + co + '_' + pr + '_' + arrStyle[arrStyle.length - 1], data[j]);

      var arrObjDB = [{id: 'css_' + co + '_' + pr + '_' + arrStyle[arrStyle.length - 1], v: data[j]}];
      window['QTDU_DB']("qtdu", 1, "WebContent", 1, 'none', ['none'], arrObjDB, ['none']);
		}

		if(st.substring(0,9) == 'content2b') {
			var arrFunc = st.split('*QTDU*');
			//localStorage.setItem('ele_' + co + '_' + pr + '_' + arrFunc[arrFunc.length-1], data[j]);   

      var arrObjDB = [{id: 'ele_' + co + '_' + pr + '_' + arrFunc[arrFunc.length-1], v: data[j]}];
      window['QTDU_DB']("qtdu", 1, "WebContent", 1, 'none', ['none'], arrObjDB, ['none']); 
		}
		
	}

	    RunFuncFromStorage();

    } 

	  window.addEventListener("keydown", function(e) {
		  if (e.ctrlKey || e.keyCode==123) {
			  e.stopPropagation();
			  e.preventDefault();
		  }
	  }); 

    window.addEventListener("touchstart", function(e) {

      if(e.touches.length > 1){
	      	      
		      
        	e.preventDefault();
		      
      }
    },{passive: false});

    function preventPullToRefresh(element) {
      var prevent = false;
      document.querySelector(element).addEventListener('touchstart', function(e) {
        if (e.touches.length !== 1) {
          return;
        }
        var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        prevent = (scrollY === 0);
      });
      document.querySelector(element).addEventListener('touchmove', function(e) {
        if (prevent) {
          prevent = false;
          e.preventDefault();
        }
      });
    }
    preventPullToRefresh('html');
      window.history.pushState(null, document.title, location.href);
      history.back();
      history.forward();
      window.onpopstate = function () {
      history.go(1);
    };

    window.addEventListener('beforeunload', function (e) {
      return "bạn muốn tải lại trang chương trình?";
    });

    window.window['ZoomImage'] = function() {
      var xemhinh=true;

      const zoomElm = EID('zoomInput');
      const outputElm = EID('zoomOutput');

        // variable Zoom Power
      var zoomPower = zoomElm.value;
      zoomElm.addEventListener('input', function(e){
        zoomPower = e.target.value;
        showZoomOutput();
      });
      zoomElm.addEventListener('change', function(e){
          // zoomPower = e.target.value;   
        root.style.setProperty('--scaleImage',zoomElm.value);
        showZoomOutput();
      });

      function showZoomOutput() {
        outputElm.innerText = 'tỷ lệ phóng x' + zoomElm.value;
      }
        // show initial Zoom Level
      showZoomOutput();

      var zoom = EID('zoom_image'),
      Zw = zoom.offsetWidth,
      Zh = zoom.offsetHeight,
      //img = document.querySelector( 'img' );
      img = EID('image2zoom');

      var timeout, ratio, Ix, Iy;

      function activate () {
        document.body.classList.add( 'active' );
        try{ ratio = img.naturalWidth / img.width; }
        catch(err) {ratio = 1;}
      }

      function deactivate() {
        document.body.classList.remove( 'active' );
      }

      function updateMagnifier( x, y ) {
        Ix = (W - img.offsetWidth)/2;
        Iy = EID('header').offsetHeight; //EID('header').offsetHeight - ECN('content', 'zoom-container')[0].offsetHeight;
        Zw = zoom.offsetWidth;
        Zh = zoom.offsetHeight;

        var v1a = ( x + Zw/2) + 'px'; //( x ) + 'px';
        var v1b = ( y - Zh) + 'px'; //( y - Iy) + 'px';
        var v2a = (( Ix - x ) * ratio + 1*Zw/2) + 'px '; //(( Ix - x ) * ratio + Zw/2) + 'px ';
        var v2b = (( Iy - y ) * ratio + 3*Zh/2) + 'px'; //(( Iy - y ) * ratio + Zh/2) + 'px';

        zoom.style.left = v1a;
        zoom.style.top = v1b;  
        zoom.style.backgroundPosition = v2a + v2b;
      }

      function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }  

      window.window['onLoadImage'] = function() {
        //var hImage = EID('image2zoom').offsetHeight;
      //root.style.setProperty('--w-zoom_image', hImage/4 + 'px');

        zoom.style.backgroundImage = 'url(' + img.src + ')';
      }

      function onMousemove( e ) {
        let posX, posY, touch = false;
        if (e.touches) {
          posX = e.touches[0].clientX;
          posY = e.touches[0].clientY;
          touch = true;
        } else {
          posX = e.clientX;
          posY = e.clientY;
        }

        clearTimeout( timeout );
        activate();
            //updateMagnifier( e.x, e.y );
        updateMagnifier( posX, posY );

        if(thietbi!=true)
          timeout = setTimeout( deactivate, 2500 );
      }

      function onMouseleave () {
        deactivate();
      }

      function onOver( e ) {
        let posX, posY, touch = false;

        if (e.touches) {
          posX = e.touches[0].clientX;
          posY = e.touches[0].clientY;
          touch = true;
        } else {
          posX = e.clientX;
          posY = e.clientY;
        }

        touch
          ? zoom.style.top = `${posY - zoom.offsetHeight / 1.25}px`
          : zoom.style.top = `${posY - zoom.offsetHeight / 2}px`;
        zoom.style.left = `${posX - zoom.offsetWidth / 2}px`;
      }

          //img.addEventListener( 'load', onLoad );
          //img.addEventListener('load', onLoad, false);

      window['onLoadImage']();
      img.addEventListener( 'mousemove', onMousemove );
      img.addEventListener( 'touchmove', onMousemove );

      img.addEventListener( 'mouseleave', onMouseleave );
      img.addEventListener('mouseout', onMouseleave);
      img.addEventListener('touchend', onMouseleave);

      img.addEventListener( 'mouseover', onOver );
      img.addEventListener( 'touchstart', onOver );

      var scrollStatus = {
        wheeling: false,
        functionCall: false
      };
      var scrollTimer = false;
      window.addEventListener('wheel', function(event){
        var initialZoom = parseFloat(zoomElm.value);
        scrollStatus.wheeling = true;
        if (!scrollStatus.functionCall) {
          if (event.deltaY < 0) {
            if (initialZoom < 10 ) {
              initialZoom = initialZoom + 0.5;
            }
          } else if (event.deltaY > 0) {

            if (initialZoom > 1 ) {
              initialZoom = initialZoom - 0.5;
            }
          }

          zoomElm.value = initialZoom;
          zoomPower = initialZoom;
          showZoomOutput();

          root.style.setProperty('--scaleImage',initialZoom);

          scrollStatus.functionCall = true;
        }

        window.clearInterval(scrollTimer);
        scrollTimer = window.setTimeout(function() {
          scrollStatus.wheeling = false;
          scrollStatus.functionCall = false;
        }, 10); 

      });



    }
    
	
		function QT003() {
			//clearInterval(myInterval);
			//if (EID("Geo").innerHTML!=""){

			worker_1('1','getND');
			window['Send_Worker_2']();

			if(trangchinh == true || window['passLogin'] == true) {
				EID('DDOS').style.display = 'none';
				EID('c').style.display = 'none';
				window.addEventListener('resize', () => {
					Qresize();
				});
				Qresize();

				EID("HuongDan").style.display = "none";
					batdau = false;
					return;
			}
			function gotoMainPage() {
				if(batdau==true) {
					EID('DDOS').style.display = 'none';
					EID('c').style.display = 'none';
					window.addEventListener('resize', () => {
						Qresize();
					});
					Qresize();

					EID("HuongDan").style.display = "none";
					batdau = false;

					/*
					window.window["Begin"] = function Begin() {
								//code xử lý tiếp theo sau khi đăng nhập ở đây
					}
					window["Begin"](); 
					*/
				}

			}

						//gotoMainPage();

			function xacnhan(x) {
				if (thietbi==false) {
					var rand1 = Math.floor(Math.random() * 2);
				} else {
					var rand1 = 1;
				}

				window.code; 

				function createCaptcha() {
					EID('captcha2').innerHTML = "";
					var captcha = [];
					for (var i = 0; i < lengthOtp; i++) {
						var index = Math.floor(Math.random() * charsArray.length + 1);
						if (captcha.indexOf(charsArray[index]) == -1)
							captcha.push(charsArray[index]);
						else i--;
					}
					var canv = document.createElement("canvas");
					canv.id = "captcha2";
					canv.width = 300;
					canv.height = 70;
					var ctx = canv.getContext("2d");
					ctx.font = "50px Georgia";
					ctx.fillStyle = "white";
					ctx.strokeText(captcha.join(""), 0, 50);

					code = captcha.join("");
					EID("captcha2").appendChild(canv);
				}

				function validateCaptcha() {
					event.preventDefault();
					debugger

					if (EID("cpatchaTextBox").value == code) {
						gotoMainPage();
					}else{
						alert("Nhập sai chuỗi mã hình. Cố gắng lần nữa");
						EID("cpatchaTextBox").value = "";
						createCaptcha();
					}
				}

				if (rand1 == 0) {
					if(thietbi==true) {
						gotoMainPage();
						return;
					}

					EID('xacnhan').style.display ='block';

					if (CaptchaLoad == false) {

						window.window['Input_keyup'] = function Input_keyup(event) {
							var keyCode = event.keyCode || event.which;

							if (keyCode == 13) {
								event.preventDefault();
								validateCaptcha();
							}
						}

						try { window.random = 1*rand; }
						catch(err) { window.random = Math.floor(Math.random() * 100); alert(1); }

						try { var str = page.trim(); } catch(err) { window.page = "Group"; }

					}


					if (x=="validateCaptcha") { validateCaptcha(); }

					if (x=="createCaptcha") {

						if(CaptchaLoad == false) {
							EID("cpatchaTextBox").addEventListener('keyup', (event) => {
								window['Input_keyup'](event);
							});
							  CaptchaLoad= true; 

						}
						createCaptcha();
					}
					return;
				}

				if (rand1 != 0) {
					if(thietbi==true) {
						gotoMainPage();
						return;
					}

					EID('container').style.display ='block';

					try { window.random = 1*rand; }
					catch(err) { window.random = Math.floor(Math.random() * 100); alert(1); }

					try { var str = page.trim(); }
					catch(err) { window.page = "Group"; }

					let c = document.getElementById("c"),
					ctx = c.getContext("2d"),
					p = document.getElementById("puzzle"),
					pctx = p.getContext("2d"),
					slider = document.getElementById("slider"),
					pos = { x: null, y: null },
					delta = 5,
					s = {
						size: 70,
						refresh: drawCaptcha
					};

					let img = new Image();
					img.onload = () => {
						c.width = img.width;
						c.height = img.height;

						drawCaptcha();

						slider.addEventListener("input", function () {
							p.style.left = `${this.value}px`;
						});
						slider.addEventListener("change", function () {
							if (Math.abs(pos.x - parseInt(p.style.left)) <= delta) {
								passed();
								gotoMainPage();

							}
							else failed();
						});
					};
					img.src = LinkImage;

					function passed() {
						c.style.color = "#4caf50";
					}

					function failed() {
						c.style.color = "#ff1744";
					}

					function drawGhost() {
						ctx.fillStyle = "rgba(255, 255, 255, .5)";
						drawShape(ctx, pos.x, pos.y);
					}

					function drawPuzzle() {
						p.width = s.size;
						p.height = s.size;
						drawShape(pctx);
						pctx.globalCompositeOperation = "source-in";
						pctx.drawImage(img, pos.x, pos.y, p.width, p.height, 0, 0, p.width, p.height);
						p.style.top = `${pos.y}px`;
					}

					function drawShape(ctx, x = 0, y = 0) {
						ctx.beginPath();
						ctx.moveTo(x, y + 0.25 * s.size);
						ctx.lineTo(x + 0.25 * s.size, y + 0.25 * s.size);
						ctx.arc(x + 0.5 * s.size, y + 0.25 * s.size, 0.25 * s.size, Math.PI, false);
						ctx.moveTo(x + 0.75 * s.size, y + 0.25 * s.size);
						ctx.lineTo(x + s.size, y + 0.25 * s.size);
						ctx.lineTo(x + s.size, y + s.size);
						ctx.lineTo(x, y + s.size);
						ctx.quadraticCurveTo(
							x + 0.5 * s.size,
							y + 0.75 * s.size,
							x,
							y + 0.5 * s.size
						);
						ctx.lineTo(x, y + 0.25 * s.size);
						ctx.fill();
					}

					function getRandomPosition() {
						pos = {
							x: Math.floor(s.size + (c.width - 2 * s.size) * Math.random()),
							y: Math.floor((c.height - s.size) * Math.random())
						};
					}

					function drawCaptcha() {
						c.style.color = "#000";
						p.style.left = slider.value = 0;
						slider.setAttribute("max", Math.round(img.width - s.size));
						ctx.clearRect(0, 0, c.width, c.height);
						ctx.drawImage(img, 0, 0);
						getRandomPosition();
						drawPuzzle();
						drawGhost();
					}

				}


			}

			xacnhan('createCaptcha');

					//ketthuc ham getcapcha
				//}
		}
		QT003();
  
  
  }




