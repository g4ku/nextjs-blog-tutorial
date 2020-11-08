import path from 'path'
import { RequestHandler } from 'express'
import grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'

const GRPC_ADDR = process.env.GRPC_ADDR || 'localhost:3002'
const PROTO_PATH = path.join(process.cwd(), 'proto/echo.proto')

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const echo_proto = grpc.loadPackageDefinition(packageDefinition).echo
const client = new echo_proto['EchoService'](GRPC_ADDR, grpc.credentials.createInsecure())

export const echo: RequestHandler = (req, res) => {
  client.echo({}, async (err, response) => {
    if (err) {
      return res.status(500).send(`[ERROR] ${err}`)
    }
    res.send(response.message)
  })
}
