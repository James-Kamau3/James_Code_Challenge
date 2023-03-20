let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge

//Prompts user for marks input
let grade = prompt("Input student marks- ");

//Function that checks for the grade of the student marks.
function checksGrade(gradeForStudent){
    //Condition that checks if the mark is between 80 and 100.
    if(grade > 79 && grade <= 100){
        gradeForStudent = "A";
    }
    //Condition that checks if the mark is between 60 and 79.
    else if(grade >= 60 && grade <= 79){
        gradeForStudent = "B";
    }
    //Condition that checks if the mark is between 50 and 59.
    else if(grade >= 50 && grade <= 59){
        gradeForStudent = "C";
    }
    //Condition that checks if the mark is between 40 and 49.
    else if(grade >= 40 && grade <= 49){
        gradeForStudent = "D";
    }
    //Condition that grades E if the mark is below 40.
    else{
        gradeForStudent = "E";
    }
    //Returns the gradeForStudent
    return gradeForStudent;
}
    //Assigning checksGrade to finalOutput then outputting finalOutput;
    finalOutput = checksGrade();
    console.log(finalOutput);

finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput)

})




speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge

//function that checks for a car's speed
function inSpeed(speed){
    //Checks for points if speed is greater than 70.
    let diff = (speed - 70) / 5; 
    //Returns ok if speed is less than or equal to 70.
    if(speed <= 70){
        return "Ok";
    }
    //Checks for points if speed is greater than 70 and points greater than 12 returns license suspension.
     else if(diff > 12){
        return "License suspended";
    }
    //Returns the points demerits if speed is greater than 70.
    else if (speed > 70){
        return "Points: " + diff;
    }
}
//Assigning inputSpeed to finalOutput then outputting finalOutput;
finalOutput  = inSpeed();
console.log(finalOutput);


finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})





salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
let Salary;
let Benefits;
// calculating the grossSalary by adding the basic salary and the benefits
let grossSalary = Salary + Benefits;

//function called calculatepaye that calculates the PAYE rates
function calculatePaye (paye){
   // if statement to check whether the gross salary is less than or equal to Kshs. 24,000
   if (grossSalary <= 24000){
       paye = 0.1 * grossSalary // calculating the PAYE with 10% tax rate
   }
   // Else if statement to check whether the grossSalary is greater than Kshs. 24,000 and less than or equal to Kshs. 32,333
   else if (grossSalary > 24000 && grossSalary <= 32333){
       paye = 0.25 * grossSalary; // calculating the PAYE with 25% tax rate
   }
     // Else if statement to check whether the grossSalary is greater than Kshs. 32,333
   else if (grossSalary > 32333 ){
       paye = 0.3 * grossSalary; // calculating the PAYE with 30% tax rate
   }
   // returning the value contained in the variable paye
   return paye;
   
}

//function called calculateNhif that calculates the NHIF rates
function calculateNhif (nhif){

   // ifstatement to check whether the grossSalary is less than Kshs. 6,000 then sets nhif to Ksh. 150.
   if (grossSalary < 6000){
       nhif = 150; 
   }
   // Else if statement to check whether the grossSalary is greater than or equal to Kshs. 6,000 and less than Kshs. 8,000 then sets nhif to Kshs.300.
   else if (grossSalary >= 6000 && grossSalary < 8000){
       nhif = 300; 
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 8,000 and less than Kshs. 12,000 then sets nhif to Kshs.400.
   else if (grossSalary >= 8000  && grossSalary < 12000){
       nhif = 400;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 12,000 and less than Kshs. 15,000 then then sets nhif to Kshs.500.
   else if (grossSalary >= 12000 && grossSalary < 15000){
       nhif = 500;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 15,000 and less than Kshs. 20,000 then then sets nhif to Kshs.600.
   else if (grossSalary >= 15000 && grossSalary < 20000){
       nhif = 600;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 20,000 and less than Kshs. 25,000 then then sets nhif to Kshs.750.
   else if (grossSalary >= 20000 && grossSalary < 25000){
       nhif = 750;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 25,000 and less than Kshs. 30,000 then then sets nhif to Kshs.850.
   else if (grossSalary >= 25000 && grossSalary < 30000){
       nhif = 850;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 30,000 and less than Kshs. 35,000 then then sets nhif to Kshs.900.
   else if (grossSalary >= 30000 && grossSalary < 35000){
       nhif = 900;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 35,000 and less than Kshs. 40,000 then then sets nhif to Kshs.950.
   else if (grossSalary >= 35000 && grossSalary < 40000){
       nhif = 950;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 40,000 and less than Kshs. 50,000 then then sets nhif to Kshs.1000.
   else if (grossSalary >= 40000 && grossSalary < 45000){
       nhif = 1000;
   }
   // Else if statement to check whether the gross salary is greater than or equal to Kshs. 45,000 and less than Kshs. 50,000 then then sets nhif to Kshs.1100.
   else if (grossSalary >= 45000 && grossSalary < 50000){
       nhif = 1100;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 50,000 and less than Kshs. 60,000 then then sets nhif to Kshs.1200.
   else if (grossSalary >= 50000 && grossSalary < 60000){
       nhif = 1200;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 60,000 and less than Kshs. 70,000 then then sets nhif to Kshs.1300.
   else if (grossSalary >= 60000 && grossSalary < 70000){
       nhif = 1300;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 70,000 and less than Kshs. 80,000 then then sets nhif to Kshs.1400.
   else if (grossSalary >= 70000 && grossSalary < 80000){
       nhif = 1400;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 80,000 and less than Kshs. 90,000 then then sets nhif to Kshs.1500.
   else if (grossSalary >= 80000 && grossSalary < 90000){
       nhif = 1500;
   }
    // Else if statement to check whether the gross salary is greater than or equal to Kshs. 90,000 and less than Kshs. 100,000 then then sets nhif to Kshs.1600.
   else if (grossSalary >= 90000 && grossSalary < 100000){
       nhif = 1600;
   }
    // Else if statement to check whether the gross salary is greater than Kshs. 100,000 then then sets nhif to Kshs.1700.
   else if(grossSalary >= 100000){
       nhif = 1700;
   }
   
   // returning the value contained in the variable nhif
   return nhif;
       
}
//function called calculateNssf that calculates the NSSF Tier I and Tier II 
function calculateNssf(nssf){
   return nssf = (0.6 * 6000)+(0.6 * 12000);  // calculating the NSSF tax using the 6% tax rate
}

//Calling the function calculateNssf and assigning it to the variable finalnssf
const finalnssf = calculateNssf()

//Calling the function calculatePaye and assigning it to the variable finalpaye
const finalpaye = calculatePaye()

//Calling the function calculateNhif and assigning it to the variable finalnhif
const finalnhif = calculateNhif()

//Calculating the net salary by deducting the deductions from the gross salary
const netsalary = (grossSalary - finalpaye - finalnhif - finalnssf)

//Assigning the netsalary variable to the finalOutput and ouputting the finalOutput
finalOutput = netsalary;
console.log(finalOutput)


finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})