import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              {/* <a className="nav-a" href="/">Features</a>
              <a className="nav-a" href="/about">{props.aboutText}</a> */}
            </div>
          </div>
           {/* simple dark mode */}
           <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
           <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
           <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
           <div className="bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
          
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>

          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.GreenToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Green dark':'light'} Mode</label>
          </div> */}


          {/* <button type="button" className="btn btn-success mx-2" onClick={props.toggleMode('green')}>Green Dark Mode</button>
          <button type="button" className="btn btn-danger mx-2"  onClick={props.toggleMode('red')}>Red Dark Mode</button>
          <button type="button" className="btn btn-warning mx-2"  onClick={props.toggleMode('yellow')}>Yellow Dark Mode</button> */}

        </div>

      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "This is defualt title",
  aboutText: "This is default text"
}

