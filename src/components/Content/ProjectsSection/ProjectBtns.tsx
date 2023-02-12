export default function ProjectBtns({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex items-center gap-x-8 xl:hidden'>{children}</div>;
}
