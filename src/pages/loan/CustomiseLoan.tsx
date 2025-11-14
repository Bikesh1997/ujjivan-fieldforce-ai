import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContainer } from "@/components/StepContainer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export const CustomiseLoan = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(160000);
  const [date, setDate] = useState<Date>();
  const maxAmount = 300000;
  const emi = Math.round(loanAmount / 30);

  return (
    <StepContainer
      title="Customise Your Loan"
      subtitle="Adjust your loan amount and select disbursement date"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Loan Amount</Label>
            <span className="text-2xl font-bold text-primary">₹{loanAmount.toLocaleString()}</span>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            max={maxAmount}
            min={10000}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹10,000</span>
            <span>₹{maxAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Disbursement Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="bg-secondary/20 p-4 rounded-2xl space-y-2">
          <h3 className="font-semibold">EMI Preview</h3>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monthly EMI</span>
            <span className="font-bold">₹{emi.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tenure</span>
            <span className="font-bold">30 months</span>
          </div>
        </div>

        <Button size="lg" onClick={() => navigate("/loan/confirm-details")} className="w-full">
          Next
        </Button>
      </div>
    </StepContainer>
  );
};
