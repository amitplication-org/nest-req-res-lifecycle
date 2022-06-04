import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ShipmentModuleBase } from "./base/shipment.module.base";
import { ShipmentService } from "./shipment.service";
import { ShipmentController } from "./shipment.controller";
import { ShipmentResolver } from "./shipment.resolver";
import { ValidateShipmentMiddleware } from "../middlewares/validate-shipment.middleware";

@Module({
  imports: [ShipmentModuleBase],
  controllers: [ShipmentController],
  providers: [ShipmentService, ShipmentResolver],
  exports: [ShipmentService],
})
export class ShipmentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateShipmentMiddleware)
      .exclude({ path: "/api/shipments/:id", method: RequestMethod.DELETE })
      .forRoutes(ShipmentController);
  }
}
