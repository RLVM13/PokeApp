import React from "react";
import { shallow } from "enzyme";
import Alta from "./Alta";

describe("Alta", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Alta />);
    expect(wrapper).toMatchSnapshot();
  });
});
