import elasticsearch from "@elastic/elasticsearch";

const Mock = require("@elastic/elasticsearch-mock");

export default class ElasticConnector {
  constructor() {
    if (!ElasticConnector.instance) {
      this.mock = new Mock();
      this._client = new elasticsearch.Client({
        node: process.env.ELASTIC_HOST,
        Connection: this.mock.getConnection(),
      });
      ElasticConnector.instance = this;
    }
    return ElasticConnector.instance;
  }

  static getInstance() {
    return new ElasticConnector();
  }

  getClient() {
    return this._client
  }

  getMock() {
    return this.mock;
  }
}
