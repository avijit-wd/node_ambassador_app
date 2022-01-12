import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

export const Register = asyncHandler((req: Request, res: Response) => {
  const body = req.body;

  if (body.password !== body.password_confirm) {
    res.status(400);
    throw new Error("Password mismatch");
  }

  res.send(req.body);
});
