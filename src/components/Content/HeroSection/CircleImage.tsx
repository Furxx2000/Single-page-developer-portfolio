import Image from '../../../assets/pattern-circle.svg?url';

interface Props {
  position: string;
}

export default function CircleImage({ position }: Props) {
  return (
    <div className={`absolute ${position}`}>
      <img src={Image} alt='Circle' />
    </div>
  );
}
