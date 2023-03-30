// Set  Variable

const inputNumber = document.querySelector('input[type = "number"]');
const inputText = document.querySelector('input[type = "text"]');
const inputBtn = document.querySelector('input[type = "button"]');
let counter =0;

// Set Function

inputBtn.onclick = () => {
  //   checking if input empty
  if (inputText.value === "" || inputNumber.value == "") {
    alert("Empty Input ? \ncheck it ??");
  } else {
    let prodName = inputText.value
    let prodNumb = inputNumber.value
    
    // looping for element & number
    for( let i =0 ; i< prodNumb; i++){
      console.log("I'm Clicked");

      //  create element
      const myDiv = document.createElement("div");
      const myProdName = document.createTextNode(`${++counter}--`+ prodName);
      const myContainer = document.querySelector(".content-prod");

      // appende child & styling
      myDiv.classList.add('style-div' ,'d-flex')
      myDiv.appendChild(myProdName)
      myContainer.appendChild(myDiv);
      console.log(prodName);
      console.log(prodNumb);

      console.log(i);
    }

  }
};
