import mongoose from "mongoose"
const { Schema, model } = mongoose

interface Account {
  username: string
  password: string
  role: "guest" | "admin" | "god"
}

const schema = new Schema<Account>({
  username: {
    type: String,
    reuired: true,
  },
  password: {
    type: String,
    reuired: true,
  },
  role: {
    type: String,
    reuired: true,
    default: "guest",
  },
})

export default model<Account>("Account", schema)
