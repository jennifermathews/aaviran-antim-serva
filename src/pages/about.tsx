import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Phone, MessageCircle, Heart, MessageSquare, Shield, Users, Clock, FileText,
  CheckCircle2, MapPin, Star, Award,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function AboutPage() {
  const { t, lang } = useI18n()

  const stats = [
    {
      value: '15+',
      label: t('section.about.years'),
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      value: '4,800+',
      label: t('section.about.families'),
      gradient: 'from-orange-500/20 to-orange-500/5',
    },
    {
      value: lang === 'hi' ? 'दिल्ली NCR' : 'Delhi NCR',
      label: t('section.about.coverage'),
      gradient: 'from-blue-500/20 to-blue-500/5',
    },
    {
      value: '24/7',
      label: t('section.about.available'),
      gradient: 'from-emerald-500/20 to-emerald-500/5',
    },
  ]

  const coreValues = [
    { icon: Heart, key: 'respect' },
    { icon: MessageSquare, key: 'clear' },
    { icon: Shield, key: 'discreet' },
    { icon: Users, key: 'choice' },
    { icon: Clock, key: '24hr' },
    { icon: FileText, key: 'transparent' },
  ]

  const whyChooseUs = [
    {
      en: 'One dedicated point of contact for your family',
      hi: 'आपके परिवार के लिए एक समर्पित संपर्क व्यक्ति',
    },
    {
      en: 'Clear explanation of all available options',
      hi: 'सभी उपलब्ध विकल्पों की स्पष्ट व्याख्या',
    },
    {
      en: 'Upfront indicative pricing — no hidden charges',
      hi: 'अग्रिम सांकेतिक मूल्य — कोई छिपा शुल्क नहीं',
    },
    {
      en: 'Respectful and compassionate communication',
      hi: 'सम्मानजनक और करुणामय संवाद',
    },
    {
      en: 'Discreet handling of all arrangements',
      hi: 'सभी व्यवस्थाओं का विवेकपूर्ण संचालन',
    },
    {
      en: 'Coordination with cremation and burial facilities',
      hi: 'दाह संस्कार और दफन सुविधाओं के साथ समन्वय',
    },
    {
      en: 'Any hour assistance — day or night',
      hi: 'किसी भी समय सहायता — दिन हो या रात',
    },
    {
      en: 'No pressure for optional services or upgrades',
      hi: 'वैकल्पिक सेवाओं या अपग्रेड के लिए कोई दबाव नहीं',
    },
  ]

  const delhiAreas = [
    { en: 'South Delhi', hi: 'दक्षिण दिल्ली' },
    { en: 'Central Delhi', hi: 'मध्य दिल्ली' },
    { en: 'New Delhi', hi: 'नई दिल्ली' },
    { en: 'North Delhi', hi: 'उत्तर दिल्ली' },
    { en: 'East Delhi', hi: 'पूर्वी दिल्ली' },
    { en: 'West Delhi', hi: 'पश्चिमी दिल्ली' },
    { en: 'Dwarka & Najafgarh', hi: 'द्वारका और नजफगढ़' },
    { en: 'Rohini & Pitampura', hi: 'रोहिणी और पीतमपुरा' },
    { en: 'Saket & Mehrauli', hi: 'साकेत और महरौली' },
    { en: 'Shahdara & Preet Vihar', hi: 'शाहदरा और प्रीत विहार' },
  ]

  const ncrCities = [
    { en: 'Gurgaon (Gurugram)', hi: 'गुड़गांव (गुरुग्राम)' },
    { en: 'Noida', hi: 'नोएडा' },
    { en: 'Greater Noida', hi: 'ग्रेटर नोएडा' },
    { en: 'Faridabad', hi: 'फरीदाबाद' },
    { en: 'Ghaziabad', hi: 'गाज़ियाबाद' },
    { en: 'Sonipat', hi: 'सोनीपत' },
    { en: 'Bahadurgarh', hi: 'बहादुरगढ़' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about-team.webp"
            alt={lang === 'hi' ? 'आविरन टीम' : 'Aaviran Team'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('section.about')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t('section.about.desc')}
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                {lang === 'hi' ? 'स्थापित 2011' : 'Est. 2011'}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {lang === 'hi' ? 'हमारी कहानी' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('section.about.text')}</p>
                <p>
                  {lang === 'hi'
                    ? 'आविरन अंतिम सेवा की स्थापना 2011 में अरवायन मेहता द्वारा एक सरल विश्वास के साथ की गई थी — कि कठिन समय में परिवारों को करुणामय, पेशेवर सहायता मिलनी चाहिए। जो एक छोटी पारिवारिक सेवा के रूप में शुरू हुई, वह आज दिल्ली एनसीआर में सबसे भरोसेमंद अंतिम संस्कार सेवाओं में से एक बन गई है।'
                    : 'Aaviran Antim Seva was founded in 2011 by Arvayan Mehta with a simple belief — that families deserve compassionate, professional support during their most difficult moments. What began as a small family-run service has grown into one of the most trusted funeral coordination services across Delhi NCR.'}
                </p>
                <p>
                  {lang === 'hi'
                    ? 'हमारा मिशन हर परिवार को गरिमापूर्ण विदाई का अनुभव प्रदान करना है, बिना किसी दबाव या अनावश्यक जटिलता के। हम हर कदम पर आपके साथ हैं।'
                    : 'Our mission is to provide every family with a dignified farewell experience, free from pressure or unnecessary complexity. We walk beside you at every step.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10"
            >
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {lang === 'hi' ? 'पारिवारिक सेवा' : 'Family-Run Service'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'हम एक पारिवारिक सेवा हैं जो हर परिवार को अपना मानती है। हमारा दृष्टिकोण व्यक्तिगत, सम्मानजनक और ईमानदार है — क्योंकि हम जानते हैं कि इस समय आपको सबसे अधिक क्या चाहिए।'
                  : 'We are a family-run service that treats every family as our own. Our approach is personal, respectful, and honest — because we understand what matters most during this time.'}
              </p>
              <div className="space-y-3">
                {[
                  { en: 'Founded by Arvayan Mehta', hi: 'अरवायन मेहता द्वारा स्थापित' },
                  { en: 'Trusted since 2011', hi: '2011 से विश्वसनीय' },
                  { en: 'Serving all communities', hi: 'सभी समुदायों की सेवा' },
                  { en: 'Second generation involvement', hi: 'दूसरी पीढ़ी की भागीदारी' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{lang === 'hi' ? item.hi : item.en}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`} />
                  <CardContent className="relative p-6 md:p-8">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('section.commitments')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.commitments.desc')}
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border-t-2 border-t-primary/30">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {t(`commitment.${value.key}`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`commitment.${value.key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Aaviran */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {lang === 'hi' ? 'आविरन को क्यों चुनें?' : 'Why Choose Aaviran?'}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {lang === 'hi'
                  ? 'हम समझते हैं कि यह समय कठिन है। इसलिए हम हर कदम पर आपके साथ हैं — स्पष्ट, ईमानदार और सम्मानजनक सेवा के साथ।'
                  : 'We understand this is a difficult time. That is why we are with you at every step — with clear, honest, and respectful service.'}
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">
                    {lang === 'hi' ? item.hi : item.en}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('section.areas')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.areas.desc')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delhi */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    {lang === 'hi' ? 'दिल्ली' : 'Delhi'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {delhiAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {lang === 'hi' ? area.hi : area.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* NCR */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    {lang === 'hi' ? 'एनसीआर शहर' : 'NCR Cities'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ncrCities.map((city, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {lang === 'hi' ? city.hi : city.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <Phone className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'हम 24 घंटे आपके लिए उपलब्ध हैं'
                : 'We Are Available 24 Hours For You'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'किसी भी सहायता के लिए अभी संपर्क करें। हमारी टीम करुणा और सम्मान के साथ आपकी सेवा में तत्पर है।'
                : 'Contact us now for any assistance. Our team is ready to serve you with compassion and respect.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:+911148627310">
                  <Phone className="w-5 h-5" />
                  {t('cta.callnow')} — +91 11 4862 7310
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a
                  href="https://wa.me/919810467218"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cta.whatsapp')}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
