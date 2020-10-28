// Menangkap Bilangan Random
const dice1 = Math.floor(Math.random()*6)+1;

const randomimages = 'images/dice' +dice1+ '.png';

const p1  = document.querySelectorAll('img')[0];
p1.setAttribute('src',randomimages);




const dice2 = Math.floor(Math.random()*6)+1;
const randomimages2 = `images/dice${dice2}.png`;
const p2  = document.querySelectorAll('img')[1]
p2.setAttribute('src',randomimages2);


// Aturan main
const result = document.querySelector('#result')
if (dice1 == dice2){
    result.innerHTML = 'Hasilnya Seri';
}
else if (dice1 < dice2){
    result.innerHTML = '$'+'Selamat Player 2 Menang'
}
else{
    result.innerHTML = 'Selamat Player 1 Menang'+'$'
}


// alert(`${dice1} + ${dice2}`)
