import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusMap: Record<string, { label: string; class: string }> = {
  active: { label: "Ativo", class: "bg-green-100 text-green-700 hover:bg-green-100" },
  paused: { label: "Pausado", class: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" },
  closed: { label: "Encerrado", class: "bg-slate-100 text-slate-600 hover:bg-slate-100" },
  under_review: { label: "Em revisão", class: "bg-blue-100 text-blue-700 hover:bg-blue-100" },
  paid: { label: "Pago", class: "bg-green-100 text-green-700 hover:bg-green-100" },
  confirmed: { label: "Confirmado", class: "bg-blue-100 text-blue-700 hover:bg-blue-100" },
  cancelled: { label: "Cancelado", class: "bg-red-100 text-red-700 hover:bg-red-100" },
  payment_required: { label: "Aguard. pagto", class: "bg-orange-100 text-orange-700 hover:bg-orange-100" },
  shipped: { label: "Enviado", class: "bg-blue-100 text-blue-700 hover:bg-blue-100" },
  delivered: { label: "Entregue", class: "bg-green-100 text-green-700 hover:bg-green-100" },
  not_delivered: { label: "Não entregue", class: "bg-red-100 text-red-700 hover:bg-red-100" },
  unanswered: { label: "Sem resposta", class: "bg-red-100 text-red-700 hover:bg-red-100" },
  answered: { label: "Respondida", class: "bg-green-100 text-green-700 hover:bg-green-100" },
  healthy: { label: "Saudável", class: "bg-green-100 text-green-700 hover:bg-green-100" },
  warning: { label: "Atenção", class: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" },
  unhealthy: { label: "Crítico", class: "bg-red-100 text-red-700 hover:bg-red-100" },
  positive: { label: "Positivo", class: "bg-green-100 text-green-700 hover:bg-green-100" },
  neutral: { label: "Neutro", class: "bg-slate-100 text-slate-600 hover:bg-slate-100" },
  negative: { label: "Negativo", class: "bg-red-100 text-red-700 hover:bg-red-100" },
};

export function StatusBadge({ status }: { status: string }) {
  const config = statusMap[status] ?? { label: status, class: "bg-slate-100 text-slate-600 hover:bg-slate-100" };
  return (
    <Badge className={cn("font-medium text-xs border-0", config.class)}>
      {config.label}
    </Badge>
  );
}
