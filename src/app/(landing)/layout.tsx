import { MainNav } from "@/components/main-nav";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background px-20">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav
            items={[
              {
                title: "Hello",
                href: "/hello",
              },
              {
                title: "World",
                href: "/world",
              },
              {
                title: "Notes",
                href: "/notes",
              },
            ]}
          />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
