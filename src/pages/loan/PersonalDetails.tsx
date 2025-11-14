import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const PersonalDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pincode: "",
    mobile: "",
    dob: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePincode = (value: string) => {
    if (!/^\d{6}$/.test(value)) {
      return "Please enter a valid 6-digit pincode";
    }
    return "";
  };

  const validateMobile = (value: string) => {
    if (!/^\d{10}$/.test(value)) {
      return "Please enter a valid 10-digit mobile number";
    }
    return "";
  };

  const validateDOB = (value: string) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      return "Please enter date in DD/MM/YYYY format";
    }
    const [day, month, year] = value.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
      return "Please enter a valid date";
    }
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleContinue = () => {
    const newErrors: Record<string, string> = {};
    
    const pincodeError = validatePincode(formData.pincode);
    if (pincodeError) newErrors.pincode = pincodeError;

    const mobileError = validateMobile(formData.mobile);
    if (mobileError) newErrors.mobile = mobileError;

    const dobError = validateDOB(formData.dob);
    if (dobError) newErrors.dob = dobError;

    if (!formData.termsAccepted) {
      newErrors.terms = "Please accept terms and conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/loan/otp");
  };

  return (
    <StepContainer title="Personal Details" subtitle="Please provide your details to proceed">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="pincode">Pincode</Label>
          <Input
            id="pincode"
            type="tel"
            inputMode="numeric"
            maxLength={6}
            value={formData.pincode}
            onChange={(e) => handleInputChange("pincode", e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 6-digit pincode"
            className={`h-12 rounded-2xl border-2 transition-all duration-300 ${
              formData.pincode.length === 0
                ? "border-input"
                : errors.pincode
                ? "border-destructive bg-destructive/5"
                : "border-success bg-success/5"
            }`}
          />
          {errors.pincode && <p className="text-sm text-destructive">{errors.pincode}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={formData.mobile}
            onChange={(e) => handleInputChange("mobile", e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 10-digit mobile number"
            className={`h-12 rounded-2xl border-2 transition-all duration-300 ${
              formData.mobile.length === 0
                ? "border-input"
                : errors.mobile
                ? "border-destructive bg-destructive/5"
                : "border-success bg-success/5"
            }`}
          />
          {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="text"
            value={formData.dob}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");
              if (value.length > 2 && value.length <= 4) {
                value = value.slice(0, 2) + "/" + value.slice(2);
              } else if (value.length > 4) {
                value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
              }
              handleInputChange("dob", value);
            }}
            placeholder="DD/MM/YYYY"
            maxLength={10}
            className={`h-12 rounded-2xl border-2 transition-all duration-300 ${
              formData.dob.length === 0
                ? "border-input"
                : errors.dob
                ? "border-destructive bg-destructive/5"
                : "border-success bg-success/5"
            }`}
          />
          {errors.dob && <p className="text-sm text-destructive">{errors.dob}</p>}
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="terms"
            checked={formData.termsAccepted}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, termsAccepted: checked as boolean }))
            }
            className="h-5 w-5"
          />
          <Label htmlFor="terms" className="text-sm font-medium cursor-pointer">
            I accept the Terms & Conditions
          </Label>
        </div>
        {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}

        <Button size="lg" onClick={handleContinue} className="w-full">
          Continue
        </Button>
      </div>
    </StepContainer>
  );
};
