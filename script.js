var numbers=[-30, 14, 66, 21, 72, -4]

var boxEles=[];

function box(num){
  var that=this;
   
 this.numbers=num.numbers;

 this.ele=document.createElement("div");
 this.numbersEle=document.createElement("div");
  
 this.numbersEle.innerHTML="The number is# "+num.numbers;
  
 this.boxEle.addEventListener("click", function(){
     that.numbers=that.numbers+1;
     that.numbersEle.innerHTML="The number is #: "+that.numbers;
      if(that.numbers<=0){
        that.numbersEle.innerHTML="The number is #: "+that.numbers+"which is below 0!";
     }
      if(that.numbers>=50){
        that.numbersEle.innerHTML="The number is #: "+that.numbers+"which is greater than 50!";
     }
      if(that.numbers==14){
        that.numbersEle.innerHTML="The number is #: "+that.numbers+"which is equal to 14!";
     }
  }) 

this.ele.appendChild(this.numbersEle);

document.body.appendChild(this.ele);
}

for(var i=0; i<numbers.length; i++){
  boxEles.push(new box(numbers[i]))
  
}
//  Create a program that loops through an array of numbers. I have given you the specific number array here.

// var numbers=[-30, 14, 66, 21, 72, -4]

// My Requirements:

// Every time it loops through a number, it should print "The number is # and " and a specific message on a line in the DOM.
// The specific messages should state
// If the number is below 0
// If the number is greater than 50
// If the number equals 14
// When I click on one of the lines, it should increase the value by 1, with the message staying as it was
// In the end, I should see six different lines, each one containing a message letting me know what the number is. None of the numbers should have multiple messages