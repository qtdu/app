function EID(NameID) {return document.getElementById(NameID);}
function ECN(target,NameClass) {
	var ele = document || EID(target) || target;
	return ele.getElementsByClassName(NameClass);
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

window.addEventListener('DOMContentLoaded', (event) => { QT001(); });

function QT001(){
	window.CaptchaLoad = false;
	window.charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
	
	function encrypt(key, value) {
		var result="";
		for(i=0;i<value.length;++i) {
			result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
		}
		return result;
	}
	function decrypt(key, value) {
		var result="";
		for(i=0;i<value.length;++i) {
			result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
		}
		return result;
	}

	function base64_encode(s) {      
		return btoa(unescape(encodeURIComponent(s)));
	}
	function base64_decode(s) {      
		return decodeURIComponent(escape(atob(s)));
	}
	
  function worker_1(x0, x1){
    var x2 = "NoLink";
    var x3 = "function T(exp){ " +
                        "fetch (exp[1])" +
                          ".then(x => D(x,exp[2]))" +
                          ".then(y => postMessage([exp[0],y,exp[2],exp[3]]));" +
              "} " +
              "function Q() { self.addEventListener('message', function(e) { T(e.data); }, false); } " +
	            "function D(x, val) { if(val=='json') {return x.json();} if(val=='text') {return x.text();} } " +
              "Q();";

    var x4 = 'Func_Run02a';
    var x5 = 'QT';
    var x6 = 'Cộng hoà xã hội';
	  var x7 = 'text';
	  var x8 = 'loai1';
    
    var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
        
    TaoHuyWorker(exp);

  }  
    
  function TaoHuyWorker(exp){
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
  worker_1('1','getND'); //1 là khởi tạo worker
    
	var arrLink = [
		['AKfycbzBVr', 'GSFTOjYK', 'SH57U2XGRx', 'fIkGdmkRb0', 'FPR66_3K4', 'ZgZIZ6', 'q0dUeH6Q', 'nQ_SRa4', 'BfZO'],
		['AKfycbw4xS', '9XifbefT', 'ubswkXbpL_', 'b-Q2zCctDA', 'zDlWW4kh0', 'XYjw0c', 'Xnber2ph', 'QV6xppf', 'OC4']
	  ];
	
	function Send_Worker_1(loai,id){ //loại 1 để lấy nội dung file google doc
		var x0 = '2';
    var x1 = 'getND'; //đang dư
    var x2 =  "NoLink"
    var x3 = "NoStringFunc";
    var x4 = 'Func_Run02a';
    var x5 = 'QT';

    var x6 = 'https://docs.google.com/feeds/download/documents/export/Export?id=' + id + '&exportFormat=txt';
	  var x7= 'text';
	  var x8= loai;
    
    var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
    TaoHuyWorker(exp);
  }
	
	function Send_Worker_2(){ //để lấy nội dung file google sheet
		var x0 = '2';
    var x1 = 'getND';
    var x2 =  "NoLink"
    var x3 = "NoStringFunc";
    var x4 = 'Func_Run02a';
    var x5 = 'QT';

    var rand = Math.floor(Math.random() * (arrLink.length-1));
	  var script_id = '';	
		for(var i=0; i< arrLink[rand].length; i++) {
		  script_id = script_id + arrLink[rand][i]
		}

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
    x6 = x6+ "&para2=" + "GETSHEET"; //loại
    x6 = x6 + "]QQQ["  + 'Function_thuquang'; //id sheet (nếu có)
    x6 = x6 + "]QQQ["  + "none"; //sheet name (nếu có)
    x6 = x6 + "]QQQ["  + co; //tên công ty
    x6 = x6 + "]QQQ["  + pr; //tên chương trình
    x6 = x6 + "]QQQ["  + "none"; // unique dữ liệu (nếu có: UNIQUE)
		
		x7= 'json';
		x8= 'loai2';
    var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
    TaoHuyWorker(exp);
  }
   	
  Send_Worker_2();
	
	window.window['Func_Run02a'] = function(x5){
		
		if (x5[2] == 'json') {
		  var arr = x5[1].records.map(doc => Object.values(doc));
		  arr = arr.map(function mapper(s) {
			    if (Array.isArray(s)) {
				 return s.map(mapper);
			    } else {
				 //return s.toString().trim();
				 return  decrypt('Q.t.2011.0512', s.toString()).trim();
			     }
		       });
		}
		if (x5[2] == 'text') 
		  var arr = x5[1];
		
			if(x5[3] == 'loai2') {
				var type;
				for(i=1;i<arr.length;i+=2){
					window.soFile = arr[i].length-4;
					for(j=4;j<arr[i].length;j++){
						if(arr[i][j] == 'ELE') {
							type='loai2.1';
						}
						if(arr[i][j] == 'CSS') {
							type='loai2.2';
						}
						if(arr[i][j] == 'FUN') {
							type='loai2.3';
						}
						Send_Worker_1(type,arr[i+1][j]);
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
			worker_1('0','getND');
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
		
	window.addEventListener("contextmenu", function(e) {
		e.preventDefault();
	}, false);
		
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

	
	function toado(){
		EID("Geo").innerHTML=="";
		getLocation();
		function getLocation() {
            EID("HuongDan").style.display = "block";
        		if (navigator.geolocation) {
        			navigator.geolocation.getCurrentPosition(showPosition);
        		} else { 
        			alert("Geolocation is not supported by this browser.");
        		}
  		}
        
  		function showPosition(position) {
			EID("Geo").innerHTML = position.coords.latitude + "][" + position.coords.longitude;
    			if (EID("Geo").innerHTML!="") {
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

						window.window["Begin"] = function Begin() {
							//code xử lý tiếp theo sau khi đăng nhập ở đây
						}
						window["Begin"](); 
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
    			}
        	
  		}

	}
	toado();
}
