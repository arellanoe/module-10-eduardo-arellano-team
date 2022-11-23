const Manager = require('../lib/Manager');


test("setting office number", () => {
    const testValue = "10";
    const employee = new Manager("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.office_number).toBe(testValue);
})

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})