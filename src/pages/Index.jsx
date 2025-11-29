import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import couple1 from "@/assets/TheFirstDays.png";
import couple2 from "@/assets/Graduation.png";
import couple3 from "@/assets/couple-3.png";
import couple4 from "@/assets/couple-4.png";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  const photos = [
    {
      src: couple1,
      alt: "Our first moment",
    },
    {
      src: couple2,
      alt: "Graduation ceremony!",
      caption: "Graduation ceremony!",
    },
    {
      src: couple3,
      alt: "A promise forever",
    },
    {
      src: couple4,
      alt: "Dancing through life",
    },
    {
      src: couple5,
      caption: "Travel together"
    },
    {
      src: couple6,
      caption: "The First PhotoBooth!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <BackgroundMusic /> 
      <PhotoGallery photos={photos} />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground font-light text-4xl">
          1000 days and counting... ❤️
        </p>
      </footer>
    </div>
  );
};

export default Index;
