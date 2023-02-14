import Image from '../../../assets/pattern-rings.svg?url';

interface Props {
  position: string;
}

export default function RingImage({ position }: Props) {
  return (
    <div className={`absolute w-[530px] ${position}`}>
      <img src={Image} alt='Rings' />
    </div>
  );
}
