import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, MapPin, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportIssueScreen = () => {
  const navigate = useNavigate();
  const isVerified = false; // This should come from your auth context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      navigate("/restricted");
    }
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="w-full max-w-2xl mx-auto p-6 space-y-6 animate-fade-in">
        <div className="flex items-center space-x-3 border-b pb-4">
          <AlertTriangle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Report an Issue</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Issue Title</Label>
            <Input id="title" placeholder="Brief description of the issue" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description</Label>
            <Textarea 
              id="description" 
              placeholder="Provide more details about the issue..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Location</Label>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full justify-start space-x-2"
            >
              <MapPin className="h-5 w-5" />
              <span>Add Location</span>
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Add Photos</Label>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full justify-start space-x-2"
            >
              <Camera className="h-5 w-5" />
              <span>Upload Photos</span>
            </Button>
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Submit Report
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ReportIssueScreen;