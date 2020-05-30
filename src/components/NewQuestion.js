import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuesiton } from "../store/actions/questions";

import './NewQuestion.css';

class NewQuestion extends Component {

    state = {
        optionOne:'',
        optionTwo:'',
        toHome: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {optionOne , optionTwo} = this.state;
        this.props.dispatch(handleAddQuesiton(optionOne, optionTwo));
        // add in store 
        this.setState({
            optionOne:'',
            optionTwo:'',
            toHome: true
        });
    }

    render() {

        const { toHome} = this.state;
        
        const { authedUser} = this.props;
        if(!authedUser){
            return <Redirect to="/login" />
        }
        
        if(toHome){
            return <Redirect to={"/home"} />
        }

        return (
            <div>
                <div className="long-newQuestionContainer">
                    <Paper className="long-newQuestionPaper">
                        <div className="newQuestionBoxHeader">
                            Put up a New Quesiton
                        </div>
                        <div className="newQuestionControls">
                    
                            <div className="newQuestionText">
                                I would you rather...
                            </div>
                            <form>
                                <TextField
                                    id="outlined-name"
                                    label="do this"
                                    className="newQuestionFormControl"
                                    value={this.state.optionOne}
                                    onChange={this.handleChange('optionOne')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                                <div className="newQuestionSeparator">
                                    OR
                                </div>
                                <TextField
                                    id="outlined-name"
                                    label="do that"
                                    className="newQuestionFormControl"
                                    value={this.state.optionTwo}
                                    onChange={this.handleChange('optionTwo')}
                                    margin="normal"
                                    variant="outlined"
                                    />
                            </form>
                        </div>
                        <Button variant="contained" color="inherit" className="newQuestionFormControl" onClick={this.handleSubmit}>Submit</Button>
                    </Paper>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);
