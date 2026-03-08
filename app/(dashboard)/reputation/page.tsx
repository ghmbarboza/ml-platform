"use client";

import { Topbar } from "@/components/layout/Topbar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy, TrendingUp, Package, Clock } from "lucide-react";

const feedbacks = [
  { id: "fb1", buyer: "João S.", item: "Fone Bluetooth XYZ Pro", rating: "positive", comment: "Produto excelente, chegou rápido!", date: "07/03" },
  { id: "fb2", buyer: "Maria L.", item: "Tênis Esportivo 40", rating: "negative", comment: "Produto veio com defeito, decepcionante.", date: "06/03" },
  { id: "fb3", buyer: "Carlos M.", item: "Carregador USB-C 65W", rating: "positive", comment: "Ótimo vendedor, recomendo!", date: "05/03" },
  { id: "fb4", buyer: "Ana P.", item: "Case iPhone 15", rating: "neutral", comment: "Produto ok, mas embalagem veio amassada.", date: "04/03" },
  { id: "fb5", buyer: "Pedro R.", item: "Mouse Gamer RGB", rating: "positive", comment: "Mouse incrível, muito sensível e bonito.", date: "03/03" },
];

export default function ReputationPage() {
  return (
    <div>
      <Topbar title="Reputação" subtitle="Mercado Líder Gold" />
      <div className="p-6 space-y-6">
        {/* Score cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card className="border-slate-100 shadow-sm lg:col-span-1">
            <CardContent className="p-5 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-3">
                <Trophy className="text-amber-600" size={28} />
              </div>
              <p className="text-3xl font-black text-slate-900">Gold</p>
              <p className="text-sm text-slate-500">Mercado Líder</p>
              <div className="mt-3 flex items-center justify-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-3 grid grid-cols-3 gap-4">
            {[
              { label: "Vendas concluídas", value: "98,7%", icon: TrendingUp, color: "text-green-600 bg-green-50" },
              { label: "Envios no prazo", value: "96,2%", icon: Clock, color: "text-blue-600 bg-blue-50" },
              { label: "Reclamações", value: "1,3%", icon: Package, color: "text-amber-600 bg-amber-50" },
            ].map((m) => (
              <Card key={m.label} className="border-slate-100 shadow-sm">
                <CardContent className="p-4">
                  <div className={`inline-flex p-2 rounded-lg mb-3 ${m.color}`}>
                    <m.icon size={18} />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{m.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{m.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health bar */}
        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-slate-700">Score de Saúde Geral</p>
              <span className="text-2xl font-black text-green-600">87/100</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-400 to-green-500 rounded-full" style={{ width: "87%" }} />
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0</span><span>Crítico</span><span>Atenção</span><span>Bom</span><span>100</span>
            </div>
          </CardContent>
        </Card>

        {/* Feedbacks */}
        <Card className="border-slate-100 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">Avaliações Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {feedbacks.map((f) => (
                <div key={f.id} className="flex items-start gap-3 py-3 border-b border-slate-50 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-slate-600">{f.buyer[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-medium text-slate-800">{f.buyer}</span>
                      <StatusBadge status={f.rating} />
                      <span className="text-xs text-slate-400 ml-auto">{f.date}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{f.item}</p>
                    <p className="text-sm text-slate-700 mt-1">{f.comment}</p>
                    {f.rating === "negative" && (
                      <button className="mt-2 text-xs px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-600 font-medium">
                        Responder avaliação
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
