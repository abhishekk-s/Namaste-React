import { sum } from "../sum";

test("checking sum of two numbers", () => {
  const res = sum(3, 4);

  //Assertion
  expect(res).toBe(7);
});
