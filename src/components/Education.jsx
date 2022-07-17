import React from 'react';
import { Link } from 'react-router-dom';

// create a bulma based responsive component showing education for my portfolio.
// the education component will be a list of schools and degrees. and the cards should alternate left and right.
const Education = () => (
  <div className="columns">
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link to="/">
                  <strong>University of California, Irvine</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>Bachelor of Science</strong>
                <br />
                <strong>Computer Science</strong>
                <br />
                <strong>Minor in Mathematics</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <p>
              <strong>Graduation Date:</strong>
              <br />
              May 2020
            </p>
            <p>
              <strong>Grade:</strong>
              <br />
              A+
            </p>
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
                  <strong>University of California, Irvine</strong>
                </Link>
              </p>
              <p className="subtitle is-6">
                <strong>Bachelor of Science</strong>
                <br />
                <strong>Computer Science</strong>
                <br />
                <strong>Minor in Mathematics</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <p>
              <strong>Graduation Date:</strong>
              <br />
              May 2020
            </p>
            <p>
              <strong>Grade:</strong>
              <br />
              A+
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
