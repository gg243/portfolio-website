import { motion, useScroll, useTransform } from "motion/react";

function ParrallaxBackground() {
  const { scrollYProgress } = useScroll();
  const mount3y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const planetx = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const mount2y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const mount1y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/10">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background sky */}
        <div
          className="absolute h-screen inset-0 w-full -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain3 */}
        <motion.div
          className="absolute h-screen inset-0 w-full -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mount3y,
          }}
        />
        {/* planets */}
        <motion.div
          className="absolute h-screen inset-0 w-full -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            left: "-50px",
            x: planetx,
          }}
        />
        {/* mountain2 */}
        <motion.div
          className="absolute h-screen inset-0 w-full -z-20 "
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mount2y,
          }}
        />
        {/* mountain1 */}
        <motion.div
          className="absolute h-screen inset-0 w-full -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mount1y,
          }}
        />
      </div>
    </section>
  );
}

export default ParrallaxBackground;
