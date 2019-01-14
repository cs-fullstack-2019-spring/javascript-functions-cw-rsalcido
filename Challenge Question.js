
// Challenge
// Create 4 functions called add, subtract, multiply, and divide.
// Create them to allow a user to perform the name of the
// function to the two numbers and return the result.

Question= prompt(" I can help with the following: addition, multiplication, subtraction, division. " +
                                   " What can I assist you with today?");


num1=parseInt(prompt("Enter your first number"));

num2=parseInt(prompt("Enter your second number"));


/// funtions that will later be used once prompted by the if , and else if statements.

function add(x, y) {
    return x+y;
}
function mul(x, y) {
    return x*y;
}
function sub(x,y){
    return x-y;
}
function div(x,y) {
    return (x/y);
}

/// If statement for my command.
if (Question=="addition"){
    console.log("Addition: " + add(num1, num2));
} else if (Question=="multiplication"){
    console.log("Multipliction: " + mul(num1,num2));
} else if (Question=="subtraction"){
    console.log("subtraction: " + sub(num1,num2));
} else if (Question=="division"){
    console.log("Division: " + div(num1,num2));
} else
{
    console.log("Invalid Entry");
}

