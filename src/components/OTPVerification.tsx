import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      toast({
        title: "Verification successful",
        description: "Your account has been verified.",
      });
      navigate("/confirmation");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Verify Your Account
          </h2>
          <p className="text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
              render={({ slots }) => (
                <InputOTPGroup className="gap-2">
                  {slots.map((slot, index) => (
                    <InputOTPSlot
                      key={index}
                      {...slot}
                      className="transition-all duration-300 hover:border-primary focus:border-primary"
                    />
                  ))}
                </InputOTPGroup>
              )}
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Verify
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <button 
            className="text-primary hover:underline transition-all duration-300"
            onClick={() => {
              toast({
                title: "Code resent",
                description: "A new verification code has been sent to your email.",
              });
            }}
          >
            Resend
          </button>
        </p>
      </Card>
    </div>
  );
};

export default OTPVerification;