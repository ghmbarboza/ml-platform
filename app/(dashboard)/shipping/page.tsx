"use client";

import { Topbar } from "@/components/layout/Topbar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Printer, Clock } from "lucide-react";

const shipments = [
  { id: "SH001", order: "2000123456", buyer: "João Silva", item: "Fone Bluetooth XYZ Pro", status: "shipped", carrier: "Mercado Envios", deadline: "10/03/2026", overdue: false },
  { id: "SH002", order: "2000123457", buyer: "Maria Lima", item: "Tênis Esportivo 40", status: "pending", carrier: "Mercado Envios", deadline: "09/03/2026", overdue: true },
  { id: "SH003", order: "2000123458", buyer: "Carlos Melo", item: "Carregador USB-C 65W", status: "delivered", carrier: "Correios", deadline: "07/03/2026", overdue: false },
  { id: "SH004", order: "2000123461", buyer: "Lucia Ferr.", item: "Mochila Notebook 15.6\"", status: "not_delivered", carrier: "Jadlog", deadline: "05/03/2026", overdue: true },
  { id: "SH005", order: "2000123462", buyer: "Marcos A.", item: "Teclado Mecânico TKL", status: "shipped", carrier: "Mercado Envios", deadline: "11/03/2026", overdue: false },
  { id: "SH006", order: "2000123463", buyer: "Fernanda T.", item: "Webcam Full HD 1080p", status: "pending", carrier: "Mercado Envios", deadline: "08/03/2026", overdue: true },
];

const overdue = shipments.filter((s) => s.overdue);

export default function ShippingPage() {
  return (
    <div>
      <Topbar title="Envios" subtitle={`${shipments.length} envios ativos`} />
      <div className="p-6 space-y-4">
        {overdue.length > 0 && (
          <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-sm font-bold text-red-700">
            <AlertTriangle size={15} />
            {overdue.length} envios com prazo vencido! Envie agora para evitar penalidades na reputação.
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Pendentes", value: shipments.filter(s => s.status === "pending").length, color: "bg-amber-50 text-amber-700 border-amber-200" },
            { label: "Enviados", value: shipments.filter(s => s.status === "shipped").length, color: "bg-blue-50 text-blue-700 border-blue-200" },
            { label: "Entregues", value: shipments.filter(s => s.status === "delivered").length, color: "bg-green-50 text-green-700 border-green-200" },
            { label: "Atrasados", value: overdue.length, color: "bg-red-50 text-red-700 border-red-200" },
          ].map((stat) => (
            <div key={stat.label} className={`flex items-center justify-between px-4 py-3 rounded-lg border ${stat.color}`}>
              <span className="text-sm font-medium">{stat.label}</span>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Table */}
        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-xs text-slate-500">
                  <th className="text-left px-4 py-3 font-medium">Envio</th>
                  <th className="text-left px-4 py-3 font-medium">Pedido</th>
                  <th className="text-left px-4 py-3 font-medium">Comprador</th>
                  <th className="text-left px-4 py-3 font-medium">Item</th>
                  <th className="text-center px-4 py-3 font-medium">Transportadora</th>
                  <th className="text-center px-4 py-3 font-medium">Prazo</th>
                  <th className="text-center px-4 py-3 font-medium">Status</th>
                  <th className="text-center px-4 py-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((s) => (
                  <tr key={s.id} className={`border-b border-slate-50 hover:bg-slate-50 ${s.overdue ? "bg-red-50/30" : ""}`}>
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{s.id}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">{s.order}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">{s.buyer}</td>
                    <td className="px-4 py-3 text-slate-600 max-w-[180px] truncate">{s.item}</td>
                    <td className="px-4 py-3 text-center text-slate-600 text-xs">{s.carrier}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`flex items-center justify-center gap-1 text-xs font-medium ${s.overdue ? "text-red-600" : "text-slate-600"}`}>
                        {s.overdue && <Clock size={12} />}
                        {s.deadline}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={s.status} /></td>
                    <td className="px-4 py-3 text-center">
                      <button className="p-1.5 rounded hover:bg-slate-100 text-slate-500" title="Imprimir etiqueta">
                        <Printer size={14} />
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
