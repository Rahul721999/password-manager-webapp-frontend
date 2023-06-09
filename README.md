
# Password-Manager webapp frontend

This is my password manager webapp frontend, developed with React.



### Purpose of this project

The purpose of a password manager web application is to securely store and manage passwords for various online accounts. Password manager web apps offer a convenient and secure solution for users to generate strong passwords, store them in an encrypted database, and easily access them when needed.
## Features of this webapp

- SignUp, Login
- User can Add, manage their creadentials of diff websites. 
- Password-Generator, Password-Analyzer also available.
- Copy creadentials with a single tap, minimizes the risk of typing mistakes.
- Password-Suggestions available for better and sequre Password.


## Run Locally

Clone the project along with it's backend(Written in Rust).

### Setup backend
 NOTE: the backend is Written in Rust so you need to setup Rust environments if you want to the backend.
- Clone the backend first.
```bash
  git clone https://github.com/Rahul721999/password-manager-web-app.git
```
- Navigate to project repo
```bash
  cd password-manager-web-app
```
- use this command to run the backend Locally
```bash
  cargo run
```

### Setup frontend
```bash
git clone https://github.com/Rahul721999/password-manager-webapp-frontend.git
```

Go to the project directory

```bash
cd my-project
```

Install dependencies

```bash
npm install
```

-NOTE: you need to setup the .env file before run the program.
```env
REACT_APP_BACKEND_URL=localhost:port
```

Now start the server

```bash
npm run start
```

