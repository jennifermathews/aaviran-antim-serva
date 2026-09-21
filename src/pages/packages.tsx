import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Phone,
  MessageCircle,
  Package,
  Star,
  Crown,
  Check,
  IndianRupee,
  AlertCircle,
  Puzzle,
  Flower2,
  Truck,
  Flame,
  Users,
  Heart,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function PackagesPage() {
  const { t, lang } = useI18n()

  const packages = [
    {
      icon: Package,
      nameKey: 'pkg.essential',
      price: '18,500',
      popular: false,
      features: lang === 'hi'
        ? [
            'दिल्ली के भीतर बुनियादी परिवहन',
            'अंतिम संस्कार समन्वय',
            'बुनियादी पुष्प सज्जा',
            'बुनियादी अनुष्ठान सामग्री',
            'श्मशान/दफ़न सुविधा समन्वय',
            'पारिवारिक सहायता समन्वयक',
            'दस्तावेज़ मार्गदर्शन',
          ]
        : [
            'Basic transport within Delhi',
            'Funeral coordination',
            'Basic floral arrangement',
            'Basic ceremonial supplies',
            'Cremation/burial facility coordination',
            'Family support coordinator',
            'Documentation guidance',
          ],
    },
    {
      icon: Star,
      nameKey: 'pkg.traditional',
      price: '32,500',
      popular: true,
      features: lang === 'hi'
        ? [
            'AC शव वाहन',
            'अंतिम संस्कार समन्वय',
            'पारंपरिक अनुष्ठान सामग्री',
            'पुष्प सज्जा',
            'माला व्यवस्था',
            'पुरोहित समन्वय',
            'श्मशान/दफ़न समन्वय',
            'दस्तावेज़ मार्गदर्शन',
            'पारिवारिक सहायता समन्वयक',
            'अनुष्ठान-दिवस सहायता',
          ]
        : [
            'AC hearse',
            'Funeral coordination',
            'Traditional ceremonial supplies',
            'Floral arrangements',
            'Garland arrangement',
            'Priest coordination',
            'Cremation/burial coordination',
            'Documentation guidance',
            'Family support coordinator',
            'Ceremony-day assistance',
          ],
    },
    {
      icon: Crown,
      nameKey: 'pkg.complete',
      price: '49,500',
      popular: false,
      features: lang === 'hi'
        ? [
            'प्रीमियम शव वाहन',
            'समर्पित पारिवारिक समन्वयक',
            'संपूर्ण अनुष्ठान समन्वय',
            'पारंपरिक अनुष्ठान सामग्री',
            'उन्नत पुष्प सज्जा',
            'पुरोहित समन्वय',
            'श्मशान/दफ़न समन्वय',
            'प्रार्थना सभा समन्वय',
            'दस्तावेज़ सहायता',
            'अस्थि/कलश समन्वय',
            'परिवार परिवहन समन्वय',
          ]
        : [
            'Premium hearse',
            'Dedicated family coordinator',
            'Complete ceremony coordination',
            'Traditional ceremonial supplies',
            'Enhanced floral arrangements',
            'Priest coordination',
            'Cremation/burial coordination',
            'Prayer gathering coordination',
            'Documentation assistance',
            'Ashes/urn coordination',
            'Family transport coordination',
          ],
    },
  ]

  const individualServices = [
    {
      category: lang === 'hi' ? 'परिवहन' : 'Transportation',
      icon: Truck,
      items: [
        { en: 'Basic hearse', hi: 'बुनियादी शव वाहन', price: '4,500' },
        { en: 'Premium hearse', hi: 'प्रीमियम शव वाहन', price: '7,500' },
        { en: 'Long-distance', hi: 'लंबी दूरी', price: '28/km', perKm: true },
      ],
    },
    {
      category: lang === 'hi' ? 'पुष्प सज्जा' : 'Floral',
      icon: Flower2,
      items: [
        { en: 'Floral garland', hi: 'पुष्प माला', price: '450' },
        { en: 'Basic floral arrangement', hi: 'बुनियादी पुष्प सज्जा', price: '1,500' },
        { en: 'Premium floral arrangement', hi: 'प्रीमियम पुष्प सज्जा', price: '4,500' },
      ],
    },
    {
      category: lang === 'hi' ? 'अनुष्ठान सामग्री' : 'Ceremonial Supplies',
      icon: Flame,
      items: [
        { en: 'Samagri', hi: 'सामग्री', price: '2,200' },
        { en: 'Premium samagri', hi: 'प्रीमियम सामग्री', price: '4,500' },
      ],
    },
    {
      category: lang === 'hi' ? 'कलश' : 'Urns',
      icon: Heart,
      items: [
        { en: 'Basic urn', hi: 'बुनियादी कलश', price: '850' },
        { en: 'Brass urn', hi: 'पीतल कलश', price: '2,800' },
        { en: 'Memorial urn', hi: 'स्मारक कलश', price: '5,500' },
      ],
    },
    {
      category: lang === 'hi' ? 'सेवाएं' : 'Services',
      icon: Users,
      items: [
        { en: 'Prayer meeting coordination', hi: 'प्रार्थना सभा समन्वय', price: '4,500' },
        { en: 'Priest coordination', hi: 'पुरोहित समन्वय', price: '2,500' },
        { en: 'Memorial service', hi: 'स्मारक सेवा', price: '7,500' },
        { en: 'Documentation assistance', hi: 'दस्तावेज़ सहायता', price: '1,500' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/90 to-primary/70" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t('section.packages')}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('section.packages.desc')}
          </p>
        </motion.div>
      </section>

      {/* Package Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <IndianRupee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'हमारे पैकेज चुनें' : 'Choose Your Package'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'हर परिवार की ज़रूरतों और बजट के अनुसार विकल्प उपलब्ध हैं।'
                : 'Options available to suit every family\'s needs and budget.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      {lang === 'hi' ? 'सबसे लोकप्रिय' : 'Most Popular'}
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full flex flex-col transition-shadow hover:shadow-xl ${
                    pkg.popular
                      ? 'border-primary border-2 shadow-lg'
                      : 'border-l-4 border-l-primary/40'
                  }`}
                >
                  <CardHeader className="text-center pb-4">
                    <pkg.icon
                      className={`w-10 h-10 mx-auto mb-3 ${
                        pkg.popular ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    />
                    <CardTitle className="text-xl">{t(pkg.nameKey)}</CardTitle>
                    <div className="mt-3">
                      <span className="text-sm text-muted-foreground">{t('pkg.from')}</span>
                      <p className="text-3xl font-bold text-foreground mt-1">
                        ₹{pkg.price}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1 mb-6">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        pkg.popular ? '' : 'variant-outline'
                      }`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      <a
                        href={`https://wa.me/919810467218?text=${encodeURIComponent(
                          lang === 'hi'
                            ? `नमस्ते, मुझे ${t(pkg.nameKey)} (₹${pkg.price}) पैकेज के बारे में जानकारी चाहिए।`
                            : `Hello, I'd like to know more about the ${t(pkg.nameKey)} (₹${pkg.price}) package.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t('cta.getquote')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-900/30">
              <CardContent className="flex items-start gap-4 p-6">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {lang === 'hi' ? 'कृपया ध्यान दें' : 'Please Note'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('pkg.note')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Puzzle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'व्यक्तिगत सेवाएं' : 'Individual Services'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'अपनी ज़रूरत के अनुसार अलग-अलग सेवाएं चुनें।'
                : 'Select individual services according to your requirements.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between py-2 border-b border-border last:border-0"
                        >
                          <span className="text-sm text-muted-foreground">
                            {lang === 'hi' ? item.hi : item.en}
                          </span>
                          <span className="text-sm font-semibold text-foreground whitespace-nowrap ml-3">
                            ₹{item.price}
                            {item.perKm && (
                              <span className="text-xs text-muted-foreground font-normal">
                                /{lang === 'hi' ? 'किमी' : 'km'}
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Puzzle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'कस्टम व्यवस्था' : 'Custom Arrangements'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              {lang === 'hi'
                ? 'हर परिवार की ज़रूरतें अलग होती हैं। आप ऊपर सूचीबद्ध व्यक्तिगत सेवाओं को मिलाकर अपनी ज़रूरत के अनुसार एक कस्टम व्यवस्था बना सकते हैं। हमारा पारिवारिक सहायता समन्वयक आपको सही विकल्प चुनने में मदद करेगा।'
                : 'Every family\'s needs are different. You can combine the individual services listed above to create a custom arrangement suited to your requirements. Our family support coordinator will help you choose the right options.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <a
                  href={`https://wa.me/919810467218?text=${encodeURIComponent(
                    lang === 'hi'
                      ? 'नमस्ते, मुझे कस्टम पैकेज बनाने में सहायता चाहिए।'
                      : 'Hello, I need help creating a custom package.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {lang === 'hi' ? 'व्हाट्सएप पर संपर्क करें' : 'Discuss on WhatsApp'}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+911148627310">
                  <Phone className="w-4 h-4 mr-2" />
                  {t('cta.callnow')}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Phone className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              {lang === 'hi'
                ? 'तुरंत सहायता चाहिए?'
                : 'Need Immediate Assistance?'}
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              {lang === 'hi'
                ? 'हमारी टीम 24 घंटे, 365 दिन उपलब्ध है। अभी कॉल करें या व्हाट्सएप पर संपर्क करें।'
                : 'Our team is available 24 hours, 365 days. Call now or reach us on WhatsApp.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-w-[200px]"
              >
                <a
                  href={`https://wa.me/919810467218?text=${encodeURIComponent(
                    lang === 'hi'
                      ? 'नमस्ते, मुझे अंतिम संस्कार पैकेज के बारे में जानकारी चाहिए।'
                      : 'Hello, I would like information about funeral packages.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('cta.whatsapp')}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+911148627310">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 11 4862 7310
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
