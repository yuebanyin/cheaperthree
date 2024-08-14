import { post } from '@/utils';
import { apiPrefix } from './prefix';

// 登录接口
export const login = (params: Object) => post(`${apiPrefix}/login`, params);
