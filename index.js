// Write your solution in this file!
const employee = {
    name: "riane",
    streetAddress: "setif"
};

//returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = { ...object };

    newEmployee[key] = value;

    return newEmployee;
}
const oneEmployee = updateEmployeeWithKeyAndValue(employee, "name", "roro");
console.log(oneEmployee);

// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "mkslsd"));
//deletes `key` from a clone of employee and returns the new employee (it is non-destructive)

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = { ...object };

    delete newEmployee[key];

    return newEmployee;

}
console.log(deleteFromEmployeeByKey(employee, "name"));

//returns employee without the deleted key/value pair

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;

}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));

