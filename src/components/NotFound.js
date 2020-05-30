import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './NotFound.css'

class NotFound extends Component {
  render() {
    return (
        <div>
        <div className="notFoundContainer">
            <Paper>
                <div className="notFoundHeader">
                    <div className="notFoundTitle">
                           Oops! Page not found
                    </div>
                    <div className="notFoundMessage">
                    Oh dear, this link isn’t working.
                    </div>
                </div>
                <Button variant="contained" color="inherit" className="notFoundformControl" component={Link} to={"/home"}>Back to Home Page</Button>
            </Paper>
        </div>
    </div>
    );
  }
}

export default NotFound;
