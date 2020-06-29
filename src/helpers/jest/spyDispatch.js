import * as ReduxUtils from "react-redux";

export const spyDispatch = jest.fn();

export function initSpyDispatch() {
  jest.spyOn(ReduxUtils, "useDispatch").mockImplementation(() => spyDispatch);
}
