"use client";

import { Topbar } from "@/components/layout/Topbar";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, MessageCircle, Truck, Star, Package, AlertTriangle } from "lucide-react";

const notifications = [
  { id: 1, type: "order", icon: ShoppingCart, color: "bg-blue-100 text-blue-600", title: "Novo pedido recebido", desc: "Pedido #2000123469 — Fone Bluetooth XYZ Pro — R$ 189,90", time: "2min atrás", read: false },
  { id: 2, type: "question", icon: MessageCircle, color: "bg-amber-100 text-amber-600", title: "Pergunta sem resposta há 3h", desc: "Mouse Gamer RGB — 'O produto tem garantia de 1 ano?'", time: "3h atrás", read: false },
  { id: 3, type: "shipping", icon: AlertTriangle, color: "bg-red-100 text-red-600", title: "SLA de envio vencido", desc: "Pedido #2000123463 — Webcam Full HD — prazo venceu hoje", time: "1h atrás", read: false },
  { id: 4, type: "stock", icon: Package, color: "bg-orange-100 text-orange-600", title: "Estoque crítico", desc: "Mouse Gamer RGB — apenas 3 unidades disponíveis", time: "4h atrás", read: true },
  { id: 5, type: "feedback", icon: Star, color: "bg-red-100 text-red-600", title: "Avaliação negativa recebida", desc: "Tênis Esportivo 40 — 'Produto veio com defeito'", time: "6h atrás", read: true },
  { id: 6, type: "order", icon: ShoppingCart, color: "bg-blue-100 text-blue-600", title: "Novo pedido recebido", desc: "Pedido #2000123468 — Teclado Mecânico TKL — R$ 389,00", time: "5h atrás", read: true },
  { id: 7, type: "shipping", icon: Truck, color: "bg-green-100 text-green-600", title: "Pedido entregue", desc: "Pedido #2000123459 — Case iPhone 15 — entregue com sucesso", time: "8h atrás", read: true },
];

export default function NotificationsPage() {
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div>
      <Topbar title="Notificações" subtitle={`${unread} não lidas`} />
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {["Todas", "Pedidos", "Envios", "Perguntas", "Estoque", "Avaliações"].map((f) => (
              <button key={f} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${f === "Todas" ? "bg-amber-400 text-slate-900" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}>
                {f}
              </button>
            ))}
          </div>
          <button className="text-xs text-slate-500 hover:text-slate-800">Marcar todas como lidas</button>
        </div>

        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0 divide-y divide-slate-50">
            {notifications.map((n) => (
              <div key={n.id} className={`flex items-start gap-4 px-5 py-4 hover:bg-slate-50 cursor-pointer ${!n.read ? "bg-amber-50/30" : ""}`}>
                <div className={`p-2.5 rounded-xl shrink-0 ${n.color}`}>
                  <n.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${!n.read ? "text-slate-900" : "text-slate-600"}`}>{n.title}</p>
                    {!n.read && <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />}
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5 truncate">{n.desc}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0">{n.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
