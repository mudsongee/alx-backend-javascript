import createEmployeesObject from "/root/alx-backend-javascript/0x00-ES6_basic/11-createEmployeesObject.js";
import createReportObject from '/root/alx-backend-javascript/0x00-ES6_basic/12-createReportObject.js';
import createIteratorObject from '/root/alx-backend-javascript/0x00-ES6_basic/100-createIteratorObject.js';
import iterateThroughObject from '/root/alx-backend-javascript/0x00-ES6_basic/101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
