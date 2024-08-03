const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const sect = document.querySelector('section')

const height = inputs[0]
const weight = inputs[1]

const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')
const para4 = document.createElement('p')

// below give a value of hello on click

// function hello(){
//     alert('hello')

// }

function hello(){

    const h = height.value/100
    const w = weight.value
    const bmi = (w/h**2).toFixed(2)

    // // below is same as above 

    // const bmi = (w/Math.pow(h,2).toFixed(2)

    const status = bmi > 30 ? 'obesity' : bmi > 25 ? 'overweight' : bmi > 18.5 ? 'healthy weight' : 'underweight'
    const recommendation = bmi > 30 ? '20hrs workouts daily' : bmi > 25 ? '15hrs workouts daily' : bmi > 18.5 ? 'keep it up' : 'underweight'
    const rating = bmi > 30 ? '11%' : bmi > 25 ? '65%' : bmi > 18.5 ? '70%' : '25%'

    sect.append(para1,para2,para3,para4)
    para1.innerHTML = `<strong> Result:</strong>${bmi}kgm<sup>-2</sup>`
    para2.innerHTML = `<strong> Status:</strong>${status}`
    para3.innerHTML = `<strong> Recommendation:</strong>${recommendation}`
    para4.innerHTML = `<strong> Rating:</strong>${rating}`

    // alert(bmi)

}

// hello() this is calling the function below is using calling an event listeniner
// hello()

btn.addEventListener('click', hello)