import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <div className='bg-gray text-center'>
        底部-
        {t('username')}
      </div>
    </div>
  );
}

export default Footer;
