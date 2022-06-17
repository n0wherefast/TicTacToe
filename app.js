const gameContainer = document.querySelector('.gameContainer');
const gameArray =[];
let nextMove ='';

const PlayerX = document.getElementById('PlayerX');
 PlayerX.addEventListener('click',(e)=>{
  nextMove = 'X'
 document.getElementById('PlayerX').disabled = 'true';
 document.getElementById('PlayerO').disabled = 'true';
 return nextMove
})


const PlayerO = document.getElementById('PlayerO');
PlayerO.addEventListener('click',()=>{
nextMove = 'O'
this.state =nextMove;
document.getElementById('PlayerX').disabled = 'true';
document.getElementById('PlayerO').disabled = 'true';
return nextMove
})


function reset(){
  document.querySelector(".gameOver").style.display = "none";
  gameContainer.style.display = 'flex'
  location.reload()
}

function gameOver(message) {
  document.getElementById("winner").innerHTML = message;
  gameContainer.style.display = "none";
  document.querySelector(".gameOver").style.display = "block";
}


function draw() {
  let shouldReturn = true;
  gameArray.forEach(({ state }) => {
    if (state == "") shouldReturn = false;
  });
  return shouldReturn;
}


function won() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      gameArray[a].state !== "" &&
      gameArray[a].state === gameArray[b].state &&
      gameArray[a].state === gameArray[c].state
    ) {
      return true;
    }
  }
  return false;
}

function IA(){
  if (nextMove === 'X') {
    let random = Math.floor(Math.random() * 8);
    
  }
  
  

  console.log(random)
}


/*class ClassCell {
  constructor(element,box){
    this.element = element;
    this.box = box;
    this.state = '';
  }

  clicked() {
  this.state = nextMove;
  this.element.classList.remove('notClick');
  this.element.onclick = function(){
    return false;
   }
   this.element.querySelector('p').innerHTML = this.state;
   if (won()) return gameOver('the winner is player ' + this.state)
   if (draw()) return gameOver('loser');
   nextMove == 'X'? (nextMove ='O') : (nextMove ='X');
   
 }
  
}*/

  
 
function board(element,box) {
  this.element = element;
  this.box = box;
  this.state = '';



  this.clicked = ()=>{
  this.state = nextMove;
  this.element.classList.remove('notClick');
  
   
   
   console.log('box '+this.box)
   console.log('state '+this.state)
   console.log('element '+this.element)
   console.log( 'nextmove '+nextMove)

   this.element.querySelector('p').innerHTML = nextMove;

   if (won()) return gameOver('the winner is player ' + this.state)
   if (draw()) return gameOver('loser');


   if (nextMove === 'X') { 
    this.element.onclick = function(){
    return false;
   }
    nextMove == 'X'? (nextMove ='O') : (nextMove ='X');

   } else if (nextMove === 'O') {
    this.element.onclick = function(){
      return false;
     }
    nextMove == 'X'? (nextMove ='O') : (nextMove ='X');
  } else {
    const body = document.querySelector('body')
    const message = document.createElement('div');
    message.classList.add('message');
    body.appendChild(message);
    message.innerText ='CHOOSE SIGN!'
    
   }

   
   
  }
  
}

for (let box = 0; box < 9; box++) {
  const div = document.createElement('div');
  div.classList.add('cell','notClick');
  const cell = new board(div, box);
  div.onclick = () => { cell.clicked()}    
  div.appendChild(document.createElement('p'));
  
  gameContainer.appendChild(div);
  gameArray.push(cell);  
  console.log(gameArray)
 }

 
