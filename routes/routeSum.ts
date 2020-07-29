import sum from "../business/sum";
import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  const num1 = parseFloat(req.query.num1 as any);
  const num2 = parseFloat(req.query.num2 as any);

  if (!num1 || !num2) {
    res.status(400);
    res.send("Wrong parameters");
    return;
  }
  res.send("Výsledok = " + sum(num1, num2));
}
