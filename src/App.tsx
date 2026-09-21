import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/components/layout'
import { HomePage } from '@/pages/home'
import { AboutPage } from '@/pages/about'
import { ServicesPage } from '@/pages/services'
import { PackagesPage } from '@/pages/packages'
import { ReligiousPage } from '@/pages/religious'
import { TransportPage } from '@/pages/transport'
import { MemorialPage } from '@/pages/memorial'
import { ContactPage } from '@/pages/contact'
import { FaqPage } from '@/pages/faq'
import { TeamPage } from '@/pages/team'
import { GalleryPage } from '@/pages/gallery'

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="aaviran-theme">
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="packages" element={<PackagesPage />} />
              <Route path="religious" element={<ReligiousPage />} />
              <Route path="transport" element={<TransportPage />} />
              <Route path="memorial" element={<MemorialPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="gallery" element={<GalleryPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </ThemeProvider>
  )
}
