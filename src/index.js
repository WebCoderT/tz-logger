// 生气 😤
export class TzLogger
{
    // 出错配置
    #errorTextColor = "31";
    #errorBgColor = "41";
    #errorIcon = "😤";
    #errorPreText = "执行错误日志：";

    // 警告配置
    #warnTextColor = "33";
    #warnBgColor = "43";
    #warnIcon = "🤔";
    #warnPreText = "执行警告日志：";

    // 成功配置
    #successTextColor = "32";
    #successBgColor = "42";
    #successIcon = "😃";
    #successPreText = "执行成功日志：";

    #infoTextColor = "34";
    #infoBgColor = "44";
    #infoIcon = "🙂";
    #infoPreText = "执行信息日志：";

    // 柯里化定义logger
    loggerDefine(bgColor)
    {
        return function loggerDefineTextColor(textColor)
        {
            return function loggerDefineIcon(icon)
            {
                return function loggerDefinePreText(preText)
                {
                    return function log(text)
                    {
                        console.log(icon, `\x1b[${bgColor}m${preText}\x1b[0m`, `\x1b[${textColor}m${text || "未输入日志内容"}\x1b[0m`);
                    };
                };
            };
        };
    }

    // 打印错误日志
    errorLogger = this.loggerDefine(this.#errorBgColor)(this.#errorTextColor)(this.#errorIcon)(this.#errorPreText);

    // 打印警告日志
    warnLogger = this.loggerDefine(this.#warnBgColor)(this.#warnTextColor)(this.#warnIcon)(this.#warnPreText);

    // 打印成功日志
    successLogger = this.loggerDefine(this.#successBgColor)(this.#successTextColor)(this.#successIcon)(this.#successPreText);

    // 打印信息日志
    infoLogger = this.loggerDefine(this.#infoBgColor)(this.#infoTextColor)(this.#infoIcon)(this.#infoPreText);
}
