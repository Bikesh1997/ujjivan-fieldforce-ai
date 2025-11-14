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
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="w-full max-w-md mx-auto px-6 py-8 space-y-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Confirm Your Details</h1>
            <p className="text-muted-foreground text-base leading-relaxed">Please review the information fetched from Aadhaar</p>
          </div>
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
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
        <Button
          size="lg"
          onClick={handleConfirm}
          className="w-full h-12 rounded-2xl"
        >
          Confirm & Continue
        </Button>
      </div>
    </div>
  );
};
