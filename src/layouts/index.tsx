import { useOutlet } from 'react-router-dom';
import { useEffect } from 'react';
import { ConfigProvider } from 'esy-ui';
import { useChangeTheme } from '@/hooks';
// import Header from './header';
// import Footer from './footer';
import classNames from '@/styles/esy-ui';

function Layout() {
  const CurrentOutlet = useOutlet();
  const { initTheme } = useChangeTheme();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ConfigProvider classNames={classNames}>
      {/* <Button type='primary'>测试按钮</Button>
      <div className='w-full h-full flex flex-col'>
        <Header />
        <div className='flex-1 bg-primary-100'>{CurrentOutlet}</div>
        <Footer />
      </div> */}
      <div className='flex-1 bg-primary-100'>{CurrentOutlet}</div>
    </ConfigProvider>
  );
}

export default Layout;
