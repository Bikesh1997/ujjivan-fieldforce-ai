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
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [sameAsOffice, setSameAsOffice] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    flatBuilding: "123, Rose Apartment",
    roadArea: "MG Road",
    addressLine3: "Near City Mall",
    landmark: "Opposite Central Park",
    pincode: "400001",
    city: "Mumbai",
  });

  const handleConfirm = () => {
    if (!confirmAddress) return;
    navigate("/loan/success");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="w-full max-w-md mx-auto px-6 py-8 space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Check Your Address</h1>
            <p className="text-muted-foreground text-base leading-relaxed">Please confirm your current address</p>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#6D266D] shadow-lg relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="absolute top-4 right-4 text-white hover:bg-white/10 h-8 w-8 p-0 rounded-xl"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <h3 className="font-semibold mb-3 text-white">Current Address</h3>
              <div className="space-y-2 text-sm text-white/90">
                <p>{formData.flatBuilding}</p>
                <p>{formData.roadArea}</p>
                {formData.addressLine3 && <p>{formData.addressLine3}</p>}
                {formData.landmark && <p>{formData.landmark}</p>}
                <p>{formData.city} - {formData.pincode}</p>
              </div>
            </div>

            {isEditing && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="flatBuilding" className="text-sm font-medium">Flat/Building Name</Label>
                  <Input
                    id="flatBuilding"
                    value={formData.flatBuilding}
                    onChange={(e) => setFormData((prev) => ({ ...prev, flatBuilding: e.target.value }))}
                    className="h-12 rounded-2xl border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roadArea" className="text-sm font-medium">Road/Area/Colony</Label>
                  <Input
                    id="roadArea"
                    value={formData.roadArea}
                    onChange={(e) => setFormData((prev) => ({ ...prev, roadArea: e.target.value }))}
                    className="h-12 rounded-2xl border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addressLine3" className="text-sm font-medium">Address Line 3 (Optional)</Label>
                  <Input
                    id="addressLine3"
                    value={formData.addressLine3}
                    onChange={(e) => setFormData((prev) => ({ ...prev, addressLine3: e.target.value }))}
                    className="h-12 rounded-2xl border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landmark" className="text-sm font-medium">Landmark (Optional)</Label>
                  <Input
                    id="landmark"
                    value={formData.landmark}
                    onChange={(e) => setFormData((prev) => ({ ...prev, landmark: e.target.value }))}
                    className="h-12 rounded-2xl border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-sm font-medium">Pincode</Label>
                  <Input
                    id="pincode"
                    type="tel"
                    inputMode="numeric"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value.replace(/\D/g, "") }))}
                    className="h-12 rounded-2xl border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                    className="h-12 rounded-2xl border-2"
                  />
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="confirm"
                  checked={confirmAddress}
                  onCheckedChange={(checked) => setConfirmAddress(checked as boolean)}
                  className="h-5 w-5"
                />
                <Label htmlFor="confirm" className="text-sm font-medium leading-relaxed cursor-pointer">
                  I confirm this is my current address
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="sameOffice"
                  checked={sameAsOffice}
                  onCheckedChange={(checked) => setSameAsOffice(checked as boolean)}
                  className="h-5 w-5"
                />
                <Label htmlFor="sameOffice" className="text-sm font-medium leading-relaxed cursor-pointer">
                  Office address is same as current address
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
        <Button
          size="lg"
          onClick={handleConfirm}
          disabled={!confirmAddress}
          className="w-full max-w-md mx-auto h-12 rounded-2xl block"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
