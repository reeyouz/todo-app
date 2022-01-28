import { parseQuery } from "../parseQuery";

describe("parseQuery", () => {
  it("CASE 1:", () => {
    const result = parseQuery<any>('{"$and":[{"title":"Test parseQuery"}]}');
    expect(result.$and).toHaveLength(1);
    expect(result.$and[0].title).toBe("Test parseQuery");
  });

  it("CASE 2:", () => {
    const result = parseQuery<any>('{"$and":"title":"Test parseQuery"}]}');
    expect(result).toStrictEqual({});
  });
});
