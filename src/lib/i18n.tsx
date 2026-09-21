import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type Lang = 'en' | 'hi'

interface I18nContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('aaviran-lang')
    return (saved === 'hi' ? 'hi' : 'en') as Lang
  })

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('aaviran-lang', l)
  }, [])

  const t = useCallback((key: string) => {
    const translations = lang === 'hi' ? hi : en
    return (translations as Record<string, string>)[key] || (en as Record<string, string>)[key] || key
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

const en: Record<string, string> = {
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.services': 'Services',
  'nav.packages': 'Packages',
  'nav.religious': 'Religious Services',
  'nav.transport': 'Transportation',
  'nav.memorial': 'Memorial',
  'nav.contact': 'Contact',
  'nav.faq': 'FAQ',
  'nav.team': 'Our Team',
  'nav.gallery': 'Gallery',
  'brand.name': 'Aaviran Antim Seva',
  'brand.tagline': 'Dignified Farewells, Thoughtfully Arranged',
  'brand.short': 'Aaviran',
  'hero.title': 'Dignified Farewells,\nThoughtfully Arranged',
  'hero.subtitle': 'Compassionate funeral arrangements and family support across Delhi NCR, available 24 hours.',
  'hero.cta': 'Get Immediate Assistance',
  'hero.cta2': 'View Our Services',
  'section.about': 'About Aaviran',
  'section.about.desc': 'A family-run service, trusted by 4,800+ families since 2011.',
  'section.about.text': 'During a difficult time, families should not have to navigate every practical arrangement alone. Aaviran Antim Seva provides assistance with transportation, funeral coordination, cremation and burial arrangements, documentation support, floral arrangements, prayer services, memorial gatherings, and related needs.',
  'section.about.years': 'Years of Service',
  'section.about.families': 'Families Assisted',
  'section.about.coverage': 'Delhi NCR Coverage',
  'section.about.available': '24/7 Available',
  'section.services': 'Our Services',
  'section.services.desc': 'Comprehensive support for every aspect of funeral arrangements.',
  'section.packages': 'Funeral Packages',
  'section.packages.desc': 'Transparent pricing with dignity at every level.',
  'section.religious': 'Religious & Cultural Services',
  'section.religious.desc': 'Respectful coordination according to your faith and traditions.',
  'section.transport': 'Transportation Services',
  'section.transport.desc': 'Reliable, dignified transportation across Delhi NCR and beyond.',
  'section.memorial': 'Memorial Services',
  'section.memorial.desc': 'Thoughtful arrangements for remembrance gatherings.',
  'section.testimonials': 'What Families Say',
  'section.testimonials.desc': 'Trusted by families across Delhi NCR.',
  'section.faq': 'Frequently Asked Questions',
  'section.faq.desc': 'Quick answers to common questions.',
  'section.contact': 'Contact Us',
  'section.contact.desc': '24-hour assistance available. Reach out anytime.',
  'section.team': 'Our Team',
  'section.team.desc': 'Dedicated professionals, compassionate support.',
  'section.gallery': 'Gallery',
  'section.gallery.desc': 'A glimpse of our dignified arrangements.',
  'section.commitments': 'Our Commitments',
  'section.commitments.desc': 'Principles that guide every service we provide.',
  'section.areas': 'Service Areas',
  'section.areas.desc': 'Serving families across Delhi NCR.',
  'cta.viewmore': 'Learn More',
  'cta.viewall': 'View All',
  'cta.booknow': 'Book Now',
  'cta.callnow': 'Call Now',
  'cta.whatsapp': 'WhatsApp Us',
  'cta.getquote': 'Get a Quote',
  'footer.copyright': '© 2024 Aaviran Antim Seva & Memorial Services. All rights reserved.',
  'footer.address': '14, Sunder Nagar Extension, New Delhi, Delhi 110003',
  'footer.hours': '24 Hours, 365 Days',
  'footer.tagline': 'Dignified funeral arrangements and compassionate family support across Delhi NCR, available 24 hours.',
  'contact.name': 'Full Name',
  'contact.phone': 'Phone Number',
  'contact.email': 'Email Address',
  'contact.location': 'Location',
  'contact.type': 'Type of Assistance',
  'contact.method': 'Preferred Contact Method',
  'contact.message': 'Additional Information',
  'contact.submit': 'Send Message',
  'contact.thankyou': 'Thank you for your message. Our family support coordinator will contact you shortly.',
  'contact.emergency': 'For immediate assistance, please call our 24-hour line.',
  'pkg.essential': 'Essential Farewell',
  'pkg.traditional': 'Traditional Farewell',
  'pkg.complete': 'Complete Farewell',
  'pkg.from': 'Starting from',
  'pkg.note': 'Facility charges, government fees, religious officiant fees, and other third-party charges may be additional.',
  'available': 'Available',
  'commitment.respect': 'Respect First',
  'commitment.respect.desc': 'Every family and every farewell is handled with dignity.',
  'commitment.clear': 'Clear Communication',
  'commitment.clear.desc': 'Families receive straightforward explanations before arrangements are made.',
  'commitment.discreet': 'Discreet Service',
  'commitment.discreet.desc': 'Personal and family information is handled confidentially.',
  'commitment.choice': 'Family Choice',
  'commitment.choice.desc': 'Families remain free to select the services appropriate to them.',
  'commitment.24hr': '24-Hour Availability',
  'commitment.24hr.desc': 'Support is available day and night.',
  'commitment.transparent': 'Transparent Estimates',
  'commitment.transparent.desc': 'Third-party charges are identified separately wherever possible.',
}

const hi: Record<string, string> = {
  'nav.home': 'होम',
  'nav.about': 'हमारे बारे में',
  'nav.services': 'सेवाएं',
  'nav.packages': 'पैकेज',
  'nav.religious': 'धार्मिक सेवाएं',
  'nav.transport': 'परिवहन',
  'nav.memorial': 'स्मारक',
  'nav.contact': 'संपर्क करें',
  'nav.faq': 'अक्सर पूछे जाने वाले प्रश्न',
  'nav.team': 'हमारी टीम',
  'nav.gallery': 'गैलरी',
  'brand.name': 'आविरन अंतिम सेवा',
  'brand.tagline': 'गरिमापूर्ण विदाई, सोच-समझकर आयोजित',
  'brand.short': 'आविरन',
  'hero.title': 'गरिमापूर्ण विदाई,\nसोच-समझकर आयोजित',
  'hero.subtitle': 'दिल्ली एनसीआर में 24 घंटे उपलब्ध, करुणामय अंतिम संस्कार व्यवस्था और पारिवारिक सहायता।',
  'hero.cta': 'तुरंत सहायता प्राप्त करें',
  'hero.cta2': 'हमारी सेवाएं देखें',
  'section.about': 'आविरन के बारे में',
  'section.about.desc': '2011 से 4,800+ परिवारों द्वारा विश्वसनीय, एक पारिवारिक सेवा।',
  'section.about.text': 'कठिन समय में, परिवारों को हर व्यावहारिक व्यवस्था अकेले नहीं करनी चाहिए। आविरन अंतिम सेवा परिवहन, अंतिम संस्कार समन्वय, दाह संस्कार और दफन व्यवस्था, दस्तावेज़ सहायता, पुष्प सज्जा, प्रार्थना सेवाओं, स्मारक सभाओं और संबंधित आवश्यकताओं में सहायता प्रदान करती है।',
  'section.about.years': 'सेवा के वर्ष',
  'section.about.families': 'सहायता प्राप्त परिवार',
  'section.about.coverage': 'दिल्ली एनसीआर कवरेज',
  'section.about.available': '24/7 उपलब्ध',
  'section.services': 'हमारी सेवाएं',
  'section.services.desc': 'अंतिम संस्कार व्यवस्था के हर पहलू के लिए व्यापक सहायता।',
  'section.packages': 'अंतिम संस्कार पैकेज',
  'section.packages.desc': 'हर स्तर पर गरिमा के साथ पारदर्शी मूल्य निर्धारण।',
  'section.religious': 'धार्मिक और सांस्कृतिक सेवाएं',
  'section.religious.desc': 'आपकी आस्था और परंपराओं के अनुसार सम्मानजनक समन्वय।',
  'section.transport': 'परिवहन सेवाएं',
  'section.transport.desc': 'दिल्ली एनसीआर और उससे आगे विश्वसनीय, गरिमापूर्ण परिवहन।',
  'section.memorial': 'स्मारक सेवाएं',
  'section.memorial.desc': 'स्मरण सभाओं के लिए विचारशील व्यवस्थाएं।',
  'section.testimonials': 'परिवारों का अनुभव',
  'section.testimonials.desc': 'दिल्ली एनसीआर के परिवारों द्वारा विश्वसनीय।',
  'section.faq': 'अक्सर पूछे जाने वाले प्रश्न',
  'section.faq.desc': 'सामान्य प्रश्नों के त्वरित उत्तर।',
  'section.contact': 'संपर्क करें',
  'section.contact.desc': '24 घंटे सहायता उपलब्ध। कभी भी संपर्क करें।',
  'section.team': 'हमारी टीम',
  'section.team.desc': 'समर्पित पेशेवर, करुणामय सहायता।',
  'section.gallery': 'गैलरी',
  'section.gallery.desc': 'हमारी गरिमापूर्ण व्यवस्थाओं की एक झलक।',
  'section.commitments': 'हमारी प्रतिबद्धताएं',
  'section.commitments.desc': 'सिद्धांत जो हमारी हर सेवा का मार्गदर्शन करते हैं।',
  'section.areas': 'सेवा क्षेत्र',
  'section.areas.desc': 'दिल्ली एनसीआर में परिवारों की सेवा में।',
  'cta.viewmore': 'और जानें',
  'cta.viewall': 'सभी देखें',
  'cta.booknow': 'अभी बुक करें',
  'cta.callnow': 'अभी कॉल करें',
  'cta.whatsapp': 'व्हाट्सएप करें',
  'cta.getquote': 'मूल्य जानें',
  'footer.copyright': '© 2024 आविरन अंतिम सेवा एवं स्मारक सेवाएं। सर्वाधिकार सुरक्षित।',
  'footer.address': '14, सुंदर नगर एक्सटेंशन, नई दिल्ली, दिल्ली 110003',
  'footer.hours': '24 घंटे, 365 दिन',
  'footer.tagline': 'दिल्ली एनसीआर में 24 घंटे उपलब्ध, गरिमापूर्ण अंतिम संस्कार व्यवस्था और करुणामय पारिवारिक सहायता।',
  'contact.name': 'पूरा नाम',
  'contact.phone': 'फ़ोन नंबर',
  'contact.email': 'ईमेल पता',
  'contact.location': 'स्थान',
  'contact.type': 'सहायता का प्रकार',
  'contact.method': 'संपर्क का पसंदीदा तरीका',
  'contact.message': 'अतिरिक्त जानकारी',
  'contact.submit': 'संदेश भेजें',
  'contact.thankyou': 'आपके संदेश के लिए धन्यवाद। हमारे पारिवारिक सहायता समन्वयक शीघ्र ही आपसे संपर्क करेंगे।',
  'contact.emergency': 'तुरंत सहायता के लिए, कृपया हमारी 24 घंटे लाइन पर कॉल करें।',
  'pkg.essential': 'आवश्यक विदाई',
  'pkg.traditional': 'पारंपरिक विदाई',
  'pkg.complete': 'संपूर्ण विदाई',
  'pkg.from': 'शुरू',
  'pkg.note': 'सुविधा शुल्क, सरकारी शुल्क, धार्मिक पुरोहित शुल्क, और अन्य तृतीय-पक्ष शुल्क अतिरिक्त हो सकते हैं।',
  'available': 'उपलब्ध',
  'commitment.respect': 'सम्मान सर्वप्रथम',
  'commitment.respect.desc': 'हर परिवार और हर विदाई गरिमा के साथ संभाली जाती है।',
  'commitment.clear': 'स्पष्ट संवाद',
  'commitment.clear.desc': 'व्यवस्थाएं करने से पहले परिवारों को स्पष्ट विवरण दिया जाता है।',
  'commitment.discreet': 'विवेकपूर्ण सेवा',
  'commitment.discreet.desc': 'व्यक्तिगत और पारिवारिक जानकारी गोपनीय रूप से संभाली जाती है।',
  'commitment.choice': 'परिवार की पसंद',
  'commitment.choice.desc': 'परिवार अपने लिए उपयुक्त सेवाओं का चयन करने के लिए स्वतंत्र हैं।',
  'commitment.24hr': '24 घंटे उपलब्धता',
  'commitment.24hr.desc': 'दिन-रात सहायता उपलब्ध है।',
  'commitment.transparent': 'पारदर्शी अनुमान',
  'commitment.transparent.desc': 'तृतीय-पक्ष शुल्कों की जहां संभव हो अलग से पहचान की जाती है।',
}
