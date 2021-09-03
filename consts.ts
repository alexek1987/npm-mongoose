const uri = process.env.MONGO_URI || "mongodb://localhost:27017/testDB"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

export { uri, options }
