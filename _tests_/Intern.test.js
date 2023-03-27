const Intern = require("../lib/intern");

test("new Intern will return name", () => {
  const test = new Intern("Nicoli", 1, "rookieNicoli@gmail.com", "UCF");

  expect(test.getName()).toBe("Nicoli");
});

test("new Intern will return user id", () => {
  const test = new Intern("Nicoli", 1, "rookieNicoli@gmail.com", "UCF");

  expect(test.getId()).toBe(1);
});

test("new Intern will return user email", () => {
  const test = new Intern("Nicoli", 1, "rookieNicoli@gmail.com", "UCF");

  expect(test.getEmail()).toBe("rookieNicoli@gmail.com");
});

test("new Intern will return user office number", () => {
  const test = new Intern("Nicoli", 1, "rookieNicoli@gmail.com", "UCF");

  expect(test.getSchool()).toBe("UCF");
});

test("new Intern will return role", () => {
  const test = new Intern("Nicoli", 1, "rookieNicoli@gmail.com", "UCF");

  expect(test.getRole()).toBe("Intern");
});
