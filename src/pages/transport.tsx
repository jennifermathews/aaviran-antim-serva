import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, MessageCircle, Truck, Car, MapPin, Plane, IndianRupee, Route, Globe, Shield } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function TransportPage() {
  const { t, lang } = useI18n()

  const vehicleTypes = [
    {
      icon: Truck,
      en: 'Standard Hearse',
      hi: 'स्टैंडर्ड शव वाहन',
      descEn: 'Within Delhi — dignified transportation for local cremation grounds and burial sites.',
      descHi: 'दिल्ली के भीतर — स्थानीय श्मशान घाट और दफ़न स्थलों के लिए गरिमापूर्ण परिवहन।',
    },
    {
      icon: Car,
      en: 'Premium Hearse (AC)',
      hi: 'प्रीमियम शव वाहन (AC)',
      descEn: 'Air-conditioned vehicle with family seating area for comfortable accompaniment.',
      descHi: 'परिवार के लिए बैठने की जगह के साथ वातानुकूलित वाहन।',
    },
    {
      icon: Route,
      en: 'Long-Distance Hearse',
      hi: 'लंबी दूरी का शव वाहन',
      descEn: 'Intercity transportation with proper preservation arrangements for safe transit.',
      descHi: 'सुरक्षित परिवहन के लिए उचित संरक्षण व्यवस्था के साथ अंतर-शहर परिवहन।',
    },
    {
      icon: Shield,
      en: 'Transfer Vehicle',
      hi: 'ट्रांसफर वाहन',
      descEn: 'Hospital to residence or residence to cremation ground transfers within Delhi.',
      descHi: 'दिल्ली के भीतर अस्पताल से निवास या निवास से श्मशान घाट तक स्थानांतरण।',
    },
    {
      icon: Car,
      en: 'Family Vehicle Coordination',
      hi: 'परिवार वाहन समन्वय',
      descEn: 'Coordination of additional vehicles for family members attending the funeral.',
      descHi: 'अंतिम संस्कार में शामिल परिवार के सदस्यों के लिए अतिरिक्त वाहन समन्वय।',
    },
  ]

  const delhiAreas = [
    'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi', 'Central Delhi',
    'New Delhi', 'Dwarka', 'Rohini', 'Pitampura', 'Vasant Kunj',
    'Greater Kailash', 'Lajpat Nagar', 'Karol Bagh', 'Chandni Chowk', 'Saket',
  ]

  const ncrCities = [
    'Gurgaon (Gurugram)', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida',
  ]

  const interstateRoutes = [
    { city: 'Chandigarh', distance: '~250 km' },
    { city: 'Jaipur', distance: '~280 km' },
    { city: 'Dehradun', distance: '~250 km' },
    { city: 'Lucknow', distance: '~550 km' },
    { city: 'Agra', distance: '~210 km' },
    { city: 'Haridwar', distance: '~220 km' },
    { city: 'Amritsar', distance: '~450 km' },
    { city: 'Jammu', distance: '~600 km' },
    { city: 'Shimla', distance: '~350 km' },
    { city: 'Meerut', distance: '~70 km' },
  ]

  const repatriationServices = [
    { en: 'Airport Coordination & Documentation', hi: 'हवाई अड्डा समन्वय और दस्तावेज़ीकरण' },
    { en: 'NOC & Death Certificate Assistance', hi: 'एनओसी और मृत्यु प्रमाणपत्र सहायता' },
    { en: 'Embalming & Preservation', hi: 'शव संरक्षण (एम्बामिंग)' },
    { en: 'Zinc-Lined Coffin Arrangement', hi: 'ज़िंक-लाइन्ड ताबूत व्यवस्था' },
    { en: 'Airline Coordination', hi: 'एयरलाइन समन्वय' },
    { en: 'Embassy / Consulate Liaison', hi: 'दूतावास / वाणिज्य दूतावास समन्वय' },
    { en: 'Customs Clearance Assistance', hi: 'सीमा शुल्क निकासी सहायता' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services-transport.webp"
            alt={lang === 'hi' ? 'परिवहन सेवाएं' : 'Transportation Services'}
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
            {t('section.transport')}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('section.transport.desc')}
          </p>
        </motion.div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'हमारे वाहन' : 'Our Vehicles'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'हर ज़रूरत के लिए गरिमापूर्ण और विश्वसनीय वाहन उपलब्ध हैं।'
                : 'Dignified and reliable vehicles available for every requirement.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <vehicle.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">
                      {lang === 'hi' ? vehicle.hi : vehicle.en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {lang === 'hi' ? vehicle.descHi : vehicle.descEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Coverage */}
      <section className="py-16 md:py-24 bg-card">
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
              {lang === 'hi' ? 'परिवहन कवरेज' : 'Transportation Coverage'}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{lang === 'hi' ? 'दिल्ली क्षेत्र' : 'Delhi Areas'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {delhiAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
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
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{lang === 'hi' ? 'एनसीआर शहर' : 'NCR Cities'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ncrCities.map((city, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{city}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interstate Routes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Route className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'अंतर-राज्यीय मार्ग' : 'Interstate Routes'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'दिल्ली से प्रमुख शहरों तक लंबी दूरी का परिवहन उपलब्ध है।'
                : 'Long-distance transportation available from Delhi to major cities.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {interstateRoutes.map((route, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">{route.city}</p>
                    <p className="text-sm text-muted-foreground">{route.distance}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Repatriation */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'अंतर्राष्ट्रीय प्रत्यावर्तन' : 'International Repatriation'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'विदेश से शव लाने या विदेश भेजने के लिए संपूर्ण दस्तावेज़ीकरण और समन्वय सहायता।'
                : 'Complete documentation and coordination assistance for bringing remains from abroad or sending abroad.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repatriationServices.map((service, index) => (
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
                    <Globe className="w-5 h-5 text-primary flex-shrink-0" />
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
              {lang === 'hi' ? 'परिवहन मूल्य' : 'Transportation Pricing'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {lang === 'hi'
                ? 'पारदर्शी मूल्य निर्धारण। अतिरिक्त शुल्क पहले से बताया जाता है।'
                : 'Transparent pricing. Additional charges communicated upfront.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {lang === 'hi' ? 'बेसिक शव वाहन' : 'Basic Hearse'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">₹4,500</p>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi' ? 'दिल्ली के भीतर' : 'Within Delhi'}
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
                    {lang === 'hi' ? 'प्रीमियम शव वाहन' : 'Premium Hearse'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">₹7,500</p>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi' ? 'AC, परिवार बैठक के साथ' : 'AC with family seating'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {lang === 'hi' ? 'लंबी दूरी' : 'Long Distance'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-2">₹28<span className="text-lg">/km</span></p>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi' ? 'अंतर-शहर परिवहन' : 'Intercity transportation'}
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
            <Truck className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'परिवहन समन्वय के लिए संपर्क करें'
                : 'Contact Us for Transport Coordination'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang === 'hi'
                ? '24 घंटे उपलब्ध। तत्काल परिवहन व्यवस्था के लिए अभी कॉल करें या व्हाट्सएप करें।'
                : 'Available 24 hours. Call now or WhatsApp for immediate transport arrangements.'}
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
