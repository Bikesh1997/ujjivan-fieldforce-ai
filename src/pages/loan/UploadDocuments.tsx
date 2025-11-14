import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Loader2 } from "lucide-react";

export const UploadDocuments = () => {
  const navigate = useNavigate();
  const [panNumber, setPanNumber] = useState("");
  const [panFile, setPanFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validatePAN = (value: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(value)) {
      return "Please enter a valid PAN (Format: AAAAA9999A)";
    }
    return "";
  };

  const handlePANChange = (value: string) => {
    const upperValue = value.toUpperCase();
    setPanNumber(upperValue);
    setError("");
    
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const valid = panRegex.test(upperValue);
    setIsValid(valid);
    
    if (valid && upperValue.length === 10) {
      setError("");
    } else if (upperValue.length === 10) {
      setError("Please enter a valid PAN (Format: AAAAA9999A)");
    }
  };

  useEffect(() => {
    if (isValid && panNumber.length === 10 && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/loan/personal-address");
      }, 1500);
    }
  }, [isValid, panNumber, navigate, isLoading]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPanFile(e.target.files[0]);
      setError("");
    }
  };

  const handleContinue = () => {
    if (!panNumber && !panFile) {
      setError("Please enter PAN number or upload PAN image");
      return;
    }

    if (panNumber) {
      const panError = validatePAN(panNumber);
      if (panError) {
        setError(panError);
        return;
      }
    }

    navigate("/loan/personal-address");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="w-full max-w-md mx-auto px-6 py-8 space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Upload Documents</h1>
            <p className="text-muted-foreground text-base leading-relaxed">Please confirm details for Video KYC</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="pan" className="text-sm font-medium">PAN Number *</Label>
              <div className="relative">
                <Input
                  id="pan"
                  type="text"
                  value={panNumber}
                  onChange={(e) => handlePANChange(e.target.value)}
                  placeholder="AAAAA9999A"
                  maxLength={10}
                  disabled={isLoading}
                  className={`h-12 rounded-2xl border-2 transition-all duration-300 ${
                    panNumber.length === 0
                      ? "border-input"
                      : isValid
                      ? "border-success bg-success/5"
                      : panNumber.length === 10
                      ? "border-destructive bg-destructive/5"
                      : "border-input"
                  }`}
                />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                )}
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 border-t border-border" />
              <span className="text-sm text-muted-foreground">OR</span>
              <div className="flex-1 border-t border-border" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pan-upload" className="text-sm font-medium">Upload PAN Image</Label>
              <div className="relative">
                <input
                  id="pan-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("pan-upload")?.click()}
                  className="w-full h-12 rounded-2xl border-2"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {panFile ? panFile.name : "Choose file"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
