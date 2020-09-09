// Your code here
<<<<<<< HEAD
// Your code here
let dodger = document.getElementById('dodger') ;

function moveDodgerLeft() {
=======
let dodger = document.getElementById('dodger') ;

function moveBodgerLeft() {
>>>>>>> fa4723b8270676bdbab3dd5defb6896a956b8f86
  var leftNumber = dodger.style.left.replace('px' , '') ;
  
  var left = parseInt(leftNumber , 10) ;
  if(left > 0) 
    dodger.style.left = `${left - d1}px` ;
  
  
}

function moveDodgerRight() {
  var leftNumber = dodger.style.left.replace('px' , '') ;
  
  var left = parseInt(leftNumber , 10) ;
  if(left > 0) 
    dodger.style.left = `${left + 1}px` ;
  
  
}

document.addEventListener('keydown' , e => {
  if(e.key === 'ArrowLeft') {
<<<<<<< HEAD
    moveDodgerLeft();
=======
    moveBodgerLeft();
>>>>>>> fa4723b8270676bdbab3dd5defb6896a956b8f86
  }
 
})


document.addEventListener('keydown' , e => {
  if(e.key === 'ArrowRight') {
    moveDodgerRight();
  }
 
})