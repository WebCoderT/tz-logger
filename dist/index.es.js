class h {
  // 出错配置
  #e = "31";
  #r = "41";
  #o = "😤";
  #t = "执行错误日志：";
  // 警告配置
  #s = "33";
  #i = "43";
  #n = "🤔";
  #g = "执行警告日志：";
  // 成功配置
  #l = "32";
  #c = "42";
  #h = "😃";
  #f = "执行成功日志：";
  #x = "34";
  #u = "44";
  #T = "🙂";
  #C = "执行信息日志：";
  // 柯里化定义logger
  loggerDefine(e) {
    return function(r) {
      return function(o) {
        return function(t) {
          return function(s) {
            console.log(o, `\x1B[${e}m${t}\x1B[0m`, `\x1B[${r}m${s || "未输入日志内容"}\x1B[0m`);
          };
        };
      };
    };
  }
  // 打印错误日志
  errorLogger = this.loggerDefine(this.#r)(this.#e)(this.#o)(this.#t);
  // 打印警告日志
  warnLogger = this.loggerDefine(this.#i)(this.#s)(this.#n)(this.#g);
  // 打印成功日志
  successLogger = this.loggerDefine(this.#c)(this.#l)(this.#h)(this.#f);
  // 打印信息日志
  infoLogger = this.loggerDefine(this.#u)(this.#x)(this.#T)(this.#C);
}
export {
  h as default
};
