import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export const PersonalAddress = () => {
  const navigate = useNavigate();
  const addressRef = useRef<HTMLDivElement>(null);
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [flatBuilding, setFlatBuilding] = useState("");
  const [roadArea, setRoadArea] = useState("");
  const [addressLine3, setAddressLine3] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [sameAsResidential, setSameAsResidential] = useState(false);
  const [personalDetailsValid, setPersonalDetailsValid] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const isValid = fullName.length > 0 && /^[a-zA-Z\s]+$/.test(fullName) && gender.length > 0 && dob.length === 10 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setPersonalDetailsValid(isValid);
    if (isValid && !hasScrolled && addressRef.current) {
      setTimeout(() => { addressRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setHasScrolled(true); }, 300);
    }
  }, [fullName, gender, dob, email, hasScrolled]);

  const isFormValid = () => personalDetailsValid && flatBuilding.length > 0 && roadArea.length > 0 && pincode.length === 6 && city.length > 0;

  return (
    <StepContainer title="Personal & Address Details" subtitle="Please provide your information">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Personal Details</h3>
          <div className="space-y-2"><Label>Full Name *</Label><Input value={fullName} onChange={(e) => setFullName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))} className={`h-12 rounded-2xl border-2 transition-all ${fullName.length === 0 ? "border-input" : /^[a-zA-Z\s]+$/.test(fullName) ? "border-success bg-success/5" : "border-destructive bg-destructive/5"}`} /></div>
          <div className="space-y-2"><Label>Gender *</Label><Select value={gender} onValueChange={setGender}><SelectTrigger className="h-12 rounded-2xl border-2"><SelectValue placeholder="Select gender" /></SelectTrigger><SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></div>
          <div className="space-y-2"><Label>Date of Birth *</Label><Input value={dob} onChange={(e) => { let v = e.target.value.replace(/[^0-9/]/g, ""); if (v.length === 2 && !v.includes("/")) v += "/"; else if (v.length === 5 && v.split("/").length === 2) v += "/"; setDob(v.slice(0, 10)); }} maxLength={10} className={`h-12 rounded-2xl border-2 transition-all ${dob.length === 0 ? "border-input" : dob.length === 10 ? "border-success bg-success/5" : "border-destructive bg-destructive/5"}`} placeholder="DD/MM/YYYY" /></div>
          <div className="space-y-2"><Label>Email *</Label><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`h-12 rounded-2xl border-2 transition-all ${email.length === 0 ? "border-input" : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "border-success bg-success/5" : "border-destructive bg-destructive/5"}`} placeholder="your.email@example.com" /></div>
        </div>
        <div ref={addressRef} className="space-y-4 scroll-mt-20">
          <h3 className="font-semibold text-lg">Residential Address</h3>
          <div className="space-y-2"><Label>Flat/Building *</Label><Input value={flatBuilding} onChange={(e) => setFlatBuilding(e.target.value)} className="h-12 rounded-2xl border-2" disabled={!personalDetailsValid} /></div>
          <div className="space-y-2"><Label>Road/Area *</Label><Input value={roadArea} onChange={(e) => setRoadArea(e.target.value)} className="h-12 rounded-2xl border-2" disabled={!personalDetailsValid} /></div>
          <div className="space-y-2"><Label>Address Line 3</Label><Input value={addressLine3} onChange={(e) => setAddressLine3(e.target.value)} className="h-12 rounded-2xl border-2" disabled={!personalDetailsValid} /></div>
          <div className="space-y-2"><Label>Landmark</Label><Input value={landmark} onChange={(e) => setLandmark(e.target.value)} className="h-12 rounded-2xl border-2" disabled={!personalDetailsValid} /></div>
          <div className="space-y-2"><Label>Pincode *</Label><Input inputMode="numeric" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))} maxLength={6} className={`h-12 rounded-2xl border-2 transition-all ${pincode.length === 0 ? "border-input" : pincode.length === 6 ? "border-success bg-success/5" : "border-destructive bg-destructive/5"}`} disabled={!personalDetailsValid} /></div>
          <div className="space-y-2"><Label>City *</Label><Input value={city} onChange={(e) => setCity(e.target.value.replace(/[^a-zA-Z\s]/g, ""))} className="h-12 rounded-2xl border-2" disabled={!personalDetailsValid} /></div>
          <div className="flex items-center space-x-3"><Checkbox id="same" checked={sameAsResidential} onCheckedChange={(c) => setSameAsResidential(c as boolean)} className="h-5 w-5" disabled={!personalDetailsValid} /><Label htmlFor="same" className="text-sm font-medium cursor-pointer">Same as residential address</Label></div>
        </div>
        <Button size="lg" onClick={() => navigate("/loan/employment-details")} disabled={!isFormValid()} className="w-full">Continue</Button>
      </div>
    </StepContainer>
  );
};
