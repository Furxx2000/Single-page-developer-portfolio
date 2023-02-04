import mobileImage from '../../../assets/image-profile-mobile.webp';
import tabletImage from '../../../assets/image-profile-tablet.webp';
import desktopImage from '../../../assets/image-profile-desktop.webp';

export default function HeroImage() {
  return (
    <picture className='block w-[174px]'>
      <source srcSet={desktopImage} media='(min-width: 1280px)' />
      <source srcSet={tabletImage} media='(min-width: 768px)' />
      <img src={mobileImage} alt='Danny Wen' />
    </picture>
  );
}
