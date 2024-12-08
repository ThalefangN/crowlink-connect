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
        <div className="relative overflow-hidden rounded-lg shadow-xl animate-fade-in">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-64 object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
            <h2 className="text-2xl font-bold mb-2 animate-fade-in">{slides[currentSlide].title}</h2>
            <p className="text-sm opacity-90 animate-fade-in">{slides[currentSlide].description}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between animate-fade-in">
          {currentSlide > 0 ? (
            <Button 
              variant="outline" 
              onClick={prevSlide}
              className="transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={skip}
              className="transition-all duration-300 hover:scale-105"
            >
              Skip
            </Button>
          )}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <Button 
            onClick={nextSlide}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 hover:scale-105"
          >
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