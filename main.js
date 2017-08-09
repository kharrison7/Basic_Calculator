console.log("JS On");


let in_Answer_String = " ";
let continuing_a_calculation = false;
let answer_Field = document.getElementById("answer_goes_here");


function input_Character(button_character, is_Arithmetic_Operation){
  console.log("button is: " +button_character);
  // This adds the character of the button to the answer field.
  in_Answer_String += ""+button_character+"";
  answer_Field.textContent += button_character;
  console.log(in_Answer_String);
}

// This takes the result string and computes an answer.
function do_Math(){
  let result = eval(in_Answer_String);
  answer_Field.textContent = result;
  console.log("Answer Equals: " + result);
}

// This clears the answer_Field.
function clear_Button(){
  in_Answer_String = " ";
  answer_Field.textContent = " ";
  console.log("Answer Cleared!")
}
