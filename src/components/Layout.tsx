import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: React.ReactNode
}
export function Layout({ children }: LayoutProps) {
  return (
    <div className="text-slate-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
