module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'gobarder',
  port: 5433,
  define: {
    timestemp: true,
    underscored: true,
    underscoredAll: true
  }
};
