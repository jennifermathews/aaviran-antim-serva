import { useI18n } from '@/lib/i18n'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Phone, MessageCircle, HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'Are you available at night?', a: 'Yes. Aaviran provides 24-hour assistance throughout the year.', qHi: 'क्या आप रात में उपलब्ध हैं?', aHi: 'हाँ। आविरन पूरे वर्ष 24 घंटे सहायता प्रदान करता है।' },
  { q: 'Can you collect the deceased from a residence?', a: 'Yes. Transportation can be coordinated from residences, hospitals, care facilities, and other permitted locations.', qHi: 'क्या आप निवास से शव ले सकते हैं?', aHi: 'हाँ। निवास, अस्पताल, देखभाल सुविधाओं और अन्य अनुमत स्थानों से परिवहन की व्यवस्था की जा सकती है।' },
  { q: 'Do you provide funeral services outside Delhi?', a: 'Yes. Delhi NCR and interstate arrangements can be coordinated.', qHi: 'क्या आप दिल्ली के बाहर अंतिम संस्कार सेवाएं प्रदान करते हैं?', aHi: 'हाँ। दिल्ली एनसीआर और अंतरराज्यीय व्यवस्था की जा सकती है।' },
  { q: 'Can you arrange a priest?', a: 'Yes. Priest or religious officiant coordination can be arranged according to the family\'s tradition and preference.', qHi: 'क्या आप पंडित की व्यवस्था कर सकते हैं?', aHi: 'हाँ। परिवार की परंपरा और पसंद के अनुसार पुरोहित या धार्मिक पदाधिकारी की व्यवस्था की जा सकती है।' },
  { q: 'Can you arrange funeral flowers?', a: 'Yes. Basic, traditional, and premium floral arrangements are available.', qHi: 'क्या आप अंतिम संस्कार के फूलों की व्यवस्था कर सकते हैं?', aHi: 'हाँ। बेसिक, पारंपरिक और प्रीमियम पुष्प सज्जा उपलब्ध है।' },
  { q: 'Can you arrange funeral samagri?', a: 'Yes. Standard and custom samagri packages are available.', qHi: 'क्या आप अंतिम संस्कार सामग्री की व्यवस्था कर सकते हैं?', aHi: 'हाँ। मानक और कस्टम सामग्री पैकेज उपलब्ध हैं।' },
  { q: 'Can you help with cremation arrangements?', a: 'Yes. The team can coordinate the required arrangements and provide practical assistance.', qHi: 'क्या आप दाह संस्कार की व्यवस्था में मदद कर सकते हैं?', aHi: 'हाँ। टीम आवश्यक व्यवस्थाओं का समन्वय और व्यावहारिक सहायता प्रदान कर सकती है।' },
  { q: 'Can you arrange burial services?', a: 'Yes. Burial coordination is available depending on cemetery availability and family requirements.', qHi: 'क्या आप दफन सेवाओं की व्यवस्था कर सकते हैं?', aHi: 'हाँ। कब्रिस्तान की उपलब्धता और परिवार की आवश्यकताओं के अनुसार दफन समन्वय उपलब्ध है।' },
  { q: 'Can you help with death certificate procedures?', a: 'The team can provide guidance and administrative coordination, but the official certificate is issued by the appropriate authority.', qHi: 'क्या आप मृत्यु प्रमाणपत्र प्रक्रियाओं में मदद कर सकते हैं?', aHi: 'टीम मार्गदर्शन और प्रशासनिक समन्वय प्रदान कर सकती है, लेकिन आधिकारिक प्रमाणपत्र उचित प्राधिकारी द्वारा जारी किया जाता है।' },
  { q: 'Can you arrange transportation to another city?', a: 'Yes. Long-distance and interstate transportation can be coordinated.', qHi: 'क्या आप दूसरे शहर में परिवहन की व्यवस्था कर सकते हैं?', aHi: 'हाँ। लंबी दूरी और अंतरराज्यीय परिवहन की व्यवस्था की जा सकती है।' },
  { q: 'Do you offer international transportation?', a: 'Yes, international repatriation coordination is available on a case-by-case basis.', qHi: 'क्या आप अंतरराष्ट्रीय परिवहन प्रदान करते हैं?', aHi: 'हाँ, मामले के आधार पर अंतरराष्ट्रीय प्रत्यावर्तन समन्वय उपलब्ध है।' },
  { q: 'Can families choose their own religious arrangements?', a: 'Yes. Families can specify their preferred customs, traditions, religious representatives, and ceremony requirements.', qHi: 'क्या परिवार अपनी धार्मिक व्यवस्थाएं चुन सकते हैं?', aHi: 'हाँ। परिवार अपनी पसंदीदा रीति-रिवाज, परंपराएं, धार्मिक प्रतिनिधि और अनुष्ठान आवश्यकताएं निर्दिष्ट कर सकते हैं।' },
  { q: 'Can you arrange a prayer meeting?', a: 'Yes. Prayer and memorial gatherings can be coordinated.', qHi: 'क्या आप प्रार्थना सभा की व्यवस्था कर सकते हैं?', aHi: 'हाँ। प्रार्थना और स्मारक सभाओं की व्यवस्था की जा सकती है।' },
  { q: 'Can you arrange an urn?', a: 'Yes. Basic, brass, and memorial urn options are available.', qHi: 'क्या आप कलश की व्यवस्था कर सकते हैं?', aHi: 'हाँ। बेसिक, पीतल और स्मारक कलश विकल्प उपलब्ध हैं।' },
  { q: 'Do you provide pre-arrangement services?', a: 'Yes. Families can discuss funeral preferences and practical arrangements in advance.', qHi: 'क्या आप पूर्व-व्यवस्था सेवाएं प्रदान करते हैं?', aHi: 'हाँ। परिवार पहले से अंतिम संस्कार प्राथमिकताओं और व्यावहारिक व्यवस्थाओं पर चर्चा कर सकते हैं।' },
  { q: 'Can someone visit the office to discuss arrangements?', a: 'Yes. Families can arrange an appointment or speak with the team by phone.', qHi: 'क्या कोई कार्यालय में आकर व्यवस्थाओं पर चर्चा कर सकता है?', aHi: 'हाँ। परिवार अपॉइंटमेंट ले सकते हैं या फोन पर टीम से बात कर सकते हैं।' },
  { q: 'Is there a minimum package requirement?', a: 'No. Families can request individual services instead of selecting a complete package.', qHi: 'क्या न्यूनतम पैकेज आवश्यकता है?', aHi: 'नहीं। परिवार संपूर्ण पैकेज चुनने के बजाय व्यक्तिगत सेवाओं का अनुरोध कर सकते हैं।' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export function FaqPage() {
  const { lang, t } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">
                {lang === 'hi' ? 'सामान्य प्रश्न' : 'Common Questions'}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('section.faq')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              {t('section.faq.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <AccordionItem
                    value={`faq-${index}`}
                    className="border border-border/60 rounded-lg px-4 md:px-6 bg-card shadow-sm"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4 md:py-5 hover:no-underline">
                      {lang === 'hi' ? faq.qHi : faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 md:pb-5 leading-relaxed">
                      {lang === 'hi' ? faq.aHi : faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {lang === 'hi' ? 'अभी भी प्रश्न हैं?' : 'Still have questions?'}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              {lang === 'hi'
                ? 'हमारी टीम आपकी सहायता के लिए 24/7 उपलब्ध है। कॉल करें या व्हाट्सएप पर संपर्क करें।'
                : 'Our team is available 24/7 to assist you. Call us or reach out on WhatsApp.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+911148627310">
                  <Phone className="h-5 w-5 mr-2" />
                  {lang === 'hi' ? 'अभी कॉल करें' : 'Call Now'}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/919810467218"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {lang === 'hi' ? 'व्हाट्सएप करें' : 'WhatsApp Us'}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
