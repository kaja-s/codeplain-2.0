export default function NumberedCard({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-[0.5px] border-line-2 rounded-2xl p-6.5">
      <div className="font-mono text-xs text-accent mb-5">{num}</div>
      <h3 className="text-lg leading-tight font-medium mb-2.5">{title}</h3>
      <p className="text-text-body text-[14.5px]">{children}</p>
    </div>
  );
}
