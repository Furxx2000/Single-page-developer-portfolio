import mobileImage from '../../../assets/mobile_image.jpg?url';
import tabletImage from '../../../assets/tablet_image.jpg?url';
import desktopImage from '../../../assets/desktop_image.jpg?url';

export default function HeroImage() {
  return (
    <picture className='relative z-[-15] block w-[174px] md:w-[322px]  xl:w-[445px] '>
      <source srcSet={desktopImage} media='(min-width: 1280px)' />
      <source srcSet={tabletImage} media='(min-width: 768px)' />
      <img
        className='h-[383px] md:h-[600px] xl:h-[720px]'
        src={mobileImage}
        alt='Danny Wen'
      />
    </picture>
  );
}
