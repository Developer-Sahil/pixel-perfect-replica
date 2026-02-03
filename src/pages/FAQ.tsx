import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping typically takes 5-7 business days within the US. International orders may take 10-14 business days. Express shipping options are available at checkout for faster delivery.",
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive an email with a tracking number and link. You can also track your order by logging into your account or contacting our customer support team.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location. Customs fees and import duties may apply and are the responsibility of the customer.",
        },
        {
          q: "What if my order is lost or damaged?",
          a: "If your order is lost or arrives damaged, please contact us immediately. We'll work with the carrier to resolve the issue and ensure you receive your items or a full refund.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unworn items in original condition with tags attached. Items must be returned in their original packaging. Sale items and final sale items are not eligible for returns.",
        },
        {
          q: "How do I initiate a return?",
          a: "To start a return, contact our customer service team or visit your account page. We'll provide you with a prepaid return label and instructions for sending your item back.",
        },
        {
          q: "Can I exchange an item for a different size?",
          a: "Yes! We offer free exchanges for different sizes, subject to availability. Contact us within 30 days of receiving your order to arrange an exchange.",
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method. Please allow additional time for your bank to process the refund.",
        },
      ],
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          q: "How do I find my size?",
          a: "Check out our Size Guide page for detailed measurements and fitting tips. If you're between sizes, we generally recommend sizing up for a more comfortable fit.",
        },
        {
          q: "Are your products true to size?",
          a: "Our products are designed to fit true to standard US sizing. However, we recommend checking the size guide for each specific item, as some styles may fit differently.",
        },
        {
          q: "What materials do you use?",
          a: "We use premium, sustainably-sourced materials including organic cotton, recycled polyester, and eco-friendly dyes. Each product page includes detailed material information.",
        },
        {
          q: "How should I care for my items?",
          a: "Care instructions vary by product and are included on the garment label. Generally, we recommend washing in cold water, avoiding bleach, and hanging to dry for best results.",
        },
      ],
    },
    {
      category: "Payment & Security",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are processed securely.",
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use industry-standard SSL encryption to protect your data. We never store your complete credit card information on our servers.",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We partner with Shop Pay to offer interest-free installment plans on qualifying orders. Select Shop Pay at checkout to see your options.",
        },
        {
          q: "Can I use multiple discount codes?",
          a: "Only one discount code can be applied per order. However, free shipping offers and loyalty rewards can often be combined with promotional codes.",
        },
      ],
    },
    {
      category: "Account & Support",
      questions: [
        {
          q: "Do I need an account to place an order?",
          a: "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and enjoy faster checkout on future purchases.",
        },
        {
          q: "How do I contact customer support?",
          a: "You can reach us via email at support@twistedplant.com, by phone at +1 (555) 123-4567, or through the contact form on our Contact Us page. We respond within 24-48 hours.",
        },
        {
          q: "How can I unsubscribe from emails?",
          a: "You can unsubscribe by clicking the 'unsubscribe' link at the bottom of any marketing email. You'll still receive transactional emails about your orders.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about orders, shipping, returns, and more.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border/50 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-foreground font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground pb-2">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
