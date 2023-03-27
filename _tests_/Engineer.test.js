const Engineer = require('../lib/engineer')

test('new Engineer will return name', () => {
    const test = new Engineer('Nicole', 2, 'nicole96@gmail.com', 'EnjNicole')

    expect(test.getName()).toBe('Nicole')
})

test('new Engineer will return user id', () => {
    const test = new Engineer('Nicole', 2, 'nicole96@gmail.com', 'EnjNicole')

    expect(test.getId()).toBe(2)
})

test('new Engineer will return email', () => {
   const test = new Engineer('Nicole', 2, 'nicole96@gmail.com', 'EnjNicole')

    expect(test.getEmail()).toBe('nicole96@gmail.com')
})

test('new Engineer will return user office number', () => {
    const test = new Engineer('Nicole', 2, 'nicole96@gmail.com', 'EnjNicole')

    expect(test.getGithub()).toBe('EnjNicole')
})

test('new Engineer will return user role', () => {
    const test = new Engineer('Nicole', 2, 'nicole96@gmail.com', 'EnjNicole')

    expect(test.getRole()).toBe("Engineer")
})