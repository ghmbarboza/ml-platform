"use client";

import { Topbar } from "@/components/layout/Topbar";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const inventory = [
  { sku: "FON-BT-001", title: "Fone Bluetooth XYZ Pro", stock: 142, reserved: 8, available: 134, velocity: 18, daysLeft: 7, status: "ok" },
  { sku: "CAR-UC-065", title: "Carregador USB-C 65W GaN", stock: 380, reserved: 12, available: 368, velocity: 22, daysLeft: 16, status: "ok" },
  { sku: "MOU-GM-001", title: "Mouse Gamer RGB 12000DPI", stock: 5, reserved: 2, available: 3, velocity: 8, daysLeft: 0, status: "critical" },
  { sku: "TEC-ME-TKL", title: "Teclado Mecânico TKL Red", stock: 18, reserved: 1, available: 17, velocity: 5, daysLeft: 3, status: "warning" },
  { sku: "WEB-FH-001", title: "Webcam Full HD 1080p USB", stock: 0, reserved: 0, available: 0, velocity: 3, daysLeft: 0, status: "critical" },
  { sku: "HUB-US-007", title: "Hub USB 7 Portas 3.0", stock: 67, reserved: 4, available: 63, velocity: 9, daysLeft: 7, status: "ok" },
  { sku: "SUP-MO-001", title: "Suporte Monitor Articulado", stock: 3, reserved: 0, available: 3, velocity: 2, daysLeft: 1, status: "critical" },
  { sku: "PAD-GM-XL", title: "Mousepad Gamer XL 90x40cm", stock: 112, reserved: 6, available: 106, velocity: 11, daysLeft: 9, status: "ok" },
];

const statusStyle = {
  ok: "bg-green-100 text-green-700",
  warning: "bg-amber-100 text-amber-700",
  critical: "bg-red-100 text-red-700",
};

export default function InventoryPage() {
  const critical = inventory.filter(i => i.status === "critical").length;
  const warning = inventory.filter(i => i.status === "warning").length;

  return (
    <div>
      <Topbar title="Estoque" subtitle="Controle de inventário e previsão de ruptura" />
      <div className="p-6 space-y-4">
        {(critical > 0 || warning > 0) && (
          <div className="flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-700">
            <AlertTriangle size={15} />
            {critical} SKUs sem estoque · {warning} SKUs em atenção — reabasteça para não perder vendas
          </div>
        )}

        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Total SKUs", value: inventory.length },
            { label: "Sem estoque", value: inventory.filter(i => i.stock === 0).length },
            { label: "Estoque crítico (≤5)", value: inventory.filter(i => i.stock > 0 && i.stock <= 5).length },
            { label: "Saudáveis", value: inventory.filter(i => i.status === "ok").length },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-slate-100 rounded-lg px-4 py-3 shadow-sm">
              <p className="text-xs text-slate-500">{s.label}</p>
              <p className="text-2xl font-bold text-slate-800 mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>

        <Card className="border-slate-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-xs text-slate-500">
                  <th className="text-left px-4 py-3 font-medium">SKU / Produto</th>
                  <th className="text-right px-4 py-3 font-medium">Total</th>
                  <th className="text-right px-4 py-3 font-medium">Reservado</th>
                  <th className="text-right px-4 py-3 font-medium">Disponível</th>
                  <th className="text-right px-4 py-3 font-medium">Velocidade/dia</th>
                  <th className="text-center px-4 py-3 font-medium">Dias restantes</th>
                  <th className="text-center px-4 py-3 font-medium">Situação</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((i) => (
                  <tr key={i.sku} className={`border-b border-slate-50 hover:bg-slate-50 ${i.status === "critical" ? "bg-red-50/30" : i.status === "warning" ? "bg-amber-50/30" : ""}`}>
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800 truncate max-w-[240px]">{i.title}</p>
                      <p className="text-xs text-slate-400">{i.sku}</p>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-700 font-semibold">{i.stock}</td>
                    <td className="px-4 py-3 text-right text-slate-500">{i.reserved}</td>
                    <td className="px-4 py-3 text-right font-bold text-slate-900">{i.available}</td>
                    <td className="px-4 py-3 text-right text-slate-600">{i.velocity}/dia</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`font-bold ${i.daysLeft === 0 ? "text-red-600" : i.daysLeft <= 3 ? "text-amber-600" : "text-slate-700"}`}>
                        {i.daysLeft === 0 ? "—" : `${i.daysLeft}d`}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyle[i.status as keyof typeof statusStyle]}`}>
                        {i.status === "ok" ? "OK" : i.status === "warning" ? "Atenção" : "Crítico"}
                      </span>
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
