import routeSum from "./routeSum";

function test(query: any) {
  let str;
  let code;
  routeSum(
    { query } as any,
    {
      status: function (c: number) {
        code = c;
      },
      send: function (s: string) {
        str = s;
      },
    } as any
  );
  return { str, code };
}

it("Valid inputs", function () {
  expect(test({ num1: "1", num2: "1" }).str).toBe("Výsledok = 2");
});

it("Missing params", function () {
  expect(test({})).toEqual({ code: 400, str: "Wrong parameters" });
  expect(test({ num1: "1" })).toEqual({ code: 400, str: "Wrong parameters" });
  expect(test({ num2: "1" })).toEqual({ code: 400, str: "Wrong parameters" });
});

it("Text in params", function () {
  expect(test({ num1: "a", num2: "1" })).toEqual({
    code: 400,
    str: "Wrong parameters",
  });
});

it("Array in params", function () {
  expect(test({ num1: ["a", "b"], num2: "1" })).toEqual({
    code: 400,
    str: "Wrong parameters",
  });
});

it("Floats", function () {
  expect(test({ num1: "1", num2: "1.1" }).str).toBe("Výsledok = 2.1");
});
