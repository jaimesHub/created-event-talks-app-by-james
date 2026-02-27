# Tech Talks 2026

A modern, responsive conference schedule viewer for the **Tech Talks 2026** event. This application displays a detailed agenda of technical sessions, including topics like AI, Web Components, Cloud Security, and more.

## Features

- **Dynamic Schedule**: Fetches the latest talk schedule from a built-in API.
- **Responsive Design**: Optimized for viewing on both desktop and mobile devices.
- **Categorized Content**: Sessions are tagged by technology (AI, Rust, Web3, etc.) for easy navigation.
- **Break Times**: Includes scheduled breaks to help attendees plan their day.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: RESTful JSON endpoint (`/api/talks`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download the repository.
2. Navigate to the project directory:
   ```bash
   cd tech-talks-2026
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the server using Node:

```bash
node server.js
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## API Reference

### Get All Talks

Returns the full list of scheduled sessions.

- **URL**: `/api/talks`
- **Method**: `GET`
- **Response Format**: `JSON`

## Project Structure

```text
├── public/          # Frontend assets
│   ├── index.html   # Main application page
│   ├── script.js    # Frontend logic and API fetching
│   └── style.css    # Application styling
├── server.js        # Express server and API definitions
├── package.json     # Project dependencies and metadata
└── README.md        # Project documentation
```

## License

This project is licensed under the ISC License.
