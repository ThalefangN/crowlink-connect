import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Facebook, Mail, Lock } from 'lucide-react';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-2 animate-fade-in">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <div className="space-y-4 animate-fade-in [&>*]:animate-fade-in [&>*]:duration-300">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative group transition-all duration-300">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter email" 
                className="pl-10 transition-all duration-300 hover:border-primary focus:border-primary" 
              />
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-primary hover:underline transition-all duration-300"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative group transition-all duration-300">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter password" 
                className="pl-10 transition-all duration-300 hover:border-primary focus:border-primary" 
              />
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            Sign In
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline"
              className="transition-all duration-300 hover:bg-gray-50 hover:border-primary"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button 
              variant="outline"
              className="transition-all duration-300 hover:bg-gray-50 hover:border-primary"
            >
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground animate-fade-in">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-primary hover:underline transition-all duration-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;