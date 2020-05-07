

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
// var right = 1;

// function arraytest() {

  for (var i = 6; i <10; i++) {
  numarray1.push(i);
};

for (var x = 2; x < 9; x++) {
  numarray2.push(x);
};

var rand1 = Math.floor(Math.random() * numarray1.length);
var randomnum1 =numarray1[rand1];


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
num1.innerText=randomnum1;
num2.innerText=nm2valid;

// return randomnum1;








function canvasAdder() {
  if (randomnum1=="6") {

     if (thissum=="11") {


       ctx.beginPath();
       ctx.moveTo(218,200);
       ctx.lineTo(223,190);
       ctx.lineWidth = 2;
       ctx.fillStyle = "orange";
       ctx.stroke();

       ctx.beginPath();
       ctx.moveTo(218,200);
       ctx.lineTo(213,190);
       ctx.lineWidth = 2;
       ctx.fillStyle = "orange";
       ctx.stroke();

       ctx.beginPath();
       ctx.arc(156,200,62,0, Math.PI,true);
       ctx.lineWidth = 4;
       ctx.fillStyle = "orange";
       ctx.stroke();

     if (rigth=="1") {


       ctx.beginPath();
       ctx.arc(269,200,51,0, Math.PI,true);
       ctx.lineWidth = 4;
       ctx.fillStyle = "orange";
       ctx.stroke();

       ctx.beginPath();
       ctx.moveTo(320,200);
       ctx.lineTo(325,190);
       ctx.lineWidth = 2;
       ctx.fillStyle = "orange";
       ctx.stroke();

       ctx.beginPath();
       ctx.moveTo(320,200);
       ctx.lineTo(315,190);
       ctx.lineWidth = 2;
       ctx.fillStyle = "orange";
       ctx.stroke();
       }

     }

  else if (thissum=="12")
        {



          ctx.beginPath();
          ctx.moveTo(218,200);
          ctx.lineTo(223,190);
          ctx.lineWidth = 2;
          ctx.fillStyle = "orange";
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(218,200);
          ctx.lineTo(213,190);
          ctx.lineWidth = 2;
          ctx.fillStyle = "orange";
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(156,200,62,0, Math.PI,true);
          ctx.lineWidth = 4;
          ctx.stroke();

         if (rigth=="1") {
          ctx.beginPath();
          ctx.arc(280,200,61,0, Math.PI,true);
          ctx.lineWidth = 4;
          ctx.fillStyle = "orange";
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(341,200);
          ctx.lineTo(346,190);
          ctx.lineWidth = 2;
          ctx.fillStyle = "orange";
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(341,200);
          ctx.lineTo(336,190);
          ctx.lineWidth = 2;
          ctx.fillStyle = "orange";
          ctx.stroke();
        }
        else {
          return false
        }



        }
        else if (thissum=="13") {


          ctx.beginPath();
          ctx.moveTo(218,200);
          ctx.lineTo(223,190);
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(218,200);
          ctx.lineTo(213,190);
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(156,200,62,0, Math.PI,true);
          ctx.lineWidth = 4;
          ctx.stroke();

              if (rigth=="1") {
          ctx.beginPath();
          ctx.arc(289,200,72,0, Math.PI,true);
          ctx.lineWidth = 4;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(361,200);
          ctx.lineTo(366,190);
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(361,200);
          ctx.lineTo(356,190);
          ctx.lineWidth = 2;
          ctx.stroke();}



        }

        else if (thissum=="14") {


          ctx.beginPath();
          ctx.moveTo(218,200);
          ctx.lineTo(223,190);
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(218,200);
          ctx.lineTo(213,190);
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(156,200,62,0, Math.PI,true);
          ctx.lineWidth = 4;
          ctx.stroke();


          if (rigth=="1") {


          ctx.beginPath();
          ctx.arc(300,200,82,0, Math.PI,true);
          ctx.lineWidth = 4;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(382,200);
          ctx.lineTo(387,190);
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(382,200);
          ctx.lineTo(377,190);
          ctx.lineWidth = 2;
          ctx.stroke();
        }



        }
      }

  else if (randomnum1=="7") {

    if (thissum=="11") {
      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(232,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(242,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(165,200,72,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

         if (rigth=="1") {

      ctx.beginPath();
      ctx.arc(280,200,40,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(320,200);
      ctx.lineTo(325,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(320,200);
      ctx.lineTo(315,190);
      ctx.lineWidth = 2;
      ctx.stroke();}


    }

    else if (thissum=="12") {
      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(232,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(242,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(165,200,72,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

              if (rigth==1) {
      ctx.beginPath();
      ctx.arc(290,200,50,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(340,200);
      ctx.lineTo(345,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(340,200);
      ctx.lineTo(335,190);
      ctx.lineWidth = 2;
      ctx.stroke();}

    }

    else if (thissum=="13") {

      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(232,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(242,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(165,200,72,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

        if (rigth=="1") {
      ctx.beginPath();
      ctx.arc(301,200,62,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(363,200);
      ctx.lineTo(368,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(363,200);
      ctx.lineTo(358,190);
      ctx.lineWidth = 2;
      ctx.stroke();}

    }

    else if (thissum=="14") {

      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(232,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(237,200);
      ctx.lineTo(242,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(165,200,72,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

          if (rigth=="1") {
      ctx.beginPath();
      ctx.arc(311,200,72,0, Math.PI,true);
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(383,200);
      ctx.lineTo(388,190);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(383,200);
      ctx.lineTo(378,190);
      ctx.lineWidth = 2;
      ctx.stroke();}

    }

  }

  else if (randomnum1=="8") {

  if (thissum=="11") {

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(252,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(262,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(175,200,82,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
         if (rigth==1) {
    ctx.beginPath();
    ctx.arc(290,200,31,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(321,200);
    ctx.lineTo(326,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(321,200);
    ctx.lineTo(316,190);
    ctx.lineWidth = 2;
    ctx.stroke();}

  }
  else if (thissum=="12") {

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(252,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(262,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(175,200,82,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
        if (rigth==1) {
    ctx.beginPath();
    ctx.arc(300,200,41,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(341,200);
    ctx.lineTo(346,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(341,200);
    ctx.lineTo(336,190);
    ctx.lineWidth = 2;
    ctx.stroke();}

  }

  else if (thissum=="13") {

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(252,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(262,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(175,200,82,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
           if (rigth=="1") {
    ctx.beginPath();
    ctx.arc(310,200,51,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(361,200);
    ctx.lineTo(366,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(361,200);
    ctx.lineTo(356,190);
    ctx.lineWidth = 2;
    ctx.stroke();}


  }
  else if (thissum=="14") {

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(252,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(257,200);
    ctx.lineTo(262,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(175,200,82,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
           if (rigth=="1") {
    ctx.beginPath();
    ctx.arc(322,200,62,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(384,200);
    ctx.lineTo(389,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(384,200);
    ctx.lineTo(379,190);
    ctx.lineWidth = 2;
    ctx.stroke();}

  }

  }

  else if (randomnum1=="9") {
  if (thissum=="11") {

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(274,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(284,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(186,200,93,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
          if (rigth==1) {
    ctx.beginPath();
    ctx.arc(300,200,21,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(320,200);
    ctx.lineTo(325,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(320,200);
    ctx.lineTo(315,190);
    ctx.lineWidth = 2;
    ctx.stroke();}

  }
  else if (thissum=="12") {

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(274,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(284,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(186,200,93,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    if (rigth=="1") {

    ctx.beginPath();
    ctx.arc(310,200,31,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(341,200);
    ctx.lineTo(346,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(341,200);
    ctx.lineTo(336,190);
    ctx.lineWidth = 2;
    ctx.stroke();}

  }
  else if (thissum=="13") {

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(274,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(284,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(186,200,93,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
        if (rigth=="1") {
    ctx.beginPath();
    ctx.arc(320,200,41,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(361,200);
    ctx.lineTo(366,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(361,200);
    ctx.lineTo(356,190);
    ctx.lineWidth = 2;
    ctx.stroke();}

  }

  else if (thissum=="14") {
    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(274,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(279,200);
    ctx.lineTo(284,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(186,200,93,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();
  if (rigth=="1") {
    ctx.beginPath();
    ctx.arc(331,200,51,0, Math.PI,true);
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(382,200);
    ctx.lineTo(387,190);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(382,200);
    ctx.lineTo(377,190);
    ctx.lineWidth = 2;
    ctx.stroke();}


  }
  }



};

num.addEventListener('keyup',function () {
  if (num.value.match(randomnum1)) {


    yeah.innerText=randomnum1;
    num.style.display="none";
    imp.style.display="block";
    num1.style.background="none";
    rigth=1;
    canvasAdder();


  }


  else {
    num.style.color="red";
    num1.style.background="yellow";
  }


});


imp.addEventListener('keyup',function () {
  if (imp.value.match(nm2valid)) {

    sum.innerText = thissum;
    yeah2.innerText=nm2valid;
    imp.style.display="none";
    sumResult.style.display="block";
    sum.style.display="none";
    num2.style.background="none";



  }

  else {
    imp.style.color="red";
    num2.style.background="yellow";
  }});

result.addEventListener('keyup',function () {
    if (result.value.match(thissum)) {



      sumResult.style.display="none";
      sum.style.display="block";
      btn2.style.display="block";



    }

    else {
      imp.style.color="red";

    }});

    yes.addEventListener('click',function () {

    location.reload(true);

    });
//
canvasAdder();
};

BigMath();
