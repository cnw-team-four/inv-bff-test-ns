import {ObjectFactory} from 'typescript-ioc';

const baseUrl: string = process.env.SERVICE_URL || 'http://inv-svc-test-ns:9080';

export const stockItemConfigFactory: ObjectFactory = () => ({
  baseUrl,
});
