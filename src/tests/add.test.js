//.test.js could be recognized by jest

const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);


    expect(result).toBe(7);
});

test('greeting message', ()=>{
    const greetingMessage = generateGreeting('Ying Kui');
    expect(greetingMessage).toBe('Hello Ying Kui!');
});


