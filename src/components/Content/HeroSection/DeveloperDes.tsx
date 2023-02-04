interface Props {
  description: string;
}

export default function DeveloperDes({ description }: Props) {
  return (
    <p className='text-gray font-medium leading-[26px] text-center px-2'>
      {description}
    </p>
  );
}
