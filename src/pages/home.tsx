import { useI18n } from '@/lib/i18n'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {
  Phone,
  MessageCircle,
  Truck,
  Flame,
  MapPin,
  BookOpen,
  Heart,
  Shield,
  Clock,
  Eye,
  Users,
  Star,
  Check,
  Cross,
  ChevronRight,
  Quote,
  ArrowRight,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const WHATSAPP_URL = 'https://wa.me/919810467218?text=I%20need%20assistance%20with%20funeral%20arrangements'
const PHONE_NUMBER = '+911148627310'

export function HomePage() {
  const { t, lang } = useI18n()

  const services = [
    {
      image: '/svc-coordination.webp',
      en: 'Funeral Coordination',
      hi: 'अंतिम संस्कार समन्वय',
      descEn: 'End-to-end planning and coordination of all funeral arrangements with care and attention.',
      descHi: 'सभी अंतिम संस्कार व्यवस्थाओं की देखभाल और ध्यान के साथ शुरू से अंत तक योजना।',
    },
    {
      image: '/svc-transport.webp',
      en: 'Transport Services',
      hi: 'परिवहन सेवाएं',
      descEn: 'Dignified transportation with AC ambulance and hearse services across Delhi NCR.',
      descHi: 'दिल्ली एनसीआर में एसी एम्बुलेंस और शव वाहन सेवाओं के साथ गरिमापूर्ण परिवहन।',
    },
    {
      image: '/svc-cremation.webp',
      en: 'Cremation Arrangements',
      hi: 'दाह संस्कार व्यवस्था',
      descEn: 'Complete cremation ground arrangements including documentation and ritual support.',
      descHi: 'दस्तावेज़ीकरण और अनुष्ठान सहायता सहित पूर्ण श्मशान घाट व्यवस्था।',
    },
    {
      image: '/svc-burial.webp',
      en: 'Burial Services',
      hi: 'दफ़न सेवाएं',
      descEn: 'Cemetery coordination and burial arrangements for all faiths and traditions.',
      descHi: 'सभी धर्मों और परंपराओं के लिए कब्रिस्तान समन्वय और दफ़न व्यवस्था।',
    },
    {
      image: '/svc-floral.webp',
      en: 'Floral Arrangements',
      hi: 'पुष्प सज्जा',
      descEn: 'Beautiful floral tributes, garlands, and decorations for a respectful farewell.',
      descHi: 'सम्मानजनक विदाई के लिए सुंदर पुष्प श्रद्धांजलि, मालाएं और सजावट।',
    },
    {
      image: '/svc-prayer.webp',
      en: 'Prayer Services',
      hi: 'प्रार्थना सेवाएं',
      descEn: 'Coordination of prayer meetings, path, and religious gatherings as per tradition.',
      descHi: 'परंपरा के अनुसार प्रार्थना सभाओं, पाठ और धार्मिक समारोहों का समन्वय।',
    },
  ]

  const packages = [
    {
      nameKey: 'pkg.essential',
      price: '₹18,500',
      features: [
        { en: 'Basic funeral coordination', hi: 'बुनियादी अंतिम संस्कार समन्वय' },
        { en: 'Local transportation', hi: 'स्थानीय परिवहन' },
        { en: 'Documentation assistance', hi: 'दस्तावेज़ सहायता' },
      ],
    },
    {
      nameKey: 'pkg.traditional',
      price: '₹32,500',
      popular: true,
      features: [
        { en: 'Complete funeral coordination', hi: 'पूर्ण अंतिम संस्कार समन्वय' },
        { en: 'AC ambulance transportation', hi: 'एसी एम्बुलेंस परिवहन' },
        { en: 'Floral arrangements', hi: 'पुष्प सज्जा' },
        { en: 'Prayer meeting coordination', hi: 'प्रार्थना सभा समन्वय' },
      ],
    },
    {
      nameKey: 'pkg.complete',
      price: '₹49,500',
      features: [
        { en: 'Premium funeral coordination', hi: 'प्रीमियम अंतिम संस्कार समन्वय' },
        { en: 'AC hearse & family transport', hi: 'एसी शव वाहन और पारिवारिक परिवहन' },
        { en: 'Premium floral tributes', hi: 'प्रीमियम पुष्प श्रद्धांजलि' },
        { en: 'Prayer & memorial coordination', hi: 'प्रार्थना और स्मारक समन्वय' },
        { en: 'Complete documentation support', hi: 'पूर्ण दस्तावेज़ सहायता' },
      ],
    },
  ]

  const religiousServices = [
    {
      icon: Flame,
      en: 'Hindu Services',
      hi: 'हिंदू सेवाएं',
      descEn: 'Antim Sanskar, cremation, pandit coordination, terahvin arrangements.',
      descHi: 'अंतिम संस्कार, दाह संस्कार, पंडित समन्वय, तेरहवीं व्यवस्था।',
    },
    {
      icon: Star,
      en: 'Sikh Services',
      hi: 'सिख सेवाएं',
      descEn: 'Antim Ardas, Gurdwara coordination, kirtan arrangements.',
      descHi: 'अंतिम अरदास, गुरुद्वारा समन्वय, कीर्तन व्यवस्था।',
    },
    {
      icon: BookOpen,
      en: 'Muslim Services',
      hi: 'मुस्लिम सेवाएं',
      descEn: 'Janazah arrangements, kafan, ghusl assistance, burial coordination.',
      descHi: 'जनाज़ा व्यवस्था, कफ़न, ग़ुस्ल सहायता, दफ़न समन्वय।',
    },
    {
      icon: Cross,
      en: 'Christian Services',
      hi: 'ईसाई सेवाएं',
      descEn: 'Church coordination, casket arrangement, memorial services.',
      descHi: 'चर्च समन्वय, ताबूत व्यवस्था, स्मारक सेवाएं।',
    },
  ]

  const commitments = [
    { icon: Heart, key: 'commitment.respect', descKey: 'commitment.respect.desc' },
    { icon: MessageCircle, key: 'commitment.clear', descKey: 'commitment.clear.desc' },
    { icon: Shield, key: 'commitment.discreet', descKey: 'commitment.discreet.desc' },
    { icon: Users, key: 'commitment.choice', descKey: 'commitment.choice.desc' },
    { icon: Clock, key: 'commitment.24hr', descKey: 'commitment.24hr.desc' },
    { icon: Eye, key: 'commitment.transparent', descKey: 'commitment.transparent.desc' },
  ]

  const testimonials = [
    {
      quote: lang === 'hi'
        ? 'टीम ने सब कुछ उल्लेखनीय शांति और गरिमा के साथ संभाला...'
        : 'The team handled everything with remarkable calm and dignity...',
      name: 'Rhea Malhotra',
      location: 'New Delhi',
    },
    {
      quote: lang === 'hi'
        ? 'सब कुछ स्पष्ट रूप से समझाया गया था इससे पहले कि हम किसी बात पर सहमत हों...'
        : 'Everything was explained clearly before we agreed to anything...',
      name: 'Niharika Wadhwa',
      location: 'South Delhi',
    },
    {
      quote: lang === 'hi'
        ? 'पूरे समय पेशेवर, शांत और सम्मानजनक...'
        : 'Professional, quiet and respectful throughout...',
      name: 'Meher Sondhi',
      location: 'New Delhi',
    },
  ]

  const faqs = [
    {
      qEn: 'Are your services available at night?',
      qHi: 'क्या आपकी सेवाएं रात में उपलब्ध हैं?',
      aEn: 'Yes. We operate 24 hours a day, 365 days a year. Our support line is always available.',
      aHi: 'हां। हम साल के 365 दिन, 24 घंटे काम करते हैं। हमारी सहायता लाइन हमेशा उपलब्ध है।',
    },
    {
      qEn: 'Can you collect the deceased from a residence?',
      qHi: 'क्या आप मृतक को घर से ले जा सकते हैं?',
      aEn: 'Yes. We provide collection from residences, hospitals, and nursing homes across Delhi NCR.',
      aHi: 'हां। हम दिल्ली एनसीआर में घरों, अस्पतालों और नर्सिंग होम से संग्रहण सेवा प्रदान करते हैं।',
    },
    {
      qEn: 'Do you provide services outside Delhi?',
      qHi: 'क्या आप दिल्ली के बाहर सेवाएं प्रदान करते हैं?',
      aEn: 'Yes. We cover the entire Delhi NCR region and can coordinate interstate transportation as needed.',
      aHi: 'हां। हम पूरे दिल्ली एनसीआर क्षेत्र को कवर करते हैं और आवश्यकतानुसार अंतरराज्यीय परिवहन का समन्वय कर सकते हैं।',
    },
    {
      qEn: 'Can you help with cremation arrangements?',
      qHi: 'क्या आप दाह संस्कार की व्यवस्था में मदद कर सकते हैं?',
      aEn: 'Yes. We coordinate all aspects of cremation including ground booking, documentation, and ritual materials.',
      aHi: 'हां। हम दाह संस्कार के सभी पहलुओं का समन्वय करते हैं जिसमें ग्राउंड बुकिंग, दस्तावेज़ीकरण और अनुष्ठान सामग्री शामिल है।',
    },
  ]

  const delhiAreas = [
    'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi',
    'Central Delhi', 'New Delhi', 'Dwarka', 'Rohini',
    'Janakpuri', 'Pitampura', 'Vasant Kunj', 'Saket',
    'Lajpat Nagar', 'Greater Kailash', 'Defence Colony', 'Hauz Khas',
  ]

  const ncrCities = [
    'Gurgaon (Gurugram)', 'Noida', 'Faridabad', 'Ghaziabad',
    'Greater Noida', 'Sonipat', 'Bahadurgarh', 'Manesar',
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative h-[85vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {['/hero-1.webp', '/hero-2.webp', '/hero-3.webp'].map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <img
                  src={src}
                  alt={`${t('brand.name')} - ${i + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-base px-8 py-6 gap-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />
                    {t('hero.cta')}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 gap-3 border-white/30 text-white hover:bg-white/10 hover:text-white bg-white/5">
                  <Link to="/services">
                    <ArrowRight className="size-5" />
                    {t('hero.cta2')}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 2. ABOUT PREVIEW ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.about')}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t('section.about.desc')}</p>
            <p className="text-muted-foreground leading-relaxed">{t('section.about.text')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            {[
              { value: '15+', label: t('section.about.years') },
              { value: '4,800+', label: t('section.about.families') },
              { value: 'Delhi NCR', label: t('section.about.coverage') },
              { value: '24/7', label: t('section.about.available') },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center py-8">
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Button variant="outline" asChild>
              <Link to="/about" className="gap-2">
                {t('cta.viewmore')}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. SERVICES GRID ===== */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.services')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.services.desc')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={lang === 'hi' ? service.hi : service.en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-5 pb-6">
                    <h3 className="text-lg font-semibold mb-2">{lang === 'hi' ? service.hi : service.en}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === 'hi' ? service.descHi : service.descEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Button variant="outline" asChild>
              <Link to="/services" className="gap-2">
                {t('cta.viewall')}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. PACKAGES PREVIEW ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.packages')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.packages.desc')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className={`h-full relative ${pkg.popular ? 'border-primary shadow-lg ring-1 ring-primary/20' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      {lang === 'hi' ? 'लोकप्रिय' : 'Popular'}
                    </div>
                  )}
                  <CardContent className="pt-2">
                    <h3 className="text-xl font-semibold mb-1">{t(pkg.nameKey)}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{t('pkg.from')}</p>
                    <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm">
                          <Check className="size-4 text-primary mt-0.5 shrink-0" />
                          <span>{lang === 'hi' ? feature.hi : feature.en}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center space-y-3">
            <p className="text-xs text-muted-foreground max-w-xl mx-auto">{t('pkg.note')}</p>
            <Button variant="outline" asChild>
              <Link to="/packages" className="gap-2">
                {t('cta.viewall')}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== 5. RELIGIOUS SERVICES ===== */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.religious')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.religious.desc')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {religiousServices.map((rs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-2">
                    <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <rs.icon className="size-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{lang === 'hi' ? rs.hi : rs.en}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === 'hi' ? rs.descHi : rs.descEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Button variant="outline" asChild>
              <Link to="/religious" className="gap-2">
                {t('cta.viewmore')}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== 6. TRANSPORTATION ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.transport')}</h2>
              <p className="text-lg text-muted-foreground mb-4">{t('section.transport.desc')}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'हमारा बेड़ा एसी एम्बुलेंस और शव वाहनों से सुसज्जित है, जो दिल्ली एनसीआर और अंतरराज्यीय गंतव्यों को कवर करता है। हम अस्पतालों, घरों और नर्सिंग होम से संग्रहण सेवा प्रदान करते हैं।'
                  : 'Our fleet is equipped with AC ambulances and hearse vehicles, covering Delhi NCR and interstate destinations. We provide collection from hospitals, residences, and nursing homes.'}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad'].map((area) => (
                  <span key={area} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full font-medium">
                    {area}
                  </span>
                ))}
              </div>
              <Button variant="outline" asChild>
                <Link to="/transport" className="gap-2">
                  {t('cta.viewmore')}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/transport-hero.webp"
                  alt={lang === 'hi' ? 'परिवहन सेवाएं' : 'Transportation Services'}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 7. MEMORIAL ===== */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/memorial-hero.webp"
                  alt={lang === 'hi' ? 'स्मारक सेवाएं' : 'Memorial Services'}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.memorial')}</h2>
              <p className="text-lg text-muted-foreground mb-4">{t('section.memorial.desc')}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'हम प्रार्थना सभाओं, तेरहवीं, चौथा, बरसी और अन्य स्मारक समारोहों के लिए स्थल समन्वय, कैटरिंग, पुष्प सज्जा और अन्य व्यवस्थाएं प्रदान करते हैं।'
                  : 'We provide venue coordination, catering, floral arrangements, and other logistics for prayer meetings, terahvin, chautha, barsi, and other memorial gatherings.'}
              </p>
              <Button variant="outline" asChild>
                <Link to="/memorial" className="gap-2">
                  {t('cta.viewmore')}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 8. COMMITMENTS ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.commitments')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.commitments.desc')}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="pt-2">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <c.icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{t(c.key)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(c.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. TESTIMONIALS ===== */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.testimonials')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.testimonials.desc')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-2">
                    <Quote className="size-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. SERVICE AREAS ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.areas')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.areas.desc')}</p>
          </motion.div>

          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                {lang === 'hi' ? 'दिल्ली क्षेत्र' : 'Delhi Areas'}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {delhiAreas.map((area) => (
                  <div key={area} className="text-sm text-muted-foreground py-1.5 px-3 rounded-md bg-secondary/50">
                    {area}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck className="size-5 text-primary" />
                {lang === 'hi' ? 'एनसीआर शहर' : 'NCR Cities'}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {ncrCities.map((city) => (
                  <div key={city} className="text-sm text-muted-foreground py-1.5 px-3 rounded-md bg-secondary/50">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 11. FAQ PREVIEW ===== */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('section.faq')}</h2>
            <p className="text-lg text-muted-foreground">{t('section.faq.desc')}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card>
                  <CardContent className="pt-2">
                    <h3 className="font-semibold mb-2">{lang === 'hi' ? faq.qHi : faq.qEn}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === 'hi' ? faq.aHi : faq.aEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Button variant="outline" asChild>
              <Link to="/faq" className="gap-2">
                {t('cta.viewall')}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ===== 12. CONTACT CTA ===== */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {lang === 'hi' ? 'तुरंत सहायता चाहिए?' : 'Need Immediate Assistance?'}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
              {lang === 'hi'
                ? 'हमारी टीम 24 घंटे उपलब्ध है। अभी संपर्क करें।'
                : 'Our team is available 24 hours. Reach out now.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-base px-8 py-6 gap-3"
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="size-5" />
                  {t('cta.callnow')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-base px-8 py-6 gap-3"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  {t('cta.whatsapp')}
                </a>
              </Button>
            </div>
            <Button variant="link" asChild className="text-primary-foreground underline opacity-80 hover:opacity-100">
              <Link to="/contact">
                {t('section.contact')} →
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
