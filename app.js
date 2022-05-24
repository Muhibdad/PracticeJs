// const newLocal = 'JJ';
// document.getElementById("h").innerHTML="MH";

///////////////////////////////////////////////////

// var firstName =["muhib","ali","hamza"];
// var lastName =["khan","dad","ch"];

// for(var i=0;i<firstName.length;i++){
//     for(var x=0;x<lastName.length;x++){
//         document.writeln(firstName[i]+" "+lastName[x]);
//         document.write("<br>");
//     }
// }

//////// loop example /////////////
for(var i=1;i<=100;i++){
    document.write(i+" ");
    if(i%10==0){
        document.write("<br>");
    }
}

for(var i=1;i<=100;i=i+10){
    for(var x=i; x<i+10;x++){
        console.log(x," ");
    }
    console.log("<br>");
}

/////////// Palindrome Words /////////////////////

// let word=prompt("enter a word");
// let check="";

// for(var i=word.length-1;i>=0;i--){
//     check +=word[i];
// }

// if(word===check){
//     console.log("Its palindrome word");
// }
// else{
//     console.log("Its not a palindrome word");

// }


////////// Equation solution //////////

// var equ=prompt("write a mathematical equation");

// var num=equ.length;
// for(var i=0;i<=num;i++){
//     if(equ.slice(i,i+1)==='+'){
//         console.log("sign is there.")
//     }
// }

