const Intern = require("../lib/Intern");

test("setting school via the constructor argument", () => {
    const testValue = "University of North Carolina at Wilmington";
    const employee = new Intern("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of North Carolina at Wilmington";
    const employee = new Intern("Eduardo", 1, "eduardo@email.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});