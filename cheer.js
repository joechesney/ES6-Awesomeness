const name = "John Doe";



const cheerBoe = (name)=>{
  for(let letter of name){
    if(letter.toLowerCase() === "j" || letter.toLowerCase() === "d" && letter !== " "){
      console.log(`Give me a ${letter.toUpperCase()}!!`);

    } else if(letter !== " "){
      console.log(`Give me an ${letter.toUpperCase()}!!`);
    }
  }
  console.log('What does that spell?');
  console.log(`${name.toUpperCase()}`);
}

// // setTimeout(cheerBoe, 1000, name);
cheerBoe(name);

// const printLetter = (letter)=>{
//   if(letter.toLowerCase() === "j" || letter.toLowerCase() === "d" && letter !== " "){
//     console.log(`Give me a ${letter.toUpperCase()}!!`);

//   } else if(letter !== " "){
//     console.log(`Give me an ${letter.toUpperCase()}!!`);
//   }
// }


// const time = 1000;
// const printToConsole = (name, time)=>{
//   for(let letter of name){
//     setInterval(printLetter, time, letter);

//   }
//   console.log("Whats that spell?");
//   console.log(`${name}`);
//   clearInterval(printLetter);
// }

// printToConsole(name);

for(let letter of name){

}