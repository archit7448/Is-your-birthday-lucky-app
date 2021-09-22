const dateOfBirth = document.querySelector("#DOB")
const luckyNumber = document.querySelector("#luckyNumber")
const checkButton = document.querySelector("#Button")
const outputContainer = document.querySelector("#output")

checkButton.addEventListener("click", checkHandler)

function checkHandler(){
    var date = dateOfBirth.value;
    var sum = calculateSUM(date);
    console.log(sum)
    checkBirthdayIsLucky(sum,luckyNumber.value)
}

function calculateSUM(date){
    let sum = 0;
    date = date.replaceAll("-","");
    for (let i=0; i < date.length ; i++){
        sum = sum + Number(date.charAt(i))
    }
    return sum
}

function checkBirthdayIsLucky(sum,luckyNumber){
     if(sum == 0){
      outputContainer.innerText = "add your birth date"
    } else if ( luckyNumber < 0){
        outputContainer.innerText = "add positive number"
    } else if (sum % luckyNumber == 0){
        outputContainer.innerText = "your birthday date is lucky 🎉"
    } else {
        outputContainer.innerText = "oops 😥"
    }
    
}