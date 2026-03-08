"use client";

import { Topbar } from "@/components/layout/Topbar";
import { KpiCard } from "@/components/shared/KpiCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShoppingCart, Package, Truck, MessageCircle,
  TrendingUp, AlertTriangle, CheckCircle, Star,
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from "recharts";

const ordersData = [
  { dia: "01/03", pedidos: 42 }, { dia: "02/03", pedidos: 58 },
  { dia: "03/03", pedidos: 35 }, { dia: "04/03", pedidos: 71 },
  { dia: "05/03", pedidos: 63 }, { dia: "06/03", pedidos: 89 },
  { dia: "07/03", pedidos: 54 }, { dia: "08/03", pedidos: 77 },
];

const categoryData = [
  { name: "Eletrônicos", value: 38 },
  { name: "Casa", value: 22 },
  { name: "Moda", value: 18 },
  { name: "Outros", value: 22 },
];

const COLORS = ["#f59e0b", "#3b82f6", "#10b981", "#94a3b8"];

const recentOrders = [
  { id: "2000123456", buyer: "João S.", item: "Fone Bluetooth XYZ", value: "R$ 189,90", status: "paid" },
  { id: "2000123457", buyer: "Maria L.", item: "Tênis Esportivo 40", value: "R$ 299,00", status: "confirmed" },
  { id: "2000123458", buyer: "Carlos M.", item: "Carregador USB-C", value: "R$ 59,90", status: "payment_required" },
  { id: "2000123459", buyer: "Ana P.", item: "Case iPhone 15", value: "R$ 39,90", status: "shipped" },
  { id: "2000123460", buyer: "Pedro R.", item: "Mouse Gamer RGB", value: "R$ 149,00", status: "cancelled" },
];

const alerts = [
  { type: "error", msg: "3 pedidos com prazo de envio vencido" },
  { type: "warning", msg: "12 perguntas sem resposta há mais de 2h" },
  { type: "warning", msg: "5 SKUs com estoque para menos de 7 dias" },
  { type: "success", msg: "Reputação: Mercado Líder Gold" },
];

export default function DashboardPage() {
  return (
    <div>
      <Topbar title="Dashboard" subtitle="Visão geral da operação" />

      {/* Alert Strip */}
      <div className="px-6 pt-4 space-y-2">
        {alerts.map((a, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium ${
              a.type === "error"
                ? "bg-red-50 text-red-700 border border-red-200"
                : a.type === "warning"
                ? "bg-amber-50 text-amber-700 border border-amber-200"
                : "bg-green-50 text-green-700 border border-green-200"
            }`}
          >
            {a.type === "error" ? (
              <AlertTriangle size={15} />
            ) : a.type === "warning" ? (
              <AlertTriangle size={15} />
            ) : (
              <CheckCircle size={15} />
            )}
            {a.msg}
          </div>
        ))}
      </div>

      <div className="p-6 space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard title="Pedidos Hoje" value="54" sub="R$ 8.234,00" icon={ShoppingCart} trend={12} color="amber" />
          <KpiCard title="Anúncios Ativos" value="1.247" sub="38 pausados" icon={Package} color="default" />
          <KpiCard title="Envios Pendentes" value="23" sub="3 atrasados" icon={Truck} trend={-5} color="red" />
          <KpiCard title="Sem Resposta" value="12" sub="Perguntas abertas" icon={MessageCircle} color="red" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <KpiCard title="Receita Semanal" value="R$ 48.920" icon={TrendingUp} trend={8} color="green" />
          <KpiCard title="Reputação" value="Gold" sub="Mercado Líder" icon={Star} color="amber" />
          <KpiCard title="Avaliações +" value="98,2%" sub="Positivas (30d)" icon={CheckCircle} color="green" />
          <KpiCard title="Saúde Geral" value="87/100" sub="Bom" icon={CheckCircle} color="green" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 border-slate-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-700">Pedidos — Últimos 8 dias</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={ordersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="dia" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="pedidos" stroke="#f59e0b" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-slate-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-700">Receita por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value">
                    {categoryData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend iconType="circle" iconSize={8} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="border-slate-100 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-500 border-b border-slate-100">
                  <th className="text-left pb-2 font-medium">Pedido</th>
                  <th className="text-left pb-2 font-medium">Comprador</th>
                  <th className="text-left pb-2 font-medium">Item</th>
                  <th className="text-right pb-2 font-medium">Valor</th>
                  <th className="text-right pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((o) => (
                  <tr key={o.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="py-2.5 text-slate-500 font-mono text-xs">{o.id}</td>
                    <td className="py-2.5 font-medium text-slate-800">{o.buyer}</td>
                    <td className="py-2.5 text-slate-600">{o.item}</td>
                    <td className="py-2.5 text-right font-semibold text-slate-800">{o.value}</td>
                    <td className="py-2.5 text-right">
                      <StatusBadge status={o.status} />
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
