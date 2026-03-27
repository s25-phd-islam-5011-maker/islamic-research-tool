# API Documentation

### Overview
This document provides an overview of the API and its functionalities aimed at developers integrating with the Islamic Research Tool.

### Endpoints

#### 1. GET /api/research
- **Description**: Retrieve a list of research articles.
- **Parameters**:
  - `category` (string, optional): Filter articles by category.
  - `author` (string, optional): Filter articles by author.

#### 2. POST /api/research
- **Description**: Add a new research article.
- **Body Parameters**:
  - `title` (string, required): Title of the research article.
  - `content` (string, required): Full content of the article.
  - `author` (string, optional): Author of the research article.

#### 3. GET /api/research/{id}
- **Description**: Retrieve a specific research article by ID.
- **Parameters**:
  - `id` (string, required): The ID of the research article.

#### 4. PUT /api/research/{id}
- **Description**: Update a specific research article by ID.
- **Body Parameters**:
  - `content` (string, required): Updated content of the article.

#### 5. DELETE /api/research/{id}
- **Description**: Delete a specific research article by ID.
- **Parameters**:
  - `id` (string, required): The ID of the research article to delete.

### Authentication
To access the API, requests must include an API key in the header with the key `Authorization`.

### Rate Limiting
The API is rate-limited to 100 requests per hour per user.

### Examples

#### Getting Research Articles
```bash
curl -X GET 'https://api.example.com/api/research'
```

#### Adding a Research Article
```bash
curl -X POST 'https://api.example.com/api/research' \
    -H 'Content-Type: application/json' \
    -d '{"title": "Research Title", "content": "This is the content of the research.", "author": "Author Name"}'
```

### Conclusion
Feel free to reach out with any questions or feedback regarding the API documentation.