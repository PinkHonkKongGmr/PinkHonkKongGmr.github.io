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
  if (randomnum1+randomnum2<15&&randomnum1+randomnum2>10) {
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
var thissum = randomnum1 + nm2valid;
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
num.value="";
imp.value="";
result.value="";
sum.style.display="block";
sum.innerText="?";

randomnum1=getNumOne();
nm2valid = getNumTwo();
thissum = randomnum1 + nm2valid;

num1.innerText=randomnum1;
num2.innerText=nm2valid;
mo1.innerText=randomnum1;
mo3.innerText=nm2valid;
leftCanvasDraw();






};




function leftCanvasDraw() {

  var a=0;
  var b=0;

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
    }
    else {
      a+=10;
      b+=20;
    }
  }
};

leftCanvasDraw();


function rightCanvasDraw() {

  if (randomnum1==6&&thissum==11) {
    x=0
    y=30;
    z=0;

  }
  else if (randomnum1==6&&thissum==12) {
    x=10
    y=40;
    z=20;

  }
  else if(randomnum1==6&&thissum==13) {
    x=20
    y=50;
    z=40;
  }
  else if(randomnum1==6&&thissum==14) {
    x=30
    y=60;
    z=60;
  }

  else if (randomnum1==7&&thissum==11) {
    x=10
    y=20;
    z=0;
  }

  else if (randomnum1==7&&thissum==12) {
    x=20
    y=30;
    z=20;
  }
else if (randomnum1==7&&thissum==13) {
  x=30
  y=40;
  z=40;
}
else if (randomnum1==7&&thissum==14) {
  x=40
  y=50;
  z=60;
}

else if (randomnum1==8&&thissum==11) {
  x=20
  y=10;
  z=0;
}

else if (randomnum1==8&&thissum==12) {
  x=30
  y=20;
  z=20;
}
else if (randomnum1==8&&thissum==13) {
  x=40
  y=30;
  z=40;
}
else if (randomnum1==8&&thissum==14) {
  x=50
  y=40;
  z=60;
}
else if (randomnum1==9&&thissum==11) {
  x=30
  y=0;
  z=0;
}
else if (randomnum1==9&&thissum==12) {
  x=40
  y=10;
  z=20;
}
else if (randomnum1==9&&thissum==13) {
  x=50
  y=20;
  z=40;
}
else if (randomnum1==9&&thissum==14) {
  x=60
  y=30;
  z=60;
}



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

};





num.addEventListener('keyup',function () {
  if (num.value==randomnum1) {


    yeah.innerText=randomnum1;
    num.style.display="none";
    imp.style.display="block";
    num1.style.background="none";

    rightCanvasDraw();
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




    }

    else {
      result.style.color="red";

    }});

    yes.addEventListener('click',function () {

     reborn();


    });



};
