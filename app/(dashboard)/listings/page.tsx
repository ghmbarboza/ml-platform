"use client";

import { Topbar } from "@/components/layout/Topbar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Pause, Play, AlertTriangle } from "lucide-react";

const listings = [
  { id: "MLB111", title: "Fone Bluetooth XYZ Pro", sku: "FON-BT-001", price: "R$ 189,90", stock: 142, status: "active", health: "healthy", category: "Eletrônicos", views: 1240 },
  { id: "MLB112", title: "Carregador USB-C 65W GaN", sku: "CAR-UC-065", price: "R$ 59,90", stock: 380, status: "active", health: "healthy", category: "Eletrônicos", views: 892 },
  { id: "MLB113", title: "Mouse Gamer RGB 12000DPI", sku: "MOU-GM-001", price: "R$ 149,00", stock: 5, status: "active", health: "warning", category: "Periféricos", views: 3104 },
  { id: "MLB114", title: "Teclado Mecânico TKL Switch Red", sku: "TEC-ME-TKL", price: "R$ 389,00", stock: 18, status: "active", health: "healthy", category: "Periféricos", views: 2211 },
  { id: "MLB115", title: "Webcam Full HD 1080p USB", sku: "WEB-FH-001", price: "R$ 179,90", stock: 0, status: "paused", health: "unhealthy", category: "Eletrônicos", views: 455 },
  { id: "MLB116", title: "Hub USB 7 Portas 3.0", sku: "HUB-US-007", price: "R$ 89,90", stock: 67, status: "active", health: "healthy", category: "Eletrônicos", views: 1890 },
  { id: "MLB117", title: "Suporte Monitor Articulado", sku: "SUP-MO-001", price: "R$ 239,00", stock: 3, status: "active", health: "warning", category: "Escritório", views: 788 },
  { id: "MLB118", title: "Mousepad Gamer XL 90x40cm", sku: "PAD-GM-XL", price: "R$ 79,90", stock: 112, status: "active", health: "healthy", category: "Periféricos", views: 2034 },
];

const healthColor = { healthy: "text-green-600", warning: "text-amber-600", unhealthy: "text-red-600" };
const healthDot = { healthy: "bg-green-500", warning: "bg-amber-500", unhealthy: "bg-red-500" };

export default function ListingsPage() {
  return (
    <div>
      <Topbar title="Anúncios" subtitle="1.247 anúncios ativos" />
      <div className="p-6 space-y-4">
        {/* Actions bar */}
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <Input placeholder="SKU, título ou ID..." className="pl-9 bg-white" />
          </div>
          <Select>
            <SelectTrigger className="w-40 bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativos</SelectItem>
              <SelectItem value="paused">Pausados</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40 bg-white">
              <SelectValue placeholder="Saúde" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="healthy">Saudável</SelectItem>
              <SelectItem value="warning">Atenção</SelectItem>
              <SelectItem value="unhealthy">Crítico</SelectItem>
            </SelectContent>
          </Select>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-semibold hover:bg-amber-500 ml-auto">
            <Plus size={15} />
            Novo Anúncio
          </button>
        </div>

        {/* Low stock warning */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-lg text-sm font-medium text-amber-700">
          <AlertTriangle size={15} />
          3 anúncios com estoque baixo (≤ 5 unidades) — risco de ruptura em 7 dias
        </div>

        {/* Table */}
        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-xs text-slate-500">
                  <th className="text-left px-4 py-3 font-medium w-8">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left px-4 py-3 font-medium">Título / SKU</th>
                  <th className="text-right px-4 py-3 font-medium">Preço</th>
                  <th className="text-center px-4 py-3 font-medium">Estoque</th>
                  <th className="text-center px-4 py-3 font-medium">Visitas</th>
                  <th className="text-center px-4 py-3 font-medium">Status</th>
                  <th className="text-center px-4 py-3 font-medium">Saúde</th>
                  <th className="text-center px-4 py-3 font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((l) => (
                  <tr key={l.id} className="border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800 truncate max-w-[260px]">{l.title}</p>
                      <p className="text-xs text-slate-400">{l.sku} · {l.id}</p>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-800">{l.price}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`font-semibold ${l.stock === 0 ? "text-red-600" : l.stock <= 5 ? "text-amber-600" : "text-slate-800"}`}>
                        {l.stock}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600">{l.views.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={l.status} /></td>
                    <td className="px-4 py-3 text-center">
                      <div className={`flex items-center justify-center gap-1.5 text-xs font-medium ${healthColor[l.health as keyof typeof healthColor]}`}>
                        <span className={`w-2 h-2 rounded-full ${healthDot[l.health as keyof typeof healthDot]}`} />
                        {l.health === "healthy" ? "Saudável" : l.health === "warning" ? "Atenção" : "Crítico"}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="p-1.5 rounded hover:bg-slate-100 text-slate-500">
                        {l.status === "active" ? <Pause size={14} /> : <Play size={14} />}
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
