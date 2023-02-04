import Image from '../../../assets/pattern-rings.svg';

export default function RingImage() {
  return (
    <div className='absolute w-[530px] left-[-92%] top-[32%] z-[-10]'>
      <img src={Image} alt='Rings' />
    </div>
  );
}
