//Function declarations

function retire(age){
    
	let year = 2017; //set current year
   
	let retirementAge = 65; //set current retirement age
    
	let diff = retirementAge - age;

    
//write three separate conditional statements to say when you can take out money.

    
//first if your age is older than the retirementAge


	
	if(diff > 65){
	console.log("Y u no do dis yet?");
	}

    
//second if your age is equal to the retirementAge
	
	if(diff == 65){
	console.log("Duuuuuuuu etttt");
	}	



    
//third if your age is younger than the retirementAge


	if(diff <= 64){
	console.log("Not yet, you can wait");
	}


}




//main function tests your code above with different inputs.


function main(){
    
	retire(18);
 
	retire(50);
    
	retire(65);
    
	retire(100); //Hundo!


}






// ctrl + shift + B

//This will run the program.



main();
