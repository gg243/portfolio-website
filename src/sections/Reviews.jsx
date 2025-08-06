import { AnimatedTestimonials } from "../components/AnimatedTestimonials";
import { testimonials } from "../constant";

const Reviews = () => {
  return (
    <section className="c-space  mt-32">
      <h2 className="text-3xl"> Testimominals/ Quotes</h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Reviews;
