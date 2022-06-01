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
// for(var i=1;i<=100;i++){
//     document.write(i+" ");
//     if(i%10==0){
//         document.write("<br>");
//     }
// }

// for(var i=1;i<=100;i=i+10){
//     for(var x=i; x<i+10;x++){
//         console.log(x," ");
//     }
//     console.log("<br>");
// }

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


//////////DATE AND TIME ///////////

// var a= new Date();
// console.log(a);
// console.log(a.getDate());
// console.log(a.getDay());
// console.log(a.getTime()); /////Time since january first 1970
// console.log(timeRN);
// console.log(a.getFullYear());

///////Function syntax

// function name(){
//     console.log('Muhib');
// }

// let namee=()=>{
//     console.log("MMM");
// }

////// Events /////////

{/* <a href="" onclick="var a ='hello'; alert(a)">Click</a> */}
//// onmouseover()
//// onmouseout()
//// onmousemove
//// 


// let foo=()=>{
//     alert("MMM");
// }

//// onFocus for inputs
{/* <h1 href=""  onFocus="this.style.backgroundColor='yellow';" onFocus="alert('g')">Function foo on click</h1>
    <h1 href=""  onmouseenter="this.style.color='green';" onmouseout="this.style.color='green';">Function foo on click</h1> */}

    /////// form events
// function checkAddress(id){
//     if(document.getElementById(id).value===""){
//         alert("Email Address Required");
//     }
//     else{
//         alert("your email is "+document.getElementById(id).value);
//     }
// }
    
// function checkNumber(){
//     var city;
//     var numEntered=document.getElementById("num").value;
    //// using switch
    // switch(numEntered){
    //     case '1':
    //         city="karachi";
    //         break;
    //     case '2':
    //         city="lahore";
    //         break;
    // }

    //// using if-else
    // if(numEntered==1){
    //     city="Karachi";
    // }
    // else if(numEntered==2){
    //     city="lah";
    // }
    // document.getElementById("city").value=city;
    // // alert(city);
    // console.log(city);


    ////// Paragraph Events
    
    // function expandLoris() {
        
    //     var expandedPara= "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    //     document.getElementById("slowLoris").innerHTML=expandedPara;
    // }

    /////////CALCULATOR


    // var display=document.getElementById('display');


    // function displayNum(idd){
    //     display.value += idd;
    //     console.log(idd);
    // }

    // function clr(){
    //     display.value="";
    // }

    // function getResult(){
    //     var result= eval(display.value);
    //     display.value=result;
    //     console.log(result);
    //     }


    //////// TODO APP

    function editt(e){
        // var inp= document.getElementById('input-todo').value;
        // // deleter(this);
        // var inputt=createElement('input');
        
        // console.log("edit "+inp);
        console.log(e.parentNode.childNodes[0]);
        console.log(e.parentNode.firstChild);
        var val =e.parentNode.firstChild.nodeValue;
        var editValue=prompt("Edit value",val);
        e.parentNode.firstChild.nodeValue=editValue;
    }
   
    function addToList(){
        var list=document.getElementById('list');
        var inp= document.getElementById('input-todo');
        var li =document.createElement('li');
        var todo=document.createTextNode(inp.value);
        li.appendChild(todo);
        list.appendChild(li);

        var delBtn=document.createElement("button");
        var dltText=document.createTextNode("Delete");
        delBtn.appendChild(dltText);
        li.appendChild(delBtn);
        var editBtn=document.createElement("button");
        var editText=document.createTextNode("Edit");
        editBtn.appendChild(editText);
        li.appendChild(editBtn);
        delBtn.setAttribute("onclick","deleter(this)");
        editBtn.setAttribute("onclick","editt(this)");
        // console.log(inp);
        // console.log(li);
        // inp.value="";
    }

    function deleter(e){
        e.parentNode.remove();
    }

   