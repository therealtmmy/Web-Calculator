let firstInput = document.getElementById("first-input-El")
let secondInput = document.getElementById("second-input-El")
let thirdInput = document.getElementById("third-input-El")


const Add = () => {
 let add = +firstInput.value + +secondInput.value
//  Converted string to integer by using the unary operator
thirdInput.value = add
  }

const Sub = () => {
   let sub = firstInput.value - secondInput.value
   thirdInput.value = sub
}

const Mul = () => {
   let mul = firstInput.value * secondInput.value
   thirdInput.value = mul
}

const Div = () => {
   let div = firstInput.value / secondInput.value
   thirdInput.value = div
}

const Cler = () => {
   firstInput.value = " "
   secondInput.value = " "
   thirdInput.value = " "
}

