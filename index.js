function EID(NameID) {return document.getElementById(NameID);}
  function ECN(target,NameClass) {
    var ele = document || EID(target) || target;
    return ele.getElementsByClassName(NameClass);
  }
  function getEle(ele, arr) {
      for(var i=0; i<arr.length; i++){
        if (arr[i] == -1) { var ele = ele.parentElement; continue; }
        var ele = ele.children[arr[i]];
      }
      return ele;
  }
  function childOf(c, p) { 
    while((c=c.parentNode)&&c!==p); return !!c; 
  }
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

			if(co == null && pr== null) {
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
				"if(exp[2] == 'myself') { postMessage(exp); }" + 
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
		      window[x1].onmessage = function (event) { window[x4](event.data);};

	      } else {
		      alert("Sorry, your browser does not support Web Workers...");
	      }
	    }

	    function stopWorker(){ 
	      window[x1].terminate(); 
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

      //script_id = window['base64_decode'](window['decrypt']('Q.t.2011.0512',window['getlink']('none')));
      //script_id = window['decrypt']('Q.t.2011.0512',window['getlink']('none'));
      script_id = window['decrypt']('Q.t.2011.0512',window['base64_decode'](window['getlink']('none')));
      /*
      var rand = Math.floor(Math.random() * (window['arrLink'].length-1));
      var script_id = '';	
      for(var i=0; i< window['arrLink'][rand].length; i++) {
        script_id = script_id + window['arrLink'][rand][i]
      }
      */

      var x6 = "https://script.google.com/macros/s/" + script_id + "/exec";
      //x6 = x6 + "?P=Express&para1=F001&para2=none]QQQ[" + '1xO2fOPwAjAEdeR_muzIRRPcSzG6lD3Z4VxTcOI9QP44'; //link MenuCuocQuocGia
      //x6 = x6 + "]QQQ[" + "00a";
      //x6 = x6 + "]QQQ[" + "select A, B, C, D, E";
      //var x6 = "https://script.google.com/macros/s/" + "AKfycbzBVrGSFTOjYKSH57U2XGRxfIkGdmkRb0FPR66_3K4ZgZIZ6q0dUeH6QnQ_SRa4BfZO" + "/exec";

      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      var co = urlParams.get('co');
      var pr = urlParams.get('pr');

      co = (co==null) ? "Main" : co;
      pr = (pr==null) ? "Main" : pr;

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

	  //window['Send_Worker_2']();

    window.window['Func_Run02a'] = function(x5){
      if (x5[2] == 'json') {
        var arr = x5[1].records.map(doc => Object.values(doc));
        arr = arr.map(function mapper(s) {
          if (Array.isArray(s)) {
            return s.map(mapper);
          } else {
            //return s.toString().trim();
            return  window['decrypt']('Q.t.2011.0512', s.toString()).trim();
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
        var type;
        for(i=1;i<arr.length;i+=2){
          window.soFile =0;
          for(j=4;j<arr[i].length;j++){
            if (arr[i][j] == 'ELE' || arr[i][j] == 'CSS' || arr[i][j] == 'FUN') {
              soFile = soFile + 1;
              if(arr[i][j] == 'ELE') {
                type='loai2.1';
              }
              if(arr[i][j] == 'CSS') {
                type='loai2.2';
              }
              if(arr[i][j] == 'FUN') {
                type='loai2.3';
              }
              window['Send_Worker_1'](type,arr[i+1][j], 'text');
            } else	{
                  //DisplayGoogleDoc_PDF(arr[i][j], arr[i+1][j]);
                EID(arr[i][j]).src = "https://docs.google.com/viewer?srcid=" + arr[i+1][j] + "&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
            }
          }
        }
      }

      if(x5[3] == 'loai2.1') { //ELE
        XulyELE(arr);
        soFile = soFile-1;	
      }

      if(x5[3] == 'loai2.2') { //CSS
        XulyCSS(arr);
        soFile = soFile-1;
      }

      if(x5[3] == 'loai2.3') { //FUN
        XulyFunc(arr);
        soFile = soFile-1;
      }

      if(soFile == 0) {
            //soFile = 1;
            //worker_1('0','getND');
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var pr = urlParams.get('pr');

        pr = (pr==null) ? "Main" : pr;

        window['func_' + pr]('OK');
      }


    }

    function XulyFunc(arr) {
      var arrFunc = arr.split('*QTDU*');
      var tenham = arrFunc[1].replace(/(\r\n|\n|\r)/gm, " ");
      tenham = tenham.trim();

        //var ndham = arrFunc[2].replace(/(\r\n|\n|\r)/gm, " "); //thay thế 3 kiểu ký tự xuống hàng
        //ndham = ndham.replace(/\s+/g," "); //thay thế 2 khoảng trắng bằng 1 khoảng trắng
      var ndham = arrFunc[2].replace(/[“”]/g,"\"");
        //var ndham = ndham.replace(/[“”]/g,"\"");
      ndham = ndham.replace(/[‘’]/g,"'");

      ndham = ndham.trim();

      this['func_' + tenham] = new Function('return ' + ndham)();

      try { this['func_' + tenham](); }
      catch(err) {}
    }
    function XulyCSS(arr) {
      var arr = arr.replace(/[“”]/g,"\"");
      arr = arr.replace(/[‘’]/g,"'");
      document.head.innerHTML +=  arr;
    }
    function XulyELE(arr) {
      var arrFunc = arr.split('*QTDU*');

      for(var i=1; i<arrFunc.length-1; i+=2) {
        var tenele = arrFunc[i].replace(/(\r\n|\n|\r)/gm, " ");
        tenele = tenele.trim();
        var arrtenele = tenele.split('||');

        var ndele = arrFunc[i+1].replace(/[“”]/g,"\"");
        ndele = ndele.replace(/[‘’]/g,"'");

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
        Iy = EID('header').offsetHeight - ECN('content', 'zoom-container')[0].offsetHeight;
        Zw = zoom.offsetWidth;
        Zh = zoom.offsetHeight;

        var v1a = ( x ) + 'px'; //( x ) + 'px';
        var v1b = ( y - Iy ) + 'px'; //( y - Iy) + 'px';
        var v2a = (( Ix - x ) * ratio + Zw/2) + 'px '; //(( Ix - x ) * ratio + Zw/2) + 'px ';
        var v2b = (( Iy - y ) * ratio + Zh/2) + 'px'; //(( Iy - y ) * ratio + Zh/2) + 'px';

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
			clearInterval(myInterval);
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
	
		function QT002() {
			var quyen = [['camera','vitri','Đọc clipboard','Ghi clipboard'],
				     [0,0,1,1]
				    ];
			
			function QT002b() {
				navigator.permissions.query({ name: 'camera' }).then((permissionStatus1) => {
					if(permissionStatus1.state == 'granted') {
						quyen[1][0] = 1;
					} else {
						EID('doc').style.display = 'block';
						EID('HuongDan').innerHTML = 'Do chương trình sử dụng tính năng dọc barcode nên bạn phải bật camera và cho phép truy cập camera, chương trình mới hoạt động. Xin cảm ơn';
						EID('HuongDan').style.display = 'block';
					}
					permissionStatus1.onchange = () => {
						if(batdau == false)
							location.reload(true);
					}
				});
				
				navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus2) => {
					if(permissionStatus2.state == 'granted') {
						quyen[1][1] = 1;
					} else {
						EID('doc').style.display = 'block';
						EID('HuongDan').innerHTML = 'Do chương trình sử dụng tính năng tracking đơn hàng nên bạn phải bật định vị và cho phép truy cập định vị, chương trình mới hoạt động. Xin cảm ơn';
						EID('HuongDan').style.display = 'block';
					}
					permissionStatus2.onchange = () => {
						if(batdau == false)
							location.reload(true);
					}
				});
				

				if(quyen[1].indexOf(0)<0) {
					QT003();
				} else {
					navigator.mediaDevices.getUserMedia({video: true});
				}
			}
			window.myInterval = setInterval(QT002b, 2000);
			QT002b();
		}

		
	
		function toado(){
			EID("Geo").innerHTML=="";

			
			getLocation();
			function getLocation() {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(showPosition);
				} else { 
					alert("Geolocation is not supported by this browser.");
				}
			}
			QT002();

			function showPosition(position) {
				EID("Geo").innerHTML = position.coords.latitude + "][" + position.coords.longitude;
			}

		}

		toado();

	}
