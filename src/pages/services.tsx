import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Phone, MessageCircle, Heart, Flower2,
  FileText, CheckCircle2, IndianRupee,
  Package, Sparkles, Clipboard,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function ServicesPage() {
  const { t, lang } = useI18n()

  const services = [
    {
      image: '/svc-coordination.webp',
      en: 'Complete Funeral Coordination',
      hi: 'संपूर्ण अंतिम संस्कार समन्वय',
      descEn: 'End-to-end assistance with every aspect of the funeral — from transport and documentation to ceremony arrangements and family support.',
      descHi: 'अंतिम संस्कार के हर पहलू में शुरू से अंत तक सहायता — परिवहन, दस्तावेज़ से लेकर समारोह व्यवस्था और पारिवारिक सहायता तक।',
    },
    {
      image: '/svc-transport.webp',
      en: 'Funeral Transport',
      hi: 'अंतिम संस्कार परिवहन',
      descEn: 'Dignified transport of the deceased from hospital, home, or any location to the cremation ground or burial site within Delhi NCR.',
      descHi: 'अस्पताल, घर, या किसी भी स्थान से श्मशान या दफन स्थल तक शवों का गरिमापूर्ण परिवहन।',
    },
    {
      image: '/svc-transport.webp',
      en: 'Hearse Services',
      hi: 'शव वाहन सेवाएं',
      descEn: 'Well-maintained hearse vehicles — basic and premium options. Long-distance transport available for outstation transfers.',
      descHi: 'अच्छी तरह से रखरखाव किए गए शव वाहन — बेसिक और प्रीमियम विकल्प। लंबी दूरी के स्थानांतरण के लिए उपलब्ध।',
    },
    {
      image: '/svc-cremation.webp',
      en: 'Cremation Assistance',
      hi: 'दाह संस्कार सहायता',
      descEn: 'Coordination with cremation grounds across Delhi NCR. Assistance with booking, documentation, and ceremony arrangements.',
      descHi: 'दिल्ली एनसीआर में श्मशान घाटों के साथ समन्वय। बुकिंग, दस्तावेज़, और समारोह व्यवस्था में सहायता।',
    },
    {
      image: '/svc-burial.webp',
      en: 'Burial Assistance',
      hi: 'दफन सहायता',
      descEn: 'Support with burial arrangements at cemeteries. Coordination for Christian, Muslim, and other faith-based burial traditions.',
      descHi: 'कब्रिस्तानों में दफन व्यवस्था में सहायता। ईसाई, मुस्लिम, और अन्य धार्मिक दफन परंपराओं के लिए समन्वय।',
    },
    {
      image: '/svc-prayer.webp',
      en: 'Funeral Venue Coordination',
      hi: 'अंतिम संस्कार स्थल समन्वय',
      descEn: 'Assistance with selecting and booking venues for funeral ceremonies, prayer meetings, and remembrance gatherings.',
      descHi: 'अंतिम संस्कार समारोहों, प्रार्थना सभाओं, और स्मरण सभाओं के लिए स्थल चयन और बुकिंग में सहायता।',
    },
    {
      image: '/svc-cremation.webp',
      en: 'Antim Sanskar Arrangements',
      hi: 'अंतिम संस्कार व्यवस्थाएं',
      descEn: 'Traditional Hindu last rites coordination including pandit, samagri, rituals, and all ceremonial requirements.',
      descHi: 'पारंपरिक हिंदू अंतिम संस्कार समन्वय — पंडित, सामग्री, अनुष्ठान, और सभी समारोह आवश्यकताएं शामिल।',
    },
    {
      image: '/svc-prayer.webp',
      en: 'Prayer & Memorial Services',
      hi: 'प्रार्थना और स्मारक सेवाएं',
      descEn: 'Coordination of prayer meetings, Shanti Path, Terahvin, Chautha, Barsi, and other remembrance ceremonies.',
      descHi: 'प्रार्थना सभा, शांति पाठ, तेरहवीं, चौथा, बरसी, और अन्य स्मरण समारोहों का समन्वय।',
    },
  ]

  const flowers = [
    { en: 'White Roses', hi: 'सफ़ेद गुलाब' },
    { en: 'White Lilies', hi: 'सफ़ेद लिली' },
    { en: 'Rajnigandha (Tuberose)', hi: 'रजनीगंधा' },
    { en: 'Marigold', hi: 'गेंदा' },
    { en: 'Chrysanthemum', hi: 'गुलदाउदी' },
    { en: 'Carnations', hi: 'कार्नेशन' },
    { en: 'Jasmine', hi: 'चमेली' },
    { en: 'Seasonal Flowers', hi: 'मौसमी फूल' },
  ]

  const floralPricing = [
    { en: 'Simple Garland', hi: 'साधारण माला', price: '₹450' },
    { en: 'Traditional Garland Set', hi: 'पारंपरिक माला सेट', price: '₹950' },
    { en: 'Floral Bed', hi: 'पुष्प शय्या', price: '₹2,500' },
    { en: 'Premium Tribute', hi: 'प्रीमियम श्रद्धांजलि', price: '₹4,500' },
    { en: 'Memorial Arrangement', hi: 'स्मारक व्यवस्था', price: '₹3,500' },
    {
      en: 'Custom',
      hi: 'कस्टम',
      price: lang === 'hi' ? 'अनुरोध पर' : 'On request',
    },
  ]

  const standardSamagri = [
    { en: 'White cloth (kafan)', hi: 'सफ़ेद कपड़ा (कफ़न)' },
    { en: 'Incense sticks (agarbatti)', hi: 'अगरबत्ती' },
    { en: 'Camphor (kapoor)', hi: 'कपूर' },
    { en: 'Cotton (rui)', hi: 'रुई' },
    { en: 'Earthen items (diya, kalash)', hi: 'मिट्टी की वस्तुएं (दीया, कलश)' },
    { en: 'Puja essentials (havan samagri)', hi: 'पूजा सामग्री (हवन सामग्री)' },
    { en: 'Wood materials (chandan)', hi: 'लकड़ी सामग्री (चंदन)' },
    { en: 'Sacred items (Ganga jal, tulsi)', hi: 'पवित्र सामग्री (गंगा जल, तुलसी)' },
  ]

  const customSamagri = [
    { en: 'By family tradition', hi: 'पारिवारिक परंपरा अनुसार' },
    { en: 'Priest instructions', hi: 'पुरोहित निर्देश अनुसार' },
    { en: 'Regional customs', hi: 'क्षेत्रीय रीति-रिवाज़ अनुसार' },
    { en: 'Ceremony requirements', hi: 'समारोह आवश्यकताएं' },
    { en: 'Family preferences', hi: 'परिवार की पसंद अनुसार' },
  ]

  const documentationList = [
    { en: 'Death certificate application', hi: 'मृत्यु प्रमाण पत्र आवेदन' },
    { en: 'Hospital documentation', hi: 'अस्पताल दस्तावेज़ीकरण' },
    { en: 'Cremation / burial documents', hi: 'दाह संस्कार / दफन दस्तावेज़' },
    { en: 'ID requirements coordination', hi: 'पहचान पत्र आवश्यकता समन्वय' },
    { en: 'Facility paperwork', hi: 'सुविधा कागज़ी कार्रवाई' },
    { en: 'Transport documentation', hi: 'परिवहन दस्तावेज़' },
    { en: 'Municipal procedures', hi: 'नगरपालिका प्रक्रियाएं' },
    { en: 'Ashes collection documents', hi: 'अस्थि संग्रह दस्तावेज़' },
    { en: 'Interstate movement permits', hi: 'अंतरराज्यीय स्थानांतरण परमिट' },
    { en: 'Embassy coordination (if needed)', hi: 'दूतावास समन्वय (यदि आवश्यक)' },
  ]

  const pricingData = [
    {
      category: { en: 'Hearse & Transport', hi: 'शव वाहन और परिवहन' },
      items: [
        { en: 'Basic Hearse (within Delhi)', hi: 'बेसिक शव वाहन (दिल्ली के भीतर)', price: '₹4,500' },
        { en: 'Premium Hearse (AC)', hi: 'प्रीमियम शव वाहन (AC)', price: '₹7,500' },
        { en: 'Long-Distance Transport', hi: 'लंबी दूरी परिवहन', price: '₹28/km' },
      ],
    },
    {
      category: { en: 'Floral Services', hi: 'पुष्प सेवाएं' },
      items: [
        { en: 'Floral Garland', hi: 'पुष्प माला', price: '₹450' },
        { en: 'Basic Floral Arrangement', hi: 'बेसिक पुष्प व्यवस्था', price: '₹1,500' },
        { en: 'Premium Floral Tribute', hi: 'प्रीमियम पुष्प श्रद्धांजलि', price: '₹4,500' },
      ],
    },
    {
      category: { en: 'Funeral Samagri', hi: 'अंतिम संस्कार सामग्री' },
      items: [
        { en: 'Traditional Samagri Set', hi: 'पारंपरिक सामग्री सेट', price: '₹2,200' },
        { en: 'Premium Samagri Set', hi: 'प्रीमियम सामग्री सेट', price: '₹4,500' },
      ],
    },
    {
      category: { en: 'Urns', hi: 'कलश (अस्थि)' },
      items: [
        { en: 'Basic Urn', hi: 'बेसिक कलश', price: '₹850' },
        { en: 'Brass Urn', hi: 'पीतल कलश', price: '₹2,800' },
        { en: 'Memorial Urn', hi: 'स्मारक कलश', price: '₹5,500' },
      ],
    },
    {
      category: { en: 'Ceremony & Memorial', hi: 'समारोह और स्मारक' },
      items: [
        { en: 'Prayer Meeting Coordination', hi: 'प्रार्थना सभा समन्वय', price: '₹4,500' },
        { en: 'Priest Coordination', hi: 'पुरोहित समन्वय', price: '₹2,500' },
        { en: 'Memorial Service', hi: 'स्मारक सेवा', price: '₹7,500' },
      ],
    },
    {
      category: { en: 'Documentation & Special', hi: 'दस्तावेज़ और विशेष' },
      items: [
        { en: 'Documentation Assistance', hi: 'दस्तावेज़ सहायता', price: '₹1,500' },
        {
          en: 'Interstate Transfer',
          hi: 'अंतरराज्यीय स्थानांतरण',
          price: lang === 'hi' ? 'कोटेशन' : 'Quote',
        },
        {
          en: 'International Repatriation',
          hi: 'अंतरराष्ट्रीय प्रत्यावर्तन',
          price: lang === 'hi' ? 'कोटेशन' : 'Quote',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary),0.15),transparent_70%)]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {lang === 'hi' ? 'व्यापक सहायता' : 'Comprehensive Support'}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('section.services')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('section.services.desc')}
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'हम कैसे सहायता करते हैं' : 'How We Help'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'अंतिम संस्कार के हर पहलू के लिए एक ही संपर्क बिंदु।'
                : 'A single point of contact for every aspect of funeral arrangements.'}
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={lang === 'hi' ? service.hi : service.en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-5 pb-6">
                    <h3 className="text-base font-semibold mb-2 leading-tight">
                      {lang === 'hi' ? service.hi : service.en}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {lang === 'hi' ? service.descHi : service.descEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floral Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <Flower2 className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {lang === 'hi' ? 'पुष्प सेवाएं' : 'Floral Services'}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'ताज़े फूलों से बनी मालाएं, पुष्प शय्या, और श्रद्धांजलि व्यवस्थाएं। सभी फूल ताज़ा और स्थानीय रूप से प्राप्त किए जाते हैं।'
                  : 'Fresh flower garlands, floral beds, and tribute arrangements. All flowers are fresh and locally sourced.'}
              </p>

              {/* Available Flowers */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {lang === 'hi' ? 'उपलब्ध फूल' : 'Available Flowers'}
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {flowers.map((flower, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {lang === 'hi' ? flower.hi : flower.en}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floral Pricing */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {lang === 'hi' ? 'पुष्प मूल्य' : 'Floral Pricing'}
              </h3>
              <div className="space-y-2">
                {floralPricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-foreground text-sm">
                      {lang === 'hi' ? item.hi : item.en}
                    </span>
                    <span className="text-primary font-semibold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/services-floral.webp"
                  alt={lang === 'hi' ? 'पुष्प सेवाएं' : 'Floral Services'}
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funeral Samagri */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Package className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'अंतिम संस्कार सामग्री' : 'Funeral Samagri'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'पारंपरिक अंतिम संस्कार अनुष्ठानों के लिए आवश्यक सभी सामग्री।'
                : 'All essential materials for traditional funeral rituals.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Set */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      {lang === 'hi' ? 'स्टैंडर्ड सामग्री सेट' : 'Standard Samagri Set'}
                    </CardTitle>
                    <span className="text-2xl font-bold text-primary">₹2,200</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {standardSamagri.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {lang === 'hi' ? item.hi : item.en}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Custom Set */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Card className="h-full border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-primary mb-1">
                        {lang === 'hi' ? 'प्रीमियम' : 'PREMIUM'}
                      </div>
                      <CardTitle className="text-lg">
                        {lang === 'hi' ? 'कस्टम सामग्री सेट' : 'Custom Samagri Set'}
                      </CardTitle>
                    </div>
                    <span className="text-2xl font-bold text-primary">₹4,500</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {lang === 'hi'
                      ? 'स्टैंडर्ड सेट की सभी सामग्री + अतिरिक्त कस्टम आइटम, तैयार किए गए:'
                      : 'Everything in Standard Set + additional custom items, prepared according to:'}
                  </p>
                  <div className="space-y-3">
                    {customSamagri.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {lang === 'hi' ? item.hi : item.en}
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

      {/* Documentation Assistance */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {lang === 'hi' ? 'दस्तावेज़ सहायता' : 'Documentation Assistance'}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'अंतिम संस्कार से संबंधित सभी दस्तावेज़ों और कागज़ी कार्रवाई में सहायता। हम समन्वय और मार्गदर्शन प्रदान करते हैं।'
                  : 'Assistance with all funeral-related documentation and paperwork. We provide coordination and guidance throughout.'}
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    {lang === 'hi' ? 'कृपया ध्यान दें:' : 'Please note:'}
                  </strong>{' '}
                  {lang === 'hi'
                    ? 'आविरन दस्तावेज़ प्रक्रिया में समन्वय सहायता प्रदान करता है। अंतिम स्वीकृति और जारी करना संबंधित सरकारी प्राधिकरणों द्वारा किया जाता है।'
                    : 'Aaviran provides coordination assistance with documentation processes. Final approval and issuance is done by the respective government authorities.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {documentationList.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clipboard className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">
                    {lang === 'hi' ? item.hi : item.en}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
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
              {lang === 'hi' ? 'सेवा मूल्य सूची' : 'Service Pricing'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'पारदर्शी मूल्य निर्धारण। सभी मूल्य सांकेतिक हैं और परिस्थिति के अनुसार भिन्न हो सकते हैं।'
                : 'Transparent pricing. All prices are indicative and may vary based on specific requirements.'}
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pricingData.map((group, groupIndex) => (
              <motion.div key={groupIndex} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-primary">
                      {lang === 'hi' ? group.category.hi : group.category.en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-0">
                      {group.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                        >
                          <span className="text-foreground text-sm">
                            {lang === 'hi' ? item.hi : item.en}
                          </span>
                          <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            {t('pkg.note')}
          </motion.p>
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
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'सहायता के लिए अभी संपर्क करें'
                : 'Contact Us for Assistance'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'किसी भी सेवा के बारे में जानकारी या तुरंत सहायता के लिए हमसे संपर्क करें। हमारी टीम 24 घंटे उपलब्ध है।'
                : 'Contact us for information about any service or for immediate assistance. Our team is available 24 hours.'}
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
