import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const PersonalDetailsReview = () => {
  const navigate = useNavigate();

  // Mock auto-populated data from Aadhaar
  const aadhaarData = {
    name: "Rajesh Kumar",
    gender: "Male",
    dob: "15/08/1990",
    photo: "/placeholder.svg",
  };

  const handleConfirm = () => {
    navigate("/loan/upload-documents");
  };

  return (
    <StepContainer
      title="Confirm Your Details"
      subtitle="Please review the information fetched from Aadhaar"
    >
      <div className="space-y-6">
        <div className="flex justify-center mb-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={aadhaarData.photo} alt={aadhaarData.name} />
            <AvatarFallback className="text-2xl">
              {aadhaarData.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={aadhaarData.name}
            disabled
            className="h-12 rounded-2xl border-2 bg-muted/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Input
            id="gender"
            value={aadhaarData.gender}
            disabled
            className="h-12 rounded-2xl border-2 bg-muted/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            value={aadhaarData.dob}
            disabled
            className="h-12 rounded-2xl border-2 bg-muted/50"
          />
        </div>

        <Button
          size="lg"
          onClick={handleConfirm}
          className="w-full"
        >
          Confirm & Continue
        </Button>
      </div>
    </StepContainer>
  );
};
