## # API Structured

A Sample API working with NodeJS and Express with intention to work structure in NodeJS like MVC

## # Running

- Clone this repo
- run `npm install`
- run `node .` or `node index.js` to start API

## # Routes

- **GET** | `localhost:3000/`
    ```
    Home API returning "Hello World!!!"
    ```

---

- **GET** | `localhost:3000/name`

    ```
    Return all contents in Name data
    ```

    Example:
    ```js
    // GET => localhost:3000/name
    [
        "Maria Eduarda"
    ]
    ```

---

- **POST** | `localhost:3000/name`

    ```
    Insert new value in Name data.
    ```
    
    Example:
    ```js
    // POST => localhost:3000/name
    {
        "content":"Leonardo Frederiche"
    }
    ```

---

- **GET** | `localhost:3000/name/:index`

    ```
    Return the object position (starting 1) from Name data.
    ```

    Example:
    ```js
    // GET => localhost:3000/1
    # => Maria Eduarda

    // GET => localhost:3000/2
    # => Leonardo Frederiche
    ```

---

- **PUT** | `localhost:3000/name/:index`
    ```
    Update content in position informed from index parameter.
    ```

    Example:
    ```js
    // PUT => localhost:3000/name/2
    {
        "content":"Leonardo Camp Frederiche"
    }
    ```
    
---

- **DELETE** | `localhost:3000/name/:index`
    ```
    Remove content from Name data by index value in URI parameter.
    ```