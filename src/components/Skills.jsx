import React from 'react';
import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

// create a bulma based responsive component showing my skills, programming languages each with a progress bar.
// the skills component will be a list of skills and each skill will have a progress bar.
// languages are: HTML, CSS, JavaScript, React, Node, Express, MongoDB, SQL, Django, Rails.
// the cards should alternate left and right.
// the progress bars should be aria-labeled with the skill name and import icons for each language.
// the icons should be aria-hidden="true"
// the progress bars should be aria-valuenow="75"
// the progress bars should be aria-valuemin="0"
// the progress bars should be aria-valuemax="100"
// the progress bars should be role="progressbar"
// the progress bars should be aria-valuetext="75%"

const Skills = () => (
  <div className="columns">
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>HTML</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>CSS</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>75%</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <progress
              className="progress is-primary"
              value="75"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    
  </div>
);

export default Skills;
