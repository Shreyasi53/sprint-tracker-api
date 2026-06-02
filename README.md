# Sprint Tracker API

## Tech Stack
* Node.js
* Express.js
* PostgreSQL
* Sequelize
* Joi
* Jest

## Setup Instructions
```bash
npm install
npm run dev
```

Create a `.env` file and configure your PostgreSQL database credentials.

## API Endpoints

### Clients
* POST /api/clients
* GET /api/clients
* GET /api/clients/:id
* PUT /api/clients/:id
* DELETE /api/clients/:id

### Projects
* POST /api/projects
* GET /api/projects/:id/sprints
* GET /api/projects/:id/health

### Sprints
* POST /api/sprints
* POST /api/sprints/:id/tasks
* GET /api/sprints/:id/summary

### Tasks
* PUT /api/tasks/:id/status
* PUT /api/tasks/:id/assign/:engineerId
* GET /api/tasks

### Engineers
* GET /api/engineers/:id/workload
* GET /api/engineers/available

---

# Assignment Questions

## Why did you choose this architecture? What tradeoffs did you make and what would you change at scale?

I used the Controller → Service → Model architecture because it helped me keep the code organized. Controllers handle requests and responses, services contain business logic, and models interact with the database.

At first it felt like extra files, but as the project grew it became easier to find and modify code. If the project became much larger, I would add authentication, caching, and better testing.

## What is your Project Health Score formula and why?

I calculated the Project Health Score using the task completion percentage.

Formula:
Health Score = (Completed Tasks / Total Tasks) × 100

Example:
If a project has 8 completed tasks out of 10 total tasks:

Health Score = (8 / 10) × 100 = 80
I chose this formula because completed tasks are the clearest indicator of project progress. A higher completion percentage usually means the project is closer to delivery and in a healthier state.

## What part was hardest? What did you Google and what did you figure out yourself?

The hardest part was implementing Sequelize and PostgreSQL because I was familiar with MongoDB and Mongoose, but I had very little experience with relational databases. Also, Joi and Jest were new to me.

I used tutorials, documentation, and online resources to understand these technologies and implement them in the project.

The parts I figured out and implemented myself were the APIs and business rules. These features helped me understand how backend systems work beyond basic CRUD operations.

## If you had one more day, what would you add or fix first and why?

I would focus on improving testing and authentication.

Although I set up Jest, I spent most of my time completing the required APIs and business logic. Given more time, I would add JWT authentication to make the project more production-ready.


## What's one thing in your submission you're genuinely proud of?

I am most proud of implementing the business logic APIs instead of stopping at basic CRUD operations.

Some examples are:

Sprint Completion Percentage Formula:
Completion % = (Completed Tasks / Total Tasks) × 100

Engineer Workload:
Total Estimated Hours = Sum of estimatedHours of assigned tasks
Total Actual Hours = Sum of actualHours of assigned tasks

Available Engineers Rule:
Engineer is available if:
* isAvailable = true
* Active Tasks < 3
* Stack matches the requested stack

Implementing these features helped me understand how real-world backend applications manage projects, tasks, and engineers.
