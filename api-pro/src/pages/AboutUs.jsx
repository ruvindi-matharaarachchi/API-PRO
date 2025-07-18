import React, { useEffect, useState } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch team');
        return res.json();
      })
      .then((data) => {
        setTeam(data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="aboutus-container">
      {/* Mission Section */}
      <section className="mission-section">
        <h1 className="mission-title">Our Mission</h1>
        <h2 className="mission-headline">We Empower Developers to Build The Future</h2>
        <p className="mission-text">
          At API PRO, our mission is to provide developers with powerful, secure, and intuitive tools to manage and scale their APIs. We believe in enabling innovation by simplifying API development, analytics, and security, so you can focus on building what matters most.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2 className="team-title">Meet the Team</h2>
        {loading && <p className="team-loading">Loading team...</p>}
        {error && <p className="team-error">{error}</p>}
        <div className="team-grid">
          {team.map((user) => (
            <article className="team-card" key={user.id}>
              <div className="team-avatar" aria-label={user.name} />
              <h3 className="team-name">{user.name}</h3>
              <p className="team-email">{user.email}</p>
              <a className="team-website" href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
