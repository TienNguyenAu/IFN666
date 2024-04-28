import React from "react"
import './profile.css'

export default function Profile(props) {
  return (
    <article className="repo-container">
      <div className="flex-container">
        <div className="repo-item">
          <img
            src={props.owner.avatar_url}
            alt={props.owner.login}
            className="avatar"
          />
          <ul className="list">
            <li>
              <h2 className="repo-name">{props.owner.login}</h2>
            </li>
            <div>
              <p className="repo-name">{props.name}</p>
              {props.private ? (
                <p className="repo-status repo-status-private">Private</p>
              ) : (
                <p className="repo-status repo-status-public">Public</p>
              )}
            </div>
          </ul>
        </div>

        <div className="flex-container justify-between text-right">
          <button
            className="repo-button"
            onClick={() => window.open(props.html_url, "_blank")}
          >
            View Repo
          </button>
        </div>

        <div className="flex-container justify-between flex-wrap mt-5">
          <ul className="language-topics">
            <li className="repo-language">{props.language}</li>

            {props.topics &&
              props.topics.map((topic, index) => (
                <React.Fragment key={index}>
                  <li className="repo-topic">{topic}</li>
                </React.Fragment>
              ))}
          </ul>

          <p className="repo-issues">{props.open_issues} issues</p>
        </div>
      </div>
    </article>
  )
}
