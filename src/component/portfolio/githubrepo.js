import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/user/repos?access_token=${process.env.REACT_APP_GITHUB_API_TOKEN}`);
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubRepos;
