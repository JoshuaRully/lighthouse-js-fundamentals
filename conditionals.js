//enter temperature below
const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!"); //output if temp is below 0
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!"); //output if temp is below 15 but higher than -1
} else {
  console.log("Short sleeves are fine."); //output if temp is 15 or higher
}

console.log("Now you're ready to go outside!");
//all results are a Canadian's perception of what clothing is suitable in these temps., please wear short sleeves in 15deg.C. temps. at yout own risk ;)