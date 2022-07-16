import elasticsearch from "@elastic/elasticsearch";

export default class ElasticConnector {
  constructor() {
    if (!ElasticConnector.instance) {
      const config = {
        node: process.env.ELASTIC_HOST,
      };
      this._client = new elasticsearch.Client(config);
      ElasticConnector.instance = this;
    }
    return ElasticConnector.instance;
  }

  static getInstance() {
    return new ElasticConnector()
  }

  getClient() {
    return this._client
  }
}
