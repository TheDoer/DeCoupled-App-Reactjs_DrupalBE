import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <div className="row top-buffer bottom-buffer">
        <div className="col">
          <div className="card">
            <div className="card-block text-center">
              <small>Headless Inprogress </small>
              <div className="row">
                <div className="col-md">
                  <a href="https://www.drupal.org" target="_blank">

                  </a>
                </div>
                <div className="col-md">
                  <a href="https://facebook.github.io/react/" target="_blank">

                  </a>
                </div>
                <div className="col-md">
                  <a href="http://getbootstrap.com" target="_blank">

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer
