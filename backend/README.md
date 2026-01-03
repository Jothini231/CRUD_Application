# CRUD Application - Backend (Spring Boot)

## Project Overview
This is the **backend** for the **CRUD Application** project, developed using **Spring Boot** and **Java 21**.  
It provides RESTful APIs to **create, read, update, and delete** data for [your entities], with a structured, professional design.

## Tech Stack
- Java 21
- Spring Boot
- Spring Data JPA / Hibernate
- MySQL
- Swagger (OpenAPI) for API documentation
- Maven

## API Documentation (Swagger UI)
Swagger UI is configured for interactive API documentation and testing.

After running the application locally, access Swagger UI at:
http://localhost:8080/swagger-ui/index.html


It allows you to:
- Test all CRUD APIs directly from the browser
- View request and response models
- Understand endpoint functionality quickly


---

## Features
- Full CRUD operations for application entities (Create, Read, Update, Delete)
- RESTful API design with proper HTTP status codes
- Data validation and error handling
- Swagger integration for easy testing and documentation
- Configured for MySQL database connection
- Modular, maintainable, and scalable backend structure

---

## Example Endpoints

Assuming a simple **User** entity, the CRUD endpoints may include:

| Method | Endpoint          | Description            |
|--------|-----------------|------------------------|
| POST   | `/api/users`     | Create a new user      |
| GET    | `/api/users`     | Retrieve all users     |
| GET    | `/api/users/{id}`| Retrieve a user by ID  |
| PUT    | `/api/users/{id}`| Update user by ID      |
| DELETE | `/api/users/{id}`| Delete user by ID      |


---

## How to Run

1. Clone the repository:
   https://github.com/USERNAME/REPO_NAME.git 

2. Navigate to the backend folder : cd backend

3. Make sure your MySQL database is running and configured in application.properties or application.yml.

4. Build and run the application using Maven : mvn spring-boot:run

5. Access Swagger UI to test the APIs:
   http://localhost:8080/swagger-ui/index.html
