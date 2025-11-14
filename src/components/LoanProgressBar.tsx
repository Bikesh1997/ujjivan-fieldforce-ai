import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const LoanProgressBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentStep = () => {
    const path = location.pathname;
    // First progress bar (4 steps)
    const bar1Routes = ['/loan/personal-details', '/loan/otp', '/loan/upload-documents', '/loan/personal-address', '/loan/employment-details'];
    const bar2Routes = ['/loan/customise', '/loan/confirm-details', '/loan/check-address'];
    
    if (bar1Routes.includes(path)) {
      const stepMap: Record<string, number> = {
        '/loan/personal-details': 1,
        '/loan/otp': 1,
        '/loan/upload-documents': 2,
        '/loan/personal-address': 3,
        '/loan/employment-details': 4
      };
      return { bar: 1, step: stepMap[path] || 1 };
    } else if (bar2Routes.includes(path)) {
      const stepMap: Record<string, number> = {
        '/loan/customise': 1,
        '/loan/confirm-details': 2,
        '/loan/check-address': 3
      };
      return { bar: 2, step: stepMap[path] || 1 };
    }
    return { bar: 1, step: 1 };
  };

  const { bar, step: currentStep } = getCurrentStep();
  const totalSteps = 4;

  const getProgressPercentage = () => {
    const path = location.pathname;
    if (bar === 1) {
      const bar1Routes = ['/loan/personal-details', '/loan/otp', '/loan/upload-documents', '/loan/personal-address', '/loan/employment-details'];
      const index = bar1Routes.indexOf(path);
      if (index >= 0) {
        return (index / bar1Routes.length) * 100;
      }
    } else if (bar === 2) {
      const bar2Routes = ['/loan/customise', '/loan/confirm-details', '/loan/check-address'];
      const index = bar2Routes.indexOf(path);
      if (index >= 0) {
        return (index / bar2Routes.length) * 100;
      }
    }
    return 0;
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
                        ? `${(progressPercentage % (100 / totalSteps)) / (100 / totalSteps) * 100}%`
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
