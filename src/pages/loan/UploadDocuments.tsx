import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export const UploadDocuments = () => {
  const navigate = useNavigate();
  const [panNumber, setPanNumber] = useState("");
  const [panFile, setPanFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const validatePAN = (value: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(value)) {
      return "Please enter a valid PAN (Format: AAAAA9999A)";
    }
    return "";
  };

  const handlePANChange = (value: string) => {
    setPanNumber(value.toUpperCase());
    setError("");
  };

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
    <StepContainer
      title="Upload Documents"
      subtitle="Please confirm details for Video KYC"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="pan">PAN Number</Label>
          <Input
            id="pan"
            type="text"
            value={panNumber}
            onChange={(e) => handlePANChange(e.target.value)}
            placeholder="AAAAA9999A"
            maxLength={10}
            className={error && !panFile ? "border-destructive" : ""}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-border" />
          <span className="text-sm text-muted-foreground">OR</span>
          <div className="flex-1 border-t border-border" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="pan-upload">Upload PAN Image</Label>
          <div className="relative">
            <Input
              id="pan-upload"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => document.getElementById("pan-upload")?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              {panFile ? panFile.name : "Choose File"}
            </Button>
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button size="lg" onClick={handleContinue} className="w-full">
          Continue
        </Button>
      </div>
    </StepContainer>
  );
};
