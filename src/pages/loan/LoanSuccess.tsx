import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PartyPopper, Home } from "lucide-react";

export const LoanSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Confetti effect or any other celebration animation can be added here
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="w-full max-w-md mx-auto px-6 py-8 space-y-8 animate-fade-in">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center shadow-xl animate-scale-in">
                <CheckCircle2 className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <PartyPopper className="h-8 w-8 text-primary animate-bounce" />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold text-foreground">Congratulations!</h1>
            <p className="text-lg text-muted-foreground">Your loan has been approved.</p>
          </div>

          {/* Loan Details Card */}
          <div className="p-6 rounded-2xl bg-[#6D266D] shadow-xl space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-white/20">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-white">UJ</span>
              </div>
              <div>
                <p className="text-sm text-white/90">Ujjivan Small Finance Bank</p>
                <p className="font-semibold text-white">Personal Loan</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/90">Loan Number</span>
                <span className="font-mono font-semibold text-white">679580450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/90">Loan Amount</span>
                <span className="font-mono font-semibold text-white">₹3,00,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/90">EMI per Month</span>
                <span className="font-mono font-semibold text-white">₹10,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/90">Tenure</span>
                <span className="font-mono font-semibold text-white">36 months</span>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="p-6 rounded-2xl bg-card border border-border shadow-lg space-y-4">
            <h2 className="text-xl font-bold text-foreground text-center">What's Next?</h2>
            
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Your loan amount will be credited to your account within 24-48 hours.
              </p>
              
              <div className="space-y-2 text-left">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Track your loan</p>
                    <p className="text-xs text-muted-foreground">View EMI schedule and payment history</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Set up auto-pay</p>
                    <p className="text-xs text-muted-foreground">Never miss an EMI payment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Customer support</p>
                    <p className="text-xs text-muted-foreground">Available 24/7 for assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
        <Button
          size="lg"
          onClick={() => navigate("/")}
          className="w-full max-w-md mx-auto h-12 rounded-2xl block"
        >
          <Home className="w-4 h-4 mr-2" />
          Go to Home
        </Button>
      </div>
    </div>
  );
};
