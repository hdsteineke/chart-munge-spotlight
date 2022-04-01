// import functions and grab DOM elements
import { purchaseFrequency, coolFactor } from './data-utils.js';
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
    labels: labels,
    datasets: [{
        label: 'Customer Cool Factor',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: values,
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
