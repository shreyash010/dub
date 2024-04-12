import { openApiErrorResponses } from "@/lib/openapi/responses";
import { DomainSchema, updateDomainBodySchema } from "@/lib/zod/schemas";
import { ZodOpenApiOperationObject } from "zod-openapi";
import { workspaceParamsSchema } from "../request";

export const editDomain: ZodOpenApiOperationObject = {
  operationId: "editDomain",
  "x-speakeasy-name-override": "update",
  summary: "Edit a domain",
  description: "Edit a domain for the authenticated workspace.",
  requestParams: {
    query: workspaceParamsSchema,
  },
  requestBody: {
    content: {
      "application/json": {
        schema: updateDomainBodySchema,
      },
    },
  },
  responses: {
    "200": {
      description: "The domain was updated.",
      content: {
        "application/json": {
          schema: DomainSchema,
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Domains"],
  security: [{ token: [] }],
};
