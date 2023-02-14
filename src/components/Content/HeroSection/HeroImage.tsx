import mobileImage from '../../../assets/image-profile-mobile.webp?url';
import tabletImage from '../../../assets/image-profile-tablet.webp?url';
import desktopImage from '../../../assets/image-profile-desktop.webp?url';

export default function HeroImage() {
  return (
    <picture className='block w-[174px] md:w-[322px] xl:w-[445px]'>
      <source srcSet={desktopImage} media='(min-width: 1280px)' />
      <source srcSet={tabletImage} media='(min-width: 768px)' />
      <img src={mobileImage} alt='Danny Wen' />
    </picture>
  );
}
