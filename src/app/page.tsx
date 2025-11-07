"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Roasted Bliss"
          button={{
            text: "Visit Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Where Every Sip Tells a Story"
          description="Experience the perfect blend of artisanal coffee craft and cozy atmosphere. From our signature roasted beans to handcrafted beverages, discover your new favorite coffee destination."
          tag="Coffee Excellence"
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop interior"
          buttons={[
            {
              text: "Order Now",
              href: "pricing"
            },
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Craft"
          description="At Roasted Bliss, we believe every cup should be an experience. From carefully sourcing premium beans to perfecting our roasting process, we craft each beverage with passion and precision. Our skilled baristas blend traditional techniques with modern innovation to create the perfect cup every time."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Signature Drinks"
          description="Handcrafted beverages made with premium beans and artisanal techniques"
          tag="Featured Menu"
          features={[
            {
              title: "Signature Latte",
              description: "Rich espresso blended with steamed milk and our signature vanilla bean syrup",
              imageSrc: "https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Signature latte with beautiful latte art"
            },
            {
              title: "Cold Brew Delight",
              description: "Smooth cold brew coffee served over ice with a hint of caramel",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee in glass"
            },
            {
              title: "Perfect Espresso",
              description: "Double shot of our premium roasted beans, perfectly extracted",
              imageSrc: "https://images.pexels.com/photos/942801/pexels-photo-942801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Espresso shot with coffee beans"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Coffee Bean Collection"
          description="Premium coffee beans roasted to perfection for home brewing"
          tag="Fresh Roasted"
          products={[
            {
              id: "1",
              brand: "Roasted Bliss",
              name: "House Blend Coffee Beans",
              price: "$24.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "House blend coffee beans"
            },
            {
              id: "2",
              brand: "Roasted Bliss",
              name: "Ethiopian Single Origin",
              price: "$29.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ethiopian coffee beans"
            },
            {
              id: "3",
              brand: "Roasted Bliss",
              name: "Colombian Dark Roast",
              price: "$26.99",
              rating: 4,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Colombian dark roast beans"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Our Menu Prices"
          description="Fresh coffee and beverages made to order"
          tag="Daily Menu"
          plans={[
            {
              id: "1",
              price: "$4.50",
              name: "Classic Espresso",
              buttons: [
                {
                  text: "Order Now",
                  onClick: "() => console.log('Order espresso')"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Double shot espresso",
                "Perfectly extracted",
                "Served hot",
                "Premium beans"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$6.25",
              name: "Signature Latte",
              buttons: [
                {
                  text: "Order Now",
                  onClick: "() => console.log('Order latte')"
                },
                {
                  text: "Customize",
                  href: "contact"
                }
              ],
              features: [
                "Rich espresso base",
                "Steamed milk perfection",
                "Vanilla bean syrup",
                "Beautiful latte art"
              ]
            },
            {
              id: "3",
              price: "$5.75",
              name: "Cold Brew Special",
              buttons: [
                {
                  text: "Order Now",
                  onClick: "() => console.log('Order cold brew')"
                },
                {
                  text: "Details",
                  href: "about"
                }
              ],
              features: [
                "Smooth cold extraction",
                "Served over ice",
                "Caramel notes",
                "Refreshing finish"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Coffee Excellence by Numbers"
          description="Our commitment to quality reflected in every cup"
          tag="Stats"
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Cups Served Daily"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "15+",
              description: "Premium Bean Varieties"
            },
            {
              id: "4",
              value: "5★",
              description: "Average Rating"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who visit us daily"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Marketing Director",
              testimonial: "The best coffee in town! Their signature latte is absolutely perfect, and the baristas are incredibly skilled. This has become my daily morning routine.",
              imageSrc: "https://images.pexels.com/photos/5709245/pexels-photo-5709245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Developer",
              testimonial: "As someone who works remotely, I spend a lot of time in coffee shops. Roasted Bliss has the perfect atmosphere for productivity and their espresso is exceptional.",
              imageSrc: "https://images.pexels.com/photos/4050473/pexels-photo-4050473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Graduate Student",
              testimonial: "I love coming here to study. The cold brew is amazing and the staff always remembers my order. It feels like a home away from home.",
              imageSrc: "https://images.pexels.com/photos/4473507/pexels-photo-4473507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Local Business Owner",
              testimonial: "I've been a regular for over a year now. The quality is consistently excellent and the atmosphere is perfect for both casual meetings and quiet reflection.",
              imageSrc: "https://images.pexels.com/photos/7697916/pexels-photo-7697916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee shop"
          tag="Help"
          imageSrc="https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Barista preparing coffee"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM. We're here early for your morning coffee and stay late for your evening study sessions."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Absolutely! We offer oat milk, almond milk, soy milk, and coconut milk for all our beverages. Our baristas are trained to ensure no cross-contamination for those with allergies."
            },
            {
              id: "3",
              title: "Can I buy coffee beans to take home?",
              content: "Yes! We sell our freshly roasted coffee beans in 250g and 500g bags. All our signature blends are available for purchase, and we can grind them to your preferred coarseness."
            },
            {
              id: "4",
              title: "Do you have WiFi and seating for remote work?",
              content: "We have free high-speed WiFi and comfortable seating areas perfect for remote work or studying. We also have power outlets at most tables and a quiet zone for focused work."
            },
            {
              id: "5",
              title: "Do you cater events or offer bulk orders?",
              content: "Yes, we provide catering services for corporate events, meetings, and special occasions. We can supply coffee, pastries, and setup service. Contact us for custom quotes and planning."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Us Today"
          description="Stop by for a perfect cup of coffee or get in touch with any questions about our beans, catering services, or special events."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your coffee preferences, catering needs, or any questions...",
            rows: 4,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional barista at work"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="Roasted Bliss"
          copyrightText="© 2025 | Roasted Bliss Coffee"
          columns={[
            {
              title: "Visit Us",
              items: [
                {
                  label: "Our Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "contact"
                },
                {
                  label: "Directions",
                  href: "contact"
                }
              ]
            },
            {
              title: "Menu",
              items: [
                {
                  label: "Signature Drinks",
                  href: "feature"
                },
                {
                  label: "Coffee Beans",
                  href: "product"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Coffee Process",
                  href: "about"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}