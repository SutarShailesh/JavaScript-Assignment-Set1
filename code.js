//function for question one
function UserName(){
    let name = prompt("Hi! Enter Your Name");
    console.log("Hello ",name);
}

// Function for Even & odd
function EvenOdd(){
    let no=prompt("Enter a Number")

    if(no%2==0){
        console.log("Number "+no+" is even")
    }
    else{
        console.log("Number "+no+" is Odd")
    }
}

//Function for prime number
function PrimeNumber(){

    let num,i=1,c=0;
    num= prompt("Enter Number");

    while(i<=num)
    {
          if(num%i==0)
          c++;
          i++;
    }
    if(c==2){
        console.log(num+" is Prime Number");
    }
    else
    {
        console.log(num+" is Not Prime Number");
    }       
}

//Function for printing table

function U_Table(){
    let u_num = prompt("Enter the number")
    let t_num= 1
    console.log("Table of "+u_num)
    while(t_num<=10){
        console.log(u_num*t_num)
        t_num++
    }
}
