# Getting Started
# Fullstack Demo Project - Login and Account Management

This is a very simple fullstack demo project for beginners, that demonstrates user registration, login, and account management functionality. The project consists of a React frontend and a Spring Boot backend.

This project is developed using Java 11.0.17, Spring Boot 2.7.10 and React 18.2.0.


## Features

- User registration
- User login
- Displaying user profile information
- Logging out
- Deleting user accounts

## Installation and Setup

### I. Backend and Database

1. In terminal, navigate to the `demo-project1-loginpage` directory
```
cd demo-project1-loginpage
```

2. Run the following command to start the Spring Boot application:

```
.\gradlew.bat bootRun
```

The backend server should now be running on `http://localhost:8080`.

### II. Frontend

1. Navigate to the `frontend` directory
```
cd frontend
```
2. Install the dependencies using the following command:
```
npm install
```

3. Start the development server using the following command:
```
npm start
```

The frontend application should now be running on `http://localhost:3000`.

## III. Usage

1. Open a web browser and navigate to `http://localhost:3000`.
2. Register a new user account by clicking the "Register" link and filling out the registration form.
3. Log in using the registered account credentials by clicking the "Login" link and filling out the login form.
4. View the user's profile information on the "Profile" page.
5. Log out by clicking the "Logout" button.
6. Delete the user account by clicking the "Delete My Account" button on the "Profile" page.

### * Accessing H2 Database

This project uses the H2 Database as the default database for development purposes. To access the H2 Database console, follow these steps:

1. Make sure the backend server is running.

2. Visit `http://localhost:8080/h2-console`. In your first login, you may need to enter the default authorization credentials. Default username: myuser, and default password: mypassword.

3. In the "JDBC URL" field, enter the URL specified in the `application.properties` file of the backend. The default URL is `jdbc:h2:mem:testdb`.

4. Enter your username and password (as specified in the `application.properties` file) in the "User Name" and "Password" fields, respectively. The default username is `sa` and the default password is an empty string.

5. Click "Connect" to access the H2 Database console.

In the H2 Database console, you can view and manage the database tables, execute SQL queries, and monitor the database connections.

**Note**: The H2 Database is an in-memory database, which means that the data stored in the database will be lost when the backend server is stopped. To persist the data, consider using a different database system (e.g., MySQL, PostgreSQL, MongoDB) and configure the connection settings in the `application.properties` file.


## License

[MIT](https://choosealicense.com/licenses/mit/)


-------------------------------

### Reference Documentation

For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.7.10/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.7.10/gradle-plugin/reference/html/#build-image)
* [Spring Security](https://docs.spring.io/spring-boot/docs/2.7.10/reference/htmlsingle/#web.security)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.7.10/reference/htmlsingle/#web)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.7.10/reference/htmlsingle/#data.sql.jpa-and-spring-data)

### Guides

The following guides illustrate how to use some features concretely:

* [Securing a Web Application](https://spring.io/guides/gs/securing-web/)
* [Spring Boot and OAuth2](https://spring.io/guides/tutorials/spring-boot-oauth2/)
* [Authenticating a User with LDAP](https://spring.io/guides/gs/authenticating-ldap/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)

### Additional Links

These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

