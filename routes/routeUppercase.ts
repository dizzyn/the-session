import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  const text = req.query.text;

  if (!text || typeof text !== "string") {
    res.status(400);
    res.send("Wrong parameters");
    return;
  }

  res.send(text.toUpperCase());
}
