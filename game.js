const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const resetbutton = document.querySelector('#reset');
const winningscoreselect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningscore = 5;
let gameover = false;

p1button.addEventListener('click' ,function(){
    if(!gameover){
        p1score+=1;
        if(p1score === winningscore){
            gameover = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1display.textContent = p1score;
    }
})
p2button.addEventListener('click' ,function(){
    if(!gameover){
        p2score+=1;
        if(p2score === winningscore){
            gameover = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2display.textContent = p2score;
    }
})
winningscoreselect.addEventListener('change', function(){
    winningscore = parseInt(this.value);
    reset();
})
resetbutton.addEventListener('click',reset)

function reset() {
    gameover = false;
    p1score =0;
    p2score =0;
    p1display.textContent = 0 ;
    p2display.textContent = 0;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;
}