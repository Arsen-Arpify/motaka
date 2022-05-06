import React, { Component } from "react";
import axios from "axios";
import PasswordConditions from "./PasswordConditions";

export default class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pwHidden: true,
            password: "",
            userEmail: "",
            charLength: false,
            lowercase: false,
            uppercase: false,
            number: false,
            emailMatch: false,
            passwordSucess: false
        };
    }

    componentDidMount() {
        const url = "https://www.mocky.io/v2/5e5ecb873100005700afd86d";
        axios.get(url).then(res => {
            this.setState({
                userEmail: res.data.user.email
            });
        });
    }

    handleChange = event => {
        this.setState({
            password: event.target.value
        });
        this.passwordValidate(event);
    };

    toggleShow = () => {
        this.setState({
            pwHidden: !this.state.pwHidden
        });
    };

    passwordValidate = event => {
        const value = event.target.value;
        const regexNum = /\d/;
        const regexLowercase = /[a-z]/;
        const regexUppercase = /[A-Z]/;
        const regexCharLength = /^.{8,72}$/;
        const userEmail = this.state.userEmail;
        const userName = userEmail.split("@")[0];

        regexNum.test(value)
            ? this.setState({ number: true })
            : this.setState({ number: false });
        regexLowercase.test(value)
            ? this.setState({ lowercase: true })
            : this.setState({ lowercase: false });
        regexUppercase.test(value)
            ? this.setState({ uppercase: true })
            : this.setState({ uppercase: false });
        regexCharLength.test(value)
            ? this.setState({ charLength: true })
            : this.setState({ charLength: false });
        !value.toLowerCase().includes(userName.toLowerCase())
            ? this.setState({ emailMatch: true })
            : this.setState({ emailMatch: false });
    };

    render() {
        return (
            <div className="form-wrapper flex-center">
                <input
                    type={this.state.pwHidden ? "password" : "text"}
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter a password"
                />
                <button
                    className="toggle-show-btn"
                    onClick={this.toggleShow.bind(this)}
                >
                    {this.state.pwHidden ? "Show" : "Hide"}
                </button>
                <PasswordConditions
                    charLength={this.state.charLength}
                    lowercase={this.state.lowercase}
                    uppercase={this.state.uppercase}
                    number={this.state.number}
                    emailMatch={this.state.emailMatch}
                />
            </div>
        );
    }
}
