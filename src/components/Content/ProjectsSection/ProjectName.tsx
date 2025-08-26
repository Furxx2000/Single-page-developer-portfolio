interface Props {
  prjName: string;
}

export default function ProjectName({ prjName }: Props) {
  return (
    <h4 className='font-bold text-2xl leading-8 mb-1 md:mb-2'>
      {prjName}
    </h4>
  );
}
