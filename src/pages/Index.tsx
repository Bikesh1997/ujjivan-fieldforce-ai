import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Target, TrendingUp, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Target className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Ujjivan Sales</span>
          </div>
          <Link to="/auth">
            <Button size="sm">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="h-4 w-4" />
            AI-Powered Field Sales Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Transform Your Field Sales
            <span className="block text-primary mt-2">Operations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empower your relationship managers with intelligent lead scoring, automated workflows, and real-time performance tracking. Built for semi-urban and rural banking operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Smart Lead Scoring</h3>
            <p className="text-muted-foreground">
              AI-driven prioritization ensures RMs focus on high-potential leads with daily personalized recommendations.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-gradient-success flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-success-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Real-Time Analytics</h3>
            <p className="text-muted-foreground">
              Track KRAs, conversion rates, and team performance with comprehensive dashboards and drill-down reports.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Sales Funnel Management</h3>
            <p className="text-muted-foreground">
              Visualize pipeline progression from prospect to customer with automated stage tracking and notifications.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-info flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-info-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Offline-First Design</h3>
            <p className="text-muted-foreground">
              Full functionality without network connectivity. Data syncs automatically when connection is restored.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Gamified Engagement</h3>
            <p className="text-muted-foreground">
              XP tracking and incentive management motivate teams with activity-based rewards and leaderboards.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Integrated IDAM authentication, role-based access control, and complete audit trails for compliance.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 md:p-12 bg-gradient-primary text-primary-foreground">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80">Daily AI Recommendations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-primary-foreground/80">Sales Funnel Stages</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Offline Capable</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Real-Time Sync</div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 pb-24">
        <Card className="p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Accelerate Your Sales?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Join Ujjivan's digital transformation. Empower your field teams with intelligent tools designed for modern banking operations.
          </p>
          <Link to="/auth">
            <Button size="lg" className="gap-2">
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Ujjivan Sales</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Ujjivan Small Finance Bank. Powered by TechBulls SoftTech.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
