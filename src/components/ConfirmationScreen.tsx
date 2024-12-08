import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConfirmationScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 animate-scale-in" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Verification Code Sent!
          </h2>
          <p className="text-muted-foreground">
            We've sent a verification code to your email address. Please check your inbox.
          </p>
        </div>
        <Button 
          onClick={() => navigate("/verification-pending")}
          className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Continue
        </Button>
      </Card>
    </div>
  );
};

export default ConfirmationScreen;