import express, { Request, Response } from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import { routes } from "./routes";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares";

createConnection().then(() => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );

  app.get("/", (req: Request, res: Response) => {
    res.send("hello");
  });

  routes(app);

  app.use(errorHandler);
  app.use(notFound);

  app.listen(5000, () =>
    console.log(`Server running on port 5000, DB connected!`)
  );
});
