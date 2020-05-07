var go = document.getElementById('go');
var modal=document.getElementById('modal');
var start=document.getElementById('start');


go.addEventListener('click',function () {
  modal.style.display="block";
  start.style.display="none";
 BigMath();

});

function BigMath() {




var numarray1 =[];
var numarray2=[];
var thissum = 0;
var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
var num = document.getElementById('num');
var yeah = document.getElementById('yeah');
var yeah2 = document.getElementById('yeah2');
var sum = document.getElementById('sum');
var test = document.getElementById('calculating');
var canvas=document.getElementById('cnvs');
var ctx = canvas.getContext('2d');
var imp = document.getElementById("imp");
var sumResult = document.getElementById('sumResult');
var result = document.getElementById('result');
var btn2=document.getElementById('btn2');
var bt3=document.getElementById('btn3');
var yes = document.getElementById("yes");
var no = document.getElementById('no');
var mo1= document.getElementById('mo1');
var mo3= document.getElementById('mo3');
var o =imp.style.display;




ctx.strokeStyle = 'rgba(248,23,62,0.7)';


  for (var i = 6; i <10; i++) {
  numarray1.push(i);
};

for (var x = 2; x < 9; x++) {
  numarray2.push(x);
};

function getNumOne() {


var rand1 = Math.floor(Math.random() * numarray1.length);
var r1 =numarray1[rand1];
return r1;
}



var randomnum1 = getNumOne();


function getNumTwo() {
  var rand2 = Math.floor(Math.random() * numarray2.length);
  var randomnum2 =numarray2[rand2];
  if (randomnum1+randomnum2<15&&randomnum1+randomnum2>10&&randomnum1+randomnum2!=thissum) {
    return randomnum2;
  }
  else {
    if (randomnum1<8) {
      return 6;
    }
    else {
      return 5;
    }
  }

};

var nm2valid = getNumTwo();


// var randomnum2 =numarray2[rand2];
thissum = randomnum1 + nm2valid;
// var thissum = 14;
num1.innerText=randomnum1;
num2.innerText=nm2valid;
mo1.innerText=randomnum1;
mo3.innerText=nm2valid;
// return randomnum1;

function reborn() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
num.style.display="block";
yeah.innerText="";
yeah2.innerText="";
btn2.style.display="none";
btn3.style.display="none";
num.value="";
imp.value="";
result.value="";
sum.style.display="block";
sum.innerText="?";

// var newNum1=;




randomnum1=_.sample(_.reject(numarray1, function(n) { return n==randomnum1;}));
nm2valid = getNumTwo();
thissum = randomnum1 + nm2valid;

num1.innerText=randomnum1;
num2.innerText=nm2valid;
mo1.innerText=randomnum1;
mo3.innerText=nm2valid;
leftDecorate();
};




function leftDecorate() {

  var a=0;
  var b=0;
  var nleft=350;
  var ntop=220;
  var yleft;
  var ytop;

  for (var n = 6; n < 10; n++) {

    if (n==randomnum1)
    {
      ctx.beginPath();
      ctx.moveTo(218+b,200);
      ctx.lineTo(223+b,190);
      ctx.lineWidth = 2;

      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(218+b,200);
      ctx.lineTo(213+b,190);
      ctx.lineWidth = 2;

      ctx.stroke();

      ctx.beginPath();
      ctx.arc(156+a,200,62+a,0, Math.PI,true);
      ctx.lineWidth = 4;

      ctx.stroke();
      num.style.left=nleft+"px";
      num.style.top =ntop+"px";

      yleft=nleft+3;
      ytop=ntop-12;

      yeah.style.left=yleft+"px";
      yeah.style.top =ytop+"px";
    }
    else {
      a+=10;
      b+=20;

      nleft+=11;
      ntop-=10;
    }
  }
};

leftDecorate();


function rightDecorate() {

  var x=0
  var y=30;
  var z=0;

  var ileft=475;
  var itop=227;
  var y2left;
  var y2top;


  for (var m = 6; m < 10; m++) {
    if (randomnum1==m) {

      for (var q = 11; q < 15; q++) {
          if (thissum==q)
                {

          ctx.beginPath();
          ctx.arc(269+x,200,21+y,0, Math.PI,true);
          ctx.lineWidth = 4;

          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(320+z,200);
          ctx.lineTo(325+z,190);
          ctx.lineWidth = 2;

          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(320+z,200);
          ctx.lineTo(315+z,190);
          ctx.lineWidth = 2;

          ctx.stroke();

          imp.style.left=ileft+"px";
          imp.style.top =itop+"px";

          y2left=ileft+3;
          y2top=itop-10;

          yeah2.style.left=y2left+"px";
          yeah2.style.top =y2top+"px";

                 }
             else
                {
                  x+=10;
                  y+=10;
                  z+=20;
                  ileft+=10;
                  itop-=10;
                }
         }

      }

      else {
        x+=10;
        y-=10;
        ileft+=12;
        itop+=10;
      }

  }

  calibration();

};


function calibration() {
  if (randomnum1==8&&thissum==11)
   {
     imp.style.top ="244px";
     yeah2.style.top="236px"
   }
  else if (randomnum1==9&&thissum==11)
    {
      imp.style.top ="254px";
      yeah2.style.top="243px";
    }

  else if (randomnum1==9&&thissum==12)
   {
     imp.style.top ="244px";
     yeah2.style.top="235px";
   }

 };




num.addEventListener('keyup',function () {
  if (num.value==randomnum1) {


    yeah.innerText=randomnum1;
    num.style.display="none";
    imp.style.display="block";
    num1.style.background="none";

    rightDecorate();
    mo1.style.background="green";


  }


  else {
    num.style.color="red";
    num1.style.background="yellow";
    mo1.style.background="red";
  }


});


imp.addEventListener('keyup',function () {
  if (imp.value==nm2valid) {

    sum.innerText = thissum;
    yeah2.innerText=nm2valid;
    imp.style.display="none";
    sumResult.style.display="block";
    sum.style.display="none";
    num2.style.background="none";
    mo3.style.background="green";




  }

  else {
    imp.style.color="red";
    num2.style.background="yellow";
    mo3.style.background="red";
  }});

result.addEventListener('keyup',function () {
    if (result.value==thissum) {



      sumResult.style.display="none";

      sum.style.display="block";
      btn2.style.display="block";
     btn3.style.display="block";



    }

    else {
      result.style.color="red";

    }});

    yes.addEventListener('click',function () {

     reborn();


    });



};
