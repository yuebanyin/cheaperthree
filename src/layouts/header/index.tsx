import { useTranslation } from 'react-i18next';
import { useChangeTheme } from '@/hooks';
import { lsGetItem } from '@/utils';

function Header() {
  const { t, i18n } = useTranslation();
  const { changeTheme } = useChangeTheme();

  const onChangeLanguage = () => {
    if (i18n.language === 'zh') i18n.changeLanguage('en');
    else i18n.changeLanguage('zh');
  };

  const onChangeTheme = () => {
    if (lsGetItem('theme') !== 'white') changeTheme('white');
    else changeTheme('black');
  };

  return (
    <div className='flex justify-between bg-body h-16 border-b border-b-gray'>
      <div>web 端</div>
      <ul className='flex'>
        <li className='mr-10 p-2 cursor-pointer bg-yellow-100 text-primary-100' onClick={onChangeTheme}>
          换肤
        </li>
        <li className='p-2 cursor-pointer bg-yellow-100 text-cyan-300 w-24 text-center' onClick={onChangeLanguage}>
          {t('language')}
        </li>
      </ul>
    </div>
  );
}

export default Header;
