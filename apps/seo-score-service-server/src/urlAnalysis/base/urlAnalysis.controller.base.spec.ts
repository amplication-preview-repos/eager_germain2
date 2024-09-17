import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UrlAnalysisController } from "../urlAnalysis.controller";
import { UrlAnalysisService } from "../urlAnalysis.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  booleanScore: 42.42,
  comparativeScore: 42.42,
  contentSize: 42,
  createdAt: new Date(),
  googlePosition: 42,
  id: "exampleId",
  isTarget: "true",
  seoScore: 42.42,
  updatedAt: new Date(),
  url: "exampleUrl",
};
const CREATE_RESULT = {
  booleanScore: 42.42,
  comparativeScore: 42.42,
  contentSize: 42,
  createdAt: new Date(),
  googlePosition: 42,
  id: "exampleId",
  isTarget: "true",
  seoScore: 42.42,
  updatedAt: new Date(),
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    booleanScore: 42.42,
    comparativeScore: 42.42,
    contentSize: 42,
    createdAt: new Date(),
    googlePosition: 42,
    id: "exampleId",
    isTarget: "true",
    seoScore: 42.42,
    updatedAt: new Date(),
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  booleanScore: 42.42,
  comparativeScore: 42.42,
  contentSize: 42,
  createdAt: new Date(),
  googlePosition: 42,
  id: "exampleId",
  isTarget: "true",
  seoScore: 42.42,
  updatedAt: new Date(),
  url: "exampleUrl",
};

const service = {
  createUrlAnalysis() {
    return CREATE_RESULT;
  },
  urlAnalyses: () => FIND_MANY_RESULT,
  urlAnalysis: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UrlAnalysis", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UrlAnalysisService,
          useValue: service,
        },
      ],
      controllers: [UrlAnalysisController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /urlAnalyses", async () => {
    await request(app.getHttpServer())
      .post("/urlAnalyses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /urlAnalyses", async () => {
    await request(app.getHttpServer())
      .get("/urlAnalyses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /urlAnalyses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/urlAnalyses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /urlAnalyses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/urlAnalyses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /urlAnalyses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/urlAnalyses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/urlAnalyses")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
