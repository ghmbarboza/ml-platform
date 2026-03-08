"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface TopbarProps {
  title: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input placeholder="Buscar..." className="pl-9 w-64 h-9 bg-slate-50 border-slate-200" />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <Bell size={18} className="text-slate-600" />
          <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-red-500 text-white text-[10px]">
            3
          </Badge>
        </button>
      </div>
    </header>
  );
}
