import {sum} from "../components/sum";

test("Sum function will give sum of the to numbers", () => {
  let result = sum(3, 5);

  expect(result).toBe(8);
});
