import type { Request, Response } from "express";
export class AuthController {
  register = (req: Request, res: Response) => {
    console.log(req);
    res.json({ ok: true, message: "register successfully" });
  };
}
