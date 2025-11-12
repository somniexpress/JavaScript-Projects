//Creates an object to keep track of values
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait
    -Second_Operand: false,
    operator: null,
};

//This modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //Checks if the Wait_Second_Operand variable is tru and sets
    //Display-Value to the key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Display_Value if the current vlue is 0. Otherwise,
        //It concatenates the value
        Calculator.Display_Value = Display_Value ==='0' ? digit : Display_Value + digit;

    }
   
} 

//This section handles decimal points
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === 'true') return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;

    }
}

// This section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator exists and if Wait_Second_Operand is true
    //Then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator
        return;
    }
    if (First_Operand == NULL) {
        Calculator.First_Operand = Value_of_Input;        
    }else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        //This will remove any trailing 0s
        result = (result * 1).toString();
        Calculator.Display_Value = result;
        Calculator.First_Operand = result;
        
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;

}
 //Handles actual calculations
 const Perform_Calculations = {
    '/' : (First_Operand,Second_Operand) => First_Operand / Second_Operand,
    '*' : (First_Operand,Second_Operand) => First_Operand * Second_Operand,
    '+' : (First_Operand,Second_Operand) => First_Operand + Second_Operand,
    '-' : (First_Operand,Second_Operand) => First_Operand - Second_Operand,
    '=' : (First_Operand,Second_Operand) => Second_Operand,
 };

 //Resets th calculator when the Ac button is clicked
 function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.operator = null;
 }


 //This function updates the calculator screen with the contents of Display Value
 function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
    
}

Update_Display();

//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
    const {target} = event;
    if (!target.matches('button')){
        return
    }
    if (target.Classlist.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.Classlist.contains('decimal')) {
        Input_Decimal(target.value);
         Update_Display();
        return;  

}

if (target.Classlist.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
}
Input_Digit(target.value);
Update_Display();
})
