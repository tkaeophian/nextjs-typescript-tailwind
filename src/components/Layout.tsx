import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ locales, navigation, settings, children } : any) {
  return (
    <div className="text-slate-800">
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
}