import express from "express";
import cors from "cors";
import artCollection from "./api/artCollection.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/art-collection", artCollection);
app.use("*", (req, res) => res.status(404).json({ error: "not found bud" }));

export default app;
