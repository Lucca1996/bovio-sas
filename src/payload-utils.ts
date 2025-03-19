import { getPayload } from 'payload';
import config from '@/payload.config';

export const getPayloadClient = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  return payload;
};
