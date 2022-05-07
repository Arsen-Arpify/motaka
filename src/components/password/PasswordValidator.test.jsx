import React from "react";
import PasswordValidator from "./PasswordValidator";
import { shallow } from "enzyme";

it("renders PasswordValidator component", () => {
    const wrapper = shallow(<PasswordValidator />);
    expect(wrapper.exists()).toBe(true);
});

it("should change state when clicking button", () => {
    const wrapper = shallow(<PasswordValidator />);
    const button = wrapper.find("button");

    button.simulate("click");
    expect(wrapper.state("pwHidden")).toBe(false);
    expect(wrapper.find("input").prop("type")).toBe("text");
});
