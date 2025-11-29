import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import couple5 from "@/assets/couple-5.jpg";

const Index = () => {
  const photos = [
    {
      src: couple1,
      alt: "Our first moment",
      caption: "Ngày đầu tiên chúng ta bắt đầu",
    },
    {
      src: couple2,
      alt: "Together under cherry blossoms",
      caption: "Mùa xuân của chúng ta",
    },
    {
      src: couple3,
      alt: "A promise forever",
      caption: "Lời hứa mãi mãi bên nhau",
    },
    {
      src: couple4,
      alt: "Dancing through life",
      caption: "Nhảy múa trong đời nhau",
    },
    {
      src: couple5,
      alt: "Under the stars",
      caption: "Dưới bầu trời đầy sao",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PhotoGallery photos={photos} />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground font-light">
          1000 ngày và còn nhiều hơn thế nữa... ❤️
        </p>
      </footer>
    </div>
  );
};

export default Index;
