import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("memoized selectors", () => {
  const stateA = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateB = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateC = { data: { a: { x: 1, y: [3, 4] }, b: { x: 3, y: [5, 6] } } };

  const fn1 = memoize((st: typeof stateA) =>
    Object.values(st.data).map((d) => d.x)
  );

  const fn2 = memoize((st: typeof stateA) =>
    Object.values(st.data).map((d) => d.y)
  );

  expect(fn1(stateA) === fn1(stateB)).toBeTruthy();
  expect(fn1(stateA) === fn1(stateC)).toBeTruthy();
  expect(fn1(stateB) !== fn1(stateC)).toBeTruthy();

  expect(fn2(stateA) === fn2(stateA)).toBeTruthy();
  expect(fn2(stateA) === fn2(stateB)).toBeTruthy();
  expect(fn2(stateA) !== fn2(stateC)).toBeTruthy();
  expect(fn2(stateB) !== fn2(stateC)).toBeTruthy();
});
