import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

export const UploadDocuments = () => {
  const navigate = useNavigate();
  const [pan, setPan] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const valid = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
    setIsValid(valid);
    
    if (valid && !isLoading) {
      setIsLoading(true);
      setTimeout(() => navigate("/loan/personal-address"), 1000);
    }
  }, [pan, isLoading, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/\s/g, '').slice(0, 10);
    setPan(value);
    
    if (inputRef.current) {
      const len = value.length;
      inputRef.current.inputMode = (len < 5 || len === 9) ? 'text' : 'numeric';
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setTimeout(() => navigate("/loan/personal-address"), 1000);
    }
  };

  return (
    <StepContainer title="Upload Documents" subtitle="Please confirm details for Video KYC">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="pan">PAN Number</Label>
          <Input
            ref={inputRef}
            id="pan"
            placeholder="AAAAA1111A"
            value={pan}
            onChange={handleChange}
            maxLength={10}
            inputMode="text"
            className={`text-lg h-14 rounded-2xl border-2 transition-all duration-300 text-center tracking-widest font-mono ${
              pan.length === 0 ? "border-input" : isValid ? "border-success bg-success/5" : "border-destructive bg-destructive/5"
            }`}
            autoFocus
          />
          {isLoading && <div className="flex justify-center pt-2"><div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}
        </div>
        <div className="relative"><div className="flex items-center gap-4"><div className="flex-1 h-px bg-border" /><span className="text-sm text-muted-foreground">OR</span><div className="flex-1 h-px bg-border" /></div></div>
        <div className="space-y-2">
          <Label htmlFor="pan-upload">Upload PAN Image</Label>
          <input type="file" id="pan-upload" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden" />
          <label htmlFor="pan-upload" className="flex items-center justify-center gap-2 h-14 rounded-2xl border-2 border-dashed border-input hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer">
            <Upload className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{uploadedFile ? uploadedFile.name : "Choose file"}</span>
          </label>
        </div>
      </div>
    </StepContainer>
  );
};
