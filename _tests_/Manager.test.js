const Manager = require("../lib/manager");

test("new Manager will return user name", () => {
  const test = new Manager("Nico", 5, "theBigBoss99@yahoo.com", 605);

  expect(test.getName()).toBe("Nico");
});

test("new Manager will return user id", () => {
  const test = new Manager("Nico", 5, "theBigBoss99@yahoo.com", 605);

  expect(test.getId()).toBe(5);
});

test("new Manager will return user email", () => {
  const test = new Manager("Nico", 5, "theBigBoss99@yahoo.com", 605);

  expect(test.getEmail()).toBe("theBigBoss99@yahoo.com");
});

test("new Manager will return user office number", () => {
  const test = new Manager("Nico", 5, "theBigBoss99@yahoo.com", 650);

  expect(test.getOfficeNumber()).toBe(650);
});

test("new Manager will return role", () => {
  const test = new Manager("Nico", 5, "theBigBoss99@yahoo.com", 605);

  expect(test.getRole()).toBe("Manager");
});
