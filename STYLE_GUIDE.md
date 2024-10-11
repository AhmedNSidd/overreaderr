## **JavaScript/TypeScript Coding Style Guide**

### 1. **General Guidelines**

- **Indentation**: Use 2 spaces for indentation.
- **Semicolons**: Always use semicolons `;` to end statements.
- **Quotes**: Use single quotes `' '` for strings, except when using template literals or when a string contains a quote.
  - ✅ Example: `const name = 'Adam';`
  - ✅ Example: ``const greeting = `Hello, ${name}!`;``

### 2. **Variable and Function Naming**

- Use **camelCase** for variable and function names.

  - ✅ Example: `let userName = 'John';`
  - ✅ Example: `function fetchUserData() {}`

- Use **PascalCase** for class names and React components.

  - ✅ Example: `class UserManager {}`
  - ✅ Example: `const UserComponent = () => {}`

- Prefer **const** over **let** unless the variable will be reassigned.

  - ✅ Example: `const age = 25;`
  - 🔄 Example: `let counter = 0; counter++;`

- Avoid using **var**; use `const` or `let` instead.

### 3. **TypeScript Specific Rules**

- Always use **explicit types** for function parameters and return values.

  - ✅ Example:
    ```typescript
    function getUser(id: number): User {
      // ...
    }
    ```

- Use **interfaces** and **types** to define object structures and avoid using `any`.

  - ✅ Example:

    ```typescript
    interface User {
      id: number;
      name: string;
    }

    const user: User = { id: 1, name: 'John' };
    ```

- Use `null` instead of `undefined` where possible. Type your variables as `string | null`, for example, to account for possible null values.
  - ✅ Example:
    ```typescript
    let username: string | null = null;
    ```

### 4. **Functions and Arrow Functions**

- Prefer **arrow functions** for anonymous functions, especially for callbacks.

  - ✅ Example:
    ```javascript
    const add = (a: number, b: number): number => a + b;
    ```

- Use **function declarations** for named functions when defining reusable logic.
  - ✅ Example:
    ```typescript
    function greet(name: string): string {
      return `Hello, ${name}`;
    }
    ```

### 5. **Object and Array Destructuring**

- Use **destructuring** for objects and arrays to make code concise and readable.

  - ✅ Example:
    ```typescript
    const user = { id: 1, name: 'John' };
    const { id, name } = user;
    ```

- Spread operator (`...`) is preferred for copying or combining arrays and objects.
  - ✅ Example:
    ```typescript
    const newArray = [...oldArray, newItem];
    const newObject = { ...oldObject, newProperty: value };
    ```

### 6. **Control Flow and Conditionals**

- **Return early from functions**: Prefer returning early instead of using multiple levels of nested `if` or `else` blocks. This makes the function easier to read and maintain.

  - ✅ Example:

    ```typescript
    function getUserName(user: User): string {
      if (!user) {
        return 'Guest';
      }
      return user.name;
    }
    ```

  - ❌ Instead of:
    ```typescript
    function getUserName(user: User): string {
      if (user) {
        return user.name;
      } else {
        return 'Guest';
      }
    }
    ```

- **Use `async/await`**: Prefer `async/await` over Promise chains for readability and error handling. Always handle errors using `try/catch` in async functions.

  - ✅ Example:

    ```typescript
    async function fetchData(): Promise<Data> {
      try {
        const response = await fetch(apiUrl);
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
    ```

  - ❌ Instead of:
    ```typescript
    function fetchData(): Promise<Data> {
      return fetch(apiUrl)
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error fetching data:', error);
          throw error;
        });
    }
    ```

- Use **strict equality** (`===` and `!==`) instead of loose equality (`==` and `!=`).

  - ✅ Example: `if (age === 25) { ... }`

- Prefer **ternary operators** for simple conditional assignments.
  - ✅ Example:
    ```typescript
    const status = isLoggedIn ? 'Logged In' : 'Guest';
    ```

### 7. **Error Handling**

- Use **try/catch** for handling asynchronous errors.

  - ✅ Example:
    ```typescript
    try {
      await fetchData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    ```

- If using **Promise chains**, always include error handling with `.catch()`.
  - ✅ Example:
    ```typescript
    fetchData()
      .then((data) => handleData(data))
      .catch((error) => console.error(error));
    ```

### 8. **Code Comments**

- Write **meaningful comments** to explain _why_ something is done, not _what_ is being done.
  - ✅ Example:
    ```typescript
    // This function handles user authentication
    function login() { ... }
    ```

### 9. **Linting and Formatting**

- Use ESLint to automatically enforce rules and avoid common mistakes. Check for linting errors before committing your code.

  - ✅ Example: Run `npm run lint` before committing your changes.

- Use Prettier for consistent code formatting. It is recommended to set up Prettier in your editor to format code on save. [(VS Code)](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)

  - ✅ Example: Run `npm run prettier:write` to format your code.

---

### Helpful Tools for Beginners

- **TypeScript Playground**: Explore and learn TypeScript [here](https://www.typescriptlang.org/play).
- **ESLint & Prettier**: Use these tools in your development environment (set up with your editor) for instant feedback on code quality and formatting.
