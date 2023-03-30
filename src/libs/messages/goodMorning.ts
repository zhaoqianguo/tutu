import { sendMessage } from './../wxNotify/index';
/**
 * morning
 */
import { getConfig } from './../../utils/getConfig';
import { api } from '../../api';

const CONFIG = getConfig().message;

const tianMessages = async () => {
  const res = await api.getCaihongpi();

  console.log(res.result.content);
  sendMessage(res.result.content);
};

export async function goodMorning() {
  await tianMessages();
}
