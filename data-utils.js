import { customers } from './data.js';



export function purchaseFrequency() {

    const countMap = {};

    for (let customer of customers) {
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]) {

            countMap[frequency]++;

        } else {

            countMap[frequency] = 1;
        }
    }

    return countMap;

}

export function coolFactor() {

    const countMap = {};

    for (let customer of customers) {
        const coolness = customer.cool_factor;

        if (countMap[coolness]) {
            countMap[coolness]++;

        } else {
            countMap[coolness] = 1;
        }
    }
    return countMap;
}