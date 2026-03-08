"use client";

import { Topbar } from "@/components/layout/Topbar";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Tag, TrendingUp } from "lucide-react";

const promotions = [
  { id: "PR001", name: "Semana do Consumidor", status: "active", items: 24, discount: "15%", start: "08/03", end: "15/03", revenue: "R$ 12.450" },
  { id: "PR002", name: "Desconto Fone Bluetooth", status: "active", items: 1, discount: "10%", start: "01/03", end: "31/03", revenue: "R$ 3.210" },
  { id: "PR003", name: "Liquidação Periféricos", status: "paused", items: 8, discount: "20%", start: "01/02", end: "28/02", revenue: "R$ 8.900" },
  { id: "PR004", name: "Black Friday Antecipada", status: "finished", items: 41, discount: "25%", start: "01/11/25", end: "30/11/25", revenue: "R$ 41.200" },
];

export default function PromotionsPage() {
  return (
    <div>
      <Topbar title="Promoções" subtitle="Gerencie campanhas e descontos" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Ativas", value: promotions.filter(p => p.status === "active").length, icon: Tag, color: "text-green-600 bg-green-50" },
            { label: "Itens em promoção", value: promotions.filter(p => p.status === "active").reduce((a, p) => a + p.items, 0), icon: TrendingUp, color: "text-blue-600 bg-blue-50" },
            { label: "Receita em promoção", value: "R$ 15.660", icon: TrendingUp, color: "text-amber-600 bg-amber-50" },
          ].map((s) => (
            <div key={s.label} className={`flex items-center justify-between px-5 py-4 rounded-xl border ${s.color} border-current border-opacity-20`}>
              <div>
                <p className="text-sm font-medium opacity-70">{s.label}</p>
                <p className="text-2xl font-bold mt-0.5">{s.value}</p>
              </div>
              <s.icon size={24} className="opacity-60" />
            </div>
          ))}
        </div>

        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-xs text-slate-500">
                  <th className="text-left px-4 py-3 font-medium">Campanha</th>
                  <th className="text-center px-4 py-3 font-medium">Itens</th>
                  <th className="text-center px-4 py-3 font-medium">Desconto</th>
                  <th className="text-center px-4 py-3 font-medium">Período</th>
                  <th className="text-right px-4 py-3 font-medium">Receita</th>
                  <th className="text-center px-4 py-3 font-medium">Status</th>
                  <th className="text-center px-4 py-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {promotions.map((p) => (
                  <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800">{p.name}</p>
                      <p className="text-xs text-slate-400">{p.id}</p>
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">{p.items}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">{p.discount}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-xs text-slate-500">{p.start} → {p.end}</td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-800">{p.revenue}</td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={p.status} /></td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-600 font-medium">
                        Ver itens
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
