// Section 6 - データの「型」を決める (Interface)
interface CreateUserRequest {
  name: string;
  age: number;
}

app.post("/users", async (c) => {
  // <CreateUserRequest> と書くことで、body に型がつきます
  const body = await c.req.json<CreateUserRequest>();
  return c.json({ status: "ok", received: body.name });
});
