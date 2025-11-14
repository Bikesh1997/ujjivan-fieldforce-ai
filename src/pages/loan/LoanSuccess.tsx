import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PartyPopper } from "lucide-react";

export const LoanSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect after some time
    // const timer = setTimeout(() => {
    //   navigate("/");
    // }, 10000);
    // return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center shadow-xl animate-success-pulse">
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
        <div className="p-6 rounded-2xl bg-[#6D266D] border border-border shadow-xl space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b border-white/20">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-white">AU</span>
            </div>
            <div>
              <p className="text-sm text-white">AU Small Finance Bank</p>
              <p className="font-semibold text-white">Personal Loan</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white">Loan Number</span>
              <span className="font-mono font-semibold text-white">679580450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white">Loan Amount</span>
              <span className="font-mono font-semibold text-white">₹3,00,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white">Monthly EMI</span>
              <span className="font-mono font-semibold text-white">₹10,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white">Tenure</span>
              <span className="font-mono font-semibold text-white">36 months</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-6 rounded-2xl bg-card border border-border shadow-lg space-y-4">
          <h2 className="text-xl font-bold text-foreground text-center">What's Next?</h2>
          
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">1</span>
              </div>
              <p>Your loan will be disbursed within 2-3 business days</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">2</span>
              </div>
              <p>You'll receive loan agreement documents via email</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">3</span>
              </div>
              <p>First EMI will be auto-debited on the due date</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <Button 
            size="lg" 
            onClick={() => navigate("/")} 
            className="w-full"
          >
            Back to Home
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/loan/customise")} 
            className="w-full"
          >
            Apply for Another Loan
          </Button>
        </div>
      </div>
    </div>
  );
};
