export default function BackgroundWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="bg1">{children}</div>

}

