import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

export const CheckAddress = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [sameAsOffice, setSameAsOffice] = useState(false);
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
    
    setShowSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <StepContainer
        title="Check Your Address"
        subtitle="Please confirm your current address"
      >
        <div className="space-y-6">
          <div className="bg-secondary/10 p-4 rounded-2xl">
            <h3 className="font-semibold mb-3">Current Address</h3>
            <div className="space-y-2 text-sm">
              <p>{formData.flatBuilding}</p>
              <p>{formData.roadArea}</p>
              {formData.addressLine3 && <p>{formData.addressLine3}</p>}
              {formData.landmark && <p>{formData.landmark}</p>}
              <p>{formData.city} - {formData.pincode}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="flatBuilding">Flat/Building Name</Label>
              <Input
                id="flatBuilding"
                value={formData.flatBuilding}
                onChange={(e) => setFormData((prev) => ({ ...prev, flatBuilding: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="roadArea">Road/Area/Colony</Label>
              <Input
                id="roadArea"
                value={formData.roadArea}
                onChange={(e) => setFormData((prev) => ({ ...prev, roadArea: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="addressLine3">Address Line 3 (Optional)</Label>
              <Input
                id="addressLine3"
                value={formData.addressLine3}
                onChange={(e) => setFormData((prev) => ({ ...prev, addressLine3: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="landmark">Landmark (Optional)</Label>
              <Input
                id="landmark"
                value={formData.landmark}
                onChange={(e) => setFormData((prev) => ({ ...prev, landmark: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                type="tel"
                inputMode="numeric"
                maxLength={6}
                value={formData.pincode}
                onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value.replace(/\D/g, "") }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="confirmAddress"
                checked={confirmAddress}
                onCheckedChange={(checked) => setConfirmAddress(checked as boolean)}
              />
              <Label htmlFor="confirmAddress" className="text-sm leading-relaxed cursor-pointer">
                I confirm this is my current address
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="sameAsOffice"
                checked={sameAsOffice}
                onCheckedChange={(checked) => setSameAsOffice(checked as boolean)}
              />
              <Label htmlFor="sameAsOffice" className="text-sm leading-relaxed cursor-pointer">
                Office address is same as current address
              </Label>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleConfirm}
            disabled={!confirmAddress}
            className="w-full"
          >
            Confirm
          </Button>
        </div>
      </StepContainer>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Congratulations!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Your loan has been approved.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
