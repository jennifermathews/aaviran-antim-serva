import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Headphones,
  Truck,
  Building2,
  CalendarClock,
  PhoneCall,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function ContactPage() {
  const { t, lang } = useI18n()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    assistanceType: '',
    contactMethod: 'phone',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactCards = [
    {
      icon: Phone,
      titleEn: 'Phone',
      titleHi: 'फ़ोन',
      value: '+91 11 4862 7310',
      descEn: '24-hour helpline',
      descHi: '24 घंटे हेल्पलाइन',
      href: 'tel:+911148627310',
    },
    {
      icon: MessageCircle,
      titleEn: 'WhatsApp',
      titleHi: 'व्हाट्सएप',
      value: '+91 98104 67218',
      descEn: 'Instant response',
      descHi: 'तुरंत उत्तर',
      href: 'https://wa.me/919810467218',
    },
    {
      icon: Mail,
      titleEn: 'Email',
      titleHi: 'ईमेल',
      value: 'care@aaviranantimseva.in',
      descEn: 'Write to us anytime',
      descHi: 'कभी भी लिखें',
      href: 'mailto:care@aaviranantimseva.in',
    },
    {
      icon: MapPin,
      titleEn: 'Office',
      titleHi: 'कार्यालय',
      value: lang === 'hi'
        ? '14, सुंदर नगर एक्सटेंशन, नई दिल्ली, दिल्ली 110003'
        : '14, Sunder Nagar Extension, New Delhi, Delhi 110003',
      descEn: 'Near Sunder Nagar Market',
      descHi: 'सुंदर नगर मार्केट के पास',
      href: 'https://maps.google.com/?q=14+Sunder+Nagar+Extension+New+Delhi+110003',
    },
  ]

  const assistanceTypes = lang === 'hi'
    ? [
        'तुरंत अंतिम संस्कार सहायता',
        'परिवहन',
        'दाह संस्कार व्यवस्था',
        'दफ़न व्यवस्था',
        'अंतिम संस्कार सामग्री',
        'पुष्प सज्जा',
        'प्रार्थना/स्मारक सेवा',
        'दस्तावेज़ सहायता',
        'अंतरराज्यीय स्थानांतरण',
        'अंतरराष्ट्रीय प्रत्यावर्तन',
        'पूर्व-व्यवस्था परामर्श',
        'अन्य',
      ]
    : [
        'Immediate funeral assistance',
        'Transportation',
        'Cremation arrangements',
        'Burial arrangements',
        'Funeral samagri',
        'Floral arrangements',
        'Prayer/memorial service',
        'Documentation assistance',
        'Interstate transfer',
        'International repatriation',
        'Pre-arrangement consultation',
        'Other',
      ]

  const additionalContacts = [
    {
      icon: Headphones,
      titleEn: 'NCR Desk',
      titleHi: 'एनसीआर डेस्क',
      phone: '+91 98104 67342',
      href: 'tel:+919810467342',
    },
    {
      icon: Truck,
      titleEn: 'Transport Desk',
      titleHi: 'परिवहन डेस्क',
      phone: '+91 98104 67411',
      href: 'tel:+919810467411',
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
            {t('section.contact')}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t('section.contact.desc')}
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <card.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {lang === 'hi' ? card.titleHi : card.titleEn}
                      </h3>
                      <p className="text-sm text-foreground font-medium mb-1 break-all">
                        {card.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {lang === 'hi' ? card.descHi : card.descEn}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Send className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'हमें संदेश भेजें' : 'Send Us a Message'}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {lang === 'hi'
                ? 'नीचे फ़ॉर्म भरें और हमारी टीम जल्द ही आपसे संपर्क करेगी।'
                : 'Fill out the form below and our team will get back to you shortly.'}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/10 dark:border-green-900/30">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {lang === 'hi' ? 'संदेश भेज दिया गया' : 'Message Sent'}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('contact.thankyou')}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild>
                      <a href="tel:+911148627310">
                        <Phone className="w-4 h-4 mr-2" />
                        {t('cta.callnow')}
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a
                        href="https://wa.me/919810467218"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t('cta.whatsapp')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.name')} *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.name')}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.phone')} *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91"
                          required
                        />
                      </div>
                    </div>

                    {/* Email & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.email')}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.email')}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">{t('contact.location')}</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder={
                            lang === 'hi'
                              ? 'सहायता कहां आवश्यक है?'
                              : 'Where is assistance required?'
                          }
                        />
                      </div>
                    </div>

                    {/* Type of Assistance */}
                    <div className="space-y-2">
                      <Label htmlFor="assistanceType">{t('contact.type')}</Label>
                      <select
                        id="assistanceType"
                        name="assistanceType"
                        value={formData.assistanceType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">
                          {lang === 'hi' ? 'सहायता का प्रकार चुनें' : 'Select type of assistance'}
                        </option>
                        {assistanceTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-3">
                      <Label>{t('contact.method')}</Label>
                      <div className="flex flex-wrap gap-6">
                        {[
                          { value: 'phone', labelEn: 'Phone', labelHi: 'फ़ोन', icon: Phone },
                          { value: 'whatsapp', labelEn: 'WhatsApp', labelHi: 'व्हाट्सएप', icon: MessageCircle },
                          { value: 'email', labelEn: 'Email', labelHi: 'ईमेल', icon: Mail },
                        ].map((method) => (
                          <label
                            key={method.value}
                            className="flex items-center gap-2 cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method.value}
                              checked={formData.contactMethod === method.value}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary border-input focus:ring-primary"
                            />
                            <method.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              {lang === 'hi' ? method.labelHi : method.labelEn}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.message')}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          lang === 'hi'
                            ? 'कोई अतिरिक्त जानकारी जो आप साझा करना चाहें...'
                            : 'Any additional information you would like to share...'
                        }
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Additional Contacts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi' ? 'अतिरिक्त संपर्क' : 'Additional Contacts'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {additionalContacts.map((contact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={contact.href} className="block">
                  <Card className="hover:shadow-lg transition-all hover:border-primary/30 cursor-pointer group">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {lang === 'hi' ? contact.titleHi : contact.titleEn}
                        </h3>
                        <p className="text-sm text-primary font-medium">{contact.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <CalendarClock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {lang === 'hi' ? 'कार्यालय समय' : 'Office Hours'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {lang === 'hi' ? 'उपलब्धता' : 'Availability'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi' ? '24 घंटे, 365 दिन' : '24 Hours, 365 Days'}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {lang === 'hi' ? 'परामर्श' : 'Consultation'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi'
                      ? 'फ़ोन, व्यक्तिगत, या परिवार के निवास पर'
                      : 'By phone, in person, or at family\'s residence'}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {lang === 'hi' ? 'कार्यालय' : 'Office Visit'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === 'hi'
                      ? 'सुंदर नगर मार्केट के पास, नई दिल्ली'
                      : 'Near Sunder Nagar Market, New Delhi'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <PhoneCall className="w-16 h-16 text-primary-foreground mx-auto mb-6 animate-pulse" />
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              {lang === 'hi'
                ? 'तुरंत सहायता चाहिए?'
                : 'Need Immediate Assistance?'}
            </h2>
            <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
              {t('contact.emergency')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-w-[220px] text-lg h-14"
              >
                <a href="tel:+911148627310">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 11 4862 7310
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[220px] text-lg h-14 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a
                  href="https://wa.me/919810467218"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
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
