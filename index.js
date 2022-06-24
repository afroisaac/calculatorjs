const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let operand1, operand2, operator;
  readline.question(`Enter first operand  `, operand1 => {
    readline.question(`Enter second operand  `, operand2 => {
        readline.question(`Enter operator [*, /, -, +]  `, operator => {
            switch(operator){
                case "*":
                    console.log(`${operand1} * ${operand2}  =   ${Number(operand1) * Number(operand2)}`);
                    break;
                case "/":
                    if(operad2 !== 0){
                        console.log(`${operand1} / ${operand2}  =   ${Number(operand1) / Number(operand2)}`);
                    }else{
                        console.log("Error, division by zero");
                    }
                    break;
                case "-":
                    console.log(`${operand1} - ${operand2}  =   ${Number(operand1) - Number(operand2)}`);
                    break;
                case "+":
                    console.log(`${operand1} + ${operand2}  =   ${Number(operand1) + Number(operand2)}`);
                    break;
                deafult:
                    console.log("Invalid operation");
            }

            readline.close();
         });
    });
  });

 

  
  