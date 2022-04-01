// import functions and grab DOM elements
import { purchaseFrequency } from './data-utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const purchases = purchaseFrequency();

const labels = Object.keys(purchases);

const values = Object.values(purchases);

console.log(labels, values);

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
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
