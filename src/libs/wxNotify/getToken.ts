/**
 * @description 根据企业ID、应用secret 获取token
 * @returns token
 */

import { get } from './../../utils/http';
import { BASE_URL } from '../../enum/wx';

// 获取token
export async function getToken({ corpid, corpsecret }: GetTokenParams): Promise<string> {
  try {
    const response = await get(`${BASE_URL}/cgi-bin/gettoken?corpid=${corpid}&corpsecret=${corpsecret}`);
    return response.access_token;
  } catch (error) {
    console.log('getToken error: ' + error);
    return '';
  }
}
