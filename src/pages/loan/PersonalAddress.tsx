import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const PersonalAddress = () => {
  const navigate = useNavigate();
  const addressSectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    flatBuilding: "",
    roadArea: "",
    addressLine3: "",
    landmark: "",
    pincode: "",
    city: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email";
  };

  const validateDOB = (value: string) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      return "Please enter date in DD/MM/YYYY format";
    }
    return "";
  };

  const isPersonalDetailsValid = () => {
    return (
      formData.fullName.trim() &&
      /^[a-zA-Z\s]+$/.test(formData.fullName) &&
      formData.gender &&
      formData.dob &&
      !validateDOB(formData.dob) &&
      formData.email &&
      !validateEmail(formData.email)
    );
  };

  useEffect(() => {
    if (isPersonalDetailsValid() && !hasScrolled && addressSectionRef.current) {
      setTimeout(() => {
        addressSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setHasScrolled(true);
      }, 300);
    }
    if (!isPersonalDetailsValid()) {
      setHasScrolled(false);
    }
  }, [formData.fullName, formData.gender, formData.dob, formData.email, hasScrolled]);

  const handleContinue = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || !/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Please enter a valid name (alphabets only)";
    }
    if (!formData.gender) newErrors.gender = "Please select gender";
    
    const dobError = validateDOB(formData.dob);
    if (!formData.dob || dobError) newErrors.dob = dobError || "Date of birth is required";

    const emailError = validateEmail(formData.email);
    if (!formData.email || emailError) newErrors.email = emailError || "Email is required";

    if (!formData.flatBuilding.trim()) newErrors.flatBuilding = "Flat/Building name is required";
    if (!formData.roadArea.trim()) newErrors.roadArea = "Road/Area/Colony is required";
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode";
    }
    if (!formData.city.trim() || !/^[a-zA-Z\s]+$/.test(formData.city)) {
      newErrors.city = "Please enter a valid city name";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/loan/employment-details");
  };

  return (
    <StepContainer
      title="Personal & Residential Details"
      subtitle="Please provide your personal and address information"
    >
      <div className="space-y-6">
        {/* Personal Details Section */}
        <div className="space-y-4 p-6 rounded-2xl bg-card border border-border">
          <h3 className="font-semibold text-foreground">Personal Details</h3>
          
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter full name"
              className={`h-12 rounded-2xl border-2 ${errors.fullName ? "border-destructive" : ""}`}
            />
            {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender" className="text-sm font-medium">Gender *</Label>
            <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
              <SelectTrigger className={`h-12 rounded-2xl border-2 ${errors.gender ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && <p className="text-sm text-destructive">{errors.gender}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob" className="text-sm font-medium">Date of Birth *</Label>
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
              className={`h-12 rounded-2xl border-2 ${errors.dob ? "border-destructive" : ""}`}
            />
            {errors.dob && <p className="text-sm text-destructive">{errors.dob}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter email address"
              className={`h-12 rounded-2xl border-2 ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>
        </div>

        {/* Residential Address Section */}
        <div ref={addressSectionRef} className="space-y-4 p-6 rounded-2xl bg-card border border-border">
          <h3 className="font-semibold text-foreground">Residential Address</h3>

          <div className="space-y-2">
            <Label htmlFor="flatBuilding" className="text-sm font-medium">Flat/Building Name *</Label>
            <Input
              id="flatBuilding"
              value={formData.flatBuilding}
              onChange={(e) => handleInputChange("flatBuilding", e.target.value)}
              placeholder="Enter flat/building name"
              className={`h-12 rounded-2xl border-2 ${errors.flatBuilding ? "border-destructive" : ""}`}
            />
            {errors.flatBuilding && <p className="text-sm text-destructive">{errors.flatBuilding}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="roadArea" className="text-sm font-medium">Road/Area/Colony *</Label>
            <Input
              id="roadArea"
              value={formData.roadArea}
              onChange={(e) => handleInputChange("roadArea", e.target.value)}
              placeholder="Enter road/area/colony"
              className={`h-12 rounded-2xl border-2 ${errors.roadArea ? "border-destructive" : ""}`}
            />
            {errors.roadArea && <p className="text-sm text-destructive">{errors.roadArea}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="addressLine3" className="text-sm font-medium">Address Line 3 (Optional)</Label>
            <Input
              id="addressLine3"
              value={formData.addressLine3}
              onChange={(e) => handleInputChange("addressLine3", e.target.value)}
              placeholder="Enter additional address details"
              className="h-12 rounded-2xl border-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="landmark" className="text-sm font-medium">Landmark (Optional)</Label>
            <Input
              id="landmark"
              value={formData.landmark}
              onChange={(e) => handleInputChange("landmark", e.target.value)}
              placeholder="Enter landmark"
              className="h-12 rounded-2xl border-2"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode" className="text-sm font-medium">Pincode *</Label>
            <Input
              id="pincode"
              type="tel"
              inputMode="numeric"
              maxLength={6}
              value={formData.pincode}
              onChange={(e) => handleInputChange("pincode", e.target.value.replace(/\D/g, ""))}
              placeholder="Enter 6-digit pincode"
              className={`h-12 rounded-2xl border-2 ${errors.pincode ? "border-destructive" : ""}`}
            />
            {errors.pincode && <p className="text-sm text-destructive">{errors.pincode}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">City *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter city"
              className={`h-12 rounded-2xl border-2 ${errors.city ? "border-destructive" : ""}`}
            />
            {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
          </div>
        </div>

        <Button size="lg" onClick={handleContinue} className="w-full h-12 rounded-2xl">
          Continue
        </Button>
      </div>
    </StepContainer>
  );
};
