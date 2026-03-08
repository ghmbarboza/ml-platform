import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string | number;
  sub?: string;
  icon: LucideIcon;
  trend?: number;
  color?: "default" | "green" | "red" | "amber";
}

const colors = {
  default: "bg-slate-100 text-slate-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  amber: "bg-amber-100 text-amber-600",
};

export function KpiCard({ title, value, sub, icon: Icon, trend, color = "default" }: KpiCardProps) {
  return (
    <Card className="border-slate-100 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-slate-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
            {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
            {trend !== undefined && (
              <div className={cn("flex items-center gap-1 mt-2 text-xs font-medium", trend >= 0 ? "text-green-600" : "text-red-500")}>
                {trend >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Math.abs(trend)}% vs semana anterior
              </div>
            )}
          </div>
          <div className={cn("p-2.5 rounded-xl", colors[color])}>
            <Icon size={20} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
