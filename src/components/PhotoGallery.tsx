import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  return (
    <section className="py-20">
      <div className="space-y-32 md:space-y-48">
        {photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} index={index} />
        ))}
      </div>
    </section>
  );
};

const PhotoItem = ({ photo, index }: { photo: Photo; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="container mx-auto px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          style={{ y }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Image container with aspect ratio */}
          <div className="relative aspect-[4/5] bg-muted">
            <img
              src={photo.src}
              alt={photo.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Caption */}
          {photo.caption && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 p-8"
            >
              <p className="text-xl md:text-2xl font-serif text-warm-white text-center">
                {photo.caption}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
        />
      </div>
    </motion.div>
  );
};

export default PhotoGallery;
