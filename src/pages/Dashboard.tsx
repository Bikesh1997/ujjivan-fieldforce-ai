import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, TrendingUp, Users, Phone, Calendar, Award,
  Plus, Filter, Search, ArrowRight, CheckCircle2, Clock, AlertCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, Rahul</h1>
              <p className="text-sm text-muted-foreground">Here's your activity for today</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Lead
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Today's Leads</span>
              <Target className="h-4 w-4 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">10</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              6 recommended
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Conversions</span>
              <CheckCircle2 className="h-4 w-4 text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground mt-1">This week</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">XP Earned</span>
              <Award className="h-4 w-4 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">1,240</div>
            <p className="text-xs text-muted-foreground mt-1">Today: +85 XP</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Follow-ups</span>
              <Clock className="h-4 w-4 text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground">5</div>
            <p className="text-xs text-warning flex items-center gap-1 mt-1">
              <AlertCircle className="h-3 w-3" />
              2 overdue
            </p>
          </Card>
        </div>

        {/* KRA Progress */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">KRA Progress - December 2025</h2>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Lead Sourcing</span>
                <span className="text-sm font-medium text-foreground">24 / 30</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Field Visits</span>
                <span className="text-sm font-medium text-foreground">42 / 50</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Conversions</span>
                <span className="text-sm font-medium text-foreground">8 / 15</span>
              </div>
              <Progress value={53} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">Follow-ups</span>
                <span className="text-sm font-medium text-foreground">68 / 80</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Daily Recommendations */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-foreground">Today's Recommendations</h2>
              <p className="text-sm text-muted-foreground">6 AI-suggested + 4 manual leads</p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {[
              { name: "Priya Sharma", product: "Fixed Deposit", score: 92, status: "hot", activity: "2h ago" },
              { name: "Amit Patel", product: "Business Loan", score: 88, status: "hot", activity: "1 day ago" },
              { name: "Sunita Verma", product: "Savings Account", score: 76, status: "warm", activity: "3 days ago" },
            ].map((lead, idx) => (
              <Card key={idx} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{lead.name}</h3>
                      <Badge variant={lead.status === "hot" ? "default" : "secondary"} className="text-xs">
                        {lead.status === "hot" ? "Hot" : "Warm"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">Score: {lead.score}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{lead.product}</p>
                    <p className="text-xs text-muted-foreground mt-1">Last activity: {lead.activity}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Sales Funnel Overview */}
        <div className="grid md:grid-cols-5 gap-4">
          <Card className="p-4 text-center">
            <div className="text-sm font-medium text-muted-foreground mb-2">Prospect</div>
            <div className="text-3xl font-bold text-foreground mb-1">45</div>
            <div className="text-xs text-muted-foreground">New potential</div>
          </Card>

          <Card className="p-4 text-center">
            <div className="text-sm font-medium text-muted-foreground mb-2">Lead</div>
            <div className="text-3xl font-bold text-foreground mb-1">32</div>
            <div className="text-xs text-muted-foreground">Interest shown</div>
          </Card>

          <Card className="p-4 text-center">
            <div className="text-sm font-medium text-muted-foreground mb-2">Qualified</div>
            <div className="text-3xl font-bold text-foreground mb-1">18</div>
            <div className="text-xs text-muted-foreground">Eligible</div>
          </Card>

          <Card className="p-4 text-center bg-gradient-success">
            <div className="text-sm font-medium text-success-foreground/80 mb-2">Converted</div>
            <div className="text-3xl font-bold text-success-foreground mb-1">8</div>
            <div className="text-xs text-success-foreground/80">This month</div>
          </Card>

          <Card className="p-4 text-center">
            <div className="text-sm font-medium text-muted-foreground mb-2">Discarded</div>
            <div className="text-3xl font-bold text-foreground mb-1">12</div>
            <div className="text-xs text-muted-foreground">Invalid/Declined</div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Plus className="h-5 w-5" />
              <span>Add Lead</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Phone className="h-5 w-5" />
              <span>Log Call</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Visit</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Users className="h-5 w-5" />
              <span>View Team</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
