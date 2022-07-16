import supertest from "supertest";
import { errors } from "@elastic/elasticsearch";
import elasticConnector from "../../src/elastic/elasticConnector";

const app = require("../../src/main");

jest.mock("./../../src/elastic/elasticConnector");

const contextPath = process.env.CONTEXT_PATH;

describe("IndexCounter Integration", () => {
  beforeAll(async () => {
    //execute auth...
  });

  beforeEach(async () => {
    elasticConnector.getInstance().getMock().clearAll();
  });

  test("GET /index/:person/counter success", async () => {
    elasticConnector.getInstance()
      .getMock()
      .add(
        {
          method: "GET",
          path: "/person/_count",
        },
        () => {
          return { count: 281 };
        }
      );

    const response = await supertest(app)
      .get(`${contextPath}/api/index/person/counter`)

    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.text).result.count).toEqual(281);
  });
  
});
