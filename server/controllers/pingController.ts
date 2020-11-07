import { RequestHandler } from 'express'

export const ping: RequestHandler = (req, res) => {
  res.send('pong')
}

export const pingJson: RequestHandler = (req, res) => {
  res.json({ content: 'pong' })
}
