import { primaryColor, secondaryColor } from "@/constants/colors";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

function About() {
  return (
    <div className={`bg-${secondaryColor} min-h-screen`}>
      {/* Hero Section */}
      <div className={`bg-${primaryColor} py-16 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`headings-font text-4xl md:text-6xl text-${secondaryColor} mb-6`}
          >
            About Us – KukkeKart
          </h1>
          <p
            className={`body-font text-lg md:text-xl text-${secondaryColor} leading-relaxed`}
          >
            Nestled in the serene hills of Kukke Subrahmanya, KukkeKart was born
            with a simple promise — to deliver purity in every product.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <ScrollAnimation>
          <div className="mb-16">
            <p
              className={`body-font text-lg text-${primaryColor} leading-relaxed mb-8`}
            >
              We are an emerging homegrown brand dedicated to bringing you
              premium spices, dry fruits, and natural food essentials sourced
              directly from trusted farmers, plantations, and authentic growers
              across the region.
            </p>
            <p
              className={`body-font text-lg text-${primaryColor} leading-relaxed`}
            >
              At KukkeKart, we believe that nature offers the best when handled
              with honesty. That&apos;s why every product is carefully selected,
              hygienically processed, and packed with love to retain its natural
              aroma, freshness, and nutritional value.
            </p>
          </div>
        </ScrollAnimation>

        {/* What We Offer */}
        <ScrollAnimation>
          <div className={`bg-${primaryColor} rounded-3xl p-8 mb-16`}>
            <h2
              className={`headings-font text-3xl md:text-4xl text-${secondaryColor} mb-6`}
            >
              What We Offer
            </h2>
            <ul className={`body-font text-${secondaryColor} space-y-3`}>
              <li>
                • Premium-quality spices like pepper, turmeric, cardamom, cloves
                & more
              </li>
              <li>
                • Handpicked dry fruits including cashews, almonds, raisins &
                figs
              </li>
              <li>• Naturally sourced and chemical-free products</li>
              <li>
                • Honest pricing & authentic flavours from the Western Ghats
              </li>
            </ul>
          </div>
        </ScrollAnimation>

        {/* Our Commitment */}
        <ScrollAnimation>
          <div className="mb-16">
            <h2
              className={`headings-font text-3xl md:text-4xl text-${primaryColor} mb-6`}
            >
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`bg-${secondaryColor} border-2 border-${primaryColor} rounded-2xl p-6`}
              >
                <ul className={`body-font text-${primaryColor} space-y-3`}>
                  <li>• Purity in every ingredient</li>
                  <li>• Transparency in sourcing</li>
                  <li>• Quality you can trust</li>
                  <li>• Customer-first service</li>
                </ul>
              </div>
              <div
                className={`body-font text-${primaryColor} flex items-center`}
              >
                <p className="text-lg leading-relaxed">
                  KukkeKart is more than a brand — it is a reflection of the
                  rich culture, purity, and devotion that Kukke Subrahmanya is
                  known for. We are here to serve your kitchen with products
                  that are Pure from Nature.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollAnimation>
            <div className={`bg-${primaryColor} rounded-3xl p-8`}>
              <h2
                className={`headings-font text-3xl text-${secondaryColor} mb-6`}
              >
                Our Mission
              </h2>
              <p className={`body-font text-${secondaryColor} leading-relaxed`}>
                To bring the purest, freshest, and most authentic spices and dry
                fruits from Kukke Subrahmanya and the Western Ghats directly to
                every home. We are committed to honest sourcing, uncompromised
                quality, and customer-first service, ensuring that every product
                reflects nature&apos;s true goodness.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div
              className={`bg-${secondaryColor} border-2 border-${primaryColor} rounded-3xl p-8`}
            >
              <h2
                className={`headings-font text-3xl text-${primaryColor} mb-6`}
              >
                Our Vision
              </h2>
              <p className={`body-font text-${primaryColor} leading-relaxed`}>
                To become a trusted household brand known for purity,
                transparency, and premium quality, while uplifting local farmers
                and promoting the natural richness of the Western Ghats. We aim
                to create a strong, sustainable marketplace where tradition,
                health, and nature come together.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;
