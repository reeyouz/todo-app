// Setup Environments
process.env = {
  ...process.env,
  NODE_ENV: "testing",
  MONGO_DB_URI:
    process.env.MONGO_DB_URI ?? "mongodb://admin:secret123@localhost:27017",
};
