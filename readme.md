# 介绍
```
这个日志工具 ( tz-logger ) 可在 Node.js 控制台中打印彩色日志和表情包。
```

# 用法
```javascript
import TzLogger from "./index.js";

const logger = new TzLogger();

logger.errorLogger("这是错误的日志示例！");
logger.successLogger("这是成功的日志示例！");
logger.infoLogger("这是提示信息的日志示例！");
logger.warnLogger("这是警告的日志示例！");
```

