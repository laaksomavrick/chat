DROP KEYSPACE IF EXISTS chat;
CREATE KEYSPACE chat WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};
