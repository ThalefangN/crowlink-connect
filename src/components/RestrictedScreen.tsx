import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RestrictedScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <ShieldAlert className="h-16 w-16 text-red-500 animate-bounce" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Access Restricted
          </h2>
          <p className="text-muted-foreground">
            Your account needs to be verified before you can make reports.
          </p>
        </div>
        <Button 
          onClick={() => navigate(-1)}
          className="w-full bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Go Back
        </Button>
      </Card>
    </div>
  );
};

export default RestrictedScreen;