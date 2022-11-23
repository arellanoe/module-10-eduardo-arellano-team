const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "nosremetnarg";
    const employee = new Engineer("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "nosremetnarg";
    const employee = new Engineer("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})