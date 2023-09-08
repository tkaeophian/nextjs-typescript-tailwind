import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: any) {
  return (
    <div className="text-slate-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
