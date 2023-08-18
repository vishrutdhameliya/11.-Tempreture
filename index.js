function clk(){
    let inpt = document.getElementById('firstinput');
    let ceil = inpt.value;

    let fer = (ceil * 9/5) + 32;
    let inpt2 = document.getElementById('secendinput');
    inpt2.value = fer.toFixed(2);

    let kel = (ceil * 1 ) + 273.15;
    let inpt3 = document.getElementById('thirdinput');
    inpt3.value = kel.toFixed(2);
    
    if(ceil == ""){
        inpt2.value = "";
        inpt3.value= "";
    }
};

function clk1(){
    let inpt = document.getElementById('secendinput');
    let fer = inpt.value;
    console.log(fer);

    let ceil = (fer - 32) * 5/9;
    console.log(ceil)
    let inpt2 = document.getElementById('firstinput');
    inpt2.value = ceil.toFixed(2);

    let kel = (fer - 32) * 5/9 + 273.15;
    let inpt3 = document.getElementById('thirdinput');
    inpt3.value = kel.toFixed(2);

    if(fer == ""){
        inpt2.value = "";
        inpt3.value= "";
    }
};

function clk2(){
    let inpt = document.getElementById('thirdinput');
    let kel = inpt.value;
    console.log(kel);

    let ceil = kel - 273.15;
    console.log(ceil)
    let inpt2 = document.getElementById('firstinput');
    inpt2.value = ceil.toFixed(2);

    let fer = ((kel - 273.15) * 9/5 )+ 32;
    let inpt3 = document.getElementById('secendinput');
    inpt3.value = fer.toFixed(2);

    if(kel == ""){
        inpt2.value = "";
        inpt3.value= "";
    }
};