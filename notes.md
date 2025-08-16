### Flow
1. Create a github repo
2. Clone it
3. Run in terminal 
    - npm init
    - npm i express
    - npm i jest, supertest --save-dev
    - mkdir src
    create index.js file, app.js file, app.test.js file
    - node index.js
    change scripts in package.json with 

    ```
    "scripts": {
        "test": "jest src/app.test.js",
        "start": "node src"
    },
    ```

    - npm start
    - node test (to run all test cases)

### Jest
- Testing library developed by Facebook
- Test Js and React applications

### Jest core concepts

1. describe
- Describes the group of test cases.
- Putting multiple test cases under one general theme or section.

eg.
```
describe('Array', () => {
  it('should start empty', () => {
    const arr = [];
    expect(arr.length).toBe(0);
  });

  it('should allow adding elements', () => {
    const arr = [];
    arr.push(1);
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe(1);
  });
});
```

2. it
- Tells about individual test case behavior.

3. expect
- Function used to check something that you want that should be.
- Use expect(something), then chain a matcher like toBe(), toEqual(), toContain().
- If the expectations matched, test passes else fails.

eg.
```
expect(1 + 1).toBe(2);

const fruits = ['apple', 'banana', 'orange'];
expect(fruits).toContain('banana');
```

### Writing yaml file

```
on: 

  push:

    // to create push operation over specific branches
    branches: [main, dev]
```