// import functions and grab DOM elements
import { purchaseFrequency, coolFactor, customerGender } from './data-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const purchases = purchaseFrequency();

const labels = Object.keys(purchases);

const values = Object.values(purchases);

const data = {
    labels: labels,
    datasets: [{
        label: 'Customer Purchase Frequency',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: values,
    }]
};
  
const config = {
    type: 'bar',
    data: data,
    options: {}
};

// eslint-disable-next-line
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);



const cool = coolFactor();

const labels2 = Object.keys(cool);

const values2 = Object.values(cool);





const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Customer Cool Factor, 1-10',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: values2,
    }]
};

const config2 = {
    type: 'line',
    data: data2,
    options: {}
};

// eslint-disable-next-line
const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);




const gender = customerGender();

const labels3 = Object.keys(gender);

const values3 = Object.values(gender);


const data3 = {
    labels: labels3,
    datasets: [{
        label: 'Customer Gender',
        backgroundColor: ['violet', 'yellowgreen', 'yellow', 'tomato', 'turquoise', 'slateblue', 'purple', 'peru'],
        borderColor: ['violet', 'yellowgreen', 'yellow', 'tomato', 'turquoise', 'slateblue', 'purple', 'peru'],
        data: values3,
    }]
};

const config3 = {
    type: 'pie',
    data: data3,
    options: {}
};

// eslint-disable-next-line
const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config3
);

