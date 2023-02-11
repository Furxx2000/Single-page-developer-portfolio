interface Props {
  classes?: string;
}

export default function Divider({ classes }: Props) {
  return <div className={`h-px bg-white ${classes}`}></div>;
}
