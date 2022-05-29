function getHistory(){
	return document.getElementById("archieve").innerText;
}
function printHistory(num){
	document.getElementById("archieve").innerText=num;
}
function getOutput(){
	return document.getElementById("answer").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("answer").innerText=num;
	}
	else{
		document.getElementById("answer").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("opr");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clr"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="back"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("num");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}

const toggleBtn = document.querySelector('.toggle');
const calculator = document.querySelector('.calc');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
toggleBtn.onclick = () => {
	calculator.classList.toggle('dark');
	toggleBtn.classList.toggle('active');
	isDark = !isDark;
}



















// function getrecord(){
//    return document.getElementById("archieve").innerText ;
// }

// function printrecord(num){
//    num = document.getElementById("archieve").innerText ;
//  }

// function getOutput(){
//    return document.getElementById("answer").innerText ;
// }

// function printOutput(num){
//     if(num==""){
//         document.getElementById("answer").innerText= num;
//     }
//     else{
//         document.getElementById("answer").innerText =getFormattedNumber(num);
//     }
   
//  }

//  function getFormattedNumber(num){
//      let n = Number(num);
//      let value = n.toLocaleString("en");
//      return value; 
//  }

//  function reverseNmbrFormat(num){
//      return Number(num.replace(/,/g,''));
//  }

// var operator = document.getElementsByClassName("opr");
// for(var i=0; i<operator.length; i++){
//     operator[i].addEventListener('click',function(){
//         if(this.id=="clr"){
//             printrecord("");
//             printOutput("");
//         }

//         else if(this.id=="back"){
//             var output = reverseNmbrFormat(getOutput()).toString();
//             if(output){
//                output = output.substr(0,output.length-1);
//                printOutput(output) ;
//             }
//         }
//         else{
//             var output = getOutput();
//             var history = getrecord();
//             if(output!=0){
//                 output=reverseNmbrFormat(output);
//                 history=history+output;
//                 if(this.id=="="){
//                     var result = eval(history);
//                     printOutput(result);
//                     printrecord("");
//                 }
//                 else{
//                     history= history+this.id;
//                     printrecord(history);
//                     printOutput("");
//                 }
//             }
//         }
//     }); 
// }

// var number = document.getElementsByClassName("num");
// for(var i=0; i<number.length; i++){
//     number[i].addEventListener('click',function(){
//        var output = reverseNmbrFormat(getOutput());
//        if(output!=NaN){
//            output= output + this.id;
//            printOutput(output);
//        }
//     })
// }

// else{
//     var output = FinalOutput();
//     var history = getrecord();
//     if(output!=""){
//         output = reverseNmbrFormat(output);
//         history = history+output;
//         if(this.id=="="){
//             var result = eval(history);
//             printOutput(result);
//             printrecord("");
//         }
//         else{
//             history =  history + this.id;
//             printrecord(history);
//             printOutput("");
//         }
//     }
// }
