// IMPORT MODULES under test here:
import { purchaseFrequency, coolFactor, customerGender } from '../data-utils.js';


const test = QUnit.test;

test('bar chart should display purchase frequency by # of customers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        Often: 126,
        Once: 107,
        Daily: 142,
        Yearly: 128,
        Monthly: 123,
        Weekly: 122,
        Seldom: 129,
        Never: 123
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = purchaseFrequency();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('line chart should display cool factor by # of customers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        1: 109,
        2: 119,
        3: 99,
        4: 101,
        5: 93,
        6: 102,
        7: 101,
        8: 99,
        9: 82,
        10: 95
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = coolFactor();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('line chart should display cool factor by # of customers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        'Male': 448,
        'Female': 457,
        'Bigender': 14,
        'Agender': 17,
        'Non-binary': 24,
        'Genderqueer': 11,
        'Genderfluid': 18,
        'Polygender': 11
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = customerGender();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});