test("status flow order check", () => {
  const flow = ["TODO", "IN_PROGRESS", "REVIEW", "DONE"];

  expect(flow.indexOf("IN_PROGRESS")).toBeGreaterThan(
    flow.indexOf("TODO")
  );
});