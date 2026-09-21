import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu, X, Phone, MessageCircle, Globe, Home, Briefcase, Package, Image, Mail } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

const WHATSAPP_NUMBER = '919810467218'
const PHONE_NUMBER = '+911148627310'

const navItems = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.packages', path: '/packages' },
  { key: 'nav.religious', path: '/religious' },
  { key: 'nav.transport', path: '/transport' },
  { key: 'nav.memorial', path: '/memorial' },
  { key: 'nav.team', path: '/team' },
  { key: 'nav.gallery', path: '/gallery' },
  { key: 'nav.faq', path: '/faq' },
  { key: 'nav.contact', path: '/contact' },
]

function Header() {
  const { t, lang, setLang } = useI18n()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.webp" alt="Aaviran" className="h-9 w-9 rounded-full" />
          <span className="text-base sm:text-lg font-semibold text-foreground">
            {t('brand.name')}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 8).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="gap-1.5 text-xs"
          >
            <Globe className="h-4 w-4" />
            {lang === 'en' ? 'हिंदी' : 'EN'}
          </Button>

          <ModeToggle />

          <a href={`tel:${PHONE_NUMBER}`}>
            <Button variant="outline" size="icon" className="sm:hidden h-8 w-8">
              <Phone className="h-3.5 w-3.5" />
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs hidden sm:inline-flex">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden md:inline">24/7</span>
            </Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <img src="/logo.webp" alt="Aaviran" className="h-8 w-8 rounded-full" />
                    <span className="font-semibold">{t('brand.short')}</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t space-y-2">
                  <a href={`tel:${PHONE_NUMBER}`} className="block">
                    <Button className="w-full gap-2" size="sm">
                      <Phone className="h-4 w-4" />
                      {t('cta.callnow')}
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I need assistance with funeral arrangements.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full gap-2" size="sm">
                      <MessageCircle className="h-4 w-4" />
                      {t('cta.whatsapp')}
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.webp" alt="Aaviran" className="h-10 w-10 rounded-full" />
              <span className="text-lg font-semibold">{t('brand.name')}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
              {t('nav.services')}
            </h4>
            <ul className="space-y-2">
              {[
                { key: 'nav.services', path: '/services' },
                { key: 'nav.packages', path: '/packages' },
                { key: 'nav.religious', path: '/religious' },
                { key: 'nav.transport', path: '/transport' },
                { key: 'nav.memorial', path: '/memorial' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
              {t('nav.about')}
            </h4>
            <ul className="space-y-2">
              {[
                { key: 'nav.about', path: '/about' },
                { key: 'nav.team', path: '/team' },
                { key: 'nav.gallery', path: '/gallery' },
                { key: 'nav.faq', path: '/faq' },
                { key: 'nav.contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
              {t('section.contact')}
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{t('footer.address')}</p>
              <p>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-foreground transition-colors">
                  +91 11 4862 7310
                </a>
              </p>
              <p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  +91 98104 67218
                </a>
              </p>
              <p>care@aaviranantimseva.in</p>
              <p className="font-medium text-foreground">{t('footer.hours')}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}

const bottomNavItems = [
  { key: 'nav.home', path: '/', icon: Home },
  { key: 'nav.services', path: '/services', icon: Briefcase },
  { key: 'nav.packages', path: '/packages', icon: Package },
  { key: 'nav.gallery', path: '/gallery', icon: Image },
  { key: 'nav.contact', path: '/contact', icon: Mail },
]

function BottomNav() {
  const { t } = useI18n()
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {bottomNavItems.map((item) => {
          const isActive = item.path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.path)
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-1 flex-col items-center gap-0.5 py-1.5 text-[10px] font-medium transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
              <span className="truncate max-w-[56px]">{t(item.key)}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

function WhatsAppButton() {
  const { t } = useI18n()

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I need assistance with funeral arrangements. Please contact me.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:shadow-xl transition-shadow lg:bottom-6 lg:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">{t('cta.whatsapp')}</span>
    </motion.a>
  )
}

export function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1 pt-16 pb-16 lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  )
}
