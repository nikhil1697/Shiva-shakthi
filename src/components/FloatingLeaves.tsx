import { motion } from 'motion/react';

const LEAF_SHAPES = [
  // Shape 0: Bodhi Leaf (Heart shape with a long tip)
  "M12 2C16 6 18 10 18 14C18 17.5 15 20.5 11.5 20.5C8 20.5 5 17.5 5 14C5 10 7 6 11 2 C11.3 1.7 11.7 1.7 12 2Z",
  // Shape 1: Slender Willow Leaf
  "M12 2C15 6 16 12 12 20C8 12 9 6 12 2Z",
  // Shape 2: Classic Oval Leaf
  "M12 3C16.5 6.5 16.5 14.5 12 20C7.5 14.5 7.5 6.5 12 3Z"
];

const LEAF_GRADIENTS = [
  "url(#leafGradTeal)",
  "url(#leafGradForest)",
  "url(#leafGradGold)"
];

export default function FloatingLeaves() {
  // Create a static deterministic set of 18 leaves to avoid hydration mismatches
  const leaves = Array.from({ length: 18 }).map((_, index) => {
    const left = `${(index * 17) % 95}%`; // distribute horizontally
    const size = 18 + ((index * 7) % 20); // sizes between 18px and 38px
    const duration = 20 + ((index * 13) % 22); // durations between 20s and 42s
    const delay = ((index * 9) % 18); // delay between 0s and 18s
    const opacity = 0.18 + ((index * 5) % 4) * 0.08; // opacity between 0.18 and 0.42
    const shapeType = index % 3;
    const gradient = LEAF_GRADIENTS[index % 3];
    const swayRange = 30 + ((index * 11) % 40); // sway range between 30px and 70px

    return {
      id: index,
      left,
      size,
      duration,
      delay,
      opacity,
      shapePath: LEAF_SHAPES[shapeType],
      gradient,
      swayRange
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Hidden SVG to define reusable gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="leafGradTeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#16827D" />
            <stop offset="100%" stopColor="#28A5A0" />
          </linearGradient>
          <linearGradient id="leafGradForest" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#203429" />
            <stop offset="100%" stopColor="#2E483B" />
          </linearGradient>
          <linearGradient id="leafGradGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D8CEB8" />
            <stop offset="100%" stopColor="#EADDB9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Render leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute top-0"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            opacity: leaf.opacity,
          }}
          initial={{ y: "-10vh", x: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [0, leaf.swayRange, -leaf.swayRange, leaf.swayRange / 2, 0],
            rotate: [0, leaf.id % 2 === 0 ? 360 : -360]
          }}
          transition={{
            y: {
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay
            },
            x: {
              duration: leaf.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: leaf.delay
            },
            rotate: {
              duration: leaf.duration * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay
            }
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={leaf.shapePath}
              fill={leaf.gradient}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="0.5"
            />
            {/* Draw a subtle main leaf vein */}
            <path
              d="M12 2C12 2 12 12 12 20"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
