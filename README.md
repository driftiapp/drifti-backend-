# Drifti Backend

Backend service for Drifti - Session Management and Security System.

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure secret for JWT token generation
   - `FRONTEND_URL`: The URL of your frontend application
   - `NODE_ENV`: Set to "production"
   - `PORT`: Set to 10000

## API Endpoints

### Health Check
- GET `/api/health`
- Response: `{ status: "ok" }`

### Authentication
- POST `/api/auth/register`
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword",
    "firstName": "John",
    "lastName": "Doe"
  }
  ```

- POST `/api/auth/login`
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```

- GET `/api/auth/profile`
  - Requires Authorization header with JWT token
  - Header: `Authorization: Bearer <token>`

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with required environment variables

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Start production server:
   ```bash
   npm start
   ``` 