import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, Flame, BookOpen, Heart, Cross, Star, Users, HandHeart } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function ReligiousPage() {
  const { t, lang } = useI18n()

  const hinduServices = [
    { en: 'Antim Sanskar (Last Rites) Coordination', hi: 'अंतिम संस्कार समन्वय' },
    { en: 'Cremation Ground Arrangements', hi: 'श्मशान घाट व्यवस्था' },
    { en: 'Pandit / Purohit Coordination', hi: 'पंडित / पुरोहित समन्वय' },
    { en: 'Samagri (Ritual Materials) Arrangement', hi: 'सामग्री व्यवस्था' },
    { en: 'Kapda & Traditional Items', hi: 'कपड़ा और पारंपरिक सामान' },
    { en: 'Mala & Floral Arrangements', hi: 'माला और पुष्प सज्जा' },
    { en: 'Asthi Collection & Immersion', hi: 'अस्थि संग्रह एवं विसर्जन' },
    { en: 'Prayer Meeting (Shanti Path)', hi: 'प्रार्थना सभा (शांति पाठ)' },
    { en: 'Terahvin (13th Day Ceremony)', hi: 'तेरहवीं संस्कार' },
    { en: 'Chautha & Barsi Coordination', hi: 'चौथा और बरसी समन्वय' },
    { en: 'Memorial Gathering Arrangements', hi: 'स्मारक सभा व्यवस्था' },
  ]

  const sikhServices = [
    { en: 'Antim Ardas Coordination', hi: 'अंतिम अरदास समन्वय' },
    { en: 'Gurdwara Coordination', hi: 'गुरुद्वारा समन्वय' },
    { en: 'Kirtan Arrangements', hi: 'कीर्तन व्यवस्था' },
    { en: 'Floral Tributes', hi: 'पुष्प श्रद्धांजलि' },
    { en: 'Transportation to Cremation Ground', hi: 'श्मशान घाट तक परिवहन' },
    { en: 'Prayer Gathering Coordination', hi: 'प्रार्थना सभा समन्वय' },
  ]

  const muslimServices = [
    { en: 'Burial Coordination', hi: 'दफ़न समन्वय' },
    { en: 'Kafan Arrangement', hi: 'कफ़न व्यवस्था' },
    { en: 'Ghusl (Ritual Bathing) Assistance', hi: 'ग़ुस्ल (स्नान) सहायता' },
    { en: 'Mosque Coordination', hi: 'मस्जिद समन्वय' },
    { en: 'Janazah (Funeral Prayer) Arrangements', hi: 'जनाज़ा नमाज़ व्यवस्था' },
    { en: 'Cemetery Coordination', hi: 'कब्रिस्तान समन्वय' },
    { en: 'Transportation Arrangements', hi: 'परिवहन व्यवस्था' },
  ]

  const christianServices = [
    { en: 'Church Coordination', hi: 'चर्च समन्वय' },
    { en: 'Casket Arrangement', hi: 'ताबूत व्यवस्था' },
    { en: 'Transportation Services', hi: 'परिवहन सेवाएं' },
    { en: 'Floral Arrangements', hi: 'पुष्प सज्जा' },
    { en: 'Cemetery / Burial Coordination', hi: 'कब्रिस्तान / दफ़न समन्वय' },
    { en: 'Memorial Service Arrangements', hi: 'स्मारक सेवा व्यवस्था' },
  ]

  const otherTraditions = [
    { en: 'Jain Funeral Rites', hi: 'जैन अंतिम संस्कार' },
    { en: 'Buddhist Funeral Services', hi: 'बौद्ध अंतिम संस्कार सेवाएं' },
    { en: 'Parsi (Zoroastrian) Traditions', hi: 'पारसी (ज़ोरोस्ट्रियन) परंपराएं' },
    { en: 'Interfaith Ceremonies', hi: 'अंतर-धार्मिक समारोह' },
    { en: 'Secular / Non-Religious Farewells', hi: 'धर्मनिरपेक्ष विदाई' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services-pandit.webp"
            alt={lang === 'hi' ? 'धार्मिक सेवाएं' : 'Religious Services'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('section.religious')}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('section.religious.desc')}
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <HandHeart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {lang === 'hi'
                ? 'आपकी परंपराओं के अनुसार समन्वय'
                : 'Coordination According to Your Traditions'}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {lang === 'hi'
                ? 'आविरन अंतिम सेवा हर परिवार की धार्मिक और सांस्कृतिक परंपराओं का सम्मान करती है। हम हिंदू, सिख, मुस्लिम, ईसाई और अन्य सभी धर्मों एवं संप्रदायों के अनुसार अंतिम संस्कार का पूरा समन्वय करते हैं। हमारी टीम आपके परिवार की आवश्यकताओं को समझकर हर व्यवस्था सुनिश्चित करती है।'
                : 'Aaviran Antim Seva respects the religious and cultural traditions of every family. We provide complete funeral coordination according to Hindu, Sikh, Muslim, Christian, and all other faiths and denominations. Our team understands your family\'s needs and ensures every arrangement is handled with care and respect.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hindu Funeral Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Flame className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'हिंदू अंतिम संस्कार सेवाएं' : 'Hindu Funeral Services'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'वैदिक परंपरा और रीति-रिवाज़ों के अनुसार संपूर्ण अंतिम संस्कार समन्वय।'
                : 'Complete funeral coordination according to Vedic traditions and customs.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hinduServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {lang === 'hi' ? service.hi : service.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sikh Funeral Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'सिख अंतिम संस्कार सेवाएं' : 'Sikh Funeral Services'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'गुरबाणी और सिख मर्यादा के अनुसार अंतिम अरदास एवं संस्कार समन्वय।'
                : 'Antim Ardas and funeral coordination according to Sikh traditions and Gurbani.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sikhServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {lang === 'hi' ? service.hi : service.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Muslim Funeral Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'मुस्लिम अंतिम संस्कार सेवाएं' : 'Muslim Funeral Services'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'इस्लामी परंपरा के अनुसार जनाज़ा और दफ़न का संपूर्ण समन्वय।'
                : 'Complete Janazah and burial coordination according to Islamic traditions.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {muslimServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {lang === 'hi' ? service.hi : service.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Christian Funeral Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Cross className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'ईसाई अंतिम संस्कार सेवाएं' : 'Christian Funeral Services'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'ईसाई परंपरा के अनुसार चर्च सेवा और दफ़न समन्वय।'
                : 'Church service and burial coordination according to Christian traditions.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {christianServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {lang === 'hi' ? service.hi : service.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Traditions */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Star className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'अन्य परंपराएं' : 'Other Traditions'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'हम सभी धर्मों और विश्वासों का सम्मान करते हैं। जैन, बौद्ध, पारसी, अंतर-धार्मिक और धर्मनिरपेक्ष विदाई के लिए भी समन्वय उपलब्ध है।'
                : 'We respect all faiths and beliefs. Coordination is also available for Jain, Buddhist, Parsi, interfaith, and secular farewells.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherTraditions.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {lang === 'hi' ? service.hi : service.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'अपनी परंपरा के अनुसार व्यवस्था के लिए संपर्क करें'
                : 'Contact Us for Arrangements According to Your Traditions'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'हमारी टीम 24 घंटे उपलब्ध है। किसी भी धार्मिक या सांस्कृतिक परंपरा के अनुसार अंतिम संस्कार समन्वय के लिए अभी संपर्क करें।'
                : 'Our team is available 24 hours. Contact us now for funeral coordination according to any religious or cultural tradition.'}
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
