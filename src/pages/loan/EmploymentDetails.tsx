import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const EmploymentDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employmentType: "",
    companyName: "",
    industry: "",
    organisationType: "",
    officialEmail: "",
    noOfficialEmail: false,
    monthlySalary: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleConfirm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.employmentType) newErrors.employmentType = "Please select employment type";
    
    if (!formData.companyName.trim() || !/^[a-zA-Z\s]+$/.test(formData.companyName)) {
      newErrors.companyName = "Please enter a valid company name";
    }
    
    if (!formData.industry) newErrors.industry = "Please select industry";
    if (!formData.organisationType) newErrors.organisationType = "Please select organisation type";
    
    if (!formData.noOfficialEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.officialEmail || !emailRegex.test(formData.officialEmail)) {
        newErrors.officialEmail = "Please enter a valid official email";
      }
    }
    
    const salary = parseFloat(formData.monthlySalary);
    if (!formData.monthlySalary || isNaN(salary) || salary <= 0) {
      newErrors.monthlySalary = "Please enter a valid monthly salary";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/loan/customise");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="w-full max-w-md mx-auto px-6 py-8 space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Employment Details</h1>
            <p className="text-muted-foreground text-base leading-relaxed">Please provide your employment information</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="employmentType">Employment Type</Label>
              <Select
                value={formData.employmentType}
                onValueChange={(value) => handleInputChange("employmentType", value)}
              >
                <SelectTrigger className={errors.employmentType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salaried">Salaried</SelectItem>
                  <SelectItem value="self-employed">Self Employed</SelectItem>
                  <SelectItem value="business">Business Owner</SelectItem>
                </SelectContent>
              </Select>
              {errors.employmentType && <p className="text-sm text-destructive">{errors.employmentType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="Enter company name"
                className={errors.companyName ? "border-destructive" : ""}
              />
              {errors.companyName && <p className="text-sm text-destructive">{errors.companyName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.industry && <p className="text-sm text-destructive">{errors.industry}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="organisationType">Organisation Type</Label>
              <Select
                value={formData.organisationType}
                onValueChange={(value) => handleInputChange("organisationType", value)}
              >
                <SelectTrigger className={errors.organisationType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select organisation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">Private Limited</SelectItem>
                  <SelectItem value="public">Public Limited</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  <SelectItem value="ngo">NGO</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                </SelectContent>
              </Select>
              {errors.organisationType && <p className="text-sm text-destructive">{errors.organisationType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="officialEmail">Official Email ID</Label>
              <Input
                id="officialEmail"
                type="email"
                value={formData.officialEmail}
                onChange={(e) => handleInputChange("officialEmail", e.target.value)}
                placeholder="Enter official email"
                disabled={formData.noOfficialEmail}
                className={errors.officialEmail ? "border-destructive" : ""}
              />
              {errors.officialEmail && <p className="text-sm text-destructive">{errors.officialEmail}</p>}
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="noOfficialEmail"
                  checked={formData.noOfficialEmail}
                  onCheckedChange={(checked) => handleInputChange("noOfficialEmail", checked as boolean)}
                  className="h-5 w-5"
                />
                <Label htmlFor="noOfficialEmail" className="text-sm cursor-pointer">
                  I don't have an official email ID
                </Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlySalary">Net Monthly Salary (₹)</Label>
              <Input
                id="monthlySalary"
                type="text"
                inputMode="numeric"
                value={formData.monthlySalary}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  handleInputChange("monthlySalary", value);
                }}
                placeholder="Enter monthly salary"
                className={errors.monthlySalary ? "border-destructive" : ""}
              />
              {errors.monthlySalary && <p className="text-sm text-destructive">{errors.monthlySalary}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
        <Button size="lg" onClick={handleConfirm} className="w-full h-12 rounded-2xl">
          Confirm
        </Button>
      </div>
    </div>
  );
};
