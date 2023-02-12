interface Props {
  text: string;
  link?: string;
  submit?: boolean;
}

const btnStyle =
  'min-w-[120px] border-b-2 border-b-primary-green pb-2 text-center hover:text-primary-green transition font-bold leading-[26px] tracking-[2.29px] uppercase';

export default function ContactMeBtn({ text, link, submit = false }: Props) {
  return (
    <>
      {link ? (
        <a
          className={btnStyle}
          href={link}
          target={link.includes('https') ? '_blank' : ''}
        >
          {text}
        </a>
      ) : (
        <button type={submit ? 'submit' : 'button'} className={btnStyle}>
          {text}
        </button>
      )}
    </>
  );
}
