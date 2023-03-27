const Employee = require('../lib/employee')

test('new Employee will return user data', () => {
    const test = new Employee('Nick', 1, 'nicholastozzi@gmail.com');

    expect(test.getName()).toEqual('Nick')
})

test('new Employee will return user id', () => {
    const test = new Employee('Nick', 1, 'nicholastozzi@gmail.com');

    expect(test.getId()).toEqual(1);
})

test('new Employee will return user email', () => {
    const test = new Employee('Nick', 1, 'nicholastozzi@gmail.com');

    expect(test.getEmail()).toEqual('nicholastozzi@gmail.com')
})

test('new Employee will return employee role ', () => {
    const test = new Employee('Nick', 1, 'nicholastozzi@gmail.com');

    expect(test.getRole()).toBe('Employee')
})