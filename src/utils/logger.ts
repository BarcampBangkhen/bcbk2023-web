import { pino } from 'pino'
import pretty from 'pino-pretty'

const logger = pino(
  pretty({
    colorize: true,
    ignore: 'pid,hostname',
    customPrettifiers: {
      time: () => `[${new Date().toISOString()}]`
    }
  })
)

export default logger
