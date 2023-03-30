import { MessageUrl } from '../enum/messageUrl';
import { getTian } from '../utils/http';

class Api {
  constructor() {}

  // 每日简报
  async getDailyBriefing() {
    const res = await getTian<DailyBriefing[]>(MessageUrl.dailyBriefing);
    return res;
  }

  // 彩虹屁
  async getCaihongpi(): Promise<Tian<Caihongpi>> {
    const res = await getTian<Tian<Caihongpi>>(MessageUrl.caihongpi);
    return res;
  }
}

export const api = new Api();
