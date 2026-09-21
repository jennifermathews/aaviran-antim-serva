import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Phone, MessageCircle, Heart, Users, Flower2, BookOpen, Music, Camera,
  Armchair, UtensilsCrossed, Mic2, Video, IndianRupee, Sparkles, Landmark,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function MemorialPage() {
  const { t, lang } = useI18n()

  const coordinationItems = [
    { icon: BookOpen, en: 'Prayer Meetings', hi: 'प्रार्थना सभाएं' },
    { icon: Users, en: 'Remembrance Gatherings', hi: 'स्मरण सभाएं' },
    { icon: Heart, en: 'Memorial Ceremonies', hi: 'स्मारक समारोह' },
    { icon: Flower2, en: 'Floral Tributes', hi: 'पुष्प श्रद्धांजलि' },
    { icon: Sparkles, en: 'Memorial Cards', hi: 'स्मारक कार्ड' },
    { icon: Camera, en: 'Printed Photographs', hi: 'मुद्रित तस्वीरें' },
    { icon: Armchair, en: 'Guest Seating Arrangements', hi: 'अतिथि बैठक व्यवस्था' },
    { icon: UtensilsCrossed, en: 'Refreshments Coordination', hi: 'जलपान समन्वय' },
    { icon: BookOpen, en: 'Religious Officiants', hi: 'धार्मिक पुरोहित' },
    { icon: Mic2, en: 'Audio Equipment', hi: 'ऑडियो उपकरण' },
    { icon: Video, en: 'Livestream Coordination', hi: 'लाइवस्ट्रीम समन्वय' },
    { icon: BookOpen, en: 'Condolence Books', hi: 'शोक पुस्तिकाएं' },
    { icon: Heart, en: 'Tribute Displays', hi: 'श्रद्धांजलि प्रदर्शन' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services-memorial.webp"
            alt={lang === 'hi' ? 'स्मारक सेवाएं' : 'Memorial Services'}
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
            {t('section.memorial')}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('section.memorial.desc')}
          </p>
        </motion.div>
      </section>

      {/* What We Coordinate */}
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
              {lang === 'hi' ? 'हम क्या समन्वय करते हैं' : 'What We Coordinate'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'स्मरण सभाओं और स्मारक समारोहों के हर पहलू का विचारशील समन्वय।'
                : 'Thoughtful coordination of every aspect of remembrance gatherings and memorial ceremonies.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coordinationItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {lang === 'hi' ? item.hi : item.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Meeting Coordination */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {lang === 'hi' ? 'प्रार्थना सभा समन्वय' : 'Prayer Meeting Coordination'}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'शांति पाठ, पगड़ी रस्म, या अन्य प्रार्थना सभाओं के लिए संपूर्ण समन्वय। हम स्थान की व्यवस्था, बैठक, पुष्प सज्जा, ध्वनि उपकरण, फोटो फ्रेमिंग, जलपान और धार्मिक पुरोहित के समन्वय में सहायता करते हैं।'
                  : 'Complete coordination for Shanti Path, Pagdi Rasam, or other prayer meetings. We assist with venue arrangement, seating, floral decoration, audio equipment, photo framing, refreshments, and religious officiant coordination.'}
              </p>
              <ul className="space-y-3">
                {[
                  { en: 'Venue selection and booking assistance', hi: 'स्थान चयन और बुकिंग सहायता' },
                  { en: 'Seating for 50 to 500+ guests', hi: '50 से 500+ अतिथियों के लिए बैठक' },
                  { en: 'Floral decoration and photo display', hi: 'पुष्प सज्जा और फोटो प्रदर्शन' },
                  { en: 'Sound system and microphone setup', hi: 'ध्वनि प्रणाली और माइक्रोफोन सेटअप' },
                  { en: 'Refreshments and catering coordination', hi: 'जलपान और केटरिंग समन्वय' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{lang === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {lang === 'hi' ? 'प्रार्थना सभा में शामिल' : 'Prayer Meeting Includes'}
              </h3>
              <ul className="space-y-4">
                {[
                  { en: 'Invitation cards (printed & digital)', hi: 'निमंत्रण कार्ड (मुद्रित और डिजिटल)' },
                  { en: 'Guest register / condolence book', hi: 'अतिथि रजिस्टर / शोक पुस्तिका' },
                  { en: 'Framed photo with garland', hi: 'माला सहित फ़्रेम्ड फोटो' },
                  { en: 'White cloth and seating covers', hi: 'सफेद कपड़ा और बैठक कवर' },
                  { en: 'Water and refreshment service', hi: 'जल और जलपान सेवा' },
                  { en: 'Audio and lighting setup', hi: 'ऑडियो और लाइटिंग सेटअप' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Flower2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{lang === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remembrance Gatherings */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'स्मरण सभाएं' : 'Remembrance Gatherings'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {lang === 'hi'
                ? 'तेरहवीं, चौथा, बरसी, या किसी भी अवसर पर परिवार और मित्रों के लिए स्मरण सभा का आयोजन। हम बैठक, भोजन, पुष्प व्यवस्था, फोटो प्रदर्शन, और सभी व्यावहारिक विवरणों का ध्यान रखते हैं ताकि परिवार शांति से अपने प्रियजन को याद कर सके।'
                : 'Organization of remembrance gatherings for family and friends on Terahvin, Chautha, Barsi, or any occasion. We take care of seating, meals, floral arrangements, photo displays, and all practical details so the family can remember their loved one in peace.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                en: 'Intimate Gatherings',
                hi: 'छोटी सभाएं',
                descEn: 'For close family and friends — up to 50 guests with personalized arrangements.',
                descHi: 'करीबी परिवार और मित्रों के लिए — 50 अतिथियों तक व्यक्तिगत व्यवस्था।',
              },
              {
                icon: Users,
                en: 'Community Gatherings',
                hi: 'सामुदायिक सभाएं',
                descEn: 'Larger gatherings of 50–200 guests with full venue setup and catering coordination.',
                descHi: '50–200 अतिथियों की बड़ी सभाएं, पूर्ण स्थान व्यवस्था और केटरिंग समन्वय।',
              },
              {
                icon: Landmark,
                en: 'Large Memorial Events',
                hi: 'बड़े स्मारक कार्यक्रम',
                descEn: 'Events for 200+ guests with professional event management and logistics.',
                descHi: '200+ अतिथियों के लिए पेशेवर इवेंट प्रबंधन और लॉजिस्टिक्स।',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{lang === 'hi' ? item.hi : item.en}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {lang === 'hi' ? item.descHi : item.descEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Venue Setup */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Landmark className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'स्मारक स्थल व्यवस्था' : 'Memorial Venue Setup'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'हम स्थान के चयन से लेकर पूरी सज्जा तक हर चीज़ का समन्वय करते हैं।'
                : 'We coordinate everything from venue selection to complete decoration and setup.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Armchair, en: 'Chairs, Tables & Canopies', hi: 'कुर्सियां, मेज़ और शामियाना' },
              { icon: Flower2, en: 'Floral Decoration', hi: 'पुष्प सज्जा' },
              { icon: Camera, en: 'Photo & Tribute Display', hi: 'फोटो और श्रद्धांजलि प्रदर्शन' },
              { icon: Mic2, en: 'Sound System & PA', hi: 'ध्वनि प्रणाली और PA' },
              { icon: Video, en: 'Video & Livestream', hi: 'वीडियो और लाइवस्ट्रीम' },
              { icon: UtensilsCrossed, en: 'Catering & Refreshments', hi: 'केटरिंग और जलपान' },
              { icon: Music, en: 'Bhajan / Kirtan Arrangement', hi: 'भजन / कीर्तन व्यवस्था' },
              { icon: Sparkles, en: 'Lighting & Ambiance', hi: 'लाइटिंग और वातावरण' },
            ].map((item, index) => (
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
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">
                      {lang === 'hi' ? item.hi : item.en}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <IndianRupee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'स्मारक सेवा मूल्य' : 'Memorial Service Pricing'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'पारदर्शी मूल्य निर्धारण। तृतीय-पक्ष शुल्क अलग से बताए जाते हैं।'
                : 'Transparent pricing. Third-party charges communicated separately.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {lang === 'hi' ? 'प्रार्थना सभा समन्वय' : 'Prayer Meeting Coordination'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">₹4,500</p>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi' ? 'से शुरू' : 'onwards'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center h-full border-primary">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {lang === 'hi' ? 'स्मारक सेवा समन्वय' : 'Memorial Service Coordination'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">₹7,500</p>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi' ? 'से शुरू' : 'onwards'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t('pkg.note')}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <Flower2 className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'स्मारक सेवा की व्यवस्था के लिए संपर्क करें'
                : 'Contact Us to Arrange Memorial Services'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'प्रार्थना सभा, स्मरण सभा, या किसी भी स्मारक कार्यक्रम के समन्वय के लिए अभी संपर्क करें। हमारी टीम 24 घंटे उपलब्ध है।'
                : 'Contact us now for coordination of prayer meetings, remembrance gatherings, or any memorial event. Our team is available 24 hours.'}
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
