import React, { Component } from 'react';
import './App.css';
import './homepage.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0 bg">

        <nav className="w-100 navbar navbar-light navbar-expand-lg bg-light sticky-top">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="">
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" className="img-fluid logo align-top ml-4" alt="" />
          </a>
          <div class="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="nav">
              <li className="nav-item">
                <h5><a className="nav-link active text" href="#">HOME</a></h5>
              </li>
              <li className="nav-item">
                <h5><a className="nav-link text" href="#">ABOUT US</a></h5>
              </li>
              <li className="nav-item">
                <h5><a className="nav-link text" href="#">LOGIN</a></h5>
              </li>
              <li className="nav-item">
                <h5><a className="nav-link text" href="#">SIGN UP</a></h5>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid" >
          <div className="row align-items-center" style={{ height: "65vh" }}>
            <div className="col-md-8 offset-md-2">
              <h1 className="display-2 text-light text-center font-weight-bold text1">Rate My Professor</h1>
              <h3 className="display-5 text-light text-center text2">Lorem Ipsum. Insert your text here.</h3>
              <form className="form-inline justify-content-center">
                <input className="form-control w-75 mr-sm-2 p-8" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>

        <div className="fixed-bottom">
          <h5 className="display-5 margin text-light text-center">Lorem Ipsum. Rights, Terms and conditions here.</h5>
        </div>
      </div >


    );
  }
}

export default App;
