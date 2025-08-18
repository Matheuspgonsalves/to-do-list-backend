import express from "express";
import 'dotenv/config';

const app = express();

app.use(express.json());
// app.use(routes);
app.get("/", (req: any, res: any) => {
  res.send({message: "Hello World"});
});

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Servidor rodando em https://localhost:${port}`)
});