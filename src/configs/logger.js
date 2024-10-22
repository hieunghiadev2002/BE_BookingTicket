const { createLogger, format, transports, log } = require('winston');
const { combine, timestamp, printf, colorize } = format;
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});
const logger = createLogger({
  level: 'info', // Cấp độ log (info, error, warn, debug)
  format: combine(
    colorize(), // Tô màu cho log (chỉ cho console)
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Thêm timestamp
    customFormat // Định dạng log tùy chỉnh
  ),
  transports: [
    new transports.Console(), // Log ra console
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Chỉ log error vào file
    new transports.File({ filename: 'logs/combined.log' }) // Log tất cả vào file
  ],
});
module.exports = logger;