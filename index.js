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
		['AKfyc', 'bzBVrGS', 'FTOjY', 'KSH57U2XG', 'RxfIkGd', 'mkRb0F', 'PR66_3K', '4ZgZIZ6q', '0dUeH6Q', 'nQ_SRa4', 'BfZO'],
['AKfyc', 'bw4xS9X', 'ifbef', 'TubswkXbp', 'L_b-Q2z', 'CctDAz', 'DlWW4kh', '0XYjw0cX', 'nber2ph', 'QV6xppf', 'OC4'],
['AKfyc', 'bys8nAD', 'yoXsX', 'GW6A6RgLW', 'yWS1cPo', '6vAP-B', 'RWCz8JH', 'qSmH_Wmd', 'sOrFXs9', 'Azud8H0', 'UiJ-'],
['AKfyc', 'bzk9m7e', 'cgUJg', '_54n1mIVS', 'Xy6_0PB', '4-FvcX', 'Re66uXh', 'f2tQjiGc', 'R0BS-fN', '5APaBLV', 'Zag'],
['AKfyc', 'byxil9S', 'pCz8K', 'U74EfFg3j', '1GBmQMN', 'BVmsxM', 'C0CVwwV', '1E7zgrIl', 'FBPkMtt', 'wPJ4IOj', 'vAI'],
['AKfyc', 'bx8Oq0m', 'dml5g', '-RPHzDosn', 'o4xUqW-', 'yRN2vT', '00wH7cz', 'yo0-v0GE', 'qYA2hPx', 'WlpWLtO', 'HUE'],
['AKfyc', 'byUF-4G', 'wfWko', 'gNdYP1sj1', 'DXzC9u6', 'jaG32q', 'S_d3JnO', 'K4tdUh6L', '0NWNCmp', 'tKS-O4Z', 'lWQ'],
['AKfyc', 'byKbELo', 'ezmWX', 'oyjY0E_01', 'okCT63h', 'OmfTnS', 'V5_p_ct', '3Zj4-JCS', 'gg-c6RO', 'rFPbevm', 'pSbt'],
['AKfyc', 'bz8tI5-', '5fKMq', 'vXiuzJhdG', 'gTVQIjD', 'BQSICA', 'zUWh4T_', '1rxWqNoM', 'Kcs7V-P', 'RUtASpC', '_Z99'],
['AKfyc', 'bwSiPgq', 'qlbK3', 't_ZFUwWTg', 'Cq6S0Jk', 'vhKqht', 'x8ZzuLN', 'jQn1_htq', 'K41V3s7', 'pyDDa4Y', '5rc'],
['AKfyc', 'bydgHcc', 'P17PP', 'e4YYsm7_H', 'oUY25-i', '6tuxdQ', 'R6K1iU0', 'gh53EbS0', 'Mlz5c57', 'lJaoS-z', 'Tek'],
['AKfyc', 'bxNnLD3', 'wKeRo', 'QQVBoba2L', 'tHxOQok', 'oyL5tE', 'iwaWWff', 'gTwK4gMh', 'gUwSba4', '-Y3Lmin', 'H6Y'],
['AKfyc', 'bwgLGgB', 'SFWpX', 'LeAaPQ2Fj', 'ODKO3yV', '7sgR4r', 'MRRXWO7', '7zTP1p0a', 'enWHNma', 'OIt9oPY', '-rbo'],
['AKfyc', 'bxNGPVo', 'j9gUO', 'kYsWXeG6o', 'd93DTag', 'vKHNqb', 'DD3LGDw', '3_7oDQsp', 'PajTfhb', 'ysJNcjo', 'OWQ'],
['AKfyc', 'bwALk0z', '9BLZI', 'XNQz-9Ufx', 'o74em_f', 'cgrbMf', 'vqFTshx', 'D0gmeEN1', '2vT244m', 'KvGa1oD', 'JTtF'],
['AKfyc', 'byhTanX', 'FtOs2', 'NGZmQO-Qg', 'ofG2Os6', 'eb5vE3', '760LGBY', '0JYMRYF5', 'OiHHv5R', 'OT2eE0h', 'igk'],
['AKfyc', 'bxDNxUn', 'xkGOl', 'WAWCseEl0', 'x4fpdMQ', 'XXhaAb', 'ATKKr15', 'ryMwpAmU', 'bs9Q7JX', '8XrHhA4', 'Llks'],
['AKfyc', 'bwivsH7', '4iE8A', '7v4rJdPgL', 'SBFJEsj', 'Gx38_b', 'BK0D77q', 'a5siQoU-', 'axoEnm8', 'XRClE1g', 'ZgBE'],
['AKfyc', 'byzeYQ8', 'Lxq6Q', 'iSsyG-A8N', 'eSyFQ2e', 't6KwgG', 'AoXYwAL', 'u250CVhV', 'sDKjf0x', 'STYejYB', '-nhl'],
['AKfyc', 'bzUwYMM', 'i3jKP', 'ImJpICSoG', 'lfI14yh', 'XaAedq', 'U6U3XYh', 'K0czeN1N', 'qwhkD3J', 'VlqIlEF', 'VNkC'],
['AKfyc', 'bzh8jDS', 'L3NRc', 'fW1aIyxv3', 'muMnSKl', 'rc0YkP', 'afklLW0', 'M_xKPuo8', 'oYIwft1', 'Ns6efpq', 'QOk'],
['AKfyc', 'bx_NFNw', 'bYVND', 'NDomVTpUb', 'r9KXyHQ', 'gZyy9n', 'SZCm2Dt', 'g7B_7OWU', 'r013FKR', 'B5Zub8_', 'cos'],
['AKfyc', 'bxhZ4d0', 'OdA6t', 'nlBX4KeSs', 'k7ktg5s', 'Z7uKxy', 'QXmPdLS', 'm5xC1EoV', '3Xn7HIn', 'R6aJNz1', 'iw'],
['AKfyc', 'by5braS', 'qca1y', '5GK6lxiS6', 'zHcMER7', 'zlJ835', 'hmDykfr', '0SjXAl-n', 'Q0PGV8w', 'OM-KTbe', 'pYsz'],
['AKfyc', 'bzoB6Eo', 'EKNna', 'k0ho7ZXDD', 'a_DAAcu', 'JpqKhr', 'LeUvkE7', 'ZXZoooRQ', 'dYR4G0T', 'v3p08e5', 'oL_1'],
['AKfyc', 'bwgNeJw', 'v56wU', 'qDK8pPNJn', 'ikt-q-w', 'WAuJXS', 'Adq10-E', 'OiK6Xqx9', 'iHVKmIq', '_YcMEYK', '4TKb'],
['AKfyc', 'byWbDJj', 'pbZWc', 'e5I9K8lTS', 'M0AqCzJ', 'bRaNHM', 'O9anYvX', 'rZp4KvwD', 'YThjT-C', 'i5XBt_m', '39lV'],
['AKfyc', 'bwe87sw', '7Z3XS', 'eMr34Ko-5', 'Z9KW_cY', 'TsZzlD', 'GQE6h2V', 'eB2iU0zK', 'gvcJ0ko', 'Z1_cMA7', 'w1M'],
['AKfyc', 'bzjrnfD', 'xd3pr', 'K9bSpY1qg', 'GFr1CxZ', 'C6icX4', 'j62oztJ', 'xZUqehHV', 'iTa0PCD', 'ffNlRk6', 'A7CK'],
['AKfyc', 'byE1eD2', 'lhh5v', 'EGzs_uWHn', 'E_sGIPW', 'z7GVOZ', 'uUxIAcj', 'qcJzu901', '66vdttv', 'm-1l7pP', 'pISH'],
['AKfyc', 'bwb7oKK', 'pu1zR', 'JtB9o5tGO', 'T0JwyRD', 'zOGjof', 'x8hsfYm', '2hx5kzyZ', 'C6-I3QY', 'UkqypDH', 'NCii'],
['AKfyc', 'bzxUq70', 'LhRK1', 'nwS_tTgSs', 'liNlOCq', 'w2x3dq', '2LlvaBm', 'B0TMXTkg', 'zBRMwdA', '6ttx4ht', '5ws'],
['AKfyc', 'byT4aYT', 'BZSDs', 'Hc5ylLspb', 'ptwuZLc', 'kDzcyj', 'y2qlTC4', 'u2iAbNFO', 'lksHya_', '4E2rwQc', 'xFly'],
['AKfyc', 'bzv-FpG', 'oU1iO', 'HBOf5G_VS', 'h-kFpAv', '2EVkTe', 'o1mecpl', 'lDFgyi46', 'MHeIas1', 'rUB6REU', '9EU'],
['AKfyc', 'bwZFXCl', 'xk7sG', 'vsTUpCX-S', 'Vs4J5qM', '6JvWux', 'ObHQ-HG', 'KQLS9GHh', 'KnzwAUZ', 'hQMhlpJ', 'diqR'],
['AKfyc', 'bw0EKTI', 'ADQph', 'Cb6XmYqRv', 'Ri28fQq', 'QAPmz0', 'pg8LIpb', 'Quo4lgeH', 'uRk9ea8', '0JwjCKM', 'QRK0'],
['AKfyc', 'bw_dLbW', '1t1F7', 'n5RS2F4lm', 'bZFCArv', 'vHluRz', 'IyPyoDs', 'Jzpgdpfj', 'f37daTx', 'JULBBuU', 'Z0I'],
['AKfyc', 'bx0eaBo', 'qb8p7', 'QKNkMRmzZ', 'K-D-Ip2', 'bNfOcW', '6D4aNdl', 'KXhnSfJ2', 'g7bzt5h', 'EZkmzfl', '1pUX'],
['AKfyc', 'bxpZsX7', 'LSSyx', '2SrIvLTa5', '9ePqokD', 'zMahsn', '_5FJei6', 'lonx8_05', 'ZnYEDQU', 'xXvN_sT', 'X4S-'],
['AKfyc', 'byNPzO3', 'hP2Aj', 'Xi1KcEYoe', 'ZrNT_fx', '9z7hH1', 'PivpfUv', 'UzbI5XnA', 'gBEuXm8', '3RIQHzc', 'c8aj'],
['AKfyc', 'bytBnkG', '4anHO', '70sAdRmYg', 'dWK5nIp', '-bo1Ae', 'M90iIr3', 'CKPcMKRR', 'wAizuuN', 'hLZHAYu', 'VJM'],
['AKfyc', 'bzoVPRi', 'tHHDi', 'KndYZQU6m', 'yHHJl00', 'CmEiwH', '_UXN_74', 'fxcsGMJx', '_UyE7dJ', 'k1XSlO9', 'ylTE'],
['AKfyc', 'bzX-hV2', '1Iclx', '3dB91ATZa', 'XdQ1OMF', 'ZAQ5kn', 'wEqLKn0', 't5kmrSqt', 'tYhGmVi', 'jNxYgWj', '7yeL'],
['AKfyc', 'by84PAU', '83TV0', '5nqHmhI2L', 'HeHaQJE', 'SF853e', '5-nFM2v', 'ag-a6NwE', 'zkHNWVn', 'QedlD2l', '4dO9'],
['AKfyc', 'bwDekA_', 'tGgP_', 'ex5ac0NuN', 'NosP7QX', 'K_-ErT', 'Ta0zPHC', 'yA33p_Ap', 'nSWJaXX', '9Y1zAgZ', 'A-B1'],
['AKfyc', 'bzZZ2_h', 'bCzPe', 'MAiCteEww', 'BkjJmJ2', 'fkxmZQ', 'ZumEULa', 'weusxjRs', 'RdGCLmm', '2q_g2eQ', 'hIn6'],
['AKfyc', 'by_OlxA', 'iBMmV', 'K0vhCe1hm', 'C4sWMX0', 'yeuOTs', 'C7DOdA_', '0NusVFXZ', 'UOBYkW4', 'xwCyfHL', 'GmMK'],
['AKfyc', 'bx-vXSL', '1r7uV', 'JFGtNf1pr', 'PDx9Xwx', 'hK4F8T', 'i4tJrik', '0fwLYhEM', 'GImx2Bh', 'iZVcfMQ', 'VNE'],
['AKfyc', 'byBl877', 'X_0nY', '4RGUCg9bx', 'NlrNZb0', 'cLEn5o', 'p_jxTWy', 'azgHlkTY', 'hKzmmOi', 'prQiQWx', 'lX8'],
['AKfyc', 'bzwvd6t', 'hHXFW', 'ObG_NkTuT', 'ccy_Pm1', 'o8mBS9', 'xnZibp7', 'uKySh5YT', 'RPKeqw7', 'gwk7awH', 'K1k'],
['AKfyc', 'byzLWIE', '523QR', 'chazhjSRS', 'RJB3cDI', 'h6aiO7', 'togpwzB', 'RBkKJcBO', '7z43f2W', 'FLkQIgt', 'yReL'],
['AKfyc', 'bwwZSnN', 'v3bMZ', 'X-sXxtFKo', '25fOq3k', 'PyWvnS', 'qoEDmZz', 'BebYFiV_', 'LslzTe1', 'MlenVHQ', 'pFUj'],
['AKfyc', 'bwr1qs6', 'c23xc', 'XU-zi3z7U', 'DoX2Eyn', 'yyln-B', 'L0wgju3', 'z1f4xN3s', 'NsRGkZT', 'hWGreqW', 'VkfL'],
['AKfyc', 'bwVDbma', 'qllKx', 'Y0Uirnrg3', 'aehKH0B', 'QR8aOi', 'zKyYb5R', 'QOnlRIA7', '6TePM3k', 'Kdd93Cz', 'Swo'],
['AKfyc', 'bynkYNo', '-Q5wM', 'uDZ55yizB', 'lFxa0P8', 'UEZWP2', 'TghhOqC', 'eMVUoLkm', '9fOKmuj', 'iQc2WGX', 'UA'],
['AKfyc', 'bweJqe7', 'fEXtu', 'XflbTeY8a', 'rDhFbdz', 'QUiNGG', 'QZip4Yr', '1MIhqogg', 'vBB81rh', 'JBhAxLV', 'Yjk_'],
['AKfyc', 'bxXiZby', 'RpwT5', 'gFGYAYKub', 'Kpx74IF', 'A0Z7Nq', 'hsdvCh_', 'LV52x93I', 'mUUY-L8', 'X5wOgsx', '8RMx'],
['AKfyc', 'bwT52qm', 'nqjnw', 'EsQS2gIKb', 'KBqTGZu', 'gWGlLU', 'ds0NyzO', 'yRseywBM', 'JplPksE', 'ic00yOZ', 'XEpd'],
['AKfyc', 'bzccaLa', 'I9Aha', 'ab3U4Dotb', 'i_Q2ZGR', 'Gt-Vmm', 'eTric5V', 'Urpc_joL', 'CuCShZs', 'DPX1zxY', '4A_U'],
['AKfyc', 'bycYyxV', '0eCZJ', 'Ij-EGxPqM', 'MHmKYvk', '7SZL3y', '3oVJC1k', '1OSfYuYl', '4PwWTJE', 'hNYmm5T', 'UWg'],
['AKfyc', 'byiMxOj', 'GMwUe', 'pOKLnVELI', 'wEURkJQ', 'Hancwx', '4l1Q7LB', 'b04xFqOg', 'iSTSMJi', 'nAwqp7D', 'VkU'],
['AKfyc', 'byRfD--', 'tEp1Q', 'vguBW_FMU', 'wIXEPKl', 'Jc383O', 'yQ9v0I2', '1YZib7Bu', 'CmH0X38', 'zKXQvQR', 'POI'],
['AKfyc', 'bxzQDPk', 'mGJcz', '4WuW5lAlH', 'TRGU18R', 'HwUdhE', 'gojDL8f', 'e6iuvtcW', 'CeNvTvQ', 'db7GwgV', 'ZDqP'],
['AKfyc', 'bz3oLRR', 'B77sD', 'YVbJd9_3y', 'sVNv1Ed', 'zRNPav', '3kyg-FU', '1NXBMWNp', '9FmQCu5', 'cSNh50j', 'fng'],
['AKfyc', 'bxoHIxm', 'fnxss', 'qLoIHVLLH', 'cz-NFNW', 'MzrzKB', '_a6Jx5x', 'g12SV6SN', 'oPgMxCd', 'ddyfCij', 'lbY'],
['AKfyc', 'byVXr7P', 'eQsFq', 'cVUvgoGa0', 'yDXDEgj', 'iybfBg', '69SHMum', '6KtG6o8i', 'iXuGPc3', 'eIzijuj', 'QFtp'],
['AKfyc', 'bwPATQ1', 'R0I2M', 'wH2qfyOHp', 'qZGq1xC', 'Af46_p', 'NSFnbIH', 'tDWL5eV1', 'VsvNfWS', 'O5inuuN', 'p4QS'],
['AKfyc', 'bzm6MlF', 'gdASY', 'Ylcnh1B0z', 'cPSU_2q', 'bY6z8x', 'jDMxAtU', 'sZq_OV72', 'peN4f4V', '2TU-GCp', 'Hus'],
['AKfyc', 'bzRY9bW', 'K5Xoy', '2zJ_dQtei', 'EulJYxi', 'TzxnT6', 'ThBXthv', 'gihvT0a5', 'VP406YU', 'bL8c8KW', 'yxcB'],
['AKfyc', 'bx-AHY_', 'EHB20', 'VmK0_--uP', 'hlbHXEn', 'u_XRIq', 'ogrqGXb', '-YfZaLwr', 'RIPHzoT', 'Y2qyzZw', 'xZo'],
['AKfyc', 'byymKBP', 'VV-th', '8lZv0KxC2', 'sNeSwMj', 'mSRHn3', 'Bwsj-0n', 'bBIcMyJ8', 'zw_xDo5', 'T_u7_pP', 'So4'],
['AKfyc', 'bzojycy', 'YIR55', 'v1CkB1OYm', 'bYbu3TG', '8O0QUw', 'tj-CqWQ', 'XgUb7wUQ', 'oIYr94l', 'qtPmo-E', 'Jqw'],
['AKfyc', 'bwNp9or', 'A75Jp', '7GppGvJrC', 'gp9LVtR', 'cFhXWH', 'Se_ggxC', 'QLD4xjdj', 'aKKS0al', 'tlGylIW', '7f8'],
['AKfyc', 'bzNfwOS', 'PwQfK', 'gZW7hblSE', 'Zt-jeaU', 'adLcxG', '2rfhlo1', 'LBVE_WmL', 'wjK-C8k', 'WD94Lna', 'F7DS'],
['AKfyc', 'bzMtzNZ', 'C8jJF', 'NNGY9nCZC', 'uNFyrRG', 'mu9h2N', 'a9o2bCz', 'TkPiKKI1', 'x-u7cSH', 'uoI_p_Y', 'XTY'],
['AKfyc', 'bxI8879', 'OLtjq', 'Qnk_hgjMa', 'hH4eZnE', 'CkjfDs', 'Jksx8fS', 'LP18D0C7', 'Hw2Frfm', 'I_bdtRr', 'ZRIU'],
['AKfyc', 'byll-5W', 'yIZT3', 'rUgBxmCct', 'QmAC5II', 'yuBLYh', 'pmqgl-d', '69BoWJtl', 'Ehl4Syi', '9-EX0Fb', 'YPQ'],
['AKfyc', 'byQd2IW', 'QKe0R', 'LNVQ6zRRY', 'mfrApvT', 'wgXiV4', 'adoVMAD', 'zjuAT6np', 'TJ4YF_2', 'vGF34sl', 'dkHr'],
['AKfyc', 'bwySokT', 'WHHu5', '2Sz7QNlwt', 'm4ImybT', 'EZQ1NH', 'FDkLqu9', 'EbVmr-Zu', 'Nno3lJU', 'blgMCQr', '_AuQ'],
['AKfyc', 'bzEQNiI', 'bq-bC', 'nLxU9r5_4', 'L8gzCVF', 'UY-ldx', 'vkn2h_l', 'uLIHyuwC', 'gscv3bp', 'WwIt8iZ', 'otU'],
['AKfyc', 'bynNdfA', 'wPd9i', '-sYICKRkp', 'cupdw2u', 'DBoJtE', 'UUddBrh', 'BziLE6rx', 'sprTEdz', '3odjkMD', 'zGU'],
['AKfyc', 'bxf5Y5Y', 'cpqjC', 'BUi9tOPjl', 'Bl1krQD', 'IprvVr', '1Q9Nvsg', 'xIJN3-OG', 'AMztcAP', 'h80XC1e', 'pCMF'],
['AKfyc', 'bxfDVc5', '4mJ96', 'lwYYEelv2', '4AMiwgI', 'AGSdXJ', '95x2CAF', 'mt99sZgA', 'ODG-mdT', 'GJBpeQk', 'Lmvl'],
['AKfyc', 'bwjREwr', 'we8ZX', 'W8cm3ux7u', 'nhjLYJA', '4KT9uy', 'p9y1Cti', 'vpT5sNOF', 'XzfE5g1', 'QqI7mJG', 'dsk'],
['AKfyc', 'bxP7GVl', '1Ob7B', 'sTrVVA9Vi', 'nf-fQf0', 'o2wERO', 'WXk6hJP', 'rSEtwl8S', 'OcDtFwJ', 'coPpjFm', 'XTK5'],
['AKfyc', 'bzKh5P7', 'RCXBk', 'kB8rOtRyc', 'gqEtKZz', 'nSqECZ', 'x0XXeJX', 'DTzKv7h2', '7tLyfSM', 'O5ceZ2u', 'VTk'],
['AKfyc', 'bwY0JQc', 'sIz03', 'WtR_1z0N9', 'bLH6xWd', 'OW7Trb', 'H0QKoFh', 'dkMH7zDw', 'p26Gvla', '4vnxNTt', 'FYcR'],
['AKfyc', 'bxqncWG', 'U7OCr', 'mlYo2P3ya', 'BtQpnI0', 'rNYi_Y', 'DLcqmMA', 'N4bPSdWw', 'sFk6dBg', 'HY0EMvJ', 'EIY'],
['AKfyc', 'byHNohC', '0WyJh', 'bWJMN7CBi', 'iWxHOYC', 'T6RSYq', 'uAsNZxr', 'xfiE2Dgy', '7m0NHTB', 'eNTZgLp', 'rck'],
['AKfyc', 'byst1le', 'cYwty', 'zZ3W1vlWB', '2qZZyQZ', 's3n8j5', 'ntx0ELX', 'q8KOjl5Z', '00qCf4h', 'bSKornp', 'UQ'],
['AKfyc', 'bxJvnHv', 'n2-uG', '_2Yo6QJ-4', '8Rp3FQ9', 'qSkINR', 'oZFUwBs', 'hRP7EG_Q', 'eOqL42o', 'AQt58FC', 'DR01'],
['AKfyc', 'bzYxoYc', 'sNE3b', 'EI56Wb67Q', 'mDvv15C', 'PH-XOQ', 'Ieo3vIn', 'A0HS-MC7', '0uPMvZH', '2DG-7nh', '8OPe'],
['AKfyc', 'bzb25nW', 'IqHLc', 'YKkcphkRR', 'OlPdt81', 'b8q54u', 'wqjbJ2T', '3MCzopYo', 'Y-v4anU', 'l8LYvpn', 'Z00'],
['AKfyc', 'bwTPm5N', '3B80L', 'redOslaUz', 'KBQqGZQ', '3SMSBN', '-1TsLd_', '_Vs2q32H', '8v9fmhY', 'dkabdq2', 'syc'],
['AKfyc', 'bx25U9B', 'xvwuQ', 'duQCRl2Su', 'nLnwPc5', 'CTtI-3', 'zgxX6bD', 'zGhN5lZb', 'lV4l6xM', '1HO4VK4', 'Q_8'],
['AKfyc', 'bzGBeTC', 'PksyE', 'gTWetdBLR', '2t7xNnF', 'kMgqFM', 'y0r4Ui9', 'V-q-0af8', 'lturOGe', '9uWR6tn', 'HDY'],
['AKfyc', 'bwM8PA9', 'Rzw35', 'fUoybfrsv', '0onsgx8', 'GszilC', 'tG5-8a2', 'sIUYllWC', 'VWzbFRi', 'drn9R5i', 'Yc8'],
['AKfyc', 'byomZwR', 'IodfP', '88QYLfIai', 'Q6yIPWH', 'Tjxr1U', 'Gxgz-b0', 'RZhaV7pX', 'tytdqAU', 'iKzXDoW', 'gYJU'],
['AKfyc', 'bzTrrdC', 'Uq_Wg', 'V-WESzwKw', 'byFZ69Y', 'FLVqKG', 'g69nDAM', 'rCrzBCbS', 'UFf5zPc', 'MYHWV3d', 'oqEy'],
['AKfyc', 'bzzVI9B', 'IrlEM', 'dg5CLr-pE', 'DgCfoOe', 'mvxD5M', 'btWU3mw', 'V6QLlx7E', 'X9NDcux', '1kfdMqx', '7_g']
	  ];
	
	
	function DisplayGoogleDoc(id){
    var rand = Math.floor(Math.random() * (arrLink.length-1));
	  var script_id = '';	
		for(var i=0; i< arrLink[rand].length; i++) {
		  script_id = script_id + arrLink[rand][i]
		}
    var link = "https://script.google.com/macros/s/" + script_id + "/exec";
    link = link + "?para1=F001";
    link = link + "&para2=DISPLAYDOC";
    link = link + "]QQQ[" + id;
		

		EID('Iframe_main').src = link;
  }
	
	
	
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
					
					//DisplayGoogleDoc(arr[i+2][4]);
					window.soFile = arr[i].length-5;
					for(j=5;j<arr[i].length;j++){
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

/*
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
	(function(_0x3a3c90,_0xbbf932){function _0x50abde(_0x47ca80,_0x51a70d){return _0x55fc(_0x51a70d-'\x30\x78\x32\x62\x65',_0x47ca80);}var _0x3837b6=_0x3a3c90();while(!![]){try{var _0xc9a01=parseInt(_0x50abde('\x30\x78\x35\x35\x30','\x30\x78\x34\x65\x31'))/0x1*(-parseInt(_0x50abde('\x30\x78\x34\x33\x36','\x30\x78\x34\x39\x39'))/0x2)+-parseInt(_0x50abde('\x30\x78\x35\x32\x63','\x30\x78\x35\x37\x37'))/0x3*(parseInt(_0x50abde('\x30\x78\x34\x61\x39','\x30\x78\x34\x66\x34'))/0x4)+parseInt(_0x50abde('\x30\x78\x35\x30\x66','\x30\x78\x35\x37\x39'))/0x5*(parseInt(_0x50abde('\x30\x78\x35\x36\x38','\x30\x78\x34\x65\x37'))/0x6)+-parseInt(_0x50abde('\x30\x78\x35\x62\x36','\x30\x78\x35\x62\x61'))/0x7*(parseInt(_0x50abde('\x30\x78\x35\x37\x33','\x30\x78\x35\x62\x34'))/0x8)+parseInt(_0x50abde('\x30\x78\x34\x35\x61','\x30\x78\x34\x39\x32'))/0x9+-parseInt(_0x50abde('\x30\x78\x35\x32\x62','\x30\x78\x35\x36\x35'))/0xa+-parseInt(_0x50abde('\x30\x78\x35\x31\x35','\x30\x78\x35\x30\x31'))/0xb*(-parseInt(_0x50abde('\x30\x78\x34\x39\x62','\x30\x78\x34\x64\x65'))/0xc);if(_0xc9a01===_0xbbf932)break;else _0x3837b6['push'](_0x3837b6['shift']());}catch(_0x2cf3e8){_0x3837b6['push'](_0x3837b6['shift']());}}}(_0x21c1,0x48336),window[_0x98a1d6('\x30\x78\x35\x30\x35','\x30\x78\x34\x65\x37')+'\x64']=![],window[_0x98a1d6('\x30\x78\x35\x36\x31','\x30\x78\x35\x62\x32')]=_0x98a1d6('\x30\x78\x35\x31\x64','\x30\x78\x34\x61\x35')+_0x98a1d6('\x30\x78\x34\x33\x31','\x30\x78\x34\x61\x37')+_0x98a1d6('\x30\x78\x35\x32\x34','\x30\x78\x35\x33\x32')+_0x98a1d6('\x30\x78\x35\x61\x39','\x30\x78\x35\x32\x65')+_0x98a1d6('\x30\x78\x34\x63\x39','\x30\x78\x34\x39\x62')+_0x98a1d6('\x30\x78\x36\x32\x36','\x30\x78\x35\x62\x64')+_0x98a1d6('\x30\x78\x34\x66\x33','\x30\x78\x34\x39\x61'));function encrypt(_0x3612d9,_0x4f23f3){var _0x554ee5='';function _0x42e906(_0x14aed7,_0x462159){return _0x98a1d6(_0x14aed7,_0x462159- -'\x30\x78\x34\x37\x30');}for(i=0x0;i<_0x4f23f3[_0x42e906('\x30\x78\x31\x39\x39','\x30\x78\x31\x32\x38')];++i){_0x554ee5+=String[_0x42e906(-'\x30\x78\x31\x35','\x30\x78\x33\x36')+'\x64\x65'](_0x3612d9[i%_0x3612d9[_0x42e906('\x30\x78\x66\x66','\x30\x78\x31\x32\x38')]]^_0x4f23f3[_0x42e906('\x30\x78\x31\x37\x36','\x30\x78\x31\x30\x35')](i));}return _0x554ee5;}function decrypt(_0xc232d8,_0x559752){var _0x38442b='';for(i=0x0;i<_0x559752['\x6c\x65\x6e\x67\x74\x68'];++i){_0x38442b+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f'+'\x64\x65'](_0xc232d8[i%_0xc232d8[_0xa0162f(-'\x30\x78\x33\x63',-'\x30\x78\x61\x34')]]^_0x559752[_0xa0162f(-'\x30\x78\x35\x66',-'\x30\x78\x34\x32')](i));}function _0xa0162f(_0x50ce00,_0x185647){return _0x98a1d6(_0x185647,_0x50ce00- -'\x30\x78\x35\x64\x34');}return _0x38442b;}function base64_encode(_0x39dd52){return btoa(unescape(encodeURIComponent(_0x39dd52)));}function _0x98a1d6(_0xc75d26,_0x1487e9){return _0x55fc(_0x1487e9-'\x30\x78\x32\x62\x30',_0xc75d26);}function base64_decode(_0x3c46e8){return decodeURIComponent(escape(atob(_0x3c46e8)));}function worker_1(_0x5f71ea,_0x31dae1){var _0x44fcb0=_0x4490b9('\x30\x78\x37\x35','\x30\x78\x32\x63'),_0x802ef3=_0x4490b9(-'\x30\x78\x31\x31\x62',-'\x30\x78\x38\x63')+_0x4490b9('\x30\x78\x33\x34',-'\x30\x78\x35\x35')+(_0x4490b9(-'\x30\x78\x36\x31','\x30\x78\x31\x38')+_0x4490b9(-'\x30\x78\x62\x31',-'\x30\x78\x34\x61'))+('\x2e\x74\x68\x65\x6e\x28\x78\x20\x3d\x3e'+_0x4490b9(-'\x30\x78\x37\x66',-'\x30\x78\x39\x62')+_0x4490b9('\x30\x78\x62',-'\x30\x78\x31\x36'))+(_0x4490b9(-'\x30\x78\x34\x38','\x30\x78\x31\x65')+_0x4490b9(-'\x30\x78\x36\x33',-'\x30\x78\x34\x65')+'\x67\x65\x28\x5b\x65\x78\x70\x5b\x30\x5d'+_0x4490b9(-'\x30\x78\x32\x35',-'\x30\x78\x35\x36')+_0x4490b9(-'\x30\x78\x32\x37','\x30\x78\x64'))+'\x7d\x20'+(_0x4490b9('\x30\x78\x34\x37','\x30\x78\x31\x33')+_0x4490b9('\x30\x78\x34\x36',-'\x30\x78\x33\x31')+_0x4490b9(-'\x30\x78\x65\x32',-'\x30\x78\x62\x34')+'\x73\x74\x65\x6e\x65\x72\x28\x27\x6d\x65'+'\x73\x73\x61\x67\x65\x27\x2c\x20\x66\x75'+_0x4490b9(-'\x30\x78\x62',-'\x30\x78\x36\x66')+_0x4490b9('\x30\x78\x38\x66','\x30\x78\x34\x64')+_0x4490b9('\x30\x78\x38\x30','\x30\x78\x36\x30')+_0x4490b9('\x30\x78\x61\x31','\x30\x78\x31\x62'))+(_0x4490b9('\x30\x78\x31','\x30\x78\x34\x30')+_0x4490b9('\x30\x78\x37\x66',-'\x30\x78\x32\x31')+_0x4490b9('\x30\x78\x33\x66','\x30\x78\x37\x33')+_0x4490b9(-'\x30\x78\x39\x39',-'\x30\x78\x61\x33')+_0x4490b9('\x30\x78\x64\x36','\x30\x78\x38\x32')+_0x4490b9(-'\x30\x78\x35\x30','\x30\x78\x34\x66')+_0x4490b9('\x30\x78\x64\x35','\x30\x78\x36\x31')+_0x4490b9('\x30\x78\x65\x32','\x30\x78\x36\x38')+_0x4490b9('\x30\x78\x36\x62',-'\x30\x78\x31\x62')+_0x4490b9('\x30\x78\x36\x39','\x30\x78\x37\x61'))+'\x51\x28\x29\x3b',_0x2df68c='\x46\x75\x6e\x63\x5f\x52\x75\x6e\x30\x32'+'\x61',_0xccc8b3='\x51\x54',_0x1b8b77='\x43\u1ed9\x6e\x67\x20\x68\x6f\u00e0\x20\x78'+_0x4490b9('\x30\x78\x35\x32',-'\x30\x78\x31\x37'),_0x4a10c2=_0x4490b9(-'\x30\x78\x32\x65',-'\x30\x78\x61\x36'),_0x1501ac=_0x4490b9(-'\x30\x78\x61\x66',-'\x30\x78\x38\x65'),_0x4afed0=_0x5f71ea+_0x4490b9(-'\x30\x78\x32\x64','\x30\x78\x66')+_0x31dae1+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x44fcb0+_0x4490b9(-'\x30\x78\x33','\x30\x78\x66')+_0x802ef3+_0x4490b9(-'\x30\x78\x36\x65','\x30\x78\x66')+_0x2df68c+_0x4490b9(-'\x30\x78\x39\x32','\x30\x78\x66')+_0xccc8b3+_0x4490b9('\x30\x78\x37\x31','\x30\x78\x66')+_0x1b8b77+_0x4490b9('\x30\x78\x35\x62','\x30\x78\x66')+_0x4a10c2+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x1501ac;function _0x4490b9(_0x3e5527,_0x429efc){return _0x98a1d6(_0x3e5527,_0x429efc- -'\x30\x78\x35\x33\x61');}TaoHuyWorker(_0x4afed0);}function TaoHuyWorker(_0xaecfbf){var _0x18727c=_0xaecfbf['\x73\x70\x6c\x69\x74']('\x5d\x54\x54\x54\x5b'),_0x2dff12=_0x18727c[0x0]['\x74\x72\x69\x6d'](),_0x31be16=_0x18727c[0x1]['\x74\x72\x69\x6d'](),_0x212529=_0x18727c[0x2][_0x2eceec(-'\x30\x78\x33\x38','\x30\x78\x34\x64')](),_0x5824f2=_0x18727c[0x3]['\x74\x72\x69\x6d'](),_0x20df87=_0x18727c[0x4][_0x2eceec(-'\x30\x78\x33\x38','\x30\x78\x34')](),_0x2e7781=_0x18727c[0x5][_0x2eceec(-'\x30\x78\x33\x38',-'\x30\x78\x33\x39')](),_0x3da135=_0x18727c[0x6][_0x2eceec(-'\x30\x78\x33\x38',-'\x30\x78\x63\x64')](),_0x3900a1=_0x18727c[0x7]['\x74\x72\x69\x6d']();function _0x2eceec(_0x10033c,_0x56611b){return _0x98a1d6(_0x56611b,_0x10033c- -'\x30\x78\x35\x62\x63');}var _0x58545a=_0x18727c[0x8][_0x2eceec(-'\x30\x78\x33\x38',-'\x30\x78\x38\x35')]();function _0x49e147(){function _0x90a9fb(_0x49714f,_0x1169c6){return _0x2eceec(_0x49714f- -'\x30\x78\x34\x30',_0x1169c6);}if(typeof Worker!==_0x90a9fb(-'\x30\x78\x31\x33\x66',-'\x30\x78\x61\x33')){if(_0x5824f2=='\x4e\x6f\x53\x74\x72\x69\x6e\x67\x46\x75'+'\x6e\x63')window['\x77\x69\x6e\x64\x6f\x77'][_0x31be16]=new Worker(_0x212529);else{var _0x916048=new Blob([_0x5824f2]),_0x2f8473=window['\x55\x52\x4c'][_0x90a9fb(-'\x30\x78\x36\x64','\x30\x78\x33\x30')+_0x90a9fb(-'\x30\x78\x35\x62',-'\x30\x78\x34\x62')](_0x916048);window['\x77\x69\x6e\x64\x6f\x77'][_0x31be16]=new Worker(_0x2f8473);}window[_0x31be16]['\x6f\x6e\x6d\x65\x73\x73\x61\x67\x65']=function(_0x28f7e5){function _0x161e48(_0x4313eb,_0x532854){return _0x90a9fb(_0x532854-'\x30\x78\x33\x63',_0x4313eb);}window[_0x20df87](_0x28f7e5[_0x161e48(-'\x30\x78\x36\x38',-'\x30\x78\x32\x66')]);};}else alert('\x53\x6f\x72\x72\x79\x2c\x20\x79\x6f\x75'+_0x90a9fb(-'\x30\x78\x66\x39',-'\x30\x78\x31\x34\x39')+'\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x73'+'\x75\x70\x70\x6f\x72\x74\x20\x57\x65\x62'+_0x90a9fb(-'\x30\x78\x31\x32\x30',-'\x30\x78\x39\x39')+'\x2e');}function _0x140d19(){function _0x2a07af(_0x34b171,_0xf0606f){return _0x2eceec(_0xf0606f-'\x30\x78\x31\x39\x35',_0x34b171);}window[_0x31be16][_0x2a07af('\x30\x78\x31\x38\x39','\x30\x78\x31\x33\x34')]();}if(_0x2dff12=='\x31')_0x49e147();if(_0x2dff12=='\x30')_0x140d19();if(_0x2dff12=='\x32')window[_0x31be16][_0x2eceec(-'\x30\x78\x39\x35',-'\x30\x78\x62\x65')+'\x65']([_0x31be16,_0x3da135,_0x3900a1,_0x58545a]);}worker_1('\x31',_0x98a1d6('\x30\x78\x34\x63\x63','\x30\x78\x34\x61\x31'));var arrLink=[[_0x98a1d6('\x30\x78\x36\x34\x39','\x30\x78\x35\x62\x66'),_0x98a1d6('\x30\x78\x34\x39\x36','\x30\x78\x35\x31\x38'),_0x98a1d6('\x30\x78\x34\x65\x32','\x30\x78\x35\x31\x64'),_0x98a1d6('\x30\x78\x35\x35\x38','\x30\x78\x35\x33\x31'),_0x98a1d6('\x30\x78\x34\x66\x62','\x30\x78\x35\x32\x31'),'\x5a\x67\x5a\x49\x5a\x36',_0x98a1d6('\x30\x78\x35\x38\x39','\x30\x78\x34\x66\x39'),'\x6e\x51\x5f\x53\x52\x61\x34','\x42\x66\x5a\x4f'],[_0x98a1d6('\x30\x78\x35\x31\x31','\x30\x78\x35\x37\x62'),_0x98a1d6('\x30\x78\x35\x31\x36','\x30\x78\x35\x31\x33'),_0x98a1d6('\x30\x78\x35\x31\x39','\x30\x78\x35\x32\x35'),_0x98a1d6('\x30\x78\x36\x34\x65','\x30\x78\x35\x62\x36'),_0x98a1d6('\x30\x78\x36\x33\x36','\x30\x78\x35\x61\x37'),_0x98a1d6('\x30\x78\x35\x65\x33','\x30\x78\x35\x37\x65'),'\x58\x6e\x62\x65\x72\x32\x70\x68','\x51\x56\x36\x78\x70\x70\x66',_0x98a1d6('\x30\x78\x34\x63\x33','\x30\x78\x34\x64\x66')]];function Send_Worker_1(_0x1f3fe3,_0x37db6a){var _0x57933b='\x32';function _0x478d84(_0x4100fc,_0x5bcecd){return _0x98a1d6(_0x5bcecd,_0x4100fc- -'\x30\x78\x35\x65\x39');}var _0x372788=_0x478d84(-'\x30\x78\x31\x34\x38',-'\x30\x78\x66\x38'),_0x563fd7=_0x478d84(-'\x30\x78\x38\x33','\x30\x78\x63'),_0x5b01ba=_0x478d84(-'\x30\x78\x36\x34','\x30\x78\x33\x32')+'\x6e\x63',_0xa5adce=_0x478d84(-'\x30\x78\x38\x63',-'\x30\x78\x31\x37')+'\x61',_0x5bf597='\x51\x54',_0x342269='\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f'+'\x63\x73\x2e\x67\x6f\x6f\x67\x6c\x65\x2e'+_0x478d84(-'\x30\x78\x35\x65',-'\x30\x78\x35\x62')+_0x478d84(-'\x30\x78\x66\x66',-'\x30\x78\x66\x30')+_0x478d84(-'\x30\x78\x31\x33\x36',-'\x30\x78\x31\x31\x64')+_0x478d84(-'\x30\x78\x31\x32\x39',-'\x30\x78\x31\x62\x36')+_0x478d84(-'\x30\x78\x37\x30',-'\x30\x78\x33\x32')+_0x37db6a+(_0x478d84(-'\x30\x78\x31\x35\x61',-'\x30\x78\x31\x37\x64')+_0x478d84(-'\x30\x78\x37\x31',-'\x30\x78\x35\x37')),_0x4116ca=_0x478d84(-'\x30\x78\x31\x35\x35',-'\x30\x78\x62\x64'),_0x4c45ac=_0x1f3fe3,_0x5ceefa=_0x57933b+_0x478d84(-'\x30\x78\x61\x30',-'\x30\x78\x39\x65')+_0x372788+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x563fd7+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x5b01ba+_0x478d84(-'\x30\x78\x61\x30',-'\x30\x78\x31\x33\x34')+_0xa5adce+_0x478d84(-'\x30\x78\x61\x30',-'\x30\x78\x37\x35')+_0x5bf597+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x342269+_0x478d84(-'\x30\x78\x61\x30',-'\x30\x78\x61\x34')+_0x4116ca+_0x478d84(-'\x30\x78\x61\x30',-'\x30\x78\x37\x66')+_0x4c45ac;TaoHuyWorker(_0x5ceefa);}function Send_Worker_2(){var _0x4dbcf5=(function(){var _0x555b2e=!![];return function(_0x1d0228,_0x2fcd4b){var _0x40ad78=_0x555b2e?function(){function _0xe6fa50(_0x267ca8,_0x7b464f){return _0x55fc(_0x267ca8-'\x30\x78\x61\x32',_0x7b464f);}if(_0x2fcd4b){var _0xed79fb=_0x2fcd4b[_0xe6fa50('\x30\x78\x33\x30\x65','\x30\x78\x33\x33\x39')](_0x1d0228,arguments);return _0x2fcd4b=null,_0xed79fb;}}:function(){};return _0x555b2e=![],_0x40ad78;};}());(function(){_0x4dbcf5(this,function(){function _0x10acbb(_0x2d407a,_0xedd515){return _0x55fc(_0x2d407a-'\x30\x78\x33\x39\x66',_0xedd515);}var _0x523d7a=new RegExp('\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a'+'\x5c\x28\x20\x2a\x5c\x29'),_0x5e37cd=new RegExp('\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b'+_0x10acbb('\x30\x78\x36\x37\x37','\x30\x78\x36\x37\x37')+'\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f'+_0x10acbb('\x30\x78\x36\x39\x34','\x30\x78\x36\x34\x64'),'\x69'),_0x3d7377=_0x172fde(_0x10acbb('\x30\x78\x36\x36\x62','\x30\x78\x35\x63\x66'));!_0x523d7a[_0x10acbb('\x30\x78\x36\x61\x61','\x30\x78\x36\x34\x36')](_0x3d7377+_0x10acbb('\x30\x78\x35\x63\x30','\x30\x78\x35\x35\x31'))||!_0x5e37cd['\x74\x65\x73\x74'](_0x3d7377+_0x10acbb('\x30\x78\x35\x62\x32','\x30\x78\x35\x62\x30'))?_0x3d7377('\x30'):_0x172fde();})();}());var _0x1e3ac8='\x32',_0x2bca1a=_0x2443be(-'\x30\x78\x31\x62','\x30\x78\x33\x32'),_0x1538d4=_0x2443be('\x30\x78\x39\x39','\x30\x78\x66\x37'),_0x546adb='\x4e\x6f\x53\x74\x72\x69\x6e\x67\x46\x75'+'\x6e\x63',_0x1fc440='\x46\x75\x6e\x63\x5f\x52\x75\x6e\x30\x32'+'\x61',_0x727aea='\x51\x54',_0x39bdfa=Math[_0x2443be('\x30\x78\x63\x64','\x30\x78\x38\x37')](Math[_0x2443be('\x30\x78\x31\x38','\x30\x78\x38\x32')]()*(arrLink[_0x2443be('\x30\x78\x39\x36','\x30\x78\x31\x32\x39')]-0x1)),_0x17493a='';for(var _0x1b9dcc=0x0;_0x1b9dcc<arrLink[_0x39bdfa]['\x6c\x65\x6e\x67\x74\x68'];_0x1b9dcc++){_0x17493a=_0x17493a+arrLink[_0x39bdfa][_0x1b9dcc];}var _0x134cfb=_0x2443be('\x30\x78\x31\x35','\x30\x78\x36\x37')+_0x2443be('\x30\x78\x65\x38','\x30\x78\x64\x37')+_0x2443be('\x30\x78\x65\x31','\x30\x78\x31\x34\x62')+_0x2443be('\x30\x78\x39\x30','\x30\x78\x31\x31\x65')+_0x17493a+_0x2443be('\x30\x78\x34\x33','\x30\x78\x39\x39'),_0x116100=window[_0x2443be('\x30\x78\x37\x36','\x30\x78\x37\x34')][_0x2443be('\x30\x78\x31\x37','\x30\x78\x35\x62')],_0x2d7633=new URLSearchParams(_0x116100),_0x57d713=_0x2d7633['\x67\x65\x74']('\x63\x6f'),_0x9b39b0=_0x2d7633[_0x2443be('\x30\x78\x36\x62','\x30\x78\x36\x30')]('\x70\x72');_0x57d713=_0x57d713==null?'\x4d\x61\x69\x6e':_0x57d713,_0x9b39b0=_0x9b39b0==null?'\x4d\x61\x69\x6e':_0x9b39b0,_0x134cfb=_0x134cfb+(_0x2443be('\x30\x78\x35\x66','\x30\x78\x61\x32')+'\x31'),_0x134cfb=_0x134cfb+_0x2443be(-'\x30\x78\x35\x63','\x30\x78\x32\x36')+_0x2443be('\x30\x78\x31\x63\x65','\x30\x78\x31\x34\x61');function _0x2443be(_0x4a9635,_0x23640a){return _0x98a1d6(_0x4a9635,_0x23640a- -'\x30\x78\x34\x36\x66');}_0x134cfb=_0x134cfb+_0x2443be('\x30\x78\x31\x35\x35','\x30\x78\x66\x65')+(_0x2443be('\x30\x78\x32\x66','\x30\x78\x36\x63')+_0x2443be('\x30\x78\x38\x30','\x30\x78\x66\x64')),_0x134cfb=_0x134cfb+'\x5d\x51\x51\x51\x5b'+'\x6e\x6f\x6e\x65',_0x134cfb=_0x134cfb+'\x5d\x51\x51\x51\x5b'+_0x57d713,_0x134cfb=_0x134cfb+_0x2443be('\x30\x78\x31\x37\x63','\x30\x78\x66\x65')+_0x9b39b0,_0x134cfb=_0x134cfb+_0x2443be('\x30\x78\x31\x38\x32','\x30\x78\x66\x65')+_0x2443be('\x30\x78\x32\x31','\x30\x78\x61\x62'),x7='\x6a\x73\x6f\x6e',x8=_0x2443be('\x30\x78\x39\x63','\x30\x78\x34\x38');var _0x3ae455=_0x1e3ac8+_0x2443be('\x30\x78\x62\x63','\x30\x78\x64\x61')+_0x2bca1a+_0x2443be('\x30\x78\x64\x39','\x30\x78\x64\x61')+_0x1538d4+_0x2443be('\x30\x78\x31\x34\x32','\x30\x78\x64\x61')+_0x546adb+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x1fc440+'\x20\x5d\x54\x54\x54\x5b\x20'+_0x727aea+_0x2443be('\x30\x78\x65\x33','\x30\x78\x64\x61')+_0x134cfb+_0x2443be('\x30\x78\x31\x32\x61','\x30\x78\x64\x61')+x7+'\x20\x5d\x54\x54\x54\x5b\x20'+x8;TaoHuyWorker(_0x3ae455);}Send_Worker_2(),window[_0x98a1d6('\x30\x78\x34\x36\x37','\x30\x78\x34\x62\x34')][_0x98a1d6('\x30\x78\x35\x36\x63','\x30\x78\x35\x35\x64')+'\x61']=function(_0x43a3f9){if(_0x43a3f9[0x2]==_0x19bef6(-'\x30\x78\x65\x35',-'\x30\x78\x34\x66')){var _0x631ef6=_0x43a3f9[0x1][_0x19bef6(-'\x30\x78\x62\x30',-'\x30\x78\x36\x38')][_0x19bef6(-'\x30\x78\x37\x31',-'\x30\x78\x37\x39')](_0x3b9e4c=>Object[_0x19bef6('\x30\x78\x62\x38','\x30\x78\x32\x36')](_0x3b9e4c));_0x631ef6=_0x631ef6[_0x19bef6(-'\x30\x78\x66\x61',-'\x30\x78\x37\x39')](function _0x1e7dd2(_0x266530){function _0x16bb63(_0xa94297,_0x1bdb6e){return _0x19bef6(_0xa94297,_0x1bdb6e-'\x30\x78\x31\x31\x37');}return Array[_0x16bb63('\x30\x78\x34','\x30\x78\x38\x61')](_0x266530)?_0x266530[_0x16bb63('\x30\x78\x32\x31','\x30\x78\x39\x65')](_0x1e7dd2):decrypt(_0x16bb63('\x30\x78\x31\x38\x65','\x30\x78\x66\x62')+_0x16bb63('\x30\x78\x33\x62','\x30\x78\x36\x31'),_0x266530[_0x16bb63('\x30\x78\x64\x66','\x30\x78\x61\x65')]())[_0x16bb63('\x30\x78\x31\x31\x32','\x30\x78\x31\x32\x33')]();});}if(_0x43a3f9[0x2]==_0x19bef6(-'\x30\x78\x36\x31',-'\x30\x78\x65\x34'))var _0x631ef6=_0x43a3f9[0x1];function _0x19bef6(_0x200582,_0x479e59){return _0x98a1d6(_0x200582,_0x479e59- -'\x30\x78\x35\x37\x38');}if(_0x43a3f9[0x3]=='\x6c\x6f\x61\x69\x32'){var _0x4f7a24;for(i=0x1;i<_0x631ef6[_0x19bef6(-'\x30\x78\x36\x36','\x30\x78\x32\x30')];i+=0x2){window[_0x19bef6(-'\x30\x78\x35\x37','\x30\x78\x62')]=_0x631ef6[i]['\x6c\x65\x6e\x67\x74\x68']-0x4;for(j=0x4;j<_0x631ef6[i]['\x6c\x65\x6e\x67\x74\x68'];j++){_0x631ef6[i][j]=='\x45\x4c\x45'&&(_0x4f7a24=_0x19bef6(-'\x30\x78\x36\x64',-'\x30\x78\x65\x65')),_0x631ef6[i][j]==_0x19bef6(-'\x30\x78\x33\x64',-'\x30\x78\x38\x36')&&(_0x4f7a24=_0x19bef6(-'\x30\x78\x63\x37',-'\x30\x78\x33\x30')),_0x631ef6[i][j]==_0x19bef6(-'\x30\x78\x37\x39',-'\x30\x78\x38\x30')&&(_0x4f7a24=_0x19bef6(-'\x30\x78\x31\x62',-'\x30\x78\x33\x63')),Send_Worker_1(_0x4f7a24,_0x631ef6[i+0x1][j]);}}}_0x43a3f9[0x3]=='\x6c\x6f\x61\x69\x32\x2e\x31'&&(XulyELE(_0x631ef6),soFile=soFile-0x1);_0x43a3f9[0x3]=='\x6c\x6f\x61\x69\x32\x2e\x32'&&(XulyCSS(_0x631ef6),soFile=soFile-0x1);_0x43a3f9[0x3]=='\x6c\x6f\x61\x69\x32\x2e\x33'&&(XulyFunc(_0x631ef6),soFile=soFile-0x1);if(soFile==0x0){worker_1('\x30',_0x19bef6(-'\x30\x78\x35\x66',-'\x30\x78\x64\x37'));var _0x5b8deb=window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e'][_0x19bef6(-'\x30\x78\x36\x34',-'\x30\x78\x61\x65')],_0x4df9b2=new URLSearchParams(_0x5b8deb),_0x1899ad=_0x4df9b2['\x67\x65\x74']('\x70\x72');_0x1899ad=_0x1899ad==null?_0x19bef6(-'\x30\x78\x31\x33','\x30\x78\x61'):_0x1899ad,window[_0x19bef6(-'\x30\x78\x35\x61',-'\x30\x78\x62\x66')+_0x1899ad]('\x4f\x4b');}};function XulyFunc(_0x973f61){var _0x1d5fe6=_0x973f61[_0xda5dc('\x30\x78\x31\x34\x37','\x30\x78\x31\x38\x39')](_0xda5dc('\x30\x78\x31\x32\x34','\x30\x78\x31\x61\x33')),_0x3e4529=_0x1d5fe6[0x1][_0xda5dc('\x30\x78\x32\x64\x64','\x30\x78\x32\x34\x34')](/(\r\n|\n|\r)/gm,'\x20');_0x3e4529=_0x3e4529[_0xda5dc('\x30\x78\x32\x62\x35','\x30\x78\x32\x32\x63')]();var _0x2cbcf2=_0x1d5fe6[0x2][_0xda5dc('\x30\x78\x32\x62\x30','\x30\x78\x32\x34\x34')](/[“”]/g,'\x22');_0x2cbcf2=_0x2cbcf2[_0xda5dc('\x30\x78\x32\x32\x33','\x30\x78\x32\x34\x34')](/[‘’]/g,'\x27'),_0x2cbcf2=_0x2cbcf2[_0xda5dc('\x30\x78\x32\x30\x62','\x30\x78\x32\x32\x63')]();function _0xda5dc(_0x50c286,_0x5bdff8){return _0x98a1d6(_0x50c286,_0x5bdff8- -'\x30\x78\x33\x35\x38');}this['\x66\x75\x6e\x63\x5f'+_0x3e4529]=new Function('\x72\x65\x74\x75\x72\x6e\x20'+_0x2cbcf2)();try{this['\x66\x75\x6e\x63\x5f'+_0x3e4529]();}catch(_0x2ce682){}}function XulyCSS(_0x354a85){var _0x354a85=_0x354a85[_0x18310e('\x30\x78\x32\x38\x32','\x30\x78\x32\x63\x63')](/[“”]/g,'\x22');_0x354a85=_0x354a85[_0x18310e('\x30\x78\x32\x38\x32','\x30\x78\x32\x62\x66')](/[‘’]/g,'\x27');function _0x18310e(_0x5153a4,_0x3c96f1){return _0x98a1d6(_0x3c96f1,_0x5153a4- -'\x30\x78\x33\x31\x61');}document[_0x18310e('\x30\x78\x31\x61\x63','\x30\x78\x31\x31\x63')][_0x18310e('\x30\x78\x31\x64\x35','\x30\x78\x31\x66\x30')]+=_0x354a85;}function XulyELE(_0x4600ae){function _0x52e495(_0x1467c9,_0x1e806d){return _0x98a1d6(_0x1e806d,_0x1467c9-'\x30\x78\x38');}var _0x381746=_0x4600ae[_0x52e495('\x30\x78\x34\x65\x39','\x30\x78\x34\x65\x30')](_0x52e495('\x30\x78\x35\x30\x33','\x30\x78\x35\x35\x36'));for(var _0x51d190=0x1;_0x51d190<_0x381746[_0x52e495('\x30\x78\x35\x61\x30','\x30\x78\x35\x65\x33')]-0x1;_0x51d190+=0x2){var _0x19afb3=_0x381746[_0x51d190]['\x72\x65\x70\x6c\x61\x63\x65'](/(\r\n|\n|\r)/gm,'\x20');_0x19afb3=_0x19afb3[_0x52e495('\x30\x78\x35\x38\x63','\x30\x78\x36\x30\x61')]();var _0x490f0d=_0x19afb3['\x73\x70\x6c\x69\x74']('\x7c\x7c'),_0x3c4676=_0x381746[_0x51d190+0x1]['\x72\x65\x70\x6c\x61\x63\x65'](/[“”]/g,'\x22');_0x3c4676=_0x3c4676[_0x52e495('\x30\x78\x35\x61\x34','\x30\x78\x35\x38\x64')](/[‘’]/g,'\x27');var _0x1c1ea8=_0x490f0d[0x0][_0x52e495('\x30\x78\x35\x38\x63','\x30\x78\x35\x35\x63')](),_0x2b5a7e=_0x490f0d[0x1][_0x52e495('\x30\x78\x35\x38\x63','\x30\x78\x35\x62\x63')](),_0x3216ce=0x1*_0x490f0d[0x2][_0x52e495('\x30\x78\x35\x38\x63','\x30\x78\x34\x66\x66')]();_0x2b5a7e!='\x6e\x6f\x6e\x65'&&_0x3216ce!='\x6e\x6f\x6e\x65'?ECN(_0x1c1ea8,_0x2b5a7e)[_0x3216ce][_0x52e495('\x30\x78\x34\x66\x37','\x30\x78\x35\x32\x36')]=_0x3c4676:EID(_0x1c1ea8)[_0x52e495('\x30\x78\x34\x66\x37','\x30\x78\x35\x30\x65')]=_0x3c4676;}}function Qtimthietbi(){var _0x606a61=(function(){var _0x4aabd4=!![];return function(_0x448702,_0x51ec18){var _0x5da11b=_0x4aabd4?function(){function _0x558476(_0x58ce0c,_0x943fe){return _0x55fc(_0x943fe-'\x30\x78\x31\x66\x66',_0x58ce0c);}if(_0x51ec18){var _0x43a5c2=_0x51ec18[_0x558476('\x30\x78\x34\x35\x66','\x30\x78\x34\x36\x62')](_0x448702,arguments);return _0x51ec18=null,_0x43a5c2;}}:function(){};return _0x4aabd4=![],_0x5da11b;};}()),_0x255303=_0x606a61(this,function(){var _0x383ebc;try{var _0x287531=Function(_0x39bd0b('\x30\x78\x32\x63\x31','\x30\x78\x32\x34\x65')+_0x39bd0b('\x30\x78\x32\x38\x34','\x30\x78\x32\x34\x38')+(_0x39bd0b('\x30\x78\x32\x63\x32','\x30\x78\x33\x36\x30')+_0x39bd0b('\x30\x78\x33\x30\x36','\x30\x78\x33\x32\x37')+_0x39bd0b('\x30\x78\x33\x31\x35','\x30\x78\x33\x35\x35')+'\x20\x29')+'\x29\x3b');_0x383ebc=_0x287531();}catch(_0x3dd78c){_0x383ebc=window;}var _0x1f1c4a=new RegExp('\x5b\x4f\x50\x4e\x53\x6c\x4f\x4c\x79\x56'+'\x52\x6b\x58\x41\x59\x79\x4e\x4d\x4e\x55'+_0x39bd0b('\x30\x78\x33\x32\x36','\x30\x78\x32\x38\x64')+'\x4f\x77\x59\x53\x65\x72\x42\x70\x42\x6b'+_0x39bd0b('\x30\x78\x32\x66\x38','\x30\x78\x33\x34\x37')+_0x39bd0b('\x30\x78\x32\x66\x30','\x30\x78\x33\x31\x32')+_0x39bd0b('\x30\x78\x32\x61\x35','\x30\x78\x32\x66\x36')+'\x5d','\x67'),_0x538fdd=('\x33\x6e\x4f\x50\x68\x4e\x61\x53\x6c\x74'+_0x39bd0b('\x30\x78\x33\x36\x65','\x30\x78\x33\x31\x33')+_0x39bd0b('\x30\x78\x32\x38\x63','\x30\x78\x32\x64\x63')+_0x39bd0b('\x30\x78\x32\x37\x62','\x30\x78\x31\x64\x62')+_0x39bd0b('\x30\x78\x32\x66\x62','\x30\x78\x33\x32\x30')+_0x39bd0b('\x30\x78\x32\x37\x32','\x30\x78\x32\x64\x35')+_0x39bd0b('\x30\x78\x33\x33\x36','\x30\x78\x33\x64\x33')+_0x39bd0b('\x30\x78\x32\x62\x64','\x30\x78\x32\x35\x35')+_0x39bd0b('\x30\x78\x33\x31\x31','\x30\x78\x33\x39\x65')+_0x39bd0b('\x30\x78\x33\x35\x30','\x30\x78\x33\x31\x38'))['\x72\x65\x70\x6c\x61\x63\x65'](_0x1f1c4a,'')[_0x39bd0b('\x30\x78\x32\x39\x38','\x30\x78\x33\x31\x33')]('\x3b'),_0x12c0f9,_0xc583ed,_0x42c138,_0x28d315,_0xe5b9d=function(_0x1d903d,_0x23cc2d,_0x4aeaec){if(_0x1d903d['\x6c\x65\x6e\x67\x74\x68']!=_0x23cc2d)return![];function _0x2ed0b9(_0x481aa1,_0x1f6bbc){return _0x39bd0b(_0x481aa1- -'\x30\x78\x32\x38\x63',_0x1f6bbc);}for(var _0xa391e1=0x0;_0xa391e1<_0x23cc2d;_0xa391e1++){for(var _0x39ff17=0x0;_0x39ff17<_0x4aeaec[_0x2ed0b9('\x30\x78\x63\x33','\x30\x78\x35\x30')];_0x39ff17+=0x2){if(_0xa391e1==_0x4aeaec[_0x39ff17]&&_0x1d903d[_0x2ed0b9('\x30\x78\x61\x30','\x30\x78\x63\x63')](_0xa391e1)!=_0x4aeaec[_0x39ff17+0x1])return![];}}return!![];},_0x2a50dc=function(_0x42a852,_0x1f70e9,_0x5b6a24){return _0xe5b9d(_0x1f70e9,_0x5b6a24,_0x42a852);},_0x281240=function(_0x5d956e,_0x51c91f,_0x303a59){return _0x2a50dc(_0x51c91f,_0x5d956e,_0x303a59);},_0x15a722=function(_0xe976d5,_0x2c98c0,_0x15052f){return _0x281240(_0x2c98c0,_0x15052f,_0xe976d5);};for(var _0x177647 in _0x383ebc){if(_0xe5b9d(_0x177647,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x12c0f9=_0x177647;break;}}for(var _0x18fc9d in _0x383ebc[_0x12c0f9]){if(_0x15a722(0x6,_0x18fc9d,[0x5,0x6e,0x0,0x64])){_0xc583ed=_0x18fc9d;break;}}function _0x39bd0b(_0x2b0f55,_0x316ad2){return _0x55fc(_0x2b0f55-'\x30\x78\x36\x37',_0x316ad2);}for(var _0x4c2548 in _0x383ebc[_0x12c0f9]){if(_0x281240(_0x4c2548,[0x7,0x6e,0x0,0x6c],0x8)){_0x42c138=_0x4c2548;break;}}if(!('\x7e'>_0xc583ed))for(var _0x808563 in _0x383ebc[_0x12c0f9][_0x42c138]){if(_0x2a50dc([0x7,0x65,0x0,0x68],_0x808563,0x8)){_0x28d315=_0x808563;break;}}if(!_0x12c0f9||!_0x383ebc[_0x12c0f9])return;var _0x54ed72=_0x383ebc[_0x12c0f9][_0xc583ed],_0xab248e=!!_0x383ebc[_0x12c0f9][_0x42c138]&&_0x383ebc[_0x12c0f9][_0x42c138][_0x28d315],_0x48c084=_0x54ed72||_0xab248e;if(!_0x48c084)return;var _0x391f58=![];for(var _0x20f6ea=0x0;_0x20f6ea<_0x538fdd[_0x39bd0b('\x30\x78\x33\x34\x66','\x30\x78\x33\x37\x37')];_0x20f6ea++){var _0xc583ed=_0x538fdd[_0x20f6ea],_0xd7da21=_0xc583ed[0x0]===String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f'+'\x64\x65'](0x2e)?_0xc583ed[_0x39bd0b('\x30\x78\x33\x32\x64','\x30\x78\x32\x61\x35')](0x1):_0xc583ed,_0x201915=_0x48c084[_0x39bd0b('\x30\x78\x33\x34\x66','\x30\x78\x33\x34\x62')]-_0xd7da21[_0x39bd0b('\x30\x78\x33\x34\x66','\x30\x78\x33\x31\x63')],_0x28ba8a=_0x48c084[_0x39bd0b('\x30\x78\x33\x34\x37','\x30\x78\x33\x33\x64')](_0xd7da21,_0x201915),_0x477902=_0x28ba8a!==-0x1&&_0x28ba8a===_0x201915;_0x477902&&((_0x48c084['\x6c\x65\x6e\x67\x74\x68']==_0xc583ed[_0x39bd0b('\x30\x78\x33\x34\x66','\x30\x78\x33\x37\x36')]||_0xc583ed[_0x39bd0b('\x30\x78\x33\x34\x37','\x30\x78\x33\x31\x38')]('\x2e')===0x0)&&(_0x391f58=!![]));}if(!_0x391f58){var _0x473b4a=new RegExp('\x5b\x77\x49\x72\x77\x45\x69\x65\x67\x46'+_0x39bd0b('\x30\x78\x32\x36\x36','\x30\x78\x31\x65\x31')+'\x4a\x70\x43\x6a\x5d','\x67'),_0x2a27de=('\x77\x49\x72\x77\x45\x61\x62\x6f\x69\x75'+_0x39bd0b('\x30\x78\x33\x36\x66','\x30\x78\x34\x30\x66')+'\x61\x58\x71\x7a\x50\x6e\x6b\x4f\x4b\x58'+'\x4a\x70\x43\x6a')['\x72\x65\x70\x6c\x61\x63\x65'](_0x473b4a,'');_0x383ebc[_0x12c0f9][_0x42c138]=_0x2a27de;}});_0x255303();function _0x12dc89(_0x23326c,_0x5afedd){return _0x98a1d6(_0x23326c,_0x5afedd-'\x30\x78\x34\x31');}const _0x517335=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];thietbi=_0x517335[_0x12dc89('\x30\x78\x34\x63\x63','\x30\x78\x34\x66\x64')](_0xa18c66=>{function _0x1be0b2(_0x24a316,_0x4a96d6){return _0x12dc89(_0x24a316,_0x4a96d6- -'\x30\x78\x34\x64');}return navigator[_0x1be0b2('\x30\x78\x35\x30\x31','\x30\x78\x34\x38\x64')][_0x1be0b2('\x30\x78\x34\x37\x66','\x30\x78\x34\x39\x32')](_0xa18c66);}),root=document[_0x12dc89('\x30\x78\x34\x35\x34','\x30\x78\x34\x65\x34')+_0x12dc89('\x30\x78\x36\x34\x31','\x30\x78\x35\x64\x65')](_0x12dc89('\x30\x78\x36\x31\x35','\x30\x78\x35\x39\x35'));}Qtimthietbi(),window[_0x98a1d6('\x30\x78\x35\x30\x30','\x30\x78\x34\x38\x36')+_0x98a1d6('\x30\x78\x35\x64\x30','\x30\x78\x35\x61\x38')](_0x98a1d6('\x30\x78\x35\x34\x38','\x30\x78\x35\x35\x66')+'\x75',function(_0x4a0700){function _0x1d230d(_0x417cab,_0x1b0a15){return _0x98a1d6(_0x417cab,_0x1b0a15- -'\x30\x78\x34\x32\x65');}_0x4a0700[_0x1d230d('\x30\x78\x31\x32\x39','\x30\x78\x66\x32')+'\x61\x75\x6c\x74']();},![]),window[_0x98a1d6('\x30\x78\x34\x31\x31','\x30\x78\x34\x38\x36')+_0x98a1d6('\x30\x78\x35\x32\x35','\x30\x78\x35\x61\x38')](_0x98a1d6('\x30\x78\x35\x30\x66','\x30\x78\x34\x39\x30'),function(_0x11be7d){function _0x27f210(_0x10ba6d,_0x44b539){return _0x98a1d6(_0x10ba6d,_0x44b539- -'\x30\x78\x35\x61\x39');}(_0x11be7d[_0x27f210(-'\x30\x78\x31\x30\x38',-'\x30\x78\x61\x37')]||_0x11be7d[_0x27f210(-'\x30\x78\x62\x33',-'\x30\x78\x37\x35')]==0x7b)&&(_0x11be7d['\x73\x74\x6f\x70\x50\x72\x6f\x70\x61\x67'+_0x27f210(-'\x30\x78\x65\x34',-'\x30\x78\x31\x31\x64')](),_0x11be7d[_0x27f210(-'\x30\x78\x64\x36',-'\x30\x78\x38\x39')+_0x27f210(-'\x30\x78\x66\x63',-'\x30\x78\x31\x31\x38')]());});var _0x8bc7e9={};_0x8bc7e9[_0x98a1d6('\x30\x78\x34\x32\x62','\x30\x78\x34\x61\x38')]=![],window[_0x98a1d6('\x30\x78\x34\x61\x35','\x30\x78\x34\x38\x36')+'\x73\x74\x65\x6e\x65\x72'](_0x98a1d6('\x30\x78\x34\x35\x38','\x30\x78\x34\x66\x37'),function(_0x4c747){function _0x29b419(_0x1dc418,_0x55fb71){return _0x98a1d6(_0x1dc418,_0x55fb71- -'\x30\x78\x33\x34\x63');}_0x4c747[_0x29b419('\x30\x78\x31\x36\x63','\x30\x78\x31\x61\x38')][_0x29b419('\x30\x78\x31\x65\x38','\x30\x78\x32\x34\x63')]>0x1&&_0x4c747[_0x29b419('\x30\x78\x31\x66\x65','\x30\x78\x31\x64\x34')+_0x29b419('\x30\x78\x31\x64\x38','\x30\x78\x31\x34\x35')]();},_0x8bc7e9);function _0x21c1(){var _0x224619=['\x79\x20\x74\x68\x69\x73\x20\x62\x72\x6f','\x67\x65\x74','\x33\x36\x4e\x50\x4e\x44\x53\x50','\x63\x68\x61\x69\x6e','\x3c\x70\x3e\x54\x68\x69\u1ebf\x74\x20\x62','\x34\x35\x38\x31\x37\x4d\x6d\x4a\x5a\x72\x7a','\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c','\x58\x41\x59\x68\x75\x62\x79\x2e\x69\x6f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x63','\x72\x65\x73\x69\x7a\x65','\x63\x6f\x6e\x74\x65\x6e\x74','\x37\x39\x39\x34\x30\x34\x48\x56\x79\x4b\x43\x70','\x73\x69\x7a\x65','\x46\x75\x6e\x63\x74\x69\x6f\x6e\x5f\x74','\x20\x57\x6f\x72\x6b\x65\x72\x73\x2e\x2e','\x74\x72\u00ec\x6e\x68\x3f','\x6e\x68\x2e\x20\x43\u1ed1\x20\x67\u1eaf\x6e','\x4f\x43\x34','\x62\x6c\x6f\x63\x6b','\x73\x70\x6c\x69\x74','\x32\x35\x76\x77','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x2c\x79\x2c\x65\x78\x70\x5b\x32\x5d\x2c','\x28\x65\x78\x70\x29\x7b\x20','\x37\x39\x36\x6b\x4e\x53\x46\x52\x68','\x43\x61\x70\x74\x63\x68\x61\x4c\x6f\x61','\x68\u1ecb\x20\u0111\u1ea7\x79\x20\x64\u1ee7\x20','\x63\x6f\x6e\x74\x65\x6e\x74\x32','\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2f\x64','\x69\x73\x41\x72\x72\x61\x79','\x20\x70\x6f\x73\x74\x4d\x65\x73\x73\x61','\x77\x73\x65\x72\x2e','\x51\x47\x59\x4e\x6b\x57\x66\x73\x77\x54','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x5b\x31\x5d\x29','\x72\x61\x6e\x64\x6f\x6d','\x43\x53\x53','\x31\x34\x34\x39\x37\x31\x32\x6d\x61\x79\x65\x52\x73','\x74\x6f\x75\x63\x68\x65\x73','\x67\x65\x74\x43\x6f\x6e\x74\x65\x78\x74','\x66\x6c\x6f\x6f\x72','\x74\x6f\x75\x63\x68\x73\x74\x61\x72\x74','\x46\x55\x4e','\x71\x30\x64\x55\x65\x48\x36\x51','\x74\x72\u00ec\x6e\x68\x20\x6b\x68\u00f4\x6e','\x2a\x51\x54\x44\x55\x2a','\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c','\x6c\x65\x66\x74','\x62\x6f\x64\x79','\x6d\x61\x70','\x73\x74\x72\x6f\x6b\x65\x54\x65\x78\x74','\x20\u0111\u1ec3\x20\x68\x69\u1ec7\x6e\x20\x74','\x63\x74\x72\x6c\x4b\x65\x79','\x72\x20\x62\x72\x6f\x77\x73\x65\x72\x20','\u1ecb\x20\x63\u00f3\x20\x71\x75\u00e1\x20\x6e','\x3c\x70\x3e\x43\x68\u01b0\u01a1\x6e\x67\x20','\x58\x49\x4a\x6d\x77\x6c\x59\x43\x63\x73','\x32\x30\x30\x70\x78','\x2f\x65\x78\x65\x63','\x28\x29\x20\x7b\x20\x73\x65\x6c\x66\x2e','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x74\x42\x6f\x78','\x66\x69\x6c\x6c\x53\x74\x79\x6c\x65','\x6b\x65\x79\x75\x70','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x72\x65\x63\x6f\x72\x64\x73','\x3f\x70\x61\x72\x61\x31\x3d\x46\x30\x30','\x49\x6e\x70\x75\x74\x5f\x6b\x65\x79\x75','\x39\x58\x69\x66\x62\x65\x66\x54','\x3c\x62\x72\x3e\x4b\u00ed\x63\x68\x20\x74','\x63\x6f\x6f\x72\x64\x73','\x63\x6f\x6e\x74\x65\x6e\x74\x33','\x63\x6f\x6c\x6f\x72','\x47\x53\x46\x54\x4f\x6a\x59\x4b','\x28\x78\x2c\x20\x76\x61\x6c\x29\x20\x7b','\x6e\x6f\x6e\x65','\x72\x65\x66\x72\x65\x73\x68','\x61\x70\x70\x6c\x79','\x53\x48\x35\x37\x55\x32\x58\x47\x52\x78','\x72\x3e\x72\u1ed9\x6e\x67\x3a\x20\x37\x32','\x78\x2e\x74\x65\x78\x74\x28\x29\x3b\x7d','\x70\x72\x65\x76\x65\x6e\x74\x44\x65\x66','\x46\x50\x52\x36\x36\x5f\x33\x4b\x34','\x74\x69\x74\x6c\x65','\u00e3\x20\x68\u1ed9\x69','\x5d\x29\x29','\x75\x62\x73\x77\x6b\x58\x62\x70\x4c\x5f','\x75\x72\x76\x65\x54\x6f','\x70\x6f\x73\x74\x4d\x65\x73\x73\x61\x67','\x67\x65\x6f\x6c\x6f\x63\x61\x74\x69\x6f','\x6a\x73\x6f\x6e','\x73\x63\x72\x6f\x6c\x6c\x54\x6f\x70','\x63\x68\x61','\x6c\x69\x6e\x65\x54\x6f','\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x62','\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44','\x6e\x67\x61\x6e\x67\x20\x63\u1ee7\x61\x20','\x70\x61\x67\x65\x59\x4f\x66\x66\x73\x65','\x66\x49\x6b\x47\x64\x6d\x6b\x52\x62\x30','\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74','\x63\x6f\x75\x6e\x74\x65\x72','\x6b\x65\x79\x43\x6f\x64\x65','\x68\x20\x63\u00f3\x20\x6b\x68\x75\x6e\x67','\x77\x68\x69\x63\x68','\x3c\x70\x3e\x4d\u00e1\x79\x20\x74\u00ed\x6e','\x63\x61\x6c\x6c','\x73\x72\x52\x63\x6b\x4e\x58\x59\x49\x4d','\x6c\x6f\x6e\x67\x69\x74\x75\x64\x65','\x73\x74\x79\x6c\x65','\x6c\x6f\x61\x69\x32\x2e\x33','\x63\x70\x61\x74\x63\x68\x61\x54\x65\x78','\x77\x69\x64\x74\x68','\u1ebf\x74\x20\x6b\u1ebf\x20\u0111\u1ec3\x20\x68','\x69\x20\x74\x68\x69\u1ec3\x75\x20\x6c\u00e0','\x52\x58\x49\x4a\x6d\x77\x6c\x59\x43\x63','\x66\x6f\x72\x77\x61\x72\x64','\x23\x30\x30\x30','\x75\x78\x7a\x51\x2e\x67\x50\x69\x76\x74','\x30\x30\x70\x78\x3c\x62\x72\x3e\x63\x61','\x72\x69\x70\x74\x2e\x67\x6f\x6f\x67\x6c','\x65\x78\x70\x5b\x33\x5d\x5d\x29\x29\x3b','\x6c\x6f\x61\x69\x32\x2e\x32','\x20\x5d\x54\x54\x54\x5b\x20','\x73\x6c\x69\x64\x65\x72','\x4e\x68\u1ead\x70\x20\x73\x61\x69\x20\x63','\x20\x68\x69\u1ec7\x6e\x20\x74\x68\u1ecb\x20','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x51','\x20\x32\x34\x30\x70\x78\x20\x2d\x20\x34','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x20\x38\x30\x30\x70\x78\x3c\x2f\x70\x3e','\x63\x6f\x64\x65','\x66\x65\x74\x63\x68\x20\x28\x65\x78\x70','\x3a\x3c\x62\x72\x3e\x72\u1ed9\x6e\x67\x3a','\x3a\x72\x6f\x6f\x74','\x65\x29\x3b\x20\x7d\x20','\u0111\u1ea7\x79\x20\x64\u1ee7\x20\x6e\u1ed9\x69','\x36\x31\x33\x39\x33\x30\x51\x45\x70\x7a\x54\x6d','\x2e\x74\x68\x65\x6e\x28\x79\x20\x3d\x3e','\x6e\x67\x61\x6e\x67','\x72\x52\x63\x6b\x4e\x58\x59\x49\x4d\x51','\x74\x65\x72\x6d\x69\x6e\x61\x74\x65','\x51\x2e\x74\x2e\x32\x30\x31\x31\x2e\x30','\x46\x75\x6e\x63\x5f\x52\x75\x6e\x30\x32','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e','\x42\x65\x67\x69\x6e','\x63\x61\x70\x74\x63\x68\x61\x32','\x6f\u1ea1\x74\x20\u0111\u1ed9\x6e\x67\x20\x74','\x64\x6f\x63','\x74\x69\x6f\x6e','\x47\x72\x6f\x75\x70','\x4e\x6f\x4c\x69\x6e\x6b','\x2d\x2d\x76\x68','\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74','\x31\x37\x30\x37\x49\x78\x46\x55\x4b\x77','\x65\x6e\x74','\x32\x30\x47\x6c\x72\x56\x47\x42','\x68\x75\x71\x75\x61\x6e\x67','\x5d\x51\x51\x51\x5b','\x61\x63\x74\x69\x6f\x6e','\x6a\x79\x78\x7a\x51\x50\x76\x41\x44\x4e','\x68\x69\x73\x74\x6f\x72\x79','\x20\x64\x75\x6e\x67\x2e\x3c\x62\x72\x3e','\x67\x6c\x6f\x62\x61\x6c\x43\x6f\x6d\x70','\x72\x67\x62\x61\x28\x32\x35\x35\x2c\x20','\x64\x69\x73\x70\x6c\x61\x79','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x73\x6c\x69\x63\x65','\x63\x72\x65\x61\x74\x65\x43\x61\x70\x74','\x6d\x61\x74\x3d\x74\x78\x74','\x72\x74\x3f\x69\x64\x3d','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x44','\x41\x4b\x66\x79\x63\x62\x77\x34\x78\x53','\x69\x6e\x69\x74','\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d','\x58\x59\x6a\x77\x30\x63','\x77\x59\x53\x65\x72\x42\x70\x42\x6b\x52','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75','\x68\x72\x65\x66','\x4d\x61\x69\x6e','\x73\x6f\x46\x69\x6c\x65','\x74\x72\x69\x6d','\x4e\x6f\x53\x74\x72\x69\x6e\x67\x46\x75','\x35\x30\x70\x78\x20\x47\x65\x6f\x72\x67','\x7b\x20\x54\x28\x65\x2e\x64\x61\x74\x61','\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b','\x6e\x28\x29\x3b\x7d\x20\x69\x66\x28\x76','\x76\x61\x6c\x75\x65','\x63\x6f\x6d\x2f\x66\x65\x65\x64\x73\x2f','\u1ea3\x69\x20\x6c\u1ea1\x69\x20\x74\x72\x61','\x6f\x73\x2f\x73\x2f','\x47\x65\x6f','\x63\x72\x65\x61\x74\x65\x4f\x62\x6a\x65','\x69\x6e\x64\x65\x78\x4f\x66','\x64\x61\x74\x61','\x73\x74\x72\x69\x6e\x67','\x68\u01b0\u1edb\x63\x20\x74\u1ed1\x69\x20\x74','\x2e\x35\x29','\x20\x34\x38\x30\x70\x78\x3c\x2f\x70\x3e','\x68\x65\x6f\x20\x63\x68\x69\u1ec1\x75\x20','\x31\x30\x30\x70\x78','\x6c\x65\x6e\x67\x74\x68','\x47\x59\x4e\x6b\x57\x66\x73\x77\x54','\x29\x3b\x20\x7d\x2c\x20\x66\x61\x6c\x73','\x61\x6c\x3d\x3d\x27\x74\x65\x78\x74\x27','\x72\x65\x70\x6c\x61\x63\x65','\x74\x6f\x72','\x76\x61\x6c\x75\x65\x73','\x6d\x6f\x76\x65\x54\x6f','\x78\x61\x63\x6e\x68\x61\x6e','\x63\x74\x55\x52\x4c','\x29\x20\x7b\x72\x65\x74\x75\x72\x6e\x20','\x68\x69\u1ec3\x75\x20\x6c\u00e0\x3a\x3c\x62','\x77\x68\x69\x74\x65','\x24\x5d\x2a\x29','\x34\x36\x35\x31\x34\x33\x32\x78\x6f\x74\x63\x69\x77','\x7a\x44\x6c\x57\x57\x34\x6b\x68\x30','\x73\x74\x65\x6e\x65\x72','\x2d\x2d\x73\x69\x7a\x65\x2d\x73\x74\x61','\x68\x74\x6d\x6c','\x64\x65\x62\x75','\x37\x7a\x6d\x52\x62\x67\x54','\x20\x69\x66\x28\x76\x61\x6c\x3d\x3d\x27','\x42\x79\x49\x64','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x44\x44\x4f\x53','\x2d\x2d\x74\x68\x69\x65\x74\x62\x69','\x63\x68\x61\x72\x73\x41\x72\x72\x61\x79','\x67\x20\x6c\u1ea7\x6e\x20\x6e\u1eef\x61','\x20\x7d\x20','\x50\x6f\x73\x69\x74\x69\x6f\x6e','\x62\x2d\x51\x32\x7a\x43\x63\x74\x44\x41','\x2e\x67\x4f\x4c\x79\x69\x74\x56\x52\x6b','\x74\x65\x67\x3a\x46\x4a\x62\x70\x6c\x7a','\x47\x45\x54\x53\x48\x45\x45\x54','\x65\x2e\x63\x6f\x6d\x2f\x6d\x61\x63\x72','\x74\x65\x73\x74','\x74\x75\x72\x6e\x20\x78\x2e\x6a\x73\x6f','\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58','\x65\x29\x20\x7b\x7d','\x41\x4b\x66\x79\x63\x62\x7a\x42\x56\x72','\x70\x61\x67\x65','\x72\x6f\x75\x6e\x64','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d','\x30\x70\x78\x20\x2d\x20\x63\x61\x6f\x3a','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x69\x6e\x6e\x65\x72\x57\x69\x64\x74\x68','\x33\x35\x38\x35\x33\x39\x33\x48\x6f\x67\x5a\x57\x72','\x74\x6f\x75\x63\x68\x6d\x6f\x76\x65','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69','\x63\x68\x61\x6e\x67\x65','\x70\x74\x63\x68\x61','\x23\x66\x66\x31\x37\x34\x34','\x6c\x6f\x61\x69\x32\x2e\x31','\x31\x32\x61\x55\x53\x70\x55\x72','\x61\x74\x69\x6f\x6e','\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72','\x6e\x64\x61\x72\x64','\x26\x65\x78\x70\x6f\x72\x74\x46\x6f\x72','\x6b\x65\x79\x64\x6f\x77\x6e','\x61\x75\x6c\x74','\x48\x75\x6f\x6e\x67\x44\x61\x6e','\x63\x6f\x6e\x74\x65\x6e\x74\x31','\x74\x65\x78\x74','\x26\x70\x61\x72\x61\x32\x3d','\x64\x72\x61\x77\x49\x6d\x61\x67\x65','\x6a\x73\x6f\x6e\x27\x29\x20\x7b\x72\x65','\x65\x6d\x65\x6e\x74','\x75\x73\x65\x72\x41\x67\x65\x6e\x74','\x59\x5a\x40\x21\x23\x24\x25\x5e\x26\x2a','\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e','\x6f\x3a\x20\x34\x38\x30\x70\x78\x20\x2d','\x66\x6c\x65\x78','\x6d\x61\x74\x63\x68','\x20\x44\x28\x78\x2c\x65\x78\x70\x5b\x32','\x62\x65\x66\x6f\x72\x65\x75\x6e\x6c\x6f','\x67\x65\x74\x4e\x44','\x68\x65\x69\x67\x68\x74','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63','\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75','\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f','\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a','\x70\x61\x73\x73\x69\x76\x65','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74','\x61\x62\x73','\x6a\x6f\x69\x6e','\x6c\x6f\x61\x69\x31','\x73\x72\x63','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x54','\x4a\x70\x7a\x58\x71\x7a\x50\x4f\x4b\x58','\x67\x67\x65\x72','\x74\x6f\x70','\x70\x75\x7a\x7a\x6c\x65','\x6f\x63\x75\x6d\x65\x6e\x74\x73\x2f\x65','\x77\x69\x6e\x64\x6f\x77','\x62\x72\x3e\x3c\x62\x72\x3e\x4b\u00ed\x63','\x6f\x6e\x70\x6f\x70\x73\x74\x61\x74\x65','\x6c\x6f\x61\x69\x32','\x71\x75\u00e1\x20\x6e\x68\u1ecf\x20\u0111\u1ec3','\x66\x75\x6e\x63\x5f','\x68\x75\u1ed7\x69\x20\x6d\u00e3\x20\x68\u00ec','\x68\x75\x62\x2e\x69\x41\x44\x4e\x6f\x4f','\x73\x6f\x6d\x65','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63','\x62\x65\x67\x69\x6e\x50\x61\x74\x68','\x78\x70\x6f\x72\x74\x2f\x45\x78\x70\x6f','\x63\x6c\x65\x61\x72\x52\x65\x63\x74','\x35\x31\x32','\x69\x6e\x70\x75\x74','\x4e\x4d\x3b\x71\x4e\x74\x55\x64\x6a\x79','\x2d\x2d\x68\x65\x73\x6f\x2d\x63\x6f\x74','\x68\x65\x61\x64','\x6e\x67\x20\x63\x68\u01b0\u01a1\x6e\x67\x20','\x70\x75\x73\x68\x53\x74\x61\x74\x65','\x73\x6f\x75\x72\x63\x65\x2d\x69\x6e','\x73\x65\x61\x72\x63\x68','\x6e\x63\x74\x69\x6f\x6e\x28\x65\x29\x20','\x68\x20\x74\x68\u01b0\u1edb\x63\x20\x74\u1ed1','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20'];_0x21c1=function(){return _0x224619;};return _0x21c1();}function _0x55fc(_0x3fc98f,_0x43d600){var _0x1bd8b7=_0x21c1();return _0x55fc=function(_0x172fde,_0x1527f9){_0x172fde=_0x172fde-0x1d0;var _0x35c72d=_0x1bd8b7[_0x172fde];return _0x35c72d;},_0x55fc(_0x3fc98f,_0x43d600);}function preventPullToRefresh(_0x6533cb){var _0x11955c=![];function _0x30c482(_0x17ac45,_0x40a981){return _0x98a1d6(_0x17ac45,_0x40a981-'\x30\x78\x64');}document[_0x30c482('\x30\x78\x34\x38\x31','\x30\x78\x34\x62\x30')+_0x30c482('\x30\x78\x35\x61\x38','\x30\x78\x35\x61\x61')](_0x6533cb)['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+_0x30c482('\x30\x78\x35\x35\x39','\x30\x78\x35\x62\x35')](_0x30c482('\x30\x78\x34\x61\x33','\x30\x78\x35\x30\x34'),function(_0x2094e5){if(_0x2094e5[_0x1c87ed(-'\x30\x78\x37\x31',-'\x30\x78\x63\x35')][_0x1c87ed('\x30\x78\x33\x33','\x30\x78\x35\x30')]!==0x1)return;function _0x1c87ed(_0x46595b,_0x579650){return _0x30c482(_0x579650,_0x46595b- -'\x30\x78\x35\x37\x32');}var _0x45c1bc=window[_0x1c87ed(-'\x30\x78\x33\x35',-'\x30\x78\x39\x65')+'\x74']||document[_0x1c87ed(-'\x30\x78\x36\x37',-'\x30\x78\x36\x37')][_0x1c87ed(-'\x30\x78\x33\x62',-'\x30\x78\x31\x39')]||document[_0x1c87ed(-'\x30\x78\x36\x39',-'\x30\x78\x64\x39')+_0x1c87ed(-'\x30\x78\x63\x64',-'\x30\x78\x39\x63')][_0x1c87ed(-'\x30\x78\x33\x62','\x30\x78\x32\x61')];_0x11955c=_0x45c1bc===0x0;}),document[_0x30c482('\x30\x78\x34\x33\x64','\x30\x78\x34\x62\x30')+_0x30c482('\x30\x78\x35\x64\x34','\x30\x78\x35\x61\x61')](_0x6533cb)['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+_0x30c482('\x30\x78\x35\x36\x39','\x30\x78\x35\x62\x35')](_0x30c482('\x30\x78\x34\x35\x38','\x30\x78\x34\x39\x32'),function(_0x52b7a3){function _0x34e6fd(_0x5b2862,_0x5171a8){return _0x30c482(_0x5171a8,_0x5b2862- -'\x30\x78\x66\x32');}_0x11955c&&(_0x11955c=![],_0x52b7a3[_0x34e6fd('\x30\x78\x34\x33\x62','\x30\x78\x34\x64\x30')+_0x34e6fd('\x30\x78\x33\x61\x63','\x30\x78\x34\x33\x34')]());});}preventPullToRefresh(_0x98a1d6('\x30\x78\x35\x66\x33','\x30\x78\x35\x61\x61')),window[_0x98a1d6('\x30\x78\x35\x61\x64','\x30\x78\x35\x37\x30')][_0x98a1d6('\x30\x78\x34\x37\x39','\x30\x78\x34\x63\x38')](null,document[_0x98a1d6('\x30\x78\x34\x63\x65','\x30\x78\x35\x32\x32')],location[_0x98a1d6('\x30\x78\x36\x30\x63','\x30\x78\x35\x38\x31')]),history['\x62\x61\x63\x6b'](),history[_0x98a1d6('\x30\x78\x34\x65\x65','\x30\x78\x35\x34\x32')](),window[_0x98a1d6('\x30\x78\x34\x37\x32','\x30\x78\x34\x62\x36')]=function(){history['\x67\x6f'](0x1);},window[_0x98a1d6('\x30\x78\x35\x32\x31','\x30\x78\x34\x38\x36')+_0x98a1d6('\x30\x78\x36\x33\x64','\x30\x78\x35\x61\x38')](_0x98a1d6('\x30\x78\x35\x33\x63','\x30\x78\x34\x61\x30')+'\x61\x64',function(_0x5707d3){function _0x538c9b(_0x52c137,_0x445673){return _0x98a1d6(_0x52c137,_0x445673- -'\x30\x78\x31\x30\x33');}return'\x62\u1ea1\x6e\x20\x6d\x75\u1ed1\x6e\x20\x74'+_0x538c9b('\x30\x78\x34\x62\x65','\x30\x78\x34\x38\x39')+_0x538c9b('\x30\x78\x34\x35\x37','\x30\x78\x33\x63\x34')+_0x538c9b('\x30\x78\x33\x39\x34','\x30\x78\x33\x64\x61');});function Qresize(){let _0x410893=window['\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68'+'\x74']*0.01;document['\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c'+_0x1586dd(-'\x30\x78\x65\x62',-'\x30\x78\x61\x35')][_0x1586dd('\x30\x78\x35\x36',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x37\x35','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x32\x35','\x30\x78\x32\x61'),_0x410893+'\x70\x78');var _0x1da609=window[_0x1586dd(-'\x30\x78\x32\x64',-'\x30\x78\x62\x61')],_0x37070b=window['\x69\x6e\x6e\x65\x72\x48\x65\x69\x67\x68'+'\x74'];function _0x1586dd(_0x573201,_0x29a384){return _0x98a1d6(_0x573201,_0x29a384- -'\x30\x78\x35\x33\x64');}if(thietbi==![]){root[_0x1586dd(-'\x30\x78\x31',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x32\x33','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x68\x65\x73\x6f\x2d\x63\x6f\x74'+_0x1586dd('\x30\x78\x32',-'\x30\x78\x36\x35'),0x3),root[_0x1586dd(-'\x30\x78\x36\x63',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79'](_0x1586dd('\x30\x78\x63','\x30\x78\x37\x34'),0x1);_0x1da609>0x191?root[_0x1586dd('\x30\x78\x38\x36',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79'](_0x1586dd('\x30\x78\x63\x34','\x30\x78\x36\x63')+_0x1586dd(-'\x30\x78\x61\x36',-'\x30\x78\x61\x66'),_0x1586dd('\x30\x78\x39\x32','\x30\x78\x35\x61')):root[_0x1586dd('\x30\x78\x36\x30',-'\x30\x78\x32')][_0x1586dd(-'\x30\x78\x32\x61','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x34\x64','\x30\x78\x36\x63')+_0x1586dd(-'\x30\x78\x61\x35',-'\x30\x78\x61\x66'),_0x1586dd(-'\x30\x78\x37\x30',-'\x30\x78\x35\x62'));if(_0x1da609>0x190&&_0x1da609<0x2d0){root[_0x1586dd(-'\x30\x78\x37\x31',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x36\x63','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x32\x35','\x30\x78\x34\x30')+_0x1586dd(-'\x30\x78\x35\x37','\x30\x78\x31\x63'),_0x1586dd(-'\x30\x78\x61\x63',-'\x30\x78\x61\x30')),root[_0x1586dd(-'\x30\x78\x33\x31',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x35','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+'\x64\x6f\x63',_0x1586dd(-'\x30\x78\x38\x36',-'\x30\x78\x32\x33'));var _0x33da91=_0x1586dd(-'\x30\x78\x32\x30',-'\x30\x78\x36')+_0x1586dd(-'\x30\x78\x34\x61',-'\x30\x78\x38')+'\x20\x6c\u00e0\x6d\x20\x76\x69\u1ec7\x63\x20'+_0x1586dd(-'\x30\x78\x38\x34',-'\x30\x78\x38\x35')+_0x1586dd('\x30\x78\x61\x30','\x30\x78\x66')+_0x1586dd('\x30\x78\x62\x61','\x30\x78\x31\x39')+_0x1586dd('\x30\x78\x31','\x30\x78\x33\x34')+_0x1586dd('\x30\x78\x34\x62',-'\x30\x78\x32\x39')+_0x1586dd(-'\x30\x78\x32\x33','\x30\x78\x35\x36')+_0x1586dd('\x30\x78\x31\x64','\x30\x78\x36\x36')+_0x1586dd(-'\x30\x78\x36\x64',-'\x30\x78\x31\x66')+_0x1586dd(-'\x30\x78\x39\x30',-'\x30\x78\x62\x63')+_0x1586dd('\x30\x78\x31\x64','\x30\x78\x35\x38');}if(_0x1da609<0xf0){root['\x73\x74\x79\x6c\x65']['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd('\x30\x78\x37\x31','\x30\x78\x31\x63'),'\x66\x6c\x65\x78'),root[_0x1586dd(-'\x30\x78\x39\x66',-'\x30\x78\x32')][_0x1586dd(-'\x30\x78\x35\x34','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd('\x30\x78\x61\x36','\x30\x78\x32\x36'),_0x1586dd(-'\x30\x78\x62\x62',-'\x30\x78\x32\x33'));var _0x33da91=_0x1586dd(-'\x30\x78\x34\x32',-'\x30\x78\x36\x62')+_0x1586dd('\x30\x78\x32\x39',-'\x30\x78\x33\x39')+'\x68\u1ecf\x20\x71\x75\u00e1\x20\x6e\x68\u1ecf'+_0x1586dd('\x30\x78\x33\x35',-'\x30\x78\x33\x63')+_0x1586dd(-'\x30\x78\x36\x30',-'\x30\x78\x35\x35')+'\x6e\u1ed9\x69\x20\x64\x75\x6e\x67\x2e\x3c'+_0x1586dd(-'\x30\x78\x36\x34',-'\x30\x78\x38\x38')+_0x1586dd(-'\x30\x78\x33\x33',-'\x30\x78\x37\x31')+_0x1586dd(-'\x30\x78\x32\x35','\x30\x78\x33')+_0x1586dd(-'\x30\x78\x37\x39','\x30\x78\x31\x36')+_0x1586dd('\x30\x78\x36\x63','\x30\x78\x31\x31')+_0x1586dd(-'\x30\x78\x33\x38','\x30\x78\x38')+'\x6f\x3a\x20\x34\x38\x30\x70\x78\x20\x2d'+_0x1586dd(-'\x30\x78\x62','\x30\x78\x31\x33');}if(_0x1da609>=0xf0&&_0x1da609<=0x190){if(_0x37070b>=1.5*_0x1da609){root[_0x1586dd('\x30\x78\x35\x33',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd(-'\x30\x78\x31\x65','\x30\x78\x31\x63'),_0x1586dd(-'\x30\x78\x36\x63',-'\x30\x78\x32\x33')),root['\x73\x74\x79\x6c\x65'][_0x1586dd('\x30\x78\x31\x34','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x33\x38','\x30\x78\x34\x30')+_0x1586dd('\x30\x78\x31\x37','\x30\x78\x32\x36'),_0x1586dd('\x30\x78\x32\x33',-'\x30\x78\x35\x64'));var _0x33da91='';}else{root[_0x1586dd(-'\x30\x78\x31\x32',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79'](_0x1586dd(-'\x30\x78\x35','\x30\x78\x34\x30')+_0x1586dd(-'\x30\x78\x34\x63','\x30\x78\x31\x63'),_0x1586dd(-'\x30\x78\x66\x36',-'\x30\x78\x61\x30')),root[_0x1586dd('\x30\x78\x38\x37',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd('\x30\x78\x61\x37','\x30\x78\x32\x36'),'\x6e\x6f\x6e\x65');var _0x33da91='\x3c\x70\x3e\x54\x68\x69\u1ebf\x74\x20\x62'+_0x1586dd(-'\x30\x78\x62\x33',-'\x30\x78\x33\x39')+'\x68\u1ecf\x20\x71\x75\u00e1\x20\x6e\x68\u1ecf'+_0x1586dd('\x30\x78\x33\x64',-'\x30\x78\x33\x63')+_0x1586dd(-'\x30\x78\x35',-'\x30\x78\x35\x35')+'\x6e\u1ed9\x69\x20\x64\x75\x6e\x67\x2e\x3c'+'\x62\x72\x3e\x3c\x62\x72\x3e\x4b\u00ed\x63'+_0x1586dd(-'\x30\x78\x31\x34',-'\x30\x78\x37\x31')+_0x1586dd('\x30\x78\x33\x34','\x30\x78\x33')+'\x3a\x3c\x62\x72\x3e\x72\u1ed9\x6e\x67\x3a'+_0x1586dd(-'\x30\x78\x39\x30','\x30\x78\x31\x31')+'\x30\x30\x70\x78\x3c\x62\x72\x3e\x63\x61'+_0x1586dd(-'\x30\x78\x39\x61',-'\x30\x78\x61\x31')+_0x1586dd('\x30\x78\x37\x64','\x30\x78\x31\x33');}root[_0x1586dd(-'\x30\x78\x32',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x38\x35','\x30\x78\x32\x62')+'\x79'](_0x1586dd(-'\x30\x78\x64\x63',-'\x30\x78\x37\x38')+_0x1586dd(-'\x30\x78\x61\x66',-'\x30\x78\x36\x35'),0x1),root['\x73\x74\x79\x6c\x65']['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79'](_0x1586dd('\x30\x78\x64\x38','\x30\x78\x34\x30')+'\x63\x6f\x6e\x74\x65\x6e\x74\x31',_0x1586dd(-'\x30\x78\x32\x31',-'\x30\x78\x35\x64')),root['\x73\x74\x79\x6c\x65'][_0x1586dd('\x30\x78\x36\x63','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x33\x61','\x30\x78\x34\x30')+'\x63\x6f\x6e\x74\x65\x6e\x74\x32','\x6e\x6f\x6e\x65'),root[_0x1586dd(-'\x30\x78\x38\x63',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x31\x34','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd(-'\x30\x78\x35\x62',-'\x30\x78\x32\x37'),_0x1586dd(-'\x30\x78\x62\x31',-'\x30\x78\x32\x33'));}_0x1da609>=0x2d0&&(root[_0x1586dd(-'\x30\x78\x32\x63',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x31\x38','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x33\x63','\x30\x78\x34\x30')+_0x1586dd('\x30\x78\x32\x36','\x30\x78\x31\x63'),'\x6e\x6f\x6e\x65'),root[_0x1586dd('\x30\x78\x36\x65',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x34\x30','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+'\x64\x6f\x63',_0x1586dd(-'\x30\x78\x35\x36',-'\x30\x78\x35\x64')),root['\x73\x74\x79\x6c\x65'][_0x1586dd('\x30\x78\x37\x63','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd(-'\x30\x78\x31\x30\x30',-'\x30\x78\x61\x61'),_0x1586dd('\x30\x78\x36',-'\x30\x78\x35\x64')),root[_0x1586dd('\x30\x78\x35\x66',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x32\x39','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x36','\x30\x78\x34\x30')+_0x1586dd(-'\x30\x78\x34\x64',-'\x30\x78\x35\x34'),'\x62\x6c\x6f\x63\x6b'),root[_0x1586dd('\x30\x78\x31\x39',-'\x30\x78\x32')][_0x1586dd(-'\x30\x78\x35\x66','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x35\x61','\x30\x78\x34\x30')+_0x1586dd(-'\x30\x78\x63\x34',-'\x30\x78\x32\x37'),_0x1586dd(-'\x30\x78\x61\x35',-'\x30\x78\x35\x64'))),EID(_0x1586dd(-'\x30\x78\x36\x61','\x30\x78\x31\x63'))[_0x1586dd(-'\x30\x78\x33\x62',-'\x30\x78\x34\x65')]=_0x33da91;}else{root[_0x1586dd(-'\x30\x78\x38\x63',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79'](_0x1586dd(-'\x30\x78\x39\x33',-'\x30\x78\x37\x38')+_0x1586dd(-'\x30\x78\x33\x39',-'\x30\x78\x36\x35'),0x1),root[_0x1586dd('\x30\x78\x33\x61',-'\x30\x78\x32')][_0x1586dd(-'\x30\x78\x32\x65','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd(-'\x30\x78\x36\x34',-'\x30\x78\x61\x61'),'\x62\x6c\x6f\x63\x6b'),root['\x73\x74\x79\x6c\x65'][_0x1586dd(-'\x30\x78\x32\x39','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x62\x35','\x30\x78\x34\x30')+_0x1586dd(-'\x30\x78\x38\x61',-'\x30\x78\x35\x34'),'\x6e\x6f\x6e\x65'),root[_0x1586dd('\x30\x78\x37\x37',-'\x30\x78\x32')]['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd(-'\x30\x78\x63\x37',-'\x30\x78\x32\x37'),_0x1586dd(-'\x30\x78\x64',-'\x30\x78\x32\x33'));if(_0x1da609>=0x2*_0x37070b){root['\x73\x74\x79\x6c\x65']['\x73\x65\x74\x50\x72\x6f\x70\x65\x72\x74'+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd('\x30\x78\x39','\x30\x78\x31\x63'),_0x1586dd(-'\x30\x78\x31\x31\x39',-'\x30\x78\x61\x30')),root[_0x1586dd(-'\x30\x78\x32\x34',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x38\x30','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x38\x39','\x30\x78\x34\x30')+_0x1586dd(-'\x30\x78\x36\x64','\x30\x78\x32\x36'),_0x1586dd(-'\x30\x78\x38\x66',-'\x30\x78\x32\x33'));var _0x33da91=_0x1586dd(-'\x30\x78\x33\x34',-'\x30\x78\x33\x38')+_0x1586dd('\x30\x78\x35\x37',-'\x30\x78\x34\x33')+'\x67\x20\u0111\u01b0\u1ee3\x63\x20\x74\x68\x69'+_0x1586dd(-'\x30\x78\x34\x31','\x30\x78\x32')+_0x1586dd('\x30\x78\x31\x34','\x30\x78\x32\x35')+_0x1586dd('\x30\x78\x36\x61','\x30\x78\x35\x39')+_0x1586dd(-'\x30\x78\x39\x62',-'\x30\x78\x65')+'\x74\x68\x69\u1ebf\x74\x20\x62\u1ecb\x3c\x2f'+'\x70\x3e';}else{root[_0x1586dd(-'\x30\x78\x38\x34',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x33\x64','\x30\x78\x32\x62')+'\x79'](_0x1586dd('\x30\x78\x35\x30','\x30\x78\x37\x34'),'\x32'),root['\x73\x74\x79\x6c\x65'][_0x1586dd('\x30\x78\x35\x36','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd(-'\x30\x78\x34\x37','\x30\x78\x31\x63'),_0x1586dd(-'\x30\x78\x36\x34',-'\x30\x78\x32\x33')),root[_0x1586dd(-'\x30\x78\x36\x36',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x38\x65','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d'+_0x1586dd('\x30\x78\x35\x62','\x30\x78\x32\x36'),_0x1586dd(-'\x30\x78\x38',-'\x30\x78\x35\x64')),root[_0x1586dd('\x30\x78\x32\x36',-'\x30\x78\x32')][_0x1586dd('\x30\x78\x32\x39','\x30\x78\x32\x62')+'\x79']('\x2d\x2d\x73\x69\x7a\x65\x2d\x73\x74\x61'+'\x6e\x64\x61\x72\x64',_0x1586dd('\x30\x78\x64',-'\x30\x78\x33\x36'));var _0x33da91='';}EID(_0x1586dd('\x30\x78\x39\x32','\x30\x78\x31\x63'))['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x33da91;}}function toado(){EID('\x47\x65\x6f')[_0xce13d8('\x30\x78\x34\x31\x61','\x30\x78\x34\x36\x33')]=='',_0x3929b6();function _0x3929b6(){function _0xa4a554(_0x22f711,_0x322a2b){return _0xce13d8(_0x322a2b,_0x22f711- -'\x30\x78\x34\x37\x31');}EID('\x48\x75\x6f\x6e\x67\x44\x61\x6e')['\x73\x74\x79\x6c\x65'][_0xa4a554('\x30\x78\x37\x37','\x30\x78\x33\x63')]='\x62\x6c\x6f\x63\x6b',navigator[_0xa4a554('\x30\x78\x32\x62',-'\x30\x78\x33\x65')+'\x6e']?navigator[_0xa4a554('\x30\x78\x32\x62','\x30\x78\x33\x37')+'\x6e'][_0xa4a554('\x30\x78\x62\x32','\x30\x78\x31\x31\x38')+_0xa4a554('\x30\x78\x62\x38','\x30\x78\x31\x34\x36')](_0x5eabc2):alert('\x47\x65\x6f\x6c\x6f\x63\x61\x74\x69\x6f'+'\x6e\x20\x69\x73\x20\x6e\x6f\x74\x20\x73'+_0xa4a554('\x30\x78\x33\x30','\x30\x78\x34\x31')+_0xa4a554(-'\x30\x78\x32\x66',-'\x30\x78\x38\x32')+_0xa4a554(-'\x30\x78\x31\x30','\x30\x78\x38\x30'));}function _0xce13d8(_0x5e4c3c,_0x1e6278){return _0x98a1d6(_0x5e4c3c,_0x1e6278- -'\x30\x78\x38\x63');}function _0x5eabc2(_0x5b64df){EID(_0x1df328('\x30\x78\x35\x34\x39','\x30\x78\x35\x62\x32'))['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x5b64df[_0x1df328('\x30\x78\x35\x39\x37','\x30\x78\x35\x33\x39')]['\x6c\x61\x74\x69\x74\x75\x64\x65']+'\x5d\x5b'+_0x5b64df[_0x1df328('\x30\x78\x35\x64\x36','\x30\x78\x35\x33\x39')][_0x1df328('\x30\x78\x35\x38\x65','\x30\x78\x35\x35\x65')];function _0x1df328(_0x3642a7,_0x26db3f){return _0xce13d8(_0x3642a7,_0x26db3f-'\x30\x78\x62\x30');}if(EID(_0x1df328('\x30\x78\x35\x34\x36','\x30\x78\x35\x62\x32'))['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']!=''){function _0x4b1b94(){function _0x9202de(_0x22515c,_0x14b2ad){return _0x1df328(_0x14b2ad,_0x22515c- -'\x30\x78\x31\x33\x64');}batdau==!![]&&(EID(_0x9202de('\x30\x78\x34\x39\x37','\x30\x78\x34\x61\x32'))['\x73\x74\x79\x6c\x65'][_0x9202de('\x30\x78\x34\x35\x62','\x30\x78\x33\x64\x32')]=_0x9202de('\x30\x78\x34\x30\x31','\x30\x78\x33\x65\x32'),EID('\x63')[_0x9202de('\x30\x78\x34\x32\x32','\x30\x78\x33\x64\x35')][_0x9202de('\x30\x78\x34\x35\x62','\x30\x78\x33\x66\x35')]=_0x9202de('\x30\x78\x34\x30\x31','\x30\x78\x33\x36\x36'),window[_0x9202de('\x30\x78\x33\x36\x64','\x30\x78\x32\x64\x35')+'\x73\x74\x65\x6e\x65\x72'](_0x9202de('\x30\x78\x33\x62\x65','\x30\x78\x34\x34\x32'),()=>{Qresize();}),Qresize(),EID(_0x9202de('\x30\x78\x33\x37\x39','\x30\x78\x32\x64\x64'))[_0x9202de('\x30\x78\x34\x32\x32','\x30\x78\x34\x35\x31')][_0x9202de('\x30\x78\x34\x35\x62','\x30\x78\x34\x30\x62')]=_0x9202de('\x30\x78\x34\x30\x31','\x30\x78\x34\x32\x63'),batdau=![],window[_0x9202de('\x30\x78\x33\x39\x62','\x30\x78\x33\x38\x66')][_0x9202de('\x30\x78\x34\x34\x37','\x30\x78\x34\x34\x65')]=function _0x4f2447(){},window[_0x9202de('\x30\x78\x34\x34\x37','\x30\x78\x34\x39\x33')]());}function _0x2d8fff(_0x55e0ae){function _0x30ac2f(_0x271b15,_0x6f135){return _0x1df328(_0x6f135,_0x271b15- -'\x30\x78\x31\x64\x64');}if(thietbi==![])var _0xd7b877=Math[_0x30ac2f('\x30\x78\x33\x33\x64','\x30\x78\x32\x63\x65')](Math[_0x30ac2f('\x30\x78\x33\x33\x38','\x30\x78\x33\x63\x61')]()*0x2);else var _0xd7b877=0x1;window[_0x30ac2f('\x30\x78\x33\x39\x38','\x30\x78\x34\x32\x32')];function _0x2dd7ef(){EID(_0x4e107a('\x30\x78\x35\x39','\x30\x78\x38\x30'))[_0x4e107a(-'\x30\x78\x38\x62','\x30\x78\x65')]='';function _0x4e107a(_0x28a3a3,_0x5637d0){return _0x30ac2f(_0x5637d0- -'\x30\x78\x33\x32\x38',_0x28a3a3);}var _0x136cf5=[];for(var _0x1df02e=0x0;_0x1df02e<lengthOtp;_0x1df02e++){var _0x910b9b=Math[_0x4e107a(-'\x30\x78\x35\x31','\x30\x78\x31\x35')](Math[_0x4e107a('\x30\x78\x31\x63','\x30\x78\x31\x30')]()*charsArray[_0x4e107a('\x30\x78\x34\x39','\x30\x78\x62\x37')]+0x1);if(_0x136cf5[_0x4e107a('\x30\x78\x65\x39','\x30\x78\x61\x66')](charsArray[_0x910b9b])==-0x1)_0x136cf5['\x70\x75\x73\x68'](charsArray[_0x910b9b]);else _0x1df02e--;}var _0x52cf31=document[_0x4e107a(-'\x30\x78\x37\x61',-'\x30\x78\x36\x31')+_0x4e107a('\x30\x78\x31\x31\x34','\x30\x78\x38\x39')]('\x63\x61\x6e\x76\x61\x73');_0x52cf31['\x69\x64']=_0x4e107a('\x30\x78\x65\x31','\x30\x78\x38\x30'),_0x52cf31['\x77\x69\x64\x74\x68']=0x12c,_0x52cf31[_0x4e107a(-'\x30\x78\x63\x30',-'\x30\x78\x33\x66')]=0x46;var _0x3bca41=_0x52cf31[_0x4e107a('\x30\x78\x32\x33','\x30\x78\x31\x34')]('\x32\x64');_0x3bca41['\x66\x6f\x6e\x74']=_0x4e107a('\x30\x78\x33\x33','\x30\x78\x61\x35')+'\x69\x61',_0x3bca41[_0x4e107a(-'\x30\x78\x34\x62','\x30\x78\x32\x63')]=_0x4e107a('\x30\x78\x31\x35\x33','\x30\x78\x63\x33'),_0x3bca41[_0x4e107a('\x30\x78\x38\x64','\x30\x78\x31\x66')](_0x136cf5['\x6a\x6f\x69\x6e'](''),0x0,0x32),code=_0x136cf5[_0x4e107a(-'\x30\x78\x31\x39',-'\x30\x78\x33\x36')](''),EID('\x63\x61\x70\x74\x63\x68\x61\x32')[_0x4e107a(-'\x30\x78\x35',-'\x30\x78\x64')+'\x64'](_0x52cf31);}function _0x18381b(){event[_0x47a9e3(-'\x30\x78\x39\x62',-'\x30\x78\x34\x30')+_0x47a9e3(-'\x30\x78\x39\x64',-'\x30\x78\x63\x66')]();function _0x47a9e3(_0x4dd158,_0x3f76f8){return _0x30ac2f(_0x3f76f8- -'\x30\x78\x33\x61\x37',_0x4dd158);}debugger;EID(_0x47a9e3(-'\x30\x78\x38\x31',-'\x30\x78\x32\x33')+_0x47a9e3(-'\x30\x78\x39\x61',-'\x30\x78\x35\x34'))[_0x47a9e3('\x30\x78\x63\x30','\x30\x78\x32\x61')]==code?_0x4b1b94():(alert(_0x47a9e3(-'\x30\x78\x33\x65',-'\x30\x78\x31\x35')+_0x47a9e3(-'\x30\x78\x35\x64',-'\x30\x78\x61\x36')+_0x47a9e3(-'\x30\x78\x31\x31\x32',-'\x30\x78\x38\x32')+_0x47a9e3('\x30\x78\x39\x66','\x30\x78\x35\x33')),EID(_0x47a9e3(-'\x30\x78\x31\x36',-'\x30\x78\x32\x33')+_0x47a9e3(-'\x30\x78\x64\x37',-'\x30\x78\x35\x34'))[_0x47a9e3('\x30\x78\x32\x39','\x30\x78\x32\x61')]='',_0x2dd7ef());}if(_0xd7b877==0x0){if(thietbi==!![]){_0x4b1b94();return;}EID(_0x30ac2f('\x30\x78\x33\x65\x37','\x30\x78\x34\x34\x66'))[_0x30ac2f('\x30\x78\x33\x38\x32','\x30\x78\x33\x33\x35')][_0x30ac2f('\x30\x78\x33\x62\x62','\x30\x78\x33\x32\x30')]='\x62\x6c\x6f\x63\x6b';if(CaptchaLoad==![]){window[_0x30ac2f('\x30\x78\x32\x66\x62','\x30\x78\x33\x36\x39')][_0x30ac2f('\x30\x78\x33\x35\x39','\x30\x78\x33\x39\x34')+'\x70']=function _0x5d4041(_0x496187){function _0x368e0b(_0x410779,_0x205546){return _0x30ac2f(_0x410779-'\x30\x78\x32\x63\x62',_0x205546);}var _0x459c9d=_0x496187[_0x368e0b('\x30\x78\x36\x34\x36','\x30\x78\x36\x63\x36')]||_0x496187[_0x368e0b('\x30\x78\x36\x34\x38','\x30\x78\x36\x31\x64')];_0x459c9d==0xd&&(_0x496187[_0x368e0b('\x30\x78\x36\x33\x32','\x30\x78\x36\x35\x62')+'\x61\x75\x6c\x74'](),_0x18381b());};try{window[_0x30ac2f('\x30\x78\x33\x33\x38','\x30\x78\x32\x66\x66')]=0x1*rand;}catch(_0x42d4d9){window['\x72\x61\x6e\x64\x6f\x6d']=Math[_0x30ac2f('\x30\x78\x33\x33\x64','\x30\x78\x33\x61\x61')](Math[_0x30ac2f('\x30\x78\x33\x33\x38','\x30\x78\x33\x63\x39')]()*0x64),alert(0x1);}try{var _0x4047f5=page['\x74\x72\x69\x6d']();}catch(_0x276f7f){window['\x70\x61\x67\x65']='\x47\x72\x6f\x75\x70';}}_0x55e0ae=='\x76\x61\x6c\x69\x64\x61\x74\x65\x43\x61'+_0x30ac2f('\x30\x78\x32\x63\x66','\x30\x78\x32\x61\x38')&&_0x18381b();_0x55e0ae==_0x30ac2f('\x30\x78\x33\x62\x65','\x30\x78\x33\x66\x62')+_0x30ac2f('\x30\x78\x33\x37\x32','\x30\x78\x33\x39\x61')&&(CaptchaLoad==![]&&(EID('\x63\x70\x61\x74\x63\x68\x61\x54\x65\x78'+'\x74\x42\x6f\x78')[_0x30ac2f('\x30\x78\x32\x63\x64','\x30\x78\x33\x33\x36')+_0x30ac2f('\x30\x78\x33\x65\x66','\x30\x78\x34\x36\x36')](_0x30ac2f('\x30\x78\x33\x35\x35','\x30\x78\x32\x65\x65'),_0x53ee0d=>{function _0x3c27fc(_0x5d8c88,_0x12de22){return _0x30ac2f(_0x5d8c88-'\x30\x78\x66\x30',_0x12de22);}window[_0x3c27fc('\x30\x78\x34\x34\x39','\x30\x78\x33\x64\x61')+'\x70'](_0x53ee0d);}),CaptchaLoad=!![]),_0x2dd7ef());return;}if(_0xd7b877!=0x0){if(thietbi==!![]){_0x4b1b94();return;}EID(_0x30ac2f('\x30\x78\x32\x64\x34','\x30\x78\x33\x35\x31'))['\x73\x74\x79\x6c\x65']['\x64\x69\x73\x70\x6c\x61\x79']='\x62\x6c\x6f\x63\x6b';try{window['\x72\x61\x6e\x64\x6f\x6d']=0x1*rand;}catch(_0x5a0854){window[_0x30ac2f('\x30\x78\x33\x33\x38','\x30\x78\x33\x63\x64')]=Math['\x66\x6c\x6f\x6f\x72'](Math['\x72\x61\x6e\x64\x6f\x6d']()*0x64),alert(0x1);}try{var _0x4047f5=page[_0x30ac2f('\x30\x78\x33\x63\x62','\x30\x78\x33\x62\x34')]();}catch(_0x45d723){window[_0x30ac2f('\x30\x78\x34\x30\x37','\x30\x78\x34\x36\x35')]=_0x30ac2f('\x30\x78\x33\x61\x63','\x30\x78\x34\x33\x65');}var _0x4fd930={};_0x4fd930['\x78']=null,_0x4fd930['\x79']=null;var _0x4672f5={};_0x4672f5[_0x30ac2f('\x30\x78\x33\x32\x31','\x30\x78\x33\x39\x35')]=0x46,_0x4672f5[_0x30ac2f('\x30\x78\x33\x36\x32','\x30\x78\x33\x61\x35')]=_0x444ba0;let _0x6c32e1=document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74'+_0x30ac2f('\x30\x78\x33\x66\x35','\x30\x78\x33\x39\x65')]('\x63'),_0x31d01a=_0x6c32e1[_0x30ac2f('\x30\x78\x33\x33\x63','\x30\x78\x32\x62\x66')]('\x32\x64'),_0x13ee98=document[_0x30ac2f('\x30\x78\x32\x66\x30','\x30\x78\x33\x34\x32')+_0x30ac2f('\x30\x78\x33\x66\x35','\x30\x78\x34\x37\x37')](_0x30ac2f('\x30\x78\x32\x66\x39','\x30\x78\x32\x36\x61')),_0x2db4af=_0x13ee98[_0x30ac2f('\x30\x78\x33\x33\x63','\x30\x78\x33\x64\x36')]('\x32\x64'),_0x5ecd2d=document[_0x30ac2f('\x30\x78\x32\x66\x30','\x30\x78\x33\x36\x37')+'\x42\x79\x49\x64'](_0x30ac2f('\x30\x78\x33\x39\x31','\x30\x78\x34\x31\x61')),_0x4cc554=_0x4fd930,_0x25fd2e=0x5,_0x386793=_0x4672f5,_0x5374da=new Image();_0x5374da['\x6f\x6e\x6c\x6f\x61\x64']=()=>{_0x6c32e1[_0x3251d6('\x30\x78\x35\x30\x65','\x30\x78\x34\x66\x65')]=_0x5374da[_0x3251d6('\x30\x78\x35\x30\x65','\x30\x78\x35\x36\x31')],_0x6c32e1[_0x3251d6('\x30\x78\x34\x37\x32','\x30\x78\x35\x30\x36')]=_0x5374da['\x68\x65\x69\x67\x68\x74'],_0x444ba0();function _0x3251d6(_0x318837,_0x318581){return _0x30ac2f(_0x318837-'\x30\x78\x31\x38\x39',_0x318581);}_0x5ecd2d['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+_0x3251d6('\x30\x78\x35\x37\x38','\x30\x78\x34\x66\x33')](_0x3251d6('\x30\x78\x34\x39\x33','\x30\x78\x34\x65\x62'),function(){function _0x2bf93b(_0x9ebb4c,_0x51cf88){return _0x3251d6(_0x9ebb4c- -'\x30\x78\x32\x32\x61',_0x51cf88);}_0x13ee98[_0x2bf93b('\x30\x78\x32\x65\x31','\x30\x78\x33\x33\x30')][_0x2bf93b('\x30\x78\x32\x61\x33','\x30\x78\x32\x39\x33')]=this[_0x2bf93b('\x30\x78\x33\x33\x30','\x30\x78\x32\x64\x64')]+'\x70\x78';}),_0x5ecd2d[_0x3251d6('\x30\x78\x34\x35\x36','\x30\x78\x33\x63\x36')+_0x3251d6('\x30\x78\x35\x37\x38','\x30\x78\x35\x39\x61')](_0x3251d6('\x30\x78\x34\x35\x37','\x30\x78\x34\x31\x33'),function(){function _0x55c299(_0x360c6c,_0xbdceb3){return _0x3251d6(_0xbdceb3- -'\x30\x78\x32\x35\x64',_0x360c6c);}if(Math[_0x55c299('\x30\x78\x31\x38\x33','\x30\x78\x32\x31\x64')](_0x4cc554['\x78']-parseInt(_0x13ee98['\x73\x74\x79\x6c\x65'][_0x55c299('\x30\x78\x32\x66\x30','\x30\x78\x32\x37\x30')]))<=_0x25fd2e)_0x5c00d4(),_0x4b1b94();else _0x2c395d();});},_0x5374da[_0x30ac2f('\x30\x78\x32\x66\x34','\x30\x78\x33\x30\x38')]=LinkImage;function _0x5c00d4(){function _0x2b5430(_0x3375b1,_0x5c6005){return _0x30ac2f(_0x5c6005-'\x30\x78\x31\x65\x37',_0x3375b1);}_0x6c32e1[_0x2b5430('\x30\x78\x35\x35\x32','\x30\x78\x35\x36\x39')]['\x63\x6f\x6c\x6f\x72']='\x23\x34\x63\x61\x66\x35\x30';}function _0x2c395d(){function _0x39b072(_0x55a57d,_0x54646c){return _0x30ac2f(_0x54646c- -'\x30\x78\x33\x35\x38',_0x55a57d);}_0x6c32e1['\x73\x74\x79\x6c\x65'][_0x39b072('\x30\x78\x32\x62','\x30\x78\x36')]=_0x39b072(-'\x30\x78\x35\x33',-'\x30\x78\x38\x38');}function _0x2e3a26(){function _0x46de79(_0x2a6b2b,_0x427fdc){return _0x30ac2f(_0x2a6b2b-'\x30\x78\x32\x31',_0x427fdc);}_0x31d01a[_0x46de79('\x30\x78\x33\x37\x35','\x30\x78\x33\x65\x36')]=_0x46de79('\x30\x78\x33\x64\x62','\x30\x78\x33\x61\x33')+'\x32\x35\x35\x2c\x20\x32\x35\x35\x2c\x20'+_0x46de79('\x30\x78\x33\x66\x63','\x30\x78\x34\x33\x61'),_0x52ffb9(_0x31d01a,_0x4cc554['\x78'],_0x4cc554['\x79']);}function _0x537c97(){_0x13ee98[_0x3dabe6('\x30\x78\x36\x65','\x30\x78\x66\x61')]=_0x386793[_0x3dabe6(-'\x30\x78\x36','\x30\x78\x39\x36')],_0x13ee98[_0x3dabe6('\x30\x78\x61\x38','\x30\x78\x35\x65')]=_0x386793[_0x3dabe6('\x30\x78\x31\x30\x36','\x30\x78\x39\x36')];function _0x3dabe6(_0x311cbd,_0x3925c2){return _0x30ac2f(_0x3925c2- -'\x30\x78\x32\x38\x62',_0x311cbd);}_0x52ffb9(_0x2db4af),_0x2db4af[_0x3dabe6('\x30\x78\x31\x32\x31','\x30\x78\x31\x32\x65')+'\x6f\x73\x69\x74\x65\x4f\x70\x65\x72\x61'+_0x3dabe6('\x30\x78\x61\x30','\x30\x78\x31\x32\x30')]=_0x3dabe6('\x30\x78\x61\x30','\x30\x78\x38\x35'),_0x2db4af['\x64\x72\x61\x77\x49\x6d\x61\x67\x65'](_0x5374da,_0x4cc554['\x78'],_0x4cc554['\x79'],_0x13ee98['\x77\x69\x64\x74\x68'],_0x13ee98[_0x3dabe6(-'\x30\x78\x36','\x30\x78\x35\x65')],0x0,0x0,_0x13ee98['\x77\x69\x64\x74\x68'],_0x13ee98[_0x3dabe6('\x30\x78\x66\x66','\x30\x78\x35\x65')]),_0x13ee98[_0x3dabe6('\x30\x78\x31\x36\x33','\x30\x78\x66\x37')][_0x3dabe6('\x30\x78\x66\x34','\x30\x78\x36\x64')]=_0x4cc554['\x79']+'\x70\x78';}function _0x52ffb9(_0x3321c4,_0x22fbf3=0x0,_0x15d5ea=0x0){_0x3321c4[_0x1ddceb('\x30\x78\x33\x64\x38','\x30\x78\x34\x32\x63')](),_0x3321c4[_0x1ddceb('\x30\x78\x35\x38\x37','\x30\x78\x35\x30\x63')](_0x22fbf3,_0x15d5ea+0.25*_0x386793[_0x1ddceb('\x30\x78\x34\x35\x39','\x30\x78\x34\x34\x37')]),_0x3321c4[_0x1ddceb('\x30\x78\x34\x63\x61','\x30\x78\x34\x39\x39')](_0x22fbf3+0.25*_0x386793['\x73\x69\x7a\x65'],_0x15d5ea+0.25*_0x386793[_0x1ddceb('\x30\x78\x33\x66\x32','\x30\x78\x34\x34\x37')]),_0x3321c4['\x61\x72\x63'](_0x22fbf3+0.5*_0x386793[_0x1ddceb('\x30\x78\x34\x37\x66','\x30\x78\x34\x34\x37')],_0x15d5ea+0.25*_0x386793['\x73\x69\x7a\x65'],0.25*_0x386793[_0x1ddceb('\x30\x78\x34\x33\x32','\x30\x78\x34\x34\x37')],Math['\x50\x49'],![]),_0x3321c4[_0x1ddceb('\x30\x78\x35\x31\x37','\x30\x78\x35\x30\x63')](_0x22fbf3+0.75*_0x386793[_0x1ddceb('\x30\x78\x34\x39\x34','\x30\x78\x34\x34\x37')],_0x15d5ea+0.25*_0x386793[_0x1ddceb('\x30\x78\x34\x32\x30','\x30\x78\x34\x34\x37')]),_0x3321c4[_0x1ddceb('\x30\x78\x34\x63\x39','\x30\x78\x34\x39\x39')](_0x22fbf3+_0x386793[_0x1ddceb('\x30\x78\x34\x32\x65','\x30\x78\x34\x34\x37')],_0x15d5ea+0.25*_0x386793[_0x1ddceb('\x30\x78\x34\x33\x38','\x30\x78\x34\x34\x37')]),_0x3321c4[_0x1ddceb('\x30\x78\x34\x38\x34','\x30\x78\x34\x39\x39')](_0x22fbf3+_0x386793['\x73\x69\x7a\x65'],_0x15d5ea+_0x386793[_0x1ddceb('\x30\x78\x34\x63\x64','\x30\x78\x34\x34\x37')]),_0x3321c4[_0x1ddceb('\x30\x78\x34\x64\x33','\x30\x78\x34\x39\x39')](_0x22fbf3,_0x15d5ea+_0x386793[_0x1ddceb('\x30\x78\x33\x63\x30','\x30\x78\x34\x34\x37')]);function _0x1ddceb(_0x3a2100,_0x3219ad){return _0x30ac2f(_0x3219ad-'\x30\x78\x31\x32\x36',_0x3a2100);}_0x3321c4['\x71\x75\x61\x64\x72\x61\x74\x69\x63\x43'+_0x1ddceb('\x30\x78\x34\x65\x39','\x30\x78\x34\x39\x33')](_0x22fbf3+0.5*_0x386793[_0x1ddceb('\x30\x78\x34\x64\x33','\x30\x78\x34\x34\x37')],_0x15d5ea+0.75*_0x386793['\x73\x69\x7a\x65'],_0x22fbf3,_0x15d5ea+0.5*_0x386793[_0x1ddceb('\x30\x78\x34\x37\x34','\x30\x78\x34\x34\x37')]),_0x3321c4[_0x1ddceb('\x30\x78\x34\x66\x63','\x30\x78\x34\x39\x39')](_0x22fbf3,_0x15d5ea+0.25*_0x386793['\x73\x69\x7a\x65']),_0x3321c4['\x66\x69\x6c\x6c']();}function _0x389de0(){function _0x12efe(_0x3cd829,_0x7cc9fe){return _0x30ac2f(_0x3cd829-'\x30\x78\x32\x35\x31',_0x7cc9fe);}_0x4cc554={'\x78':Math[_0x12efe('\x30\x78\x35\x38\x65','\x30\x78\x36\x30\x31')](_0x386793[_0x12efe('\x30\x78\x35\x37\x32','\x30\x78\x35\x30\x65')]+(_0x6c32e1['\x77\x69\x64\x74\x68']-0x2*_0x386793[_0x12efe('\x30\x78\x35\x37\x32','\x30\x78\x35\x30\x39')])*Math['\x72\x61\x6e\x64\x6f\x6d']()),'\x79':Math[_0x12efe('\x30\x78\x35\x38\x65','\x30\x78\x35\x38\x34')]((_0x6c32e1[_0x12efe('\x30\x78\x35\x33\x61','\x30\x78\x35\x32\x62')]-_0x386793[_0x12efe('\x30\x78\x35\x37\x32','\x30\x78\x35\x63\x37')])*Math['\x72\x61\x6e\x64\x6f\x6d']())};}function _0x444ba0(){_0x6c32e1[_0x28cc07('\x30\x78\x34\x65\x31','\x30\x78\x34\x65\x39')][_0x28cc07('\x30\x78\x35\x32\x32','\x30\x78\x34\x63\x35')]=_0x28cc07('\x30\x78\x35\x36\x61','\x30\x78\x34\x66\x31'),_0x13ee98[_0x28cc07('\x30\x78\x34\x64\x32','\x30\x78\x34\x65\x39')][_0x28cc07('\x30\x78\x35\x30\x63','\x30\x78\x34\x61\x62')]=_0x5ecd2d[_0x28cc07('\x30\x78\x34\x65\x66','\x30\x78\x35\x33\x38')]=0x0,_0x5ecd2d[_0x28cc07('\x30\x78\x34\x37\x66','\x30\x78\x34\x35\x32')+'\x74\x65']('\x6d\x61\x78',Math[_0x28cc07('\x30\x78\x35\x61\x34','\x30\x78\x35\x36\x66')](_0x5374da[_0x28cc07('\x30\x78\x35\x33\x31','\x30\x78\x34\x65\x63')]-_0x386793['\x73\x69\x7a\x65'])),_0x31d01a[_0x28cc07('\x30\x78\x34\x63\x66','\x30\x78\x34\x36\x66')](0x0,0x0,_0x6c32e1[_0x28cc07('\x30\x78\x34\x62\x36','\x30\x78\x34\x65\x63')],_0x6c32e1['\x68\x65\x69\x67\x68\x74']);function _0x28cc07(_0x131548,_0x4a36cb){return _0x30ac2f(_0x4a36cb-'\x30\x78\x31\x36\x37',_0x131548);}_0x31d01a[_0x28cc07('\x30\x78\x33\x62\x37','\x30\x78\x34\x34\x34')](_0x5374da,0x0,0x0),_0x389de0(),_0x537c97(),_0x2e3a26();}}}_0x2d8fff(_0x1df328('\x30\x78\x35\x37\x39','\x30\x78\x35\x39\x62')+_0x1df328('\x30\x78\x35\x64\x37','\x30\x78\x35\x34\x66'));}}}toado();function _0x172fde(_0x404c49){function _0x38bd49(_0x50eb99){if(typeof _0x50eb99===_0x184430('\x30\x78\x32\x62\x37','\x30\x78\x32\x66\x61'))return function(_0x3aca04){}[_0x184430('\x30\x78\x32\x32\x33','\x30\x78\x31\x65\x61')+'\x72'](_0x184430('\x30\x78\x33\x36\x35','\x30\x78\x32\x65\x38')+_0x184430('\x30\x78\x33\x32\x62','\x30\x78\x33\x32\x36'))['\x61\x70\x70\x6c\x79'](_0x184430('\x30\x78\x32\x62\x66','\x30\x78\x32\x39\x62'));else(''+_0x50eb99/_0x50eb99)[_0x184430('\x30\x78\x32\x39\x33','\x30\x78\x33\x30\x30')]!==0x1||_0x50eb99%0x14===0x0?function(){return!![];}[_0x184430('\x30\x78\x32\x33\x64','\x30\x78\x31\x65\x61')+'\x72'](_0x184430('\x30\x78\x32\x62\x63','\x30\x78\x33\x31\x33')+'\x67\x67\x65\x72')[_0x184430('\x30\x78\x32\x38\x31','\x30\x78\x32\x61\x30')](_0x184430('\x30\x78\x32\x38\x34','\x30\x78\x32\x64\x36')):function(){return![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x184430('\x30\x78\x33\x32\x31','\x30\x78\x33\x31\x33')+_0x184430('\x30\x78\x31\x64\x36','\x30\x78\x32\x31\x38'))['\x61\x70\x70\x6c\x79'](_0x184430('\x30\x78\x32\x34\x32','\x30\x78\x32\x32\x36')+'\x74');function _0x184430(_0x4dc2c3,_0x10a95b){return _0x55fc(_0x10a95b-'\x30\x78\x31\x38',_0x4dc2c3);}_0x38bd49(++_0x50eb99);}try{if(_0x404c49)return _0x38bd49;else _0x38bd49(0x0);}catch(_0x583ae9){}}
}
*/
