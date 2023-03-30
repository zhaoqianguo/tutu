/**
 * morning
 */
import { getConfig } from './../../utils/getConfig';
import { api } from '../../api';

const CONFIG = getConfig().message;

const tianMessages = async () => {
  const res = await api.getCaihongpi();

  console.log(res);
};

export async function goodMorning() {
  await tianMessages();
}
