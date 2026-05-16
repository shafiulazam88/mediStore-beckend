import { NextFunction, Request, Response } from "express";
import { ZodType, ZodError } from "zod";

const validateRequest =
  (schema: ZodType) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors: error.issues,
        });
      }

      next(error);
    }
  };

export default validateRequest;