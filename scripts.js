let addButton=document.getElementById("addButton");

//add event listener to the button
addButton.addEventListener("click", function(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=document.getElementById("result");
    let sum=parseFloat(num1)+parseFloat(num2);
    result.innerHTML="Result:" + sum;
})

