import express from 'express';
import request from "supertest";


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.json({message: "Hello from the server!"});
})

test("GET / should return message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Hello from the server!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});