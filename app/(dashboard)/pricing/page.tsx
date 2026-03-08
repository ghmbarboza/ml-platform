"use client";

import { Topbar } from "@/components/layout/Topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Trophy, Minus } from "lucide-react";

const items = [
  { id: "MLB111", title: "Fone Bluetooth XYZ Pro", myPrice: 189.90, suggestedPrice: 179.90, winPrice: 175.00, buyBox: true, diff: -10.00 },
  { id: "MLB112", title: "Carregador USB-C 65W GaN", myPrice: 59.90, suggestedPrice: 54.90, winPrice: 52.00, buyBox: false, diff: -7.90 },
  { id: "MLB113", title: "Mouse Gamer RGB 12000DPI", myPrice: 149.00, suggestedPrice: 149.00, winPrice: 149.00, buyBox: true, diff: 0 },
  { id: "MLB114", title: "Teclado Mecânico TKL Red", myPrice: 389.00, suggestedPrice: 359.00, winPrice: 349.00, buyBox: false, diff: -40.00 },
  { id: "MLB116", title: "Hub USB 7 Portas 3.0", myPrice: 89.90, suggestedPrice: 84.90, winPrice: 82.00, buyBox: true, diff: -7.90 },
  { id: "MLB118", title: "Mousepad Gamer XL 90x40cm", myPrice: 79.90, suggestedPrice: 74.90, winPrice: 72.00, buyBox: false, diff: -7.90 },
];

const fmt = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function PricingPage() {
  const winning = items.filter((i) => i.buyBox).length;

  return (
    <div>
      <Topbar title="Pricing & Buy Box" subtitle="Monitore sua competitividade no catálogo" />
      <div className="p-6 space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-green-600 font-medium">Ganhando Buy Box</p>
              <p className="text-2xl font-bold text-green-700">{winning}/{items.length}</p>
            </div>
            <Trophy className="text-green-500" size={28} />
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-amber-600 font-medium">Perdendo Buy Box</p>
              <p className="text-2xl font-bold text-amber-700">{items.length - winning}/{items.length}</p>
            </div>
            <TrendingDown className="text-amber-500" size={28} />
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-blue-600 font-medium">Ajuste médio necessário</p>
              <p className="text-2xl font-bold text-blue-700">- R$ 14,74</p>
            </div>
            <TrendingUp className="text-blue-500" size={28} />
          </div>
        </div>

        {/* Table */}
        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-xs text-slate-500">
                  <th className="text-left px-4 py-3 font-medium">Produto</th>
                  <th className="text-right px-4 py-3 font-medium">Meu Preço</th>
                  <th className="text-right px-4 py-3 font-medium">Sugerido</th>
                  <th className="text-right px-4 py-3 font-medium">Preço Win</th>
                  <th className="text-center px-4 py-3 font-medium">Buy Box</th>
                  <th className="text-right px-4 py-3 font-medium">Diferença</th>
                  <th className="text-center px-4 py-3 font-medium">Ação</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800 truncate max-w-[220px]">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.id}</p>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-slate-800">{fmt(item.myPrice)}</td>
                    <td className="px-4 py-3 text-right text-blue-600 font-medium">{fmt(item.suggestedPrice)}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-medium">{fmt(item.winPrice)}</td>
                    <td className="px-4 py-3 text-center">
                      {item.buyBox ? (
                        <Badge className="bg-green-100 text-green-700 border-0 gap-1"><Trophy size={10} /> Ganhando</Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 border-0">Perdendo</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {item.diff === 0 ? (
                        <span className="flex items-center justify-end gap-1 text-slate-500 text-xs"><Minus size={12} /> —</span>
                      ) : (
                        <span className="flex items-center justify-end gap-1 text-red-600 text-xs font-medium">
                          <TrendingDown size={12} /> {fmt(Math.abs(item.diff))}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {!item.buyBox && (
                        <button className="text-xs px-3 py-1.5 bg-amber-400 text-slate-900 rounded font-semibold hover:bg-amber-500">
                          Aplicar
                        </button>
                      )}
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
