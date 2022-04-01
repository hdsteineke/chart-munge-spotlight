// IMPORT MODULES under test here:
import { purchaseFrequency } from '../data-utils.js';
import { customers } from '../data.js';


const test = QUnit.test;

test('bar chart should display # of customers by purchase frequency', (expect) => {
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
