function makeDark(){
    let x = document.getElementsByClassName("a");
    let i;
    for(i = 0; i<x.length; i++){
        x[i].style.background="black";
    }

    let y = document.getElementsByClassName("b");
    for(i = 0; i<y.length; i++){
        y[i].style.background="dodgerblue";
    }

    x= document.getElementsByTagName("P");
    for(i=0; i<x.length; i++){
        x[i].style.color="white";
    }

    x= document.getElementsByClassName("d");
    for(i=0; i<x.length; i++){
        x[i].style.color="dodgerblue";
    }

    x= document.getElementsByClassName("woi");
    for(i=0; i<x.length; i++){
        x[i].style.borderColor="dodgerblue";
    }

    x= document.getElementsByClassName("woi3");
    for(i=0; i<x.length; i++){
        x[i].style.borderColor="dodgerblue";
    }

    x= document.getElementsByClassName("woi4");
    for(i=0; i<x.length; i++){
        x[i].style.borderColor="dodgerblue";
    }

    x= document.getElementsByClassName("verticale_b");
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }

    x= document.getElementsByClassName("verticale_w");
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }

    x= document.getElementsByClassName("lolzi");
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }

    x= document.getElementsByClassName("lolzii");
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }

    x= document.getElementsByTagName("LI");
    for(i=0; i<x.length; i++){
        x[i].style.color="white";
    }

    document.getElementById("lol1").src="images/white/lol1_w.png";
    document.getElementById("lol2").src="images/white/lol2_w.png";
    document.getElementById("lol3").src="images/white/lol3_w.png";
    document.getElementById("lol4").src="images/white/lol4_w.png";
    document.getElementById("lol5").src="images/white/lol5_w.png";
    document.getElementById("lol6").src="images/white/lol6_w.png";
    document.getElementById("lol7").src="images/white/lol7_w.png";
}

function  makeLight(){
    let x = document.getElementsByClassName("a");
    let i;
    for(i = 0; i<x.length; i++){
        x[i].style.background="whitesmoke";
    }

    let y = document.getElementsByClassName("b");
    for(i = 0; i<y.length; i++){
        y[i].style.background="coral";
    }

    x= document.getElementsByTagName("P");
    for(i=0; i<x.length; i++){
        x[i].style.color="black";
    }

    x= document.getElementsByTagName("LI");
    for(i=0; i<x.length; i++){
        x[i].style.color="black";
    }

    x= document.getElementsByClassName("d");
    for(i=0; i<x.length; i++){
        x[i].style.color="coral";
    }

    x= document.getElementsByClassName("woi");
    for(i=0; i<x.length; i++){
        x[i].style.borderColor="coral";
    }

    x= document.getElementsByClassName("woi3");
    for(i=0; i<x.length; i++){
        x[i].style.borderColor="coral";
    }

    x= document.getElementsByClassName("verticale_b");
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }

    x= document.getElementsByClassName("verticale_w");
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }

    x= document.getElementsByClassName("woi4");
    for(i=0; i<x.length; i++){
        x[i].style.borderColor="coral";
    }

    x= document.getElementsByClassName("lolzii");
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }

    x= document.getElementsByClassName("lolzi");
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
    document.getElementById("lol1").src="images/black/lol1.png";
    document.getElementById("lol2").src="images/black/lol2.png";
    document.getElementById("lol3").src="images/black/lol3.png";
    document.getElementById("lol4").src="images/black/lol4.png";
    document.getElementById("lol5").src="images/black/lol5.png";
    document.getElementById("lol6").src="images/black/lol6.png";
    document.getElementById("lol7").src="images/black/lol7.png";
}

function showOrce(){
    document.getElementById("a1").style.display="none";
    document.getElementById("a3").style.display="none";
    document.getElementById("a2").style.display="initial";
    document.getElementById("z2").style.display="initial";
    document.getElementById("z3").style.display="none";
    document.getElementById("z1").style.display="none";
    document.getElementById("aa2").style.display="none";
    document.getElementById("aa3").style.display="none";
    document.getElementById("aa6").style.display="none";
    document.getElementById("aa4").style.display="initial";
    document.getElementById("aa1").style.display="initial";
    document.getElementById("aa5").style.display="initial";
}

function showLazo(){
    document.getElementById("a1").style.display="initial";
    document.getElementById("a3").style.display="none";
    document.getElementById("a2").style.display="none";
    document.getElementById("z2").style.display="none";
    document.getElementById("z3").style.display="none";
    document.getElementById("z1").style.display="initial";
    document.getElementById("aa1").style.display="none";
    document.getElementById("aa4").style.display="none";
    document.getElementById("aa6").style.display="none";
    document.getElementById("aa2").style.display="initial";
    document.getElementById("aa3").style.display="initial";
    document.getElementById("aa5").style.display="initial";
}

function showFinki(){
    document.getElementById("a1").style.display="none";
    document.getElementById("a3").style.display="initial";
    document.getElementById("a2").style.display="none";
    document.getElementById("z2").style.display="none";
    document.getElementById("z3").style.display="initial";
    document.getElementById("z1").style.display="none";
    document.getElementById("aa2").style.display="none";
    document.getElementById("aa4").style.display="none";
    document.getElementById("aa5").style.display="none";
    document.getElementById("aa1").style.display="initial";
    document.getElementById("aa3").style.display="initial";
    document.getElementById("aa6").style.display="initial";
}

function plus1(){
    let x= document.getElementsByClassName("p1");
    let i;
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }
}
function minus1(){
    let x= document.getElementsByClassName("p1");
    let i;
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
}

function plus3(){
    let x= document.getElementsByClassName("p3");
    let i;
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }
}
function minus3(){
    let x= document.getElementsByClassName("p3");
    let i;
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
}

function plus2(){
    let x= document.getElementsByClassName("p2");
    let i;
    for(i=0; i<x.length; i++){
        x[i].style.display="initial";
    }
}
function minus2(){
    let x= document.getElementsByClassName("p2");
    let i;
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
}

