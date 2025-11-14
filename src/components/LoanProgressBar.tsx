import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const LoanProgressBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentStep = () => {
    const path = location.pathname;
    // First progress bar (4 steps)
    if (['/loan/personal-details', '/loan/otp'].includes(path)) {
      return { bar: 1, step: 1 };
    } else if (path === '/loan/upload-documents') {
      return { bar: 1, step: 2 };
    } else if (path === '/loan/personal-address') {
      return { bar: 1, step: 3 };
    } else if (path === '/loan/employment-details') {
      return { bar: 1, step: 4 };
    }
    // Second progress bar (4 steps)
    else if (path === '/loan/customise') {
      return { bar: 2, step: 1 };
    } else if (path === '/loan/confirm-details') {
      return { bar: 2, step: 2 };
    } else if (path === '/loan/check-address') {
      return { bar: 2, step: 3 };
    }
    return { bar: 1, step: 1 };
  };

  const { bar, step: currentStep } = getCurrentStep();
  const totalSteps = 4;

  const getProgressPercentage = () => {
    return ((currentStep - 1) / totalSteps) * 100;
  };

  const progressPercentage = getProgressPercentage();

  const steps = Array.from({ length: totalSteps }, (_, i) => ({
    number: i + 1,
  }));

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-muted-foreground/10 transition-colors flex-shrink-0"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          
          <div className="flex items-center gap-3 flex-1">
            {steps.map((step) => (
              <div key={step.number} className="relative h-2 flex-1 rounded-full bg-muted overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-secondary transition-all duration-500 ease-out rounded-full"
                  style={{ 
                    width: step.number < currentStep 
                      ? '100%' 
                      : step.number === currentStep 
                        ? `${(progressPercentage % 25)}%`
                        : '0%'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
