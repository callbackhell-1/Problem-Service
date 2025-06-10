# codeArena Problem Service

This service provides an API for managing coding problems in the codeArena platform. It is built using Node.js and Express, following an MVC structure.

---

## Project Structure

```
Problem-Service/
├── package.json
├── README.md
├── .env
├── src/
│   ├── index.js
│   ├── config/
│   │   └── server.config.js
│   ├── controllers/
│   │   ├── index.js
│   │   └── problem.controller.js
│   └── routes/
│       ├── index.js
│       └── v1/
│           ├── index.js
│           └── problem.routes.js
```

---

## Environment Variables

- `PORT`: The port on which the server runs (default: 3000, see `.env`).

---

## Installation

```sh
npm install
```

---

## Running the Service

```sh
npm run dev
```

---

## API Routing

The routing follows this structure:

```
/api -> /v1 -> /problems -> [endpoint]
```

- `/api` is handled by `apiRouter` (`src/routes/index.js`)
- `/v1` is handled by `v1Router` (`src/routes/v1/index.js`)
- `/problems` is handled by `problemRouter` (`src/routes/v1/problem.routes.js`)

---

## Endpoints

| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| GET    | `/api/v1/problems/ping` | Health check for problems  |
| GET    | `/api/v1/problems/:id`  | Get a specific problem     |
| GET    | `/api/v1/problems/`     | Get all problems           |
| POST   | `/api/v1/problems/`     | Add a new problem          |
| DELETE | `/api/v1/problems/:id`  | Delete a problem           |
| PUT    | `/api/v1/problems/:id`  | Update a problem           |

---

## Controller Stubs

All endpoints currently return a "Not implemented yet" message with HTTP 501 status, except for `/ping`, which returns a health message.

---

## Example Request

```sh
curl http://localhost:7078/api/v1/problems/ping
```

Response:
```json
{ "message": "Problem controller is up" }
```

---

## License

ISC
