"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Truck,
  MessageCircle,
  Star,
  Tag,
  TrendingUp,
  Warehouse,
  Bell,
  MessageSquare,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/useAppStore";

const nav = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Pedidos", href: "/orders", icon: ShoppingCart },
  { label: "Anúncios", href: "/listings", icon: Package },
  { label: "Estoque", href: "/inventory", icon: Warehouse },
  { label: "Pricing", href: "/pricing", icon: TrendingUp },
  { label: "Envios", href: "/shipping", icon: Truck },
  { label: "Perguntas", href: "/questions", icon: MessageCircle },
  { label: "Mensagens", href: "/messages", icon: MessageSquare },
  { label: "Promoções", href: "/promotions", icon: Tag },
  { label: "Reputação", href: "/reputation", icon: Star },
  { label: "Notificações", href: "/notifications", icon: Bell },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAppStore();

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-slate-900 text-white shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-700">
        <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
          <span className="text-slate-900 font-black text-sm">ML</span>
        </div>
        <div>
          <p className="font-bold text-sm leading-tight">ML Manager</p>
          <p className="text-slate-400 text-xs">Gestão Completa</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {nav.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                active
                  ? "bg-amber-400 text-slate-900"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon size={16} />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight size={14} />}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-slate-700">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xs">
                {user.nickname[0].toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.nickname}</p>
              <p className="text-xs text-slate-400">{user.site_id}</p>
            </div>
            <button onClick={logout} className="text-slate-400 hover:text-white">
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
          >
            <LogOut size={16} />
            Conectar conta
          </Link>
        )}
      </div>
    </aside>
  );
}
