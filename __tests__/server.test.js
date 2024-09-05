describe("test get all data //the server must bo open", () => {
  test("check if request done", async () => {
    try {
      const response = await fetch("http://localhost:3000/all");
      expect(response.ok).toBe(true);
      const data = await response.json();
      expect(data).toBeDefined();
    } catch (error) {
      expect(error).toBeNull();
    }
  });
});
