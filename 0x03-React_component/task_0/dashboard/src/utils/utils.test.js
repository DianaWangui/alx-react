import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

function testGetFullYear() {
    const currentYear = new Date().getFullYear();
    const result = getFullYear();
    if (result === currentYear) {
        console.log('getFullYear test: Passed');
    } else {
        console.error(`getFullYear test: Failed. Expected ${currentYear}, but got ${result}`);
    }
}

function testGetFooterCopy() {
    const trueResult = getFooterCopy(true);
    const falseResult = getFooterCopy(false);
    if (trueResult === "Holberton School" && falseResult === "Holberton School main dashboard") {
        console.log('getFooterCopy test: Passed');
    } else {
        console.error(`getFooterCopy test: Failed. Expected "Holberton School" and "Holberton School main dashboard", but got "${trueResult}" and "${falseResult}"`);
    }
}

function testGetLatestNotification() {
    const expected = "<strong>Urgent requirement</strong> - complete by EOD";
    const result = getLatestNotification();
    if (result === expected) {
        console.log('getLatestNotification test: Passed');
    } else {
        console.error(`getLatestNotification test: Failed. Expected "${expected}", but got "${result}"`);
    }
}

testGetFullYear();
testGetFooterCopy();
testGetLatestNotification();

