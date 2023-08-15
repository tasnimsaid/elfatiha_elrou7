// function countWords() {

// let text = document.getElementById("text").value;
// let wordsCounts = text.split(" ").length;


// document.getElementById("best4").innerHTML=wordsCounts;

// }

// // const words = text => {

// return text.split('/\S+/').length ;

// };




// //best code lettre
// let textWithoutSpace = text.replace(/\s/g, '');
// let arrayOfLetters = textWithoutSpace.split("");


// function countWord() {
// let counts = {};
// let text = document.getElementById("text").value;
// let wordsCount = text.split(" ").length;

// let textWithoutSpace = text.replace(/\s/g, '');
//  let arrayOfLetters = textWithoutSpace.split("");


// document.getElementById("best3").innerHTML=wordsCount;

// }








function countWord() {

let text = document.getElementById("text").value;
 text =text.trim();

 let words = text.split(" ").length ;


   
document.getElementById("best4").innerHTML=words;
  
   

  

  

let Counter1 = 0 ;
let Counter2 = 0 ;
let Counter3 = 0 ;
let Counter4 = 0 ;

 let Counter5 = 0 ;
 let Counter6 = 0 ;
let Counter7 = 0 ;
let Counter8 = 0 ;
let Counter9 = 0 ;
let Counter10 = 0 ;

let Counter11 = 0 ;
let Counter12 = 0 ;
let Counter13 = 0 ;
let Counter14 = 0 ;
let Counter15 = 0 ;
let Counter16 = 0 ;
let Counter17 = 0 ;
let Counter18 = 0 ;
let Counter19 = 0 ;
let Counter20 = 0 ;
let Counter21 = 0 ;
let Counter22 = 0 ;
let Counter23 = 0 ;
let Counter24 = 0 ;
let Counter25 = 0 ;
let Counter26 = 0 ;
let Counter27 = 0 ;
let Counter28 = 0 ;
let Counter29 = 0 ;











let alif = ['ا','أ','إ','آ'];

let laa = ['ل'];
let haa = ['ح'];
let mim = ['م'];
let dal = ['د'];
let haae = ['ه' ,'ة'];
let raa = ['ر'];
let baa = ['ب'];
let ine = ['ع'];
let yaa = ['ي','ى','ئ'];
 let noon = ['ن'];
let kaf = ['ك'];
let ouaou = ['و','ؤ'];
let sin = ['س'];
let taa = ['ت'];
let saad = ['ص'];
let ttae = ['ط'];
let ppaf = ['ق'];
let ddal = ['ذ'];
let gaa = ['غ'];
let daa = ['ض'];
let faa = ['ف'];
let zay = ['ز'];
let kha = ['خ'];
let chine = ['ش'];
let ddda = ['ظ'];
let jim = ['ج'];
let ttta = ['ث'];



for(ch of text) {

   

 if (alif.includes(ch)){
    Counter1++
 }
 if (laa.includes(ch)){
    Counter2++
 }

 if (haa.includes(ch)){
   Counter3++
}

if (mim.includes(ch)){
   Counter4++
   
}

if (dal.includes(ch)){
   Counter5++
}

if (haae.includes(ch)){
   Counter6++
}


if (raa.includes(ch)){
   Counter7++
}
if (baa.includes(ch)){
   Counter8++
}
if (ine.includes(ch)){
   Counter9++
}
if (yaa.includes(ch)){
   Counter10++
}

if (noon.includes(ch)){
   Counter11++
}


if (kaf.includes(ch)){
   Counter12++
}


if (ouaou.includes(ch)){
   Counter13++
}



if (sin.includes(ch)){
   Counter14++
}


if (taa.includes(ch)){
   Counter15++
}


if (saad.includes(ch)){
   Counter16++
}


if (ttae.includes(ch)){
   Counter17++
}


if (ppaf.includes(ch)){
   Counter18++
}


if (ddal.includes(ch)){
   Counter19++
}


if (gaa.includes(ch)){
   Counter20++
}


if (daa.includes(ch)){
   Counter21++
}


if (faa.includes(ch)){
   Counter22++
}


if (zay.includes(ch)){
   Counter23++
}


if (kha.includes(ch)){
   Counter24++
}


if (chine.includes(ch)){
   Counter25++
}


if (ddda.includes(ch)){
   Counter26++
}


if (jim.includes(ch)){
   Counter27++
}


if (ttta.includes(ch)){
   Counter28++
}



}



document.getElementById("alif").innerHTML=Counter1;
document.getElementById("alif1").innerHTML=Counter1*121;

document.getElementById("laa").innerHTML=Counter2;
document.getElementById("laa2").innerHTML=Counter2*242;

document.getElementById("haa").innerHTML=Counter3;
document.getElementById("haa3").innerHTML=Counter3*363;

document.getElementById("mim").innerHTML=Counter4;
document.getElementById("mim4").innerHTML=Counter4*484;

document.getElementById("dal").innerHTML=Counter5;
document.getElementById("dal5").innerHTML=Counter5*605;

document.getElementById("haae").innerHTML=Counter6;
document.getElementById("haae6").innerHTML=Counter6*726;

document.getElementById("raa").innerHTML=Counter7;
document.getElementById("raa7").innerHTML=Counter7*847;

document.getElementById("baa").innerHTML=Counter8;
document.getElementById("baa8").innerHTML=Counter8*968;

document.getElementById("ine").innerHTML=Counter9;
document.getElementById("ine9").innerHTML=Counter9*1089;

document.getElementById("yaa").innerHTML=Counter10;
document.getElementById("yaa10").innerHTML=Counter10*1210;

document.getElementById("noon").innerHTML=Counter11;
document.getElementById("noon11").innerHTML=Counter11*1331;

document.getElementById("kaf").innerHTML=Counter12;
document.getElementById("kaf12").innerHTML=Counter12*1452;


document.getElementById("ouaou").innerHTML=Counter13;
document.getElementById("ouaou13").innerHTML=Counter13*1573;


document.getElementById("sin").innerHTML=Counter14;
document.getElementById("sin14").innerHTML=Counter14*1694;

document.getElementById("taa").innerHTML=Counter15;
document.getElementById("taa15").innerHTML=Counter15*1815;

document.getElementById("saad").innerHTML=Counter16;
document.getElementById("saad16").innerHTML=Counter16*1936;

document.getElementById("ttae").innerHTML=Counter17;
document.getElementById("ttae17").innerHTML=Counter17*2057;

document.getElementById("ppaf").innerHTML=Counter18;
document.getElementById("ppaf18").innerHTML=Counter18*2178;


document.getElementById("ddal").innerHTML=Counter19;
document.getElementById("ddal19").innerHTML=Counter19*2299;

document.getElementById("gaa").innerHTML=Counter20;
document.getElementById("gaa20").innerHTML=Counter20*2420;

document.getElementById("daa").innerHTML=Counter21;
document.getElementById("daa21").innerHTML=Counter21*2541;

document.getElementById("faa").innerHTML=Counter22;
document.getElementById("faa22").innerHTML=Counter22*2662;

document.getElementById("zay").innerHTML=Counter23;
document.getElementById("zay23").innerHTML=Counter23*2783;

document.getElementById("kha").innerHTML=Counter24;
document.getElementById("kha24").innerHTML=Counter24*2904;

document.getElementById("chine").innerHTML=Counter25;
document.getElementById("chine25").innerHTML=Counter25*3025;

document.getElementById("ddda").innerHTML=Counter26;
document.getElementById("ddda26").innerHTML=Counter26*3146;

document.getElementById("jim").innerHTML=Counter27;
document.getElementById("jim27").innerHTML=Counter27*3267;

document.getElementById("ttta").innerHTML=Counter28;
document.getElementById("ttta28").innerHTML=Counter28*3388;



document.getElementById("text").addEventListener("keyup",countWord);


document.getElementById("best3").innerHTML= Counter1*121 + Counter2*242 + Counter3*363 + Counter4*484 + Counter5*605 + Counter6*726 + Counter7*847 + Counter8*968	 + Counter9*1089 + Counter10*1210 + Counter11*1331 + Counter12*1452 + Counter13*1573 + Counter14*1694 + Counter15*1815 + Counter16*1936 + Counter17*2057 + Counter18*2178 + Counter19*2299 + Counter20*2420 + Counter21*2541 + Counter22*2662 + Counter23*2783 + Counter24*2904 + Counter25*3025 + Counter26*3146 + Counter27*3267 + Counter28*3388  ;

document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;


var
  roma =document.getElementById("best3").innerHTML;
  document.getElementById("core3").innerHTML= (roma * 8000)+1 ;      
  document.getElementById("core").innerHTML= (roma * 8000)-3 ;      
  document.getElementById("core1").innerHTML= roma * 8000 ;      
  document.getElementById("core2").innerHTML= (roma * 8000)-2 ;      
  document.getElementById("core4").innerHTML= (roma * 8000)-1 ;      
  document.getElementById("best99").innerHTML= roma * 8000 ;  
  
  
  

  var
  kaoune =  document.getElementById("core3").innerHTML ;
                
 
  document.getElementById("kon99").innerHTML= kaoune * 31417 ;      
  document.getElementById("kon1").innerHTML= (kaoune * 31417)-3 ;      
  document.getElementById("kon4").innerHTML= (kaoune * 31417)+1 ;      
  document.getElementById("kon2").innerHTML= (kaoune * 31417)-2 ;      
  document.getElementById("kon3").innerHTML= (kaoune * 31417)-1 ;      
  document.getElementById("kons").innerHTML= kaoune * 31417 ;
  


  
  var b9 =    document.getElementById("best3").innerHTML;


  document.getElementById("n_1").innerHTML=b9*1;
  document.getElementById("n_2").innerHTML=b9*2;
  document.getElementById("n_3").innerHTML=b9*3;
  document.getElementById("n_4").innerHTML=b9*4;
  document.getElementById("n_5").innerHTML=b9*5;
  document.getElementById("n_6").innerHTML=b9*6;
  document.getElementById("n_7").innerHTML=b9*7;
  document.getElementById("n_8").innerHTML=b9*8;
  document.getElementById("n_9").innerHTML=b9*9;
  document.getElementById("n_10").innerHTML=b9*10;
  document.getElementById("n_11").innerHTML=b9*11;
  document.getElementById("n_12").innerHTML=b9*12;
  document.getElementById("n_13").innerHTML=b9*13;
  document.getElementById("n_14").innerHTML=b9*14;
  document.getElementById("n_15").innerHTML=b9*15;
  document.getElementById("n_16").innerHTML=b9*16;
  document.getElementById("n_17").innerHTML=b9*17;
  document.getElementById("n_18").innerHTML=b9*18;
  document.getElementById("n_19").innerHTML=b9*19;
  document.getElementById("n_20").innerHTML=b9*20;
  document.getElementById("n_21").innerHTML=b9*21;
  document.getElementById("n_22").innerHTML=b9*22;
  document.getElementById("n_23").innerHTML=b9*23;
  document.getElementById("n_24").innerHTML=b9*24;
  document.getElementById("n_25").innerHTML=b9*25;
  document.getElementById("n_26").innerHTML=b9*26;
  document.getElementById("n_27").innerHTML=b9*27;
  document.getElementById("n_28").innerHTML=b9*28;

}












function countWord3() {

   let text3 = document.getElementById("text3").value;
    text3 =text3.trim();
   
    let words = text3.split(" ").length ;
   
   
      
   document.getElementById("best43").innerHTML=words;
     
      
   
     
   
     
   
   let Counter31 = 0 ;
   let Counter32 = 0 ;
   let Counter33 = 0 ;
   let Counter34 = 0 ;
   
    let Counter35 = 0 ;
    let Counter36 = 0 ;
   let Counter37 = 0 ;
   let Counter38 = 0 ;
   let Counter39 = 0 ;
   let Counter310 = 0 ;
   
   let Counter311 = 0 ;
   let Counter312 = 0 ;
   let Counter313 = 0 ;
   let Counter314 = 0 ;
   let Counter315 = 0 ;
   let Counter316 = 0 ;
   let Counter317 = 0 ;
   let Counter318 = 0 ;
   let Counter319 = 0 ;
   let Counter320 = 0 ;
   let Counter321 = 0 ;
   let Counter322 = 0 ;
   let Counter323 = 0 ;
   let Counter324 = 0 ;
   let Counter325 = 0 ;
   let Counter326 = 0 ;
   let Counter327 = 0 ;
   let Counter328 = 0 ;
   let Counter29 = 0 ;
   
   
   
   
   
   
   
   
   
   
   
   let alif3 = ['ا','أ','إ','آ'];
   
   let laa3 = ['ل'];
   let haa3h = ['ح'];
   let mim3 = ['م'];
   let dal3 = ['د'];
   let haae3 = ['ه' ,'ة'];
   let raa3 = ['ر'];
   let baa3 = ['ب'];
   let ine3 = ['ع'];
   let yaa3 = ['ي','ى','ئ'];
    let noon3 = ['ن'];
   let kaf3 = ['ك'];
   let ouaou3 = ['و','ؤ'];
   let sin3 = ['س'];
   let taa3 = ['ت'];
   let saad3 = ['ص'];
   let ttae3 = ['ط'];
   let ppaf3 = ['ق'];
   let ddal3 = ['ذ'];
   let gaa3 = ['غ'];
   let daa3 = ['ض'];
   let faa3 = ['ف'];
   let zay3 = ['ز'];
   let kha3 = ['خ'];
   let chine3 = ['ش'];
   let ddda3 = ['ظ'];
   let jim3 = ['ج'];
   let ttta3 = ['ث'];
   
   
   
   for(ch of text3) {
   
      
   
    if (alif3.includes(ch)){
       Counter31++
    }
    if (laa3.includes(ch)){
       Counter32++
    }
   
    if (haa3h.includes(ch)){
      Counter33++
   }
   
   if (mim3.includes(ch)){
      Counter34++
      
   }
   
   if (dal3.includes(ch)){
      Counter35++
   }
   
   if (haae3.includes(ch)){
      Counter36++
   }
   
   
   if (raa3.includes(ch)){
      Counter37++
   }
   if (baa3.includes(ch)){
      Counter38++
   }
   if (ine3.includes(ch)){
      Counter39++
   }
   if (yaa3.includes(ch)){
      Counter310++
   }
   
   if (noon3.includes(ch)){
      Counter311++
   }
   
   
   if (kaf3.includes(ch)){
      Counter312++
   }
   
   
   if (ouaou3.includes(ch)){
      Counter313++
   }
   
   
   
   if (sin3.includes(ch)){
      Counter314++
   }
   
   
   if (taa3.includes(ch)){
      Counter315++
   }
   
   
   if (saad3.includes(ch)){
      Counter316++
   }
   
   
   if (ttae3.includes(ch)){
      Counter317++
   }
   
   
   if (ppaf3.includes(ch)){
      Counter318++
   }
   
   
   if (ddal3.includes(ch)){
      Counter319++
   }
   
   
   if (gaa3.includes(ch)){
      Counter320++
   }
   
   
   if (daa3.includes(ch)){
      Counter321++
   }
   
   
   if (faa3.includes(ch)){
      Counter322++
   }
   
   
   if (zay3.includes(ch)){
      Counter323++
   }
   
   
   if (kha3.includes(ch)){
      Counter324++
   }
   
   
   if (chine3.includes(ch)){
      Counter325++
   }
   
   
   if (ddda3.includes(ch)){
      Counter326++
   }
   
   
   if (jim3.includes(ch)){
      Counter327++
   }
   
   
   if (ttta3.includes(ch)){
      Counter328++
   }
   
   
   
   }
   
   

   // مولدات الحروف

   


 var 
 ts1 = document.getElementById("n_1").innerHTML;
 ts2 = document.getElementById("n_2").innerHTML;
 ts3 = document.getElementById("n_3").innerHTML;
 ts4 = document.getElementById("n_4").innerHTML;
 ts5 = document.getElementById("n_5").innerHTML;
 ts6 = document.getElementById("n_6").innerHTML;
 ts7 = document.getElementById("n_7").innerHTML;
 ts8 = document.getElementById("n_8").innerHTML;
 ts9 = document.getElementById("n_9").innerHTML;
 ts10 = document.getElementById("n_10").innerHTML;
 ts11 = document.getElementById("n_11").innerHTML;
 ts12 = document.getElementById("n_12").innerHTML;
 ts13 = document.getElementById("n_13").innerHTML;
 ts14 = document.getElementById("n_14").innerHTML;
 ts15 = document.getElementById("n_15").innerHTML;
 ts16 = document.getElementById("n_16").innerHTML;
 ts17 = document.getElementById("n_17").innerHTML;
 ts18 = document.getElementById("n_18").innerHTML;
 ts19 = document.getElementById("n_19").innerHTML;
 ts20 = document.getElementById("n_20").innerHTML;
 ts21 = document.getElementById("n_21").innerHTML;
 ts22 = document.getElementById("n_22").innerHTML;
 ts23 = document.getElementById("n_23").innerHTML;
 ts24 = document.getElementById("n_24").innerHTML;
 ts25 = document.getElementById("n_25").innerHTML;
 ts26 = document.getElementById("n_26").innerHTML;
 ts27 = document.getElementById("n_27").innerHTML;
 ts28 = document.getElementById("n_28").innerHTML;







   
   document.getElementById("alif3").innerHTML=Counter31;
   document.getElementById("alif13").innerHTML=Counter31*ts1;
   
   document.getElementById("laa3").innerHTML=Counter32;
   document.getElementById("laa23").innerHTML=Counter32*ts2;
   
   document.getElementById("haa3h").innerHTML=Counter33;
   document.getElementById("haa33").innerHTML=Counter33*ts3;
   
   document.getElementById("mim3").innerHTML=Counter34;
   document.getElementById("mim43").innerHTML=Counter34*ts4;
   
   document.getElementById("dal3").innerHTML=Counter35;
   document.getElementById("dal53").innerHTML=Counter35*ts5;
   
   document.getElementById("haae3").innerHTML=Counter36;
   document.getElementById("haae63").innerHTML=Counter36*ts6;
   
   document.getElementById("raa3").innerHTML=Counter37;
   document.getElementById("raa73").innerHTML=Counter37*ts7;
   
   document.getElementById("baa3").innerHTML=Counter38;
   document.getElementById("baa83").innerHTML=Counter38*ts8;
   
   document.getElementById("ine3").innerHTML=Counter39;
   document.getElementById("ine93").innerHTML=Counter39*ts9;
   
   document.getElementById("yaa3").innerHTML=Counter310;
   document.getElementById("yaa103").innerHTML=Counter310*ts10;
   
   document.getElementById("noon3").innerHTML=Counter311;
   document.getElementById("noon113").innerHTML=Counter311*ts11;
   
   document.getElementById("kaf3").innerHTML=Counter312;
   document.getElementById("kaf123").innerHTML=Counter312*ts12;
   
   
   document.getElementById("ouaou3").innerHTML=Counter313;
   document.getElementById("ouaou133").innerHTML=Counter313*ts13;
   
   
   document.getElementById("sin3").innerHTML=Counter314;
   document.getElementById("sin143").innerHTML=Counter314*ts14;
   
   document.getElementById("taa3").innerHTML=Counter315;
   document.getElementById("taa153").innerHTML=Counter315*ts15;
   
   document.getElementById("saad3").innerHTML=Counter316;
   document.getElementById("saad163").innerHTML=Counter316*ts16;
   
   document.getElementById("ttae3").innerHTML=Counter317;
   document.getElementById("ttae173").innerHTML=Counter317*ts17;
   
   document.getElementById("ppaf3").innerHTML=Counter318;
   document.getElementById("ppaf183").innerHTML=Counter318*ts18;
   
   
   document.getElementById("ddal3").innerHTML=Counter319;
   document.getElementById("ddal193").innerHTML=Counter319*ts19;
   
   document.getElementById("gaa3").innerHTML=Counter320;
   document.getElementById("gaa203").innerHTML=Counter320*ts20;
   
   document.getElementById("daa3").innerHTML=Counter321;
   document.getElementById("daa213").innerHTML=Counter321*ts21;
   
   document.getElementById("faa3").innerHTML=Counter322;
   document.getElementById("faa223").innerHTML=Counter322*ts22;
   
   document.getElementById("zay3").innerHTML=Counter323;
   document.getElementById("zay233").innerHTML=Counter323*ts23;
   
   document.getElementById("kha3").innerHTML=Counter324;
   document.getElementById("kha243").innerHTML=Counter324*ts24;
   
   document.getElementById("chine3").innerHTML=Counter325;
   document.getElementById("chine253").innerHTML=Counter325*ts25;
   
   document.getElementById("ddda3").innerHTML=Counter326;
   document.getElementById("ddda263").innerHTML=Counter326*ts26;
   
   document.getElementById("jim3").innerHTML=Counter327;
   document.getElementById("jim273").innerHTML=Counter327*ts27;
   
   document.getElementById("ttta3").innerHTML=Counter328;
   document.getElementById("ttta283").innerHTML=Counter328*ts28;
   
   
   
   document.getElementById("text3").addEventListener("keyup",countWord3);
   
   
   document.getElementById("best33").innerHTML= Counter31*ts1 + Counter32*ts2 + Counter33*ts3 + Counter34*ts4 + Counter35*ts5 + Counter36*ts6 + Counter37*ts7 + Counter38*ts8 + Counter39*ts9 + Counter310*ts10 + Counter311*ts11 + Counter312*ts12 + Counter313*ts13 + Counter314*ts14 + Counter315*ts15 + Counter316*ts16 + Counter317*ts17 + Counter318*ts18 + Counter319*ts19 + Counter320*ts20 + Counter321*ts21 + Counter322*ts22 + Counter323*ts23 + Counter324*ts24 + Counter325*ts25 + Counter326*ts26 + Counter327*ts27 + Counter328*ts28  ;
   
   document.getElementById("best63").innerHTML= Counter31 + Counter32 + Counter33 + Counter34 + Counter35 + Counter36 + Counter37 + Counter38 + Counter39 + Counter310 + Counter311 + Counter312 + Counter313 + Counter314 + Counter315 + Counter316 + Counter317 + Counter318 + Counter319 + Counter320 + Counter321 + Counter322 + Counter323 + Counter324 + Counter325 + Counter326 + Counter327 + Counter328 ;
   
   var sedney = document.getElementById("best33").innerHTML ;
   
   document.getElementById("eline").innerHTML= sedney ;
   document.getElementById("eline1").innerHTML= sedney-1 ;
   document.getElementById("eline2").innerHTML= sedney-2 ;
   document.getElementById("eline3").innerHTML= sedney-3 ;
   document.getElementById("eline4").innerHTML= sedney-4 ;

   

   var salati = sedney * 24434 ;
   var fff= sedney * 24434 ;
   var dddd = sedney * 24434 ;
   var ssss = sedney * 24434 ;
     

   var piq = salati - 1 ;
   var blanco2 = fff - 2 ;
   var blanco3 = dddd - 3 ;
   var blanco4 = ssss - 4 ;
   
   
   document.getElementById("ayak").innerHTML= salati ;
   document.getElementById("ayaks").innerHTML= salati ;
    document.getElementById("ayak1").innerHTML= piq ;
   document.getElementById("ayak2").innerHTML= blanco2 ;
   document.getElementById("ayak3").innerHTML= blanco3 ;
   document.getElementById("ayak4").innerHTML= blanco4 ;
   





   }



   
