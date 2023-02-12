interface Props {
  description: string;
}

export default function DeveloperDes({ description }: Props) {
  return (
    <p className='text-gray font-medium leading-[26px] text-center md:text-lg md:text-left md:p-0 px-4 xl:w-[445px] xl:pb-[50px]'>
      {description}
    </p>
  );
}
