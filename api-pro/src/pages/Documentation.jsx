import React from 'react';
import '../styles/Documentation.css';

const Documentation = () => (
  <main className="docs-container">
    <aside className="docs-sidebar">
      <nav>
        <div className="docs-category">GETTING STARTED</div>
        <ul className="docs-links">
          <li><a href="#authentication">Authentication</a></li>
        </ul>
        <div className="docs-category">CORE RESOURCES</div>
        <ul className="docs-links">
          <li><a href="#get-users" className="active">GET /users</a></li>
          <li><a href="#post-users">POST /users</a></li>
          <li><a href="#get-analytics">GET /analytics</a></li>
          <li><a href="#get-logs">GET /logs</a></li>
        </ul>
      </nav>
    </aside>
    <section className="docs-content">
      <h1 className="docs-endpoint-title" id="get-users">GET /v1/users</h1>
      <p className="docs-endpoint-desc">
        Retrieve a list of users from your organization. Supports pagination and filtering by query parameters.
      </p>
      <h2 className="docs-section-title">Example Request</h2>
      <pre className="docs-code-block"><code>{`fetch('https://api.example.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));
`}</code></pre>
      <h2 className="docs-section-title">Example Response</h2>
      <pre className="docs-code-block"><code>{`{
  "users": [
    {
      "id": "123",
      "name": "Jane Doe",
      "email": "jane@example.com"
    },
    {
      "id": "124",
      "name": "John Smith",
      "email": "john@example.com"
    }
  ],
  "page": 1,
  "total": 2
}`}</code></pre>
    </section>
  </main>
);

export default Documentation;
