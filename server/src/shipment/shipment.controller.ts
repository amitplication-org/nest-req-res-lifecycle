import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as errors from "../errors";
import { ShipmentService } from "./shipment.service";
import { ShipmentControllerBase } from "./base/shipment.controller.base";
import { Request } from "express";
import { Shipment } from "./base/Shipment";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { ShipmentFindManyArgs } from "./base/ShipmentFindManyArgs";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { ShipmentWhereUniqueInput } from "./base/ShipmentWhereUniqueInput";

@swagger.ApiTags("shipments")
@common.Controller("shipments")
export class ShipmentController extends ShipmentControllerBase {
  constructor(
    protected readonly service: ShipmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Shipment] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiHeader({ name: "shipmentnumber" })
  @ApiNestedQuery(ShipmentFindManyArgs)
  findMany(@common.Req() request: Request): Promise<Shipment[]> {
    return super.findMany(request);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  @swagger.ApiHeader({ name: "shipmentnumber" })
  findOne(params: ShipmentWhereUniqueInput): Promise<Shipment | null> {
    return super.findOne(params);
  }
}
