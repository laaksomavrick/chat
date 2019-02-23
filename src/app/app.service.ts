import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'cassandra-driver';
import { CASSANDRA_CLIENT } from '../cassandra/cassandra.module';

@Injectable()
export class AppService {
  constructor(@Inject(CASSANDRA_CLIENT) private cassandraClient: Client) {}

  async root(): Promise<any> {
    return this.cassandraClient.execute('select now() from system.local');
  }
}
