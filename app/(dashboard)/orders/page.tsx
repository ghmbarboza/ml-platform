"use client";

import { Topbar } from "@/components/layout/Topbar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, AlertTriangle } from "lucide-react";

const orders = [
  { id: "2000123456", buyer: "João Silva", item: "Fone Bluetooth XYZ", qty: 1, value: "R$ 189,90", status: "paid", shipping: "shipped", date: "08/03/2026" },
  { id: "2000123457", buyer: "Maria Lima", item: "Tênis Esportivo 40", qty: 1, value: "R$ 299,00", status: "confirmed", shipping: "pending", date: "08/03/2026" },
  { id: "2000123458", buyer: "Carlos Melo", item: "Carregador USB-C 65W", qty: 2, value: "R$ 119,80", status: "payment_required", shipping: "pending", date: "07/03/2026" },
  { id: "2000123459", buyer: "Ana Paula", item: "Case iPhone 15 Pro", qty: 1, value: "R$ 39,90", status: "paid", shipping: "delivered", date: "06/03/2026" },
  { id: "2000123460", buyer: "Pedro Rocha", item: "Mouse Gamer RGB 12000DPI", qty: 1, value: "R$ 149,00", status: "cancelled", shipping: "cancelled", date: "06/03/2026" },
  { id: "2000123461", buyer: "Lucia Ferr.", item: "Mochila Notebook 15.6\"", qty: 1, value: "R$ 219,90", status: "paid", shipping: "not_delivered", date: "05/03/2026", sla: true },
  { id: "2000123462", buyer: "Marcos A.", item: "Teclado Mecânico TKL", qty: 1, value: "R$ 389,00", status: "paid", shipping: "shipped", date: "07/03/2026" },
  { id: "2000123463", buyer: "Fernanda T.", item: "Webcam Full HD 1080p", qty: 1, value: "R$ 179,90", status: "paid", shipping: "pending", date: "08/03/2026", sla: true },
];

export default function OrdersPage() {
  return (
    <div>
      <Topbar title="Pedidos" subtitle={`${orders.length} pedidos encontrados`} />

      {/* SLA Alert */}
      <div className="mx-6 mt-4 flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-700">
        <AlertTriangle size={15} />
        2 pedidos com prazo de envio vencido — envie agora para não afetar sua reputação
      </div>

      <div className="p-6 space-y-4">
        {/* Filters */}
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input placeholder="Buscar pedido ou comprador..." className="pl-9 bg-white" />
          </div>
          <Select>
            <SelectTrigger className="w-44 bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="paid">Pago</SelectItem>
              <SelectItem value="confirmed">Confirmado</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-44 bg-white">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
            </SelectContent>
          </Select>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 ml-auto">
            <Download size={15} />
            Exportar CSV
          </button>
        </div>

        {/* Table */}
        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-xs text-slate-500">
                  <th className="text-left px-4 py-3 font-medium">Pedido</th>
                  <th className="text-left px-4 py-3 font-medium">Comprador</th>
                  <th className="text-left px-4 py-3 font-medium">Item</th>
                  <th className="text-center px-4 py-3 font-medium">Qtd</th>
                  <th className="text-right px-4 py-3 font-medium">Valor</th>
                  <th className="text-center px-4 py-3 font-medium">Status</th>
                  <th className="text-center px-4 py-3 font-medium">Envio</th>
                  <th className="text-center px-4 py-3 font-medium">Data</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className={`border-b border-slate-50 hover:bg-slate-50 cursor-pointer ${o.sla ? "bg-red-50/40" : ""}`}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500">{o.id}</span>
                        {o.sla && <Badge className="bg-red-100 text-red-700 border-0 text-[10px] px-1.5 py-0">SLA</Badge>}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-800">{o.buyer}</td>
                    <td className="px-4 py-3 text-slate-600 max-w-[200px] truncate">{o.item}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{o.qty}</td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-800">{o.value}</td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={o.status} /></td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={o.shipping} /></td>
                    <td className="px-4 py-3 text-center text-slate-500 text-xs">{o.date}</td>
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
