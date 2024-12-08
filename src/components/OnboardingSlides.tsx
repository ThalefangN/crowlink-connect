import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    title: "Welcome to CrowLink",
    description: "Your community's voice for reporting and connecting",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    title: "Report & Connect",
    description: "Share important updates and stay informed about your community",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Join Your Community",
    description: "Connect with neighbors and make a difference together",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const OnboardingSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/signup');
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const skip = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
            <p className="text-sm opacity-90">{slides[currentSlide].description}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          {currentSlide > 0 ? (
            <Button variant="outline" onClick={prevSlide}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          ) : (
            <Button variant="outline" onClick={skip}>
              Skip
            </Button>
          )}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <Button onClick={nextSlide}>
            {currentSlide === slides.length - 1 ? (
              'Get Started'
            ) : (
              <>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlides;