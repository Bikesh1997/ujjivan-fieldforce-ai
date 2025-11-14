import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const ConfirmDetails = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [spouseFirstName, setSpouseFirstName] = useState("");
  const [spouseLastName, setSpouseLastName] = useState("");

  return (
    <StepContainer
      title="Confirm Loan Details"
      subtitle="Review your loan information"
    >
      <div className="space-y-6">
        <div className="bg-secondary/20 p-4 rounded-2xl space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount Received</span>
            <span className="font-bold">₹3,00,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Processing Fee</span>
            <span className="font-bold">₹8,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">GST</span>
            <span className="font-bold">₹1,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">EMI Protect Plan</span>
            <span className="font-bold">₹0</span>
          </div>
          <div className="border-t border-border pt-2 mt-2">
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Total Loan Amount</span>
              <span className="font-bold text-primary">₹3,00,000</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">EMI per Month</span>
            <span className="font-bold">₹10,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tenure</span>
            <span className="font-bold">36 months</span>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-secondary/20 transition-colors">
            <span className="font-semibold">Know More</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="spouseFirstName">Spouse First Name</Label>
              <Input
                id="spouseFirstName"
                value={spouseFirstName}
                onChange={(e) => setSpouseFirstName(e.target.value.replace(/[^a-zA-Z]/g, ""))}
                placeholder="Enter spouse first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spouseLastName">Spouse Last Name</Label>
              <Input
                id="spouseLastName"
                value={spouseLastName}
                onChange={(e) => setSpouseLastName(e.target.value.replace(/[^a-zA-Z]/g, ""))}
                placeholder="Enter spouse last name"
              />
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          />
          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
            I accept the Terms & Conditions
          </Label>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/loan/customise")}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            size="lg"
            onClick={() => navigate("/loan/check-address")}
            disabled={!termsAccepted}
            className="flex-1"
          >
            Next
          </Button>
        </div>
      </div>
    </StepContainer>
  );
};
