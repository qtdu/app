function Main(chophep) {

  if(chophep!='OK') return;

  var currentTime;
  var currentInput ='';
  var currentCamera = '';

  window.window['xulyTinWorker'] = function(x) {
    //hàm này để xử lý tin từ worker trả về
    if(x[3]=='loai11') { //zoom trở lại như ban đầu
      //alert('Q');
      window.scrollTo(0, 0);
    }

    if(x[3]=='loai12') { //Xủ lý tin từ Qrcode
      //alert(x);
      
      var arrCode = x[1].split(']QQQ[')
      importBarcode(arrCode);
      
      
    }

    if(x[3]=='loai13' || x[3]=='loai14') { //Xủ lý tin từ Qrcode lưu thành công server trả về
      //alert(x[1]);
      var arr = x[1].records.map(doc => Object.values(doc));
		  arr = arr.map(function mapper(s) {
			    if (Array.isArray(s)) {
				 return s.map(mapper);
			    } else {
				 //return s.toString().trim();
				 return  window['decrypt']('Q.t.2011.0512', s.toString()).trim();
			     }
		  });
      if(x[3]=='loai13'){
        
      }
      if(x[3]=='loai14'){
        alert(arr)
      }
    }



  }




  

  function childOf(c, p) { 
    while((c=c.parentNode)&&c!==p); return !!c; 
  }



  function QGetThoiGian(num){
    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
    return localISOTime.replace(/[^0-9]/g, "").slice(0, num);
    //return window['Func_RemoveCharacter']('[^0-9]','g',localISOTime).slice(0, num);
  }

  EID('imageLogo1').addEventListener('click', function(e) { location.href = "https://3nhat.github.io/Group"; } , false);

  function Func_Alert(x){
    var tenham = x_Alert[x][0];
    var doiso = x_Alert[x][1];
    if(tenham == 'none'){
      EID('Alert').style.display = 'none';
    } else {
      window[tenham](doiso);
    }
  }
  EID('Alert_header_1').addEventListener('click', function(e) { Func_Alert(0); } , false);
  EID('Alert_header_3').addEventListener('click', function(e) { Func_Alert(1); } , false);
  EID('Alert_header_2').addEventListener('click', function(e) { window['QWrite2Clipboard'](EID('Alert_body')); } , false);

  function Func_Control(x){
    EID('Control').style.display = 'none';
  }
  EID('Control_header_1').addEventListener('click', function(e) { Func_Control(0); } , false);
  EID('Control_header_3').addEventListener('click', function(e) { Func_Control(1); } , false);


  
  
  getEle(EID('Iframe'), [0,0,0,0,1]).addEventListener('click', function(e) { 
    
    EID('Iframe').style.display = 'none';

    tab = 1;

  } , false);

  EID('content1a_button_1').addEventListener('click', function(e) { 
    testthunghiem();
  } , false);

  EID('content2a_button_1').addEventListener('click', function(e) { 
    EID('Control').style.display = 'flex';  
    EID('Control_header_2').innerHTML =  'Nhóm nút cột xanh';
  } , false);

  EID('content3a_button_1').addEventListener('click', function(e) { 
    EID('Control').style.display = 'flex';  
    EID('Control_header_2').innerHTML =  'Nhóm nút cột tím';
  } , false);

  
  EID('content1a_button_2').addEventListener('click', function(e) { 
    window['QRead2Clipboard'](EID('content1a_input'))
  } , false);

  EID('content2a_button_2').addEventListener('click', function(e) { 
    window['QRead2Clipboard'](EID('content2a_input'))
  } , false);


  function AddEleDrag(idName) {
    var box1 = EID(idName);
    box1.addEventListener('touchmove', function(e) {
      var touchLocation = e.targetTouches[0];
      box1.style.left = (touchLocation.pageX - box1.offsetWidth/2) + 'px';
      box1.style.top = (touchLocation.pageY - box1.offsetHeight/2) + 'px';
    })

    box1.addEventListener('touchend', function(e) {
      var x = parseInt(box1.style.left);
      var y = parseInt(box1.style.top);
    })
  }
	
  AddEleDrag('VirtualButton');
  window['func_dragElement'](EID('VirtualButton'));

  var idListSort = [EID('content1b_c2')];
  window['func_DragDropSortableList'](2, idListSort, '.STT_VD]QDQ[1500');


  document.addEventListener('swiped-right', function(e) {
  	//EID('content').addEventListener('swiped-right', function(e) {	
	  //alert(e.target.className); // element that was swiped
  		//alert(e.detail); // see event data below
      ChuyenTabNoiDung(e.target,1);
	});
  document.addEventListener('swiped-left', function(e) {
      ChuyenTabNoiDung(e.target,-1);
	});
  
  function ChuyenTabNoiDung(ele, v){
    var chophepTab = root.style.getPropertyValue('--display-STT_VD');
    chophepTab = 'none';

    

    if(chophepTab!='none') {
      //EID('Alert').style.display = 'flex';

      return;
      
    }
    //content1b
    var arr = [['--display-content1', '--display-content2', '--display-content3'],
                []
              ];
    for(var i=1;i<=arr[0].length;i++){
      arr[1][i-1] = childOf(ele, EID('content' + i + 'b'));
    }

    var timthay = arr[1].indexOf(true);

    var str1 = arr[0][timthay];
    var str2 = str1.substring(10,str1.length);
    var dis = EID(str2 + 'b').style.display;

    if(dis == 'none') return;

    if(timthay<0) return;

    timthay = (timthay + v);
    timthay = (timthay==-1)? arr[0].length - 1 : timthay;
    timthay = timthay % arr[0].length;
    
    for(i=0; i<arr[0].length; i++){
      root.style.setProperty(arr[0][i],'none');

    }

    root.style.setProperty(arr[0][timthay],'block');

    var str1 = arr[0][timthay];
    tab = 1*str1.substring(17,str1.length);


  
  }

  var QR1 = EID('content3b').getElementsByClassName('flex_1_1');

    for (var j=0; j< QR1.length; j++) {
          QR1[j].innerHTML = '';
          window['func_jsQr'](QR1[j], 'https://3nhat.github.io/Group/', 96, 96, 2, '#ff0000', '#ffffff', 'https://3nhat.github.io/Image/user.jpg', 25, 25, '#ffffff', false);
  }

  var bar = EID('content3b').getElementsByClassName('image_flex_6_1');
          for(var k=0; k<bar.length; k++){
            window['func_jsBar'](bar[k],'V987654Q', '#000', 1, 60, false); 
            
          }

  var cls = EID('content3b').getElementsByClassName('flex_5_2');
          for(var k=0; k<cls.length; k++){
            cls[k].innerHTML = "<img class='image' src='" + 'https://3nhat.github.io/Image/user.jpg' + "' />";
            
          }

  ECN('content','content1_div2')[0].style.display = 'none';
  ECN('content','content1_div1')[0].style.display = 'none';
  ECN('content','content2_div2')[0].style.display = 'none';
  ECN('content','content2_div1')[0].style.display = 'none';
  ECN('content','content3_div2')[0].style.display = 'none';
  ECN('content','content3_div1')[0].style.display = 'none';
  ECN('content','content_image')[0].style.display = 'block';

  

  function loadControlTam(loai, tyle, chieurong) {
    var arr = [
        			['.c1:has(khung1)',

                        '--w-container', 'calc((var(--width-content) - 4 * var(--size-mau)/40))', 
                        '--w', 'calc(var(--w-khung1) + (1.5 + var(--scale))*var(--pad) + 4*var(--pad))',
                        '--w-c5','calc(var(--tyle) * var(--w) - 4*var(--pad))',
                       	'--h', 'calc(9*var(--w-chuan)/4 + 2 * (var(--scale) - 1)*var(--pad) + var(--pad) + 2px)',
                        
						'--display-icon1','block',
                        '--display-icon2','block',
                        '--display-icon3','block',
                        '--display-icon4','none',
                        '--display-icon5','block',
                        '--display-khung2','none',
                        '--display-marquee_k345','none',
                        '--display-khung3','none',
                        '--display-khung4','none',
                        '--display-khung5','none',
                        '--scale','1',

           			],
                    
                    ['.c1:has(khung1)',
                    

						'--w-container', '900px', 
                        '--w', 'calc(var(--w-khung1) + (1.5 + var(--scale))*var(--pad))',
                        '--w-c5','calc(var(--tyle) * var(--w) - 2*var(--pad) - 2*var(--pad))',
                       	'--h', 'calc(8*var(--w-chuan)/4 + 2 * (var(--scale) - 1)*var(--pad) + 2px)',
                        
						                    	
                    	'--display-icon1','block',
                        '--display-icon2','block',
                        '--display-icon3','none',
                        '--display-icon4','block',
                        '--display-icon5','block',
                        '--display-khung2','none',
                        '--display-marquee_k345','none',
                        '--display-khung3','none',
                        '--display-khung4','none',
                        '--display-khung5','none',
                        '--scale','1',


           			],
                    
                    ['.c1:has(khung1)',
						
						'--w-container', 'calc(var(--width-content) - 4 * var(--size-mau)/40)', 
                        '--w', 'calc(var(--w-container))',
                        '--w-c5','calc(var(--tyle) * var(--w) - 2*var(--pad) - 6*var(--pad)/(2*var(--thietbi) - 1))',
                       	'--h', 'calc(7*var(--w-chuan)/4 + 2.6 * var(--pad) + 2px)',
                        
						'--display-icon1','none',
                        '--display-icon2','block',
                        '--display-icon3','block',
                        '--display-icon4','none',
                        '--display-icon5','none',
                        '--display-khung2','flex',
                        '--display-icon6','block',
                        '--display-icon7','block',
                        '--display-icon8','block',
                        '--display-icon9','block',
                        '--display-icon10','block',
                        '--display-icon11','none',
                        '--display-icon12','none',
                        '--display-marquee_k345','block',
                        '--display-khung3','flex',
                        '--display-khung4','flex',
                        '--display-khung5','flex',
                        '--scale','1',
           			],
                    
                    ['.c1:has(khung1)',
						
						'--w-container', '600px', 
                        '--w', 'calc(var(--w-container))',
                        '--w-c5','calc(var(--tyle) * var(--w) - 2*var(--pad) - 2*var(--pad))',
                       	'--h', 'calc(6*var(--w-chuan)/4 + 2.1 * var(--pad) + 2px)',
                        
						'--display-icon1','none',
                        '--display-icon2','block',
                        '--display-icon3','none',
                        '--display-icon4','block',
                        '--display-icon5','none',
                        '--display-khung2','flex',
                        '--display-icon6','block',
                        '--display-icon7','block',
                        '--display-icon8','block',
                        '--display-icon9','block',
                        '--display-icon10','block',
                        '--display-icon11','none',
                        '--display-icon12','none',
                        '--display-marquee_k345','block',
                        '--display-khung3','flex',
                        '--display-khung4','flex',
                        '--display-khung5','flex',
                        '--scale','2',
           			],
                    
                     ['.c1:has(khung1control1)',
						
						'--w-container', 'calc(0.8 * var(--width-content))', 
                        '--w', 'calc(var(--w-container))',
                        '--w-c5','calc(var(--tyle) * var(--w) - 2*var(--pad) - 12*var(--pad)/var(--thietbi))',
                       	'--h', 'calc(5*var(--w-chuan)/4 + 2 * var(--scale)*var(--pad) + 2px)',
                        
						'--display-icon1','block',
                        '--display-icon2','none',
                        '--display-icon3','none',
                        '--display-icon4','none',
                        '--display-icon5','none',
                        '--display-khung2','flex',
                        '--display-icon6','none',
                        '--display-icon7','none',
                        '--display-icon8','none',
                        '--display-icon9','none',
                        '--display-icon10','none',
                        '--display-icon11','block',
                        '--display-icon12','none',
                        '--display-marquee_k345','none',
                        '--display-khung3','none',
                        '--display-khung4','none',
                        '--display-khung5','none',
                        '--scale','2',
           			],
                    
                    ['.c1:has(khung2)',
						
						'--w-container', 'calc(var(--width-content) - 4 * var(--size-mau)/40)', 
                        '--w', 'calc(var(--width-content) - 4 * var(--size-mau)/40)',
                        '--w-c5','calc(var(--tyle) * var(--w) - 2*var(--pad) - 12*var(--pad)/(2*var(--thietbi) - 1))',
                       	'--h', 'calc(5*var(--w-chuan)/4 + 2 * var(--scale)*var(--pad) + 2px)',
                        
						'--display-icon1','block',
                        '--display-icon2','none',
                        '--display-icon3','none',
                        '--display-icon4','none',
                        '--display-icon5','none',
                        '--display-khung2','flex',
                        '--display-icon6','block',
                        '--display-icon7','none',
                        '--display-icon8','none',
                        '--display-icon9','none',
                        '--display-icon10','none',
                        '--display-icon11','none',
                        '--display-icon12','block',
                        '--display-marquee_k345','none',
                        '--display-khung3','none',
                        '--display-khung4','none',
                        '--display-khung5','none',
                        '--scale','2',
           			]
        
        		];

        
        var q = document.querySelector(arr[loai-1][0]);
        for(var j=1; j<arr[loai-1].length; j+=2){
            	if (arr[loai-1][j]=='') break;
                try{ 
                	if(arr[loai-1][j] == '--scale') {
                    	arr[loai-1][j+1] = tyle;
                    }
                    if(arr[loai-1][j] == '--w-container' && chieurong !='' && 1*chieurong > 350) {
                        arr[loai-1][j+1] = chieurong + 'px';
                    }
                    q.style.setProperty(arr[loai-1][j],arr[loai-1][j+1]); }
                catch(err) { break;}
        }  

  }
  loadControlTam(3,1,'');
  loadControlTam(5,2,'');

  loadControlTam(6,2,'');

  /*
  var marquee = ECN('header1','marquee_header')[0];
  var wtenCty = marquee.children[0].offsetWidth;
  marquee.style.width = (ECN('header1').offsetWidth + 2*wtenCty) + 'px' ;
  marquee.style.marginLeft = -1*wtenCty + 'px';
  */

  
  

  var viewport = window.visualViewport;
  var tab = 0;

  function resizeHandler() {
    //ZOOM = viewport.scale;
    //alert(viewport.scale);
    if (viewport.scale == 1) {
      if(tab==0) {
          EID('Iframe_header_1').style.display = 'flex';
          root.style.setProperty('--top-Iframe','calc(5 * var(--size-mau)/4 + (12 + 2.5 * var(--thietbi)) * var(--size-mau)/40)');
          root.style.setProperty('--h-Iframe','calc( var(--height-content))');
        } else {

          EID('header').style.display = 'block';
          ECN('content', 'content' + tab + 'a')[0].style.display = 'flex';
          ECN('content', 'content' + tab + 'b')[0].style.display = 'flex';
          ECN('content', 'Iframe' + tab + '_header')[0].style.display = 'flex';
          //EID('Iframe' + tab).style.position = 'fixed';
          alert(window.pageYOffset);
          //window.scrollTo(0, 0);
        }
        
        //alert('Bạn vừa thoát chế độ zoom và quay lại chương trình')
        //window.scrollTo(0, 0);

        //window['Send_Worker_1']('loai11','ZoomFix', 'myself');
        
      

      
    } else {
        
      //setTimeout(function(){ 

          if(tab==0) {
            EID('Iframe_header_1').style.display = 'none';
            root.style.setProperty('--top-Iframe',0);
            root.style.setProperty('--h-Iframe','100%');


          } else {
            
            //EID('Iframe' + tab).style.position = 'fixed';
            
            if(EID('header').style.display == 'block' || EID('header').style.display == '') {
              EID('header').style.display = 'none';
              ECN('content', 'content' + tab + 'a')[0].style.display = 'none';
              ECN('content', 'content' + tab + 'b')[0].style.display = 'none';
              ECN('content', 'Iframe' + tab + '_header')[0].style.display = 'none';
            }
            

            
            
          }
          
      //}, 1000);
        
      ECN('content', 'content1')[0].style.display = 'none';
      ECN('content', 'content' + tab)[0].style.display = 'block';
        
 
      
    }
    
    //if(EID('header').style.display == 'block') window.scrollTo(0, 0);
    

  }   
  window.visualViewport.addEventListener('resize', resizeHandler);
  

  if(thietbi==false) {
    let str = "<div class='marquee_cty'><div class='marquee_cty_inner'><div class='marquee_cty_content'>Công ty xxx - 1/37 Hoàng Việt, P4, Q.Tân Bình - email: nvquang.hcmpt@gmail.com - tel: 0938687388</div></div></div>";
    EID('header1').innerHTML = str;
  } else {
    let str = "<div class='-names'><div>Công ty xxx - 1/37 Hoàng Việt, P4, Q.tân Bình - email: nvquang.hcmpt@gmail.com - tel: 0938687388</div></div>";
    EID('header1').innerHTML = str;
  }

  var img = EID('image2zoom');
  //img.src = "http://farm6.staticflickr.com/5474/9765019294_91f9710e92_b_d.jpg";
  img.src = "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  window['onLoadImage']();


  EID('ReadQRcode').style.display = 'block';
  
  
  var QRcode_current = 'Read'; //File
  var QRcode_support = 'dontsupport'; //none
  var arrScanBarcode = ['dontsupport', 'support', 'EAN_13', 'UPC_A', 'UPC_E', 'UPC_EAN_EXTENSION', 'CODE_128', 'CODE_39'];
  

  if(thietbi == true) {
    

    var str1 = '';
    var str2 = '';
    var str3 = '';
    var str4 = '';
    for(var i=0; i< arrScanBarcode.length; i++){
      str1 = str1 + "<option value='" + arrScanBarcode[i] + "'>" + arrScanBarcode[i] + "</option>";
      str2 = str2 + "<div id='reader_" + arrScanBarcode[i] + "'></div>";
      str3 = str3 + "]TTT[" + "reader_" + arrScanBarcode[i];
      str4 = str4 + "]TTT[" + arrScanBarcode[i];
    }
    EID('ReadQRcode_selecta').innerHTML = str1;
    EID('ReadQRcode_reader').innerHTML = str2;

    /*
    function KiemtraQRcodeDaLoad(){
      alert(1);
    }
    for(var i=0; i< arrScanBarcode.length; i++){
      EID(arrScanBarcode[i]).addEventListener('DOMSubtreeModified', KiemtraQRcodeDaLoad);
    }
    */

    str3 = str3.substring(5,str3.length);
    str4 = str4.substring(5,str3.length);
    
    EID('ReadQRcode_reader').style.opacity = "0";
    window['func_ScanBarcode'](str3 + "]QQQ[" + str4 + "]QQQ[Send_Worker_1]QQQ[loai12");
    
    
    
    setTimeout(function(){ 
      
      for(i=0;i<arrScanBarcode.length;i++){
        EID("reader" + "_" + arrScanBarcode[i]).style.display = 'none';
        EID("reader" + "_" + arrScanBarcode[i] + '__dashboard_section').style.opacity = "0";
        EID("reader" + "_" + arrScanBarcode[i] + '__header_message').style.opacity = "0";
        var ele = EID("reader" + "_" + arrScanBarcode[i]);

        try{
          var ELE = ele.querySelectorAll('button');
          for(var j=0; j<ELE.length; j++) {
            if(ELE[j].innerHTML == 'Stop Scanning') { 
              ELE[j].click();
              break;
            }
          }
        } catch(err) {}

        var ELE = ele.querySelectorAll('*');
        ELE[0].style.opacity = "0";
        ELE[24].style.opacity = "0";
        
          
      }

      //SelectQRChange(arrScanBarcode[0]);

      EID('ReadQRcode_reader').style.opacity = "1";
    }, 10000);

    

    EID('ReadQRcode_selecta').addEventListener('change', function(e) { 
      SelectQRChange(e.target.value);

    } , false);

    function SelectQRChange(giatri) {
     

      EID('ReadQRcode_reader').style.opacity = "0";

      for(i=0;i<arrScanBarcode.length;i++){
        EID("reader" + "_" + arrScanBarcode[i]).style.display = 'none';
      }

      var ele = EID("reader" + "_" + QRcode_support);
      try{
        
        var ELE = ele.querySelectorAll('button');
        for(var j=0; j<ELE.length; j++) {
          if(ELE[j].innerHTML == 'Stop Scanning') { 
            ELE[j].click();
            break;
            
          }
        }
      }catch(err) {}
      
      
      QRcode_support = giatri;

      var ele = EID("reader" + "_" + QRcode_support);
      ele.style.display = 'block';

      setTimeout(function(){ 
        //getEle(EID('ReadQRcode'),[1,1]).click();
        getEle(EID('ReadQRcode_button_parent'),[0,2]).click();
      }, 2000);
      
      EID('ReadQRcode_reader').style.opacity = "1";
    }

    //getEle(EID('ReadQRcode'),[1,1]).addEventListener('click', function(e) { 
    getEle(EID('ReadQRcode_button_parent'),[0,2]).addEventListener('click', function(e) {
      root.style.setProperty('--margin-top-reader','calc(3*var(--margin_reader))');
      root.style.setProperty('--height-reader','calc(0.5*var(--size-standard)/4 + 375px)');

      var ele = EID("reader" + "_" + QRcode_support);

      

        var ELE = ele.querySelectorAll('button');
        for(var j=0; j<ELE.length; j++) {
            if(ELE[j].innerHTML == 'Stop Scanning') { 
              ELE[j].click();
              break;
            }
        }

      var ELE = ele.querySelectorAll('select');
      for(var j=0; j<ELE.length; j++) {
        var text = ELE[j].id || ELE[j].innerHTML || ELE[j].value;
        if(text == "reader" + "_" + QRcode_support + '__camera_selection') {
          var opt = ELE[j].children;
          if(QRcode_current == 'Read'){
            for (k=0; k< opt.length; k++) {
              if(ELE[j].value == opt[k].value) {
                var vitri = (k+1) % (opt.length);
                ELE[j].value = opt[vitri].value;
                currentCamera = opt[vitri].innerHTML;
                break;
              }
            }
          }
          QRcode_current = 'Read';
          //ELE[j].value = opt[opt.length-1].value;
          break;
        }
      }  

      var ELE = ele.querySelectorAll('button');
      for(var j=0; j<ELE.length; j++) {
        try{
          var text = ELE[j].innerHTML || ELE[j].value || ELE[j].id;
          if(text == 'Request Camera Permissions') {
            ELE[j].click();
            break;
          }

          if(text == 'Start Scanning') {
            ELE[j].click();
            break;
          }

        }
        catch(err){}
          
      }
      
    } , false);


    //getEle(EID('ReadQRcode'),[1,2]).addEventListener('click', function(e) { 
    getEle(EID('ReadQRcode_button_parent'),[0,3]).addEventListener('click', function(e) {

      QRcode_current == 'File';
      EID('ReadQRcode_reader').style.opacity = "0";
      
      
      root.style.setProperty('--margin-top-reader','calc(-0.5*var(--size-standard)/4)');
      root.style.setProperty('--height-reader','calc(0.5*var(--size-standard)/4 + 375px - 2.5*var(--size-standard)/4)');

      var ele = EID("reader" + "_" + QRcode_support);
      var ELE = ele.querySelectorAll('button');
      for(var j=0; j<ELE.length; j++) {
          if(ELE[j].innerHTML == 'Stop Scanning') { 
            ELE[j].click();
            break;
          }
      }

      setTimeout(function(){ 
        var ELE = ele.querySelectorAll('a');
        for(i=0; i<ELE.length; i++) {
          var text = ELE[i].innerHTML || ELE[i].value || ELE[i].id;
          if(text == 'Scan an Image File') {
            ELE[i].click();
            break;
          }
        }
      }, 1000);

      setTimeout(function(){ 
        EID("reader" + "_" + QRcode_support + '__filescan_input').click();
        EID('ReadQRcode_reader').style.opacity = "1";

      }, 1000);
      
      var ELE = ele.querySelectorAll('img');
      ELE[0].style.opacity = "0";
      ELE[1].style.opacity = "0";
      //for(i=0; i<ELE.length; i++) {
      //    var text = ELE[i].src;
      //    ELE[0].style.opacity = "0";
      //}
      //ELE[0].style.opacity = "0";
      

    } , false);


    //Nút pause QRcode
    getEle(EID('ReadQRcode_button_parent'),[0,4]).addEventListener('click', function(e) {
      var ele = EID("reader" + "_" + QRcode_support);
      var ELE = ele.querySelectorAll('button');
      for(var j=0; j<ELE.length; j++) {
          if(ELE[j].innerHTML == 'Stop Scanning') {
            ELE[j].click();
            break;
          }
      }

    } , false);
  

    EID('ReadQRcode_result_2').style.display = 'block';
    EID('ReadQRcode_result_1').style.display = 'none';
    EID('ReadQRcode_result_3').style.display = 'none';
    
  } else {

  }

  //Nút đóng QRCode
  getEle(EID('ReadQRcode_button_parent'),[1,6]).addEventListener('click', function(e) {
      EID('header').style.display = 'block';
      EID('content').style.display = 'block';
      EID('ReadQRcode').style.display = 'none';
  } , false);

  //Nút Maximize QRCode
  getEle(EID('ReadQRcode_button_parent'),[1,0]).addEventListener('click', function(e) {
    var ele1 = getEle(EID('ReadQRcode_button_parent'),[0]);
    var ele2 = getEle(EID('ReadQRcode_button_parent'),[2]);
    if(ele1.style.display == 'none') {
      ele1.style.display = 'flex';
      ele2.style.display = 'flex';
    }else {
      ele1.style.display = 'none';
      ele2.style.display = 'none';
    }
  } , false);

  //Nút clear toàn bộ barcode đã scan
  getEle(EID('ReadQRcode_button_parent'),[1,4]).addEventListener('click', function(e) {
    if (typeof window['LuuListScanBarcode'] === 'undefined' || window['LuuListScanBarcode'] === null) {
      window.window['LuuListScanBarcode']=[];
          // the variable is defined
      
    }
    window['LuuListScanBarcode']=[];
    getEle(EID('ReadQRcode_result_2'),[1]).innerHTML = '';
    var tieude = getEle(EID('ReadQRcode_result_2'),[0]).children;
    tieude[0].innerHTML = '0-0';

  } , false);

  //Nút clear barcode hiện hành
  getEle(EID('ReadQRcode_button_parent'),[1,2]).addEventListener('click', function(e) {
    if (typeof window['LuuListScanBarcode'] === 'undefined' || window['LuuListScanBarcode'] === null) {
      window.window['LuuListScanBarcode']=[];
    }
    var v = EID('IDGoogle1a').value;
    
    if(v.trim()=='') return;

    var index = window['LuuListScanBarcode'].indexOf(v);

    if(index < 0) return;

    window['LuuListScanBarcode'].splice(index, 1);
    
    var child = getEle(EID('ReadQRcode_result_2'),[1]).children;

    for(var i=0; i< child.length; i++){
      if(child[i].innerText.indexOf(v)>=0) {
        child[i].style.backgroundColor = "black";
        child[i].style.color = "white";
        child[i].children[3].innerHTML = 'Đã xoá';
        //child[i].disabled = true;
        var tieude = getEle(EID('ReadQRcode_result_2'),[0]).children;
        var arrTieude = tieude[0].innerHTML.split('-');
        arrTieude[0] = 1*arrTieude[0] - 1;
        arrTieude[1] = 1*arrTieude[1] + 1;
        tieude[0].innerHTML = arrTieude[0] + '-' + arrTieude[1];
        break;
      }
    }
  
    EID('IDGoogle1a').value = '';
    EID('IDGoogle1a').select();
    Send_Worker_3('DELETE]QTDU[' + v);
  } , false);

  EID('IDGoogle1a').addEventListener('focus', function(e) {
    e.target.select();
    currentInput = 'BARCODE]QQQ[' + e.target.id;
    getEle(EID('ReadQRcode_button_parent'),[1,0]).click();
  } , false);

  EID('IDGoogle1b').addEventListener('focus', function(e) {
    e.target.select();
    currentInput = 'BARCODE]QQQ[' + e.target.id;
  } , false);

  getEle(EID('ReadQRcode_button_parent'),[1,5]).addEventListener('click', function(e) {
    if (currentInput=='') return;
    var arr = currentInput.split(']QQQ[');

    if(arr[0]!= 'BARCODE') return;
    window['QRead2Clipboard'](EID(arr[1]));
  } , false);

  getEle(EID('ReadQRcode_button_parent'),[0,5]).addEventListener('click', function(e) {

    if(currentCamera.indexOf('back')>=0) {
      var ele = EID("reader" + "_" + QRcode_support);
      var ELE = ele.querySelectorAll('button');
      for(var j=0; j<ELE.length; j++) {
          if(ELE[j].innerHTML == 'Switch On Torch') {
            if(ELE[j].style.display == 'none');
            ELE[j].click();
            break;
          }
          if(ELE[j].innerHTML == 'Switch Off Torch') {
            if(ELE[j].style.display == 'none');
            ELE[j].click();
            break;
          }
      }
    }
    
  } , false);

  getEle(EID('ReadQRcode_result_2'),[1]).addEventListener('click', function(e) {
    
    var ele = getEle(e.target,[-1]);
    EID('IDGoogle1a').value = ele.children[1].innerHTML;
    EID('IDGoogle1a').select();
    //ReadQRcode_result_2_khung
  } , false);

  getEle(EID('ReadQRcode_button_parent'),[2,0]).addEventListener('click', function(e) {
    
    //location.href='https://docs.google.com/spreadsheets/d/1EQWXECwfWIA90QuHqZDLkHCTr3tJRmWm6y35dmqZPGg/edit?usp=sharing';
    window.open('https://docs.google.com/spreadsheets/d/1EQWXECwfWIA90QuHqZDLkHCTr3tJRmWm6y35dmqZPGg/edit?usp=sharing','_blank');
  } , false);


  getEle(EID('ReadQRcode_button_parent'),[2,2]).addEventListener('click', function(e) {
    var idgs = EID('IDGoogle1b').value;

    if(idgs.trim() == '') return;
    Send_Worker_4(idgs.trim());
  } , false);
  

  
  document.body.onkeyup = function(event) {
    //e = e || window.event;
    //var target = e.target || e.srcElement;
    var charCode = (event.which) ? event.which : event.keyCode;

    //if (key=='block' && key1=='none'){
      //if (charCode == 18) { window['Func_QXacNhanLienKet'](); return; }
      if (charCode == 13 && document.activeElement == EID('IDGoogle1a')) { importBarcode([event.target.value,'Nhập tay']); event.target.select(); return; }
      //if (charCode == 27 && document.activeElement!=EID('text_eidt')) { window['Func_QEdit_Cancel'](); return; }  
      //return;  
    //}
    
  }

  function importBarcode(arrCode) {
    if (typeof window['LuuListScanBarcode'] === 'undefined' || window['LuuListScanBarcode'] === null) {
        window.window['LuuListScanBarcode']=[];
          // the variable is defined
      }

    var arrBarcode = window['LuuListScanBarcode'];
      if(window['LuuListScanBarcode'].indexOf(arrCode[0])<0){
        
        
        window['LuuListScanBarcode'][arrBarcode.length] = arrCode[0];
        currentTime = 1*QGetThoiGian(17);

        
        var tieude = getEle(EID('ReadQRcode_result_2'),[0]).children;
        var arrTieude = tieude[0].innerHTML.split('-');
        arrTieude[0] = 1*arrTieude[0] + 1;
        tieude[0].innerHTML = arrTieude[0] + '-' + arrTieude[1];
        
        
        Send_Worker_3('NEW]QTDU[' + arrCode[0]);

        var stt = getEle(EID('ReadQRcode_result_2'),[1]).children;

        var str = "<div class='Detail_Barcode'>" +
                    "<div class='Detail_Barcode_1'>" +
                      (stt.length + 1) +
                    "</div>" +
                    "<div class='Detail_Barcode_2'>" +
                      arrCode[0] +
                    "</div>" +
                    "<div class='Detail_Barcode_3'>" +
                      "ghi chú" +
                    "</div>" +
                    "<div class='Detail_Barcode_4'>" +
                      arrCode[1] +
                    "</div>" +
                  "</div>"
        getEle(EID('ReadQRcode_result_2'),[1]).innerHTML = str + getEle(EID('ReadQRcode_result_2'),[1]).innerHTML;
        EID('myAudio1').play();
        
      } else {
        var t = 1*QGetThoiGian(17);
        if(t - currentTime >2000)
          EID('myAudio3').play();
      }
  }

  

  
  //EID('ReadQRcode').style.display = 'none';
  //ReadQRcode_button_parent
  
  EID('header').style.display = 'none';
  EID('content').style.display = 'none';
  

  getEle(EID('content'),[0,0,0]).addEventListener('click', function(e) { //nạp File
    getEle(EID('content'),[0,0,1]).click();
  } , false);

  getEle(EID('content'),[0,0,1]).addEventListener('change', function(e) { //nạp File
    var output = EID('image2zoom');
    
    var type = e.target.files[0].type;
    if(type.indexOf('image')>=0) {
      output.style.display = 'block';
      output.src = URL.createObjectURL(e.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
      }
      EID('zoom_image').style.backgroundImage = 'url(' + output.src + ')';
    } else{
      output.style.display = 'none';
    }
    
  } , false);

  getEle(EID('content'),[0,0,4]).addEventListener('click', function(e) { //upload file
    const file = getEle(EID('content'),[0,0,1]).files[0];
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
      if(file.type.indexOf('image')<0){
        UploadFile(f, file.name, file.type); 
      }else {
        compressImage(EID("image2zoom"), "image2zoom", file.name);
      }
    };
  } , false);


  EID('zoomSize').addEventListener('change', function(e) {
    EID('zoomSizeText').innerText = 'Kích thước: ' + e.target.value/10;
  } , false); 

  EID('zoomQuality').addEventListener('change', function(e) {
    EID('zoomQualityText').innerText = 'Chất lượng: ' + e.target.value/10;
  } , false); 


  function compressImage(imgToCompress, id, fname) {
    var resizingFactor = EID('zoomSize').value/10;
    var quality = EID('zoomQuality').value/10;
    // showing the compressed image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const originalWidth = imgToCompress.width;
    const originalHeight = imgToCompress.height;
    //alert(originalWidth);
    const canvasWidth = originalWidth * resizingFactor;
    const canvasHeight = originalHeight * resizingFactor;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.drawImage(
      imgToCompress,
      0,
      0,
      originalWidth * resizingFactor,
      originalHeight * resizingFactor
    );
    

    // reducing the quality of the image

    canvas.toBlob(
      (blob) => {
        if (blob) {
          const reader = new FileReader();
          reader.readAsArrayBuffer(blob);
          reader.onload = (f) => { UploadFile(f, fname, blob.type) };
        }
      },
      "image/jpeg",
      quality
    );

  }



  const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  function UploadFile(f, fname, ftype) {
    script_id = window['base64_decode'](window['decrypt']('Q.t.2011.0512',window['getlink']('none')))
    /*
    var rand = Math.floor(Math.random() * (window['arrLink'].length-1));
	  var script_id = '';	
		for(var i=0; i< window['arrLink'][rand].length; i++) {
		  script_id = script_id + window['arrLink'][rand][i]
		}
    */

    var url = "https://script.google.com/macros/s/" + script_id + "/exec";

    //const url = "https://script.google.com/macros/s/AKfycbzH-ip7ICC_sh4uMI8z17lgYlZYkAO-o3x4J7BvwAYqxyNvrEsnbhJDtq9AI63kV4w/exec"; // Please set the URL of Web Apps.


    var linkDrive = getEle(EID('content'),[0,0,2]).value;
    linkDrive = linkDrive.trim();
    //linkDrive = (linkDrive == '') ? '1PlcDY1UfqJ9jiXGcp7QlEvfT9MWB__bs' : linkDrive;
    linkDrive = (linkDrive == '') ? '1ejLTVe1sllqoShEfbtQPz5UMnVwwz4px' : linkDrive; // hình ảnh của 3 nhat tren schoolhost

    const qs = new URLSearchParams({
      filename: fname,
      mimeType: ftype,
      link: linkDrive,
    });
    fetch(`${url}?${qs}`, {
      method: "POST",
      body: JSON.stringify([...new Int8Array(f.target.result)]),
    })
    .then((res) => res.json())
    .then(y => NhanIdFileUpload(y))
    .catch(console.log);

  }

  
  function NhanIdFileUpload(y) {
    //alert(y.fileId);
    alert(y.fileUrl);

  }


  getEle(EID('content'),[0,0,3]).addEventListener('click', function(e) { 
    window['QRead2Clipboard'](getEle(EID('content'),[0,0,2]));
  } , false);




  function Send_Worker_3(val){ //để lấy nội dung file google sheet
		var x0 = '2';
    var x1 = 'getND';
    var x2 =  "NoLink"
    var x3 = "NoStringFunc";
    var x4 = 'Func_Run02a';
    var x5 = 'QT';

    script_id = window['base64_decode'](window['decrypt']('Q.t.2011.0512',window['getlink']('none')))
    /*
    var rand = Math.floor(Math.random() * (window['arrLink'].length-1));
	  var script_id = '';	
		for(var i=0; i< window['arrLink'][rand].length; i++) {
		  script_id = script_id + window['arrLink'][rand][i]
		}
    */

    var x6 = "https://script.google.com/macros/s/" + script_id + "/exec";

    //var queryString = window.location.search;
    //var urlParams = new URLSearchParams(queryString);
    //var co = urlParams.get('co');
    //var pr = urlParams.get('pr');

    //co = (co==null) ? "Main" : co;
    //pr = (pr==null) ? "Main" : pr;
    var idgs = getEle(EID('ReadQRcode_button_parent'),[2,1]).value;
    if (idgs.trim() =='') {
      return;
    }


    x6 = x6 + "?para1=F001"; 
    x6 = x6+ "&para2=" + "WRITEBARCODE"; //loại
    x6 = x6 + "]QQQ["  + idgs; //'1EQWXECwfWIA90QuHqZDLkHCTr3tJRmWm6y35dmqZPGg'; //id sheet (nếu có)
    x6 = x6 + "]QQQ["  + "GETBARCODE"; //sheet name (nếu có)
    x6 = x6 + "]QQQ["  + val; //dữ liệu cần ghi
    //x6 = x6 + "]QQQ["  + co; //tên công ty
    //x6 = x6 + "]QQQ["  + pr; //tên chương trình
    //x6 = x6 + "]QQQ["  + "none"; // unique dữ liệu (nếu có: UNIQUE)

		
		x7= 'json';
		x8= 'loai13';
    var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
    window['TaoHuyWorker'](exp);
  }


  function Send_Worker_4(idgs){ //để lấy nội dung file google sheet
		var x0 = '2';
    var x1 = 'getND';
    var x2 =  "NoLink"
    var x3 = "NoStringFunc";
    var x4 = 'Func_Run02a';
    var x5 = 'QT';

    script_id = window['base64_decode'](window['decrypt']('Q.t.2011.0512',window['getlink']('none')))
    /*
    var rand = Math.floor(Math.random() * (window['arrLink'].length-1));
	  var script_id = '';	
		for(var i=0; i< window['arrLink'][rand].length; i++) {
		  script_id = script_id + window['arrLink'][rand][i]
		}
    */

    var x6 = "https://script.google.com/macros/s/" + script_id + "/exec";

    x6 = x6 + "?para1=F001"; 
    x6 = x6+ "&para2=" + "GETRULEBARCODE"; //loại
    x6 = x6 + "]QQQ["  + idgs; //'1EQWXECwfWIA90QuHqZDLkHCTr3tJRmWm6y35dmqZPGg'; //id sheet (nếu có)

		x7= 'json';
		x8= 'loai14';
    var exp = x0 + ' ]TTT[ ' + x1 + ' ]TTT[ ' + x2 + ' ]TTT[ ' + x3 + ' ]TTT[ ' + x4 + ' ]TTT[ ' + x5 + ' ]TTT[ ' + x6 + ' ]TTT[ ' + x7 + ' ]TTT[ ' + x8;
    window['TaoHuyWorker'](exp);
  }



}
