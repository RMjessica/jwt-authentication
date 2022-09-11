# :sparkles: Login/Register Flow 


https://user-images.githubusercontent.com/88908436/189548182-9bfe3228-8706-4092-aef3-746ec01ca65f.mp4

### About this project:

- Signup: The user chooses an email, a password and submits the sign up form. A new user is created in the database and is redirected to login form after submit.
- Login: The user fills out its email and password and it's redirected to the private dashboard after successfull authentication.
- Validation: Any page considered "private" must always validate that the current user is valid, if not, the page must redirect the user back to login.
- Logout: At any moment the user will have a "logout" button accessible in the navbar and it will get redirected back to the login path.

### Technologies:

- React.js front end and python/flask backend .
- Integrated with Pipenv for package managing.
- SQLAlchemy integration for database abstraction.


### Back-End Manual Installation:
It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Run the application: `$ pipenv run start`

### Front-End Manual Installation:
-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`
