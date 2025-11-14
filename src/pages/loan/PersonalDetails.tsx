import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PersonalDetails = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const valid = /^[6-9]\d{9}$/.test(mobile);
    setIsValid(valid);
  }, [mobile]);

  const handleSubmit = () => {
    if (!isValid) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/loan/otp");
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isValid) {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="w-full max-w-md mx-auto px-6 py-8 space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Enter Aadhaar linked mobile number</h1>
            <p className="text-muted-foreground text-base leading-relaxed">We'll send an OTP to this number for verification</p>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-3 border border-input rounded-2xl bg-muted/50 font-medium">
                  +91
                </div>
                <Input
                  type="tel"
                  placeholder="Enter Aadhaar-linked number"
                  inputMode="numeric"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  onKeyPress={handleKeyPress}
                  maxLength={10}
                  className={`flex-1 text-lg h-12 rounded-2xl border-2 transition-all duration-300 ${
                    mobile.length === 0
                      ? "border-input"
                      : isValid
                      ? "border-success bg-success/5 animate-success-pulse"
                      : "border-destructive bg-destructive/5 animate-shake"
                  }`}
                  autoFocus
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              By proceeding, you agree to receive SMS updates
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={!isValid || isLoading}
          className="w-full h-12 rounded-2xl"
        >
          {isLoading ? "Continue..." : "Continue"}
        </Button>
      </div>
    </div>
  );
};
