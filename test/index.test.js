import TzLogger from '../src/index.js';
import { describe, it, expect } from 'vitest';
const logger = new TzLogger();

describe('logger', () =>
{

    it('错误日志打印测试', () =>
    {
        expect(logger.errorLogger("这是错误的日志示例！"));
    });

    it('成功日志打印测试', () =>
    {
        expect(logger.successLogger("这是成功的日志示例！"));
    });

    it('信息日志打印测试', () =>
    {
        expect(logger.infoLogger("这是提示信息的日志示例！"));
    });

    it('警告日志打印测试', () =>
    {
        expect(logger.warnLogger("这是警告的日志示例！"));
    });
});