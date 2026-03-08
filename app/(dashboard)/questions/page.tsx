"use client";

import { Topbar } from "@/components/layout/Topbar";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const questions = [
  { id: "q1", item: "Fone Bluetooth XYZ Pro", buyer: "Usuário anônimo", question: "Esse fone tem cancelamento de ruído ativo? Funciona bem em ambientes barulhentos?", status: "unanswered", age: "4h atrás" },
  { id: "q2", item: "Mouse Gamer RGB 12000DPI", buyer: "joao_gamer99", question: "O software de configuração é compatível com Mac?", status: "unanswered", age: "2h atrás" },
  { id: "q3", item: "Teclado Mecânico TKL Switch Red", buyer: "Usuário anônimo", question: "Tem teclas em português? O layout é ABNT2?", status: "unanswered", age: "1h atrás" },
  { id: "q4", item: "Webcam Full HD 1080p USB", buyer: "maria_tc", question: "Funciona no Windows 11 sem instalar driver?", status: "answered", age: "ontem" },
  { id: "q5", item: "Hub USB 7 Portas 3.0", buyer: "Usuário anônimo", question: "Suporta HD externo de 1TB? Tem fonte externa ou é USB powered?", status: "unanswered", age: "30min atrás" },
];

export default function QuestionsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [reply, setReply] = useState("");

  const unanswered = questions.filter((q) => q.status === "unanswered");

  return (
    <div>
      <Topbar title="Perguntas" subtitle={`${unanswered.length} sem resposta`} />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-700">
          <Clock size={15} />
          {unanswered.length} perguntas aguardando resposta — responder rápido melhora sua reputação
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Question list */}
          <div className="space-y-2">
            {questions.map((q) => (
              <Card
                key={q.id}
                className={`border-slate-100 shadow-sm cursor-pointer transition-all ${selected === q.id ? "ring-2 ring-amber-400" : "hover:border-amber-200"}`}
                onClick={() => { setSelected(q.id); setReply(""); }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-xs text-slate-500 font-medium">{q.item}</p>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-slate-400">{q.age}</span>
                      <StatusBadge status={q.status} />
                    </div>
                  </div>
                  <p className="text-sm text-slate-800">{q.question}</p>
                  <p className="text-xs text-slate-400 mt-1.5">por {q.buyer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Reply panel */}
          {selected ? (
            <div className="sticky top-4">
              <Card className="border-slate-100 shadow-sm">
                <CardContent className="p-5 space-y-4">
                  {(() => {
                    const q = questions.find((q) => q.id === selected)!;
                    return (
                      <>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-xs text-slate-500 font-medium mb-1">{q.item}</p>
                          <p className="text-sm text-slate-800">{q.question}</p>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-600 mb-1.5 block">Sua resposta</label>
                          <textarea
                            className="w-full border border-slate-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                            rows={5}
                            placeholder="Digite sua resposta..."
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                          />
                          <p className="text-xs text-slate-400 mt-1">{reply.length}/2000 caracteres</p>
                        </div>

                        {/* Templates */}
                        <div>
                          <p className="text-xs font-medium text-slate-500 mb-2">Respostas rápidas</p>
                          <div className="space-y-1">
                            {[
                              "Sim, o produto possui essa funcionalidade. Qualquer dúvida estou à disposição!",
                              "Infelizmente esse modelo não possui essa característica. Posso te indicar outro?",
                              "Esse produto é compatível com os principais sistemas operacionais.",
                            ].map((t, i) => (
                              <button
                                key={i}
                                onClick={() => setReply(t)}
                                className="w-full text-left text-xs px-3 py-2 bg-slate-50 hover:bg-amber-50 rounded border border-slate-100 text-slate-600"
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-400 text-slate-900 rounded-lg font-semibold text-sm hover:bg-amber-500">
                          <Send size={15} />
                          Enviar Resposta
                        </button>
                      </>
                    );
                  })()}
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-slate-400">
              <div className="text-center">
                <MessageCircle size={40} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm">Selecione uma pergunta para responder</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
