import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VerificationPendingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Clock className="h-16 w-16 text-yellow-500 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            Verification Pending
          </h2>
          <p className="text-muted-foreground">
            Your account is currently under verification. We'll notify you once it's complete.
          </p>
        </div>
        <Button 
          onClick={() => navigate("/dashboard")}
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Go to Dashboard
        </Button>
      </Card>
    </div>
  );
};

export default VerificationPendingScreen;