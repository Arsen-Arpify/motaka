import React, { Component } from "react";

export default class PasswordConditions extends Component {
    render() {
        return (
            <div className="conditions-wrapper flex-center">
                <ul>
                    <li className={this.props.charLength ? "valid" : "invalid"}>
                        min 8 char.;
                    </li>
                    <li className={this.props.lowercase ? "valid" : "invalid"}>
                        a-z;
                    </li>
                    <li className={this.props.uppercase ? "valid" : "invalid"}>
                        A-Z;
                    </li>
                    <li className={this.props.number ? "valid" : "invalid"}>
                        0-9;
                    </li>
                    <li className={this.props.symbol ? "valid" : "invalid"}>
                        !@#$%^&*();
                    </li>
                    {/*<li className={this.props.emailMatch ? "valid" : "invalid"}>*/}
                    {/*    Should Not Match Your Email*/}
                    {/*</li>*/}
                </ul>
            </div>
        );
    }
}
// <p>Must be</p>
// <del>A-Z;</del>
// <del>a-z;</del>
// <del>0-9;</del>
// <del>!@#$%^&*+_=();</del>