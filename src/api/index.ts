import { getTian } from '../utils/http';

enum MessageUrl {
  // 每日简报
  dailyBriefing = 'http://api.tianapi.com/bulletin/index',
  // 彩虹屁
  caihongpi = 'https://apis.tianapi.com/caihongpi/index',
}

class Api {
  constructor() {}

  // 每日简报
  async getDailyBriefing() {
    const res = await getTian<DailyBriefing[]>(MessageUrl.dailyBriefing);
    return res;
  }

  // 彩虹屁
  async getCaihongpi(): Promise<Caihongpi[]> {
    const res = await getTian<Caihongpi[]>(MessageUrl.caihongpi);
    return res;
  }
}

export const api = new Api();
