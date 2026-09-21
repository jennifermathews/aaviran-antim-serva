import { useI18n } from '@/lib/i18n'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, Quote } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export function GalleryPage() {
  const { t, lang } = useI18n()

  const galleryItems = [
    {
      src: '/services-floral.webp',
      caption: lang === 'hi' ? 'पुष्प सज्जा' : 'Floral Arrangements',
    },
    {
      src: '/services-memorial.webp',
      caption: lang === 'hi' ? 'स्मारक सज्जा' : 'Memorial Setup',
    },
    {
      src: '/gallery-ceremony.webp',
      caption: lang === 'hi' ? 'प्रार्थना अनुष्ठान' : 'Prayer Ceremony',
    },
    {
      src: '/gallery-flowers.webp',
      caption: lang === 'hi' ? 'माला निर्माण' : 'Garland Crafting',
    },
    {
      src: '/gallery-venue.webp',
      caption: lang === 'hi' ? 'स्थल सज्जा' : 'Venue Decoration',
    },
    {
      src: '/services-pandit.webp',
      caption: lang === 'hi' ? 'धार्मिक अनुष्ठान' : 'Religious Ceremony',
    },
  ]

  const testimonials = [
    {
      text: 'The team handled everything with remarkable calm and dignity. At a time when we were struggling to make even simple decisions, having one person coordinate the arrangements was invaluable.',
      textHi:
        'टीम ने सब कुछ उल्लेखनीय शांति और गरिमा के साथ संभाला। एक समय जब हम साधारण निर्णय लेने में भी संघर्ष कर रहे थे, एक व्यक्ति द्वारा व्यवस्थाओं का समन्वय अमूल्य था।',
      author: 'Rhea Malhotra',
      location: 'New Delhi',
    },
    {
      text: 'We needed to bring our grandfather from Delhi to Dehradun. Aaviran coordinated the transport and paperwork without making the process feel overwhelming.',
      textHi:
        'हमें अपने दादाजी को दिल्ली से देहरादून लाना था। आविरन ने परिवहन और कागजी कार्रवाई का इस तरह समन्वय किया कि प्रक्रिया बोझिल नहीं लगी।',
      author: 'Abeer Khanna',
      location: 'Dehradun',
    },
    {
      text: 'Everything was explained clearly before we agreed to anything. There was no pressure to choose unnecessary services.',
      textHi:
        'हमारी सहमति से पहले सब कुछ स्पष्ट रूप से समझाया गया। अनावश्यक सेवाओं को चुनने का कोई दबाव नहीं था।',
      author: 'Niharika Wadhwa',
      location: 'South Delhi',
    },
    {
      text: "The arrangements for the prayer gathering were handled sensitively and exactly according to our family's wishes.",
      textHi:
        'प्रार्थना सभा की व्यवस्थाएं संवेदनशीलता से और हमारे परिवार की इच्छाओं के अनुसार ठीक से की गईं।',
      author: 'Kairav Bedi',
      location: 'Gurgaon',
    },
    {
      text: 'Professional, quiet and respectful throughout. That mattered enormously to our family.',
      textHi:
        'पूरी प्रक्रिया में पेशेवर, शांत और सम्मानजनक। यह हमारे परिवार के लिए बहुत मायने रखता था।',
      author: 'Meher Sondhi',
      location: 'New Delhi',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {t('section.gallery')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {t('section.gallery.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden rounded-xl h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium text-foreground">
                      {item.caption}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('section.testimonials')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.testimonials.desc')}
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={index >= 3 ? 'md:col-span-1 lg:col-span-1' : ''}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground italic leading-relaxed mb-4">
                      {lang === 'hi' ? testimonial.textHi : testimonial.text}
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
            <div className="mt-6">
              <Button
                variant="link"
                className="text-primary-foreground/80 hover:text-primary-foreground"
                asChild
              >
                <Link to="/contact">
                  {lang === 'hi'
                    ? 'संपर्क पृष्ठ पर जाएं →'
                    : 'Visit Contact Page →'}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
