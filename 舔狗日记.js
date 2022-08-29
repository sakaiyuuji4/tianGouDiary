import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'

export class tianGouDiary extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '舔狗日记',
      /** 功能描述 */
      dsc: '舔狗日记api',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^舔狗日记$',
          /** 执行方法 */
          fnc: 'tianGou'
        }
      ]
    })
  }

  /**
   * #一言
   * @param e oicq传递的事件参数e
   */
  async tianGou (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    let url1 = 'http://api.botwl.cn/api/tgrj'
    try {
      let ret = await fetch(url1, {
        method: 'get', header: {
          'Content-Type': 'text/html; charset=UTF-8',
        }
      }).then((response) => {
        response.text().then((data) => {
          logger.info(`[接口结果] 舔狗日记：${data}`)
          this.reply(`一言：${data}`)
          return true;
        }).catch((err) => {
          return this.reply('一言接口请求失败')
        })
      })
    }
    catch
        (error)
    {
      return false
    }
  }
}
