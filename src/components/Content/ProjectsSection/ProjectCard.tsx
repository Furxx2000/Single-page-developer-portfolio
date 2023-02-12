export default function ProjectCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='relative grid gap-y-5'>{children}</div>;
}
