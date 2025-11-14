import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Pencil } from "lucide-react";

export const CheckAddress = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [officeAddressSame, setOfficeAddressSame] = useState(false);
  const [address, setAddress] = useState({ flatBuilding: "Sunrise Apartments, Flat 402", roadArea: "MG Road, Koramangala", addressLine3: "Near Forum Mall", landmark: "Opposite HDFC Bank", pincode: "560034", city: "Bangalore" });

  return (
    <StepContainer title="Check Address" subtitle="Verify your current address">
      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-[#6D266D] space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Current Address</h3>
            <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 text-sm text-white hover:opacity-80"><Pencil className="h-4 w-4" />{isEditing ? "Done" : "Edit"}</button>
          </div>
          {isEditing ? (
            <div className="space-y-4">
              <div className="space-y-2"><Label className="text-white text-sm">Flat/Building</Label><Input value={address.flatBuilding} onChange={(e) => setAddress({ ...address, flatBuilding: e.target.value })} className="h-12 rounded-2xl border-2 bg-white" /></div>
              <div className="space-y-2"><Label className="text-white text-sm">Road/Area</Label><Input value={address.roadArea} onChange={(e) => setAddress({ ...address, roadArea: e.target.value })} className="h-12 rounded-2xl border-2 bg-white" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-white text-sm">Pincode</Label><Input value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value.replace(/[^0-9]/g, "").slice(0, 6) })} className="h-12 rounded-2xl border-2 bg-white" /></div>
                <div className="space-y-2"><Label className="text-white text-sm">City</Label><Input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value.replace(/[^a-zA-Z\s]/g, "") })} className="h-12 rounded-2xl border-2 bg-white" /></div>
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-white"><p>{address.flatBuilding}</p><p>{address.roadArea}</p><p>{address.city}, {address.pincode}</p></div>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3"><Checkbox id="confirm" checked={confirmAddress} onCheckedChange={(c) => setConfirmAddress(c as boolean)} className="h-5 w-5" /><Label htmlFor="confirm" className="text-sm font-medium cursor-pointer">I confirm this is my current address</Label></div>
          <div className="flex items-center space-x-3"><Checkbox id="office" checked={officeAddressSame} onCheckedChange={(c) => setOfficeAddressSame(c as boolean)} className="h-5 w-5" /><Label htmlFor="office" className="text-sm font-medium cursor-pointer">Office address is same as current address</Label></div>
        </div>
        <Button size="lg" onClick={() => navigate("/loan/success")} disabled={!confirmAddress} className="w-full">Confirm</Button>
      </div>
    </StepContainer>
  );
};
