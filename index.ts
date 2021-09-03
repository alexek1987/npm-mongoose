import { config } from "dotenv"
import Mongoose from "mongoose"
import * as Models from "./models"
import * as Consts from "./consts"

config()

interface ConnectOtions {
  useNewUrlParser?: boolean
  useUnifiedTopology?: boolean
  useCreateIndex?: boolean
  [keys: string]: unknown
}

class MongoDB {
  mongoose: typeof Mongoose

  constructor() {
    this.mongoose = Mongoose
  }

  async connect(uri?: string, options?: ConnectOtions): Promise<void> {
    // connect to db
    await this.mongoose
      // @ts-ignore
      .connect(uri ?? Consts.uri, options ?? Consts.options)
      .catch((error) => console.log("❌ MongoDB connection error", error)) // listen for errors on initial connection

    const db = this.mongoose.connection
    db.on("connected", () => console.log("✅ MongoDB connected")) // connected
    db.on("disconnected", () => console.log("❌ MongoDB disconnected")) // disconnected
    db.on("error", (error) => console.log("❌ MongoDB connection error", error)) // listen for errors during the session
  }
}

export { MongoDB, Models }
