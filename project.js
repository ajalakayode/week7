const inputs = document.querySelectorAll('inputs')
const button = document.querySelector('button')
const section = document.querySelector('section')

const englishLanguage = [0]
const mathematics = [1]

const para1 = document.createElement('p')
const para2 = document.createElement('p')

function resultChecker(){

    const e = english.value
    const m = mathematics.value

    const avg = (e/2 + m/2).toFixed(2)



    const promoted = e >= 50 && m >= 50 || (e+m)/2 >=70
    const reseat = e >=50 && m <=50 || m >=50 && e <=50
    const resit = e <50 && m<50

    sect.append(para1,para2)

    para1.innerHTML = `<strong> Result:</strong>${avg}kgm<sup>-2</sup>`
    para1.innerHTML = `<strong> status:</strong>${avg}kgm<sup>-2</sup>`
     

}
 

btn.addEventListener('click', resultChecker)