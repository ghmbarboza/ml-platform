"use client";

import { Topbar } from "@/components/layout/Topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Send, MessageSquare } from "lucide-react";
import { useState } from "react";

const threads = [
  { id: "t1", order: "2000123456", buyer: "João Silva", lastMsg: "Quando chega meu pedido?", time: "10min", unread: true, msgs: [
    { from: "buyer", text: "Olá, meu pedido está a caminho?", time: "14:20" },
    { from: "seller", text: "Oi João! Seu pedido foi postado ontem, código de rastreio: BR123456789BR", time: "14:25" },
    { from: "buyer", text: "Quando chega meu pedido?", time: "14:50" },
  ]},
  { id: "t2", order: "2000123457", buyer: "Maria Lima", lastMsg: "Produto veio sem manual", time: "1h", unread: true, msgs: [
    { from: "buyer", text: "Produto veio sem manual", time: "13:00" },
  ]},
  { id: "t3", order: "2000123458", buyer: "Carlos Melo", lastMsg: "Ok, obrigado!", time: "3h", unread: false, msgs: [
    { from: "buyer", text: "O produto funciona no Mac?", time: "10:00" },
    { from: "seller", text: "Sim, compatível com Mac!", time: "10:05" },
    { from: "buyer", text: "Ok, obrigado!", time: "10:10" },
  ]},
];

export default function MessagesPage() {
  const [selected, setSelected] = useState(threads[0]);
  const [msg, setMsg] = useState("");

  return (
    <div>
      <Topbar title="Mensagens" subtitle="Inbox de conversas por pedido" />
      <div className="p-6">
        <div className="flex gap-4 h-[calc(100vh-140px)]">
          {/* Thread list */}
          <div className="w-72 space-y-1 overflow-y-auto">
            {threads.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelected(t)}
                className={`p-3 rounded-lg cursor-pointer border transition-all ${selected.id === t.id ? "bg-amber-50 border-amber-200" : "bg-white border-slate-100 hover:border-amber-100"}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-800">{t.buyer}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400">{t.time}</span>
                    {t.unread && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                  </div>
                </div>
                <p className="text-xs text-slate-500 truncate">{t.lastMsg}</p>
                <p className="text-xs text-slate-400 mt-0.5">Pedido {t.order}</p>
              </div>
            ))}
          </div>

          {/* Chat */}
          <Card className="flex-1 border-slate-100 shadow-sm flex flex-col">
            <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-xs font-bold text-amber-700">{selected.buyer[0]}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{selected.buyer}</p>
                <p className="text-xs text-slate-400">Pedido {selected.order}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {selected.msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "seller" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${m.from === "seller" ? "bg-amber-400 text-slate-900 rounded-br-sm" : "bg-slate-100 text-slate-800 rounded-bl-sm"}`}>
                    {m.text}
                    <p className={`text-[10px] mt-1 ${m.from === "seller" ? "text-amber-800" : "text-slate-400"}`}>{m.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-100 flex gap-2">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="p-2.5 bg-amber-400 text-slate-900 rounded-lg hover:bg-amber-500">
                <Send size={16} />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
