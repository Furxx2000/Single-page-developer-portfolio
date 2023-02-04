import Image from '../../../assets/pattern-circle.svg';

export default function CircleImage() {
  return (
    <div className='absolute right-0 bottom-0 translate-x-16'>
      <img src={Image} alt='Circle' />
    </div>
  );
}
