import { TzLogger } from '../src/index.js';
const logger = new TzLogger();


logger.errorLogger("这是错误的日志示例！");
logger.successLogger("这是成功的日志示例！");
logger.infoLogger("这是提示信息的日志示例！");
logger.warnLogger("这是警告的日志示例！");
logger.requestLogger("这是发送请求的日志示例！");