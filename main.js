import interpolate from "./interpolateIt.js";


const no_of_points = document.getElementById('no_of_points'),
    button = document.querySelector('button'),
    points = document.querySelector('.points'),
    question = document.querySelector('.question'),
    calculate = document.getElementById('calculate'),
    valuefor = document.getElementById('value_for'),
    results = document.getElementById('results');

let n = null;
let x = [];
let y = [];    
// let result = 0;

button.addEventListener('click',(e) => {
    n = no_of_points.value
    render(no_of_points.value);
})


function render(n){
    points.innerHTML = "";
    for(let i = 0 ; i < n ; i++){
        const point = document.createElement('div');
        point.classList.add('point');
        point.innerHTML = `
                <div data-item = "x">
                    <label for="">x<sub>${i}</sub></label>
                    <input type="text" id = x${i}>
                </div>
                <div data-item = "y">
                    <label for="">y<sub>${i}</sub></label>
                    <input type="text" id =  y${i}>
                </div>
        `;
        points.append(point);
        question.style.display = "flex";
        document.querySelector('#reset').style.display = "block";
    }
}

calculate.addEventListener('click',() => {
    const data = Array.from(points.children);
    data.forEach(d => {
        console.log(d)
        Array.from(d.children).forEach(item => {
            if(item.dataset.item === 'x'){
                x.push(item.children[1].value);
            }else{
                y.push(item.children[1].value);
            }
        })
    })
    const xx = valuefor.value;
    const final = interpolate(xx,n,x,y)
    results.style.display = "block";
    results.innerHTML = `<h3>The interpolated value for y(${xx}) is ${final}</h3>`;
})


document.querySelector('#reset').addEventListener('click',() => window.location.reload())