import React, { useState, useEffect } from 'react';
import './GitHubRequests.css';


const GitHubRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
    const interval = setInterval(fetchRequests, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/pull-requests');
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  return (
    <div>
      <h2>GitHub Pull Requests</h2>
      <button onClick={fetchRequests}>Refresh</button>
      <div className="requests-list">
        {requests.map((pr) => (
          <div key={pr.id} className="request-item">
            <h3>
              <a href={pr.url} target="_blank" rel="noopener noreferrer">
                {pr.title}
              </a>
            </h3>
            <div className="pr-details">
              <p><strong>Author:</strong> {pr.author}</p>
              <p><strong>Repository:</strong> {pr.repository}</p>
              <p><strong>Branch:</strong> {pr.branch}</p>
              <p><strong>Status:</strong> <span className={`status-${pr.status}`}>{pr.status}</span></p>
              <p><strong>Created:</strong> {new Date(pr.created_at).toLocaleString()}</p>
              <p><strong>Last Updated:</strong> {new Date(pr.updated_at).toLocaleString()}</p>
              {pr.description && (
                <div className="pr-description">
                  <strong>Description:</strong>
                  <p>{pr.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRequests;
