// import React from 'react';
// import { Translation } from 'react-i18next';
import { Button } from 'esy-ui';
import { useEffect, useRef, useState } from 'react';
import { Img } from '@/components';
import one from '@/assets/images/common/1.png';
import two from '@/assets/images/common/2.png';
import three from '@/assets/images/common/3.png';
import logo from '@/assets/images/common/logo.png';
import Airline from '@/assets/images/common/Airline.png';
// import { useFormatText } from '@/hooks';
import { downloadFile1 } from '@/utils';


const dataList = [
  {
    id: '1',
    title: '1. Install',
    text: 'Click on Add to Chrome to install CheaperThere on your browser',
  },
  {
    id: '2',
    title: '2. Search',
    text: 'Search any flight or hotel on your favourite website',
  },
  {
    id: '3',
    title: '3. Save',
    text: 'CheaperThere will automatically notify you if there is a better deal!',
  },
];

const imgList = [
  {
    id: 1,
  src: one
  },
  {
    id: 2,
  src: two
  },
  {
    id: 3,
  src: three
  },
];

function Home() {
  // const { text } = useFormatText();
  const [activeId, setActiveId] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>();
  const handleDown = () => {
    // downloadFile('https://www.7-zip.org/a/7z2407-x64.exe', 'application/exe', 'This is the content of the zip file.');
    // window.location.href = 'https://www.7-zip.org/a/7z2407-x64.exe';
    // window.open('https://www.7-zip.org/a/7z2407-x64.exe');
    downloadFile1('https://www.7-zip.org/a/7z2407-x64.exe', 'exeeee');
  };

  useEffect(() => {
    // 清除之前的定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // 创建新的定时器
    intervalRef.current = setInterval(() => {
      setActiveId((pre) => (pre === 2 ? 0 : pre + 1));
    }, 3600);

    // 清理函数，在组件卸载时或下次useEffect执行前清除定时器
    return () => clearInterval(intervalRef.current);
  }, [activeId]);

  const handleMouseEnter = (i) => {
    setActiveId(i);
    // 你可以在这里添加其他逻辑，例如更新状态或触发动画
  };
  return (
    <div className=' overflow-auto h-100vh max-w-1280 m-auto pb-14'>
      {/* <Translation>{(t) => <span>{t('home')}</span>}</Translation> */}
      <div className='py-6 px-6 flex items-center'>
        <Img isNoTheme src={logo} className='' />
        <div className='text-blue text-2xl'> Power Saving </div>
      </div>

      <div className='flex mb-8'>
        <div className='px-24 py-12'>
          <div className='font-bold text-5xl'>Cheap flights & hotels,the easy way</div>
          <div className='text-2xl my-6'>
            Search flights and hotels on your favorite website, we'll find a better deal for you
          </div>
          <div className='text-2xl'>
            Our users, on average, save 
            <span className='text-blue'>$ 31</span>
            per booking!
          </div>

          <Button className='bg-blue w-80 rounded-xl py-8 mt-6' onClick={() => { handleDown(); }}>
            <div className='text-xl text-white'>
              Add to Chromev
              <span className=''> it's free</span>
            </div>
          </Button>
        </div>
        <div className='w-1000 h-600'>
          <Img isNoTheme src={Airline} className='w-1000 h-600' />

        </div>
      </div>

      <div className='flex'>
        <div className='w-4/5 pl-8'>
          <Img isNoTheme src={imgList[activeId]?.src || one} className='' />

        </div>
        <div className='ml-6'>
          <div className='font-bold text-5xl mb-8'> How it works</div>
          <div className=' border-l-4 border-gray pl-4 rounded'>
            {
              dataList.map((item, i) => (
                <div 
                  key={item.id} 
                  onMouseEnter={() => handleMouseEnter(i)}
                  className={`p-4 text-primary ${i === activeId ? 'bg-gray' : ''} ${item.id === '3' ? '' : 'mb-6'}`} 
                >
                  <div className='text-2xl'>{ item.title}</div>
                  <div className='text-xl '>{ item.text}</div>
                </div>
              ))
            }
          </div>
        </div>

      </div>

      
    </div>
  );
}
export default Home;
