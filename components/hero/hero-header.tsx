export default function HeroHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header 
        className="relative w-full"
        style={{
            height: "auto",
            minHeight: "70vh",
            maxHeight: "100vh",
            aspectRatio: "16 / 9",
        }}
    >
        {children}
    </header>
  );
}