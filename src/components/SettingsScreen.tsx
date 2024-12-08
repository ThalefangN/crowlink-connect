import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings2, Bell, Shield, User, Moon, LogOut } from "lucide-react";

const SettingsScreen = () => {
  const settingsOptions = [
    { icon: User, label: "Account", description: "Manage your account details" },
    { icon: Bell, label: "Notifications", description: "Configure notification preferences" },
    { icon: Shield, label: "Privacy", description: "Control your privacy settings" },
    { icon: Moon, label: "Appearance", description: "Customize app appearance" },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="w-full max-w-2xl mx-auto p-6 space-y-6 animate-fade-in">
        <div className="flex items-center space-x-3 border-b pb-4">
          <Settings2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Settings</h2>
        </div>
        
        <div className="space-y-4">
          {settingsOptions.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start p-4 hover:bg-muted transition-all duration-300"
            >
              <option.icon className="h-5 w-5 mr-4 text-primary" />
              <div className="text-left">
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-muted-foreground">{option.description}</div>
              </div>
            </Button>
          ))}
        </div>

        <Button
          variant="destructive"
          className="w-full mt-8 space-x-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </Button>
      </Card>
    </div>
  );
};

export default SettingsScreen;