import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ValidateShipmentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { shipmentnumber } = req.headers;

    if (!shipmentnumber) {
      throw new BadRequestException("No ShipmentNumber provided");
    }

    next();
  }
}
