import { MongoClient } from "mongodb";
import { ConfigService } from ".";
import { BaseService } from "../base";

export class DatabaseService extends BaseService {
  private client!: MongoClient;
  public isConnected = false;

  constructor(public configService: ConfigService) {
    super();
    this.client = new MongoClient(this.configService.MONGO_URL);
  }

  public async connect() {
    if (!this.isConnected) {
      await this.client.connect();
      this.isConnected = true;
    }
  }

  public async disconnect() {
    if (this.isConnected) {
      await this.client.close();
      this.isConnected = false;
    }
  }

  public async getCollection<T>(databaseName: string, collectionName: string) {
    if (!this.isConnected) {
      await this.connect();
    }
    return this.client.db(databaseName).collection<T>(collectionName);
  }

  public getClient(): MongoClient | null {
    return this.configService.isTest && this.isConnected && this.client
      ? this.client
      : null;
  }
}
