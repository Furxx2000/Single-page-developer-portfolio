interface Props {
  name: string;
}

export default function DeveloperName({ name }: Props) {
  return (
    <h3 className='text-center text-[40px] font-bold leading-[40px] tracking-[-1.14px]'>
      Nice to meet you! <br />
      I'm &nbsp;
      <u className='decoration-primary-green'>{name}.</u>
    </h3>
  );
}
