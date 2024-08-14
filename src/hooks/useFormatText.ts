import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

/** 全局统一处理文字和数字 */
export const useFormatText = () => {
  const { t } = useTranslation();

  /**
   * 全局文字统一理
   * @param {string} key  国际化的key
   * @param {string | string[]} params 国际化接收的参数
   * @returns {string}
   */
  const text = useCallback(
    (key: string, params?: string | string[]) => {
      console.warn({ key, params });
      return t(key);
    },
    [t]
  );

  /**
   * 全局数字统一理
   * @param {string} key 国际化的key
   * @param {string} isFormat 是否是数字需要千分位或者其他特殊处理
   * @returns {string|number}
   */
  const digit = useCallback((number: string, isFormat?: string) => {
    console.warn({ number, isFormat });
    return number;
  }, []);

  return { text, digit };
};
