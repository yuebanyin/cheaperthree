import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { encryptionEcbMeans, decryptEcbMeans } from '@/utils';

// 记住密码的逻辑(在form表单校验通过后调用此方法)
const rememberPwd = (isRemeber: boolean, data: Record<string, any>) => {
  const keys = Object.keys(data);
  if (isRemeber) {
    keys.forEach((key) => {
      if (key === 'Password') {
        // 密码字段需要加密后保存到cookies中
        const v = encryptionEcbMeans(data[key]);
        Cookies.set(key, v, { expires: 10 });
      } else {
        Cookies.set(key, data[key], { expires: 10 });
      }
    });
  } else {
    keys.forEach((key) => {
      Cookies.remove(key);
    });
  }
};

function Login() {
  useEffect(() => {
    // 获取cookies保存的账号密码
    const account = Cookies.get('Account') || '';
    let password = Cookies.get('Password') || '';
    console.warn(account, password, rememberPwd);
    if (account && password) {
      // 对密码做解密操作
      password = decryptEcbMeans(password);
      // 这里是cookies回填form表单的逻辑
    }
  }, []);

  return (
    <div>
      <div>登录</div>
    </div>
  );
}

export default Login;
