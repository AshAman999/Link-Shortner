# URL Shortener Application

A simple URL shortener application built using Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

This URL shortener application allows you to create short and easy-to-share versions of long URLs. It uses Node.js and Express for the backend server and MongoDB as the database to store URL mappings.

## Features

- Shorten long URLs into easy-to-share short URLs.
- Record and display the total number of clicks for each shortened URL.
- Track the timestamp of each click.
- Store URL mappings in a MongoDB database.
- Validate URLs to ensure they are in the correct format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or on a remote server.
- Git (optional, for cloning the repository).

## Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone <repository_url>
   cd url-shortener-app
   ```

2. Install the application dependencies:

   ```bash
   npm install
   ```

3. Configure your MongoDB connection in the .env file:

   Create a .env file in the project root directory and add the following:

   ```makefile
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:3000  # Update with your base URL
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Access the application in your web browser at http://localhost:3000 (or your specified base URL).

3. Shorten a URL by entering it in the provided form and clicking "Shorten."

4. Click on the shortened URL to redirect to the original URL.

## API Endpoints

### Shorten a URL

- Endpoint: /api/shorten

- Method: POST

- Request Body: JSON object with origUrl

Example:

```bash
curl -X POST http://localhost:4000/api/shorten -H "Content-Type: application/json" -d "{\"originalUrl\": \"https://google.com/\"}"
```

### Redirect to Original URL

- Endpoint: /:urlId
- Method: GET

### Get the Click Counts and History

- Endpoint: /stats/:urlId
- Method: GET

### More features and endpoints to be added
