import dotenv from 'dotenv';
import { post } from './../../utils/http';
import { getToken } from './getToken';

dotenv.config();
const { WX_COMPANY_ID, WX_APP_ID, WX_APP_SECRET } = process.env;

const BASE_URL = 'https://qyapi.weixin.qq.com';

export const sendMessage = async (config: any) => {
  const accessToken = await getToken({
    corpid: WX_COMPANY_ID as string,
    corpsecret: WX_APP_SECRET as string,
  });
  try {
    const defaultConfig = {
      msgtype: 'text',
      agentid: WX_APP_ID,
      ...config,
    };
    const option = { ...defaultConfig, ...config };

    const res = await post(`${BASE_URL}/cgi-bin/message/send?access_token=${accessToken}`, option);
    console.log('消息发送成功：', res);
  } catch (error) {
    console.log('消息发送失败', error);
  }
};
