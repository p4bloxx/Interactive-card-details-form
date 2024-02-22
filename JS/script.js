
const input = document.querySelectorAll('input');
let inputArr = Array.from(input);
const btn = document.querySelector('button');
const form = document.querySelector('form')
const confirmBox = document.querySelector('.confirm-box')
const numb = document.querySelector('.card-numb')
const holder = document.querySelector('.card-name')
const date = document.querySelector('.card-date')
const cvc = document.querySelector('.card-cvc')
const err = document.querySelectorAll('.err')
const errArray = Array.from(err)
const dateArray = [document.querySelector('#date'), document.querySelector('#year')];
const dateBox = document.querySelector('.month-year');


let checkDate = false;
let checkName = false;
let checkCvc = false
let checkNumber = false;

btn.style.pointerEvents = 'none';
  btn.style.opacity = '0.7'

inputArr.forEach((inp) => {
  inp.addEventListener('input', (e) => {
    const parentInput = inp.parentElement;
    
    //check date (MM YY)
    if(inputArr[2].value === '' || inputArr[3].value === ''){
      if(inputArr[2].value === ''){
        inputArr[2].style.borderColor = 'red'
        dateBox.lastElementChild.innerHTML = "month not correct";

      } else {
        inputArr[2].style.borderColor = ''
      }
      
      if(inputArr[3].value === ''){
        inputArr[3].style.borderColor = 'red'
       } else {
        inputArr[3].style.borderColor = ''
       }

      dateBox.lastElementChild.innerHTML = "required"
      date.innerHTML = `00/00`
      checkDate = false;
    } else if (!inputArr[2].value.match(/^\d+$/) || !inputArr[3].value.match(/^\d+$/)){
      dateBox.lastElementChild.innerHTML = "Wrong format, numbers only"
      inp.style.borderColor = 'red'
      checkDate = false;
    } else {
      dateBox.lastElementChild.innerHTML = ""
      inp.style.borderColor = ''
      date.innerHTML = `${dateArray[0].value}/${dateArray[1].value}`
      checkDate = true;
    }

    if(inputArr[2].value > 12) {
      console.log(inputArr[2].value)
      inputArr[2].style.borderColor = 'red'
      dateBox.lastElementChild.innerHTML = "month not correct"
      checkDate = false;
    } 
    
    
    //check nameHodler
    if (inputArr[0].value === '') {
      inputArr[0].style.borderColor = 'red'
      inputArr[0].nextElementSibling.innerHTML = "required";
      holder.innerHTML = `JANE APPLESEED`
      checkName = false;

    } else if(!inputArr[0].value.match(/^[a-zA-Z\s]+$/) && inputArr[0].value !== '') {
      inputArr[0].nextElementSibling.innerHTML = 'Wrong format, letters only'
      inputArr[0].style.borderColor = 'red'
      checkName = false;

    } else {
      inputArr[0].nextElementSibling.innerHTML = ''
      inputArr[0].style.borderColor = ''
      holder.innerHTML = `${inputArr[0].value.toUpperCase()}`
      checkName = true;
    }
    

    //check cvc
    if(inputArr[4].value === '') {
      inputArr[4].style.borderColor = 'red'
      inputArr[4].nextElementSibling.innerHTML = "required"
      cvc.innerHTML = `000`
      checkCvc = false;

    } else if (!inputArr[4].value.match(/^\d+$/)){
      inputArr[4].nextElementSibling.innerHTML = "Wrong format, numbers only"
      inputArr[4].style.borderColor = 'red'
      checkCvc = false;

    } else {
      inputArr[4].style.borderColor = ''
      inputArr[4].nextElementSibling.innerHTML = ""
      cvc.innerHTML = `${inputArr[4].value}`
      checkCvc = true;
    }

    //check numberCard
    if(inputArr[1].value === ''){
      inputArr[1].style.borderColor = 'red'
      inputArr[1].nextElementSibling.innerHTML = "required"
      numb.innerHTML = '0000 0000 0000 0000';
      checkNumber = false;

    } else if (!inputArr[1].value.match(/^[0-9\s]*$/)){
      inputArr[1].style.borderColor = 'red'
      inputArr[1].nextElementSibling.innerHTML = "Wrong format, numbers only"
      checkNumber = false;

    } else{
      inputArr[1].nextElementSibling.innerHTML = ""
      inputArr[1].style.borderColor = ''
      let inputNumb = inputArr[1].value.toString();
      let check = inputNumb.match(/\d{4}/g);
      let checkString = check.join(" ")
      numb.innerHTML = checkString;
      checkNumber = true;
    }
  })
}) 



  btn.addEventListener('click', () => {
    if(checkName && checkDate && checkNumber && checkCvc){
      form.style.display = 'none'
      confirmBox.style.display = 'flex'
      setTimeout(confirm, 1500)
    }
  
    function confirm () {
      confirmBox.style.display = 'none'
      form.style.display = 'flex'
    }
  })