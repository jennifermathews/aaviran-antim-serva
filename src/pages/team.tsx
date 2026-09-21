import { useI18n } from '@/lib/i18n'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, CheckCircle2, Users } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function TeamPage() {
  const { t, lang } = useI18n()

  const members = [
    {
      name: 'Arvayan Mehta',
      initials: 'AM',
      title:
        lang === 'hi'
          ? 'संस्थापक एवं प्रबंध निदेशक'
          : 'Founder & Managing Director',
      desc:
        lang === 'hi'
          ? '2011 में आविरन की स्थापना की, अंतिम संस्कार समन्वय और पारिवारिक सहायता की देखरेख करते हैं।'
          : 'Established Aaviran in 2011. Oversees funeral coordination and family support.',
    },
    {
      name: 'Iraaya Bhasin',
      initials: 'IB',
      title:
        lang === 'hi'
          ? 'पारिवारिक सेवा प्रबंधक'
          : 'Family Services Manager',
      desc:
        lang === 'hi'
          ? 'परिवारों के साथ व्यवस्थाओं का समन्वय, अनुष्ठान नियोजन और सेवा शेड्यूलिंग संभालती हैं।'
          : 'Coordinates arrangements with families, handles ceremony planning and service scheduling.',
    },
    {
      name: 'Nivaan Kohli',
      initials: 'NK',
      title:
        lang === 'hi'
          ? 'संचालन एवं परिवहन समन्वयक'
          : 'Operations & Transport Coordinator',
      desc:
        lang === 'hi'
          ? 'परिवहन, वाहन शेड्यूलिंग, मार्ग समन्वय और अंतरनगरीय स्थानांतरण प्रबंधित करते हैं।'
          : 'Manages transportation, vehicle scheduling, route coordination, and intercity transfers.',
    },
    {
      name: 'Meher Vaid',
      initials: 'MV',
      title:
        lang === 'hi' ? 'दस्तावेज़ समन्वयक' : 'Documentation Coordinator',
      desc:
        lang === 'hi'
          ? 'प्रशासनिक कागजी कार्रवाई और अस्पतालों, नगरपालिका अधिकारियों के साथ समन्वय में सहायता करती हैं।'
          : 'Assists families with administrative paperwork and coordination with hospitals and municipal authorities.',
    },
    {
      name: 'Tavish Anand',
      initials: 'TA',
      title:
        lang === 'hi'
          ? 'स्मारक सेवा समन्वयक'
          : 'Memorial Services Coordinator',
      desc:
        lang === 'hi'
          ? 'पुष्प व्यवस्था, प्रार्थना सभाएं, स्मारक कार्यक्रम और श्रद्धांजलि समन्वय संभालते हैं।'
          : 'Handles floral arrangements, prayer gatherings, memorial events, and tribute coordination.',
    },
    {
      name: 'Yuvan Sethi',
      initials: 'YS',
      title:
        lang === 'hi'
          ? '24 घंटे प्रतिक्रिया समन्वयक'
          : '24-Hour Response Coordinator',
      desc:
        lang === 'hi'
          ? 'रात्रि पूछताछ और तत्काल परिवहन आवश्यकताओं का समन्वय करते हैं।'
          : 'Coordinates after-hours enquiries and urgent transportation requirements.',
    },
  ]

  const expectations = [
    {
      en: 'One dedicated point of contact',
      hi: 'एक समर्पित संपर्क व्यक्ति',
    },
    {
      en: 'Clear explanation of available options',
      hi: 'उपलब्ध विकल्पों की स्पष्ट व्याख्या',
    },
    {
      en: 'Upfront indicative pricing',
      hi: 'अग्रिम सांकेतिक मूल्य निर्धारण',
    },
    { en: 'Respectful communication', hi: 'सम्मानजनक संवाद' },
    {
      en: 'Discreet handling of personal information',
      hi: 'व्यक्तिगत जानकारी का विवेकपूर्ण प्रबंधन',
    },
    {
      en: 'Coordination with relevant facilities',
      hi: 'संबंधित सुविधाओं के साथ समन्वय',
    },
    {
      en: 'Assistance available at any hour',
      hi: 'किसी भी समय सहायता उपलब्ध',
    },
    {
      en: 'No pressure for optional services',
      hi: 'वैकल्पिक सेवाओं के लिए कोई दबाव नहीं',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
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
            {t('section.team')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t('section.team.desc')}
          </p>
        </motion.div>
      </section>

      {/* Team Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'आपकी सेवा में समर्पित लोग'
                : 'The People Behind Your Support'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {lang === 'hi'
                ? 'आविरन अंतिम सेवा के पीछे समर्पित पेशेवरों की एक टीम है जो हर परिवार को करुणा, गरिमा और सम्मान के साथ सेवा प्रदान करने के लिए प्रतिबद्ध है। हमारी टीम का प्रत्येक सदस्य यह सुनिश्चित करता है कि आपको कठिन समय में सहज और सम्मानजनक अनुभव मिले।'
                : 'Behind Aaviran Antim Seva is a team of dedicated professionals committed to serving every family with compassion, dignity, and respect. Each member of our team works to ensure you receive a supportive and dignified experience during a difficult time.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {members.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xl font-bold">
                          {member.initials}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-lg text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {member.title}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Families Can Expect */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'hi'
                ? 'परिवार क्या उम्मीद कर सकते हैं'
                : 'What Families Can Expect'}
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-lg border bg-card"
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Phone className="w-12 h-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {lang === 'hi'
                ? 'हम 24 घंटे आपके लिए उपलब्ध हैं'
                : 'We Are Available 24 Hours For You'}
            </h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              {lang === 'hi'
                ? 'किसी भी सहायता के लिए अभी संपर्क करें। हमारी टीम करुणा और सम्मान के साथ आपकी सेवा में तत्पर है।'
                : 'Contact us now for any assistance. Our team is ready to serve you with compassion and respect.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                asChild
              >
                <a href="tel:+911148627310">
                  <Phone className="w-5 h-5" />
                  {t('cta.callnow')} — +91 11 4862 7310
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/30"
                asChild
              >
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
