import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OnboardingProvider } from "./contexts/OnboardingContext";
import { ProgressBar } from "./components/ProgressBar";
import { LoanProgressBar } from "./components/LoanProgressBar";
import Landing from "./pages/Landing";
import { MobileVerification } from "./pages/onboarding/MobileVerification";
import { AadhaarVerification } from "./pages/onboarding/AadhaarVerification";
import { PANVerification } from "./pages/onboarding/PANVerification";
import { DateOfBirth } from "./pages/onboarding/DateOfBirth";
import { OTPVerification } from "./pages/onboarding/OTPVerification";
import { AddressConfirmation } from "./pages/onboarding/AddressConfirmation";
import { BasicDetails } from "./pages/onboarding/BasicDetails";
import { ProductSelection } from "./pages/onboarding/ProductSelection";
import { NomineeAndTerms } from "./pages/onboarding/NomineeAndTerms";
import { AccountSuccess } from "./pages/onboarding/AccountSuccess";
import { KYCPrompt } from "./pages/onboarding/KYCPrompt";
import { PersonalDetails } from "./pages/loan/PersonalDetails";
import { LoanOTP } from "./pages/loan/LoanOTP";
import { UploadDocuments } from "./pages/loan/UploadDocuments";
import { PersonalAddress } from "./pages/loan/PersonalAddress";
import { EmploymentDetails } from "./pages/loan/EmploymentDetails";
import { CustomiseLoan } from "./pages/loan/CustomiseLoan";
import { ConfirmDetails } from "./pages/loan/ConfirmDetails";
import { CheckAddress } from "./pages/loan/CheckAddress";
import { LoanSuccess } from "./pages/loan/LoanSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <OnboardingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/onboarding/*"
              element={
                <div className="min-h-screen flex flex-col">
                  <ProgressBar />
                    <Routes>
                      <Route path="mobile" element={<MobileVerification />} />
                      <Route path="aadhaar" element={<AadhaarVerification />} />
                      <Route path="pan" element={<PANVerification />} />
                      <Route path="dob" element={<DateOfBirth />} />
                      <Route path="otp" element={<OTPVerification />} />
                      <Route path="address" element={<AddressConfirmation />} />
                      <Route path="basic-details" element={<BasicDetails />} />
                      <Route path="product-selection" element={<ProductSelection />} />
                      <Route path="nominee" element={<NomineeAndTerms />} />
                      <Route path="success" element={<AccountSuccess />} />
                      <Route path="kyc-prompt" element={<KYCPrompt />} />
                    </Routes>
                </div>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route
              path="/loan/*"
              element={
                <div className="min-h-screen flex flex-col">
                  <LoanProgressBar />
                  <Routes>
                    <Route path="personal-details" element={<PersonalDetails />} />
                    <Route path="otp" element={<LoanOTP />} />
                    <Route path="upload-documents" element={<UploadDocuments />} />
                    <Route path="personal-address" element={<PersonalAddress />} />
                    <Route path="employment-details" element={<EmploymentDetails />} />
                    <Route path="customise" element={<CustomiseLoan />} />
                    <Route path="confirm-details" element={<ConfirmDetails />} />
                    <Route path="check-address" element={<CheckAddress />} />
                    <Route path="success" element={<LoanSuccess />} />
                  </Routes>
                </div>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </OnboardingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
