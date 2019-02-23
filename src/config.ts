import convict from 'convict';

const config = convict({
  env: {
    format: ['production', 'development', 'test'],
    default: 'production',
    env: 'NODE_ENV',
  },
  host: {
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'HOST',
  },
  port: {
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
  cassandra: {
    host: {
      default: '127.0.0.1',
      env: 'CASSANDRA_HOST',
    },
    port: {
      default: 9042,
      env: 'CASSANDRA_PORT',
    },
    dataCenter: {
      default: 'datacenter1',
      env: 'CASSANDRA_DATA_CENTER',
    },
    keyspace: {
      default: 'chat',
      env: 'CASSANDRA_KEYSPACE',
    },
  },
});

// if (config.get('env') === 'test') {
//   config.load({
//     database: {
//       schema: 'chat_test',
//     },
//   });
// }

export default config;
