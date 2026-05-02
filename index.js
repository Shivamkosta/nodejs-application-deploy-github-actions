import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.json({message: "Hello from the server!"});
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});