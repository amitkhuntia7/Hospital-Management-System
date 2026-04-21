"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  Menu,
  X,
  Video,
  FileText,
  Pill,
  Activity,
  Ambulance,
  MapPin,
  Shield,
  Brain,
  Phone,
  Bell,
  Umbrella,
  Newspaper,
  Stethoscope,
} from "lucide-react";

const services = [
  { name: "Video Consultation", href: "/video-consultation", icon: Video },
  { name: "Health Records", href: "/health-records", icon: FileText },
  { name: "Medicine Delivery", href: "/medicine-delivery", icon: Pill },
  { name: "Health Monitoring", href: "/health-monitoring", icon: Activity },
  { name: "Emergency Ambulance", href: "/emergency-ambulance", icon: Ambulance },
  { name: "Hospital Finder", href: "/hospital-finder", icon: MapPin },
  { name: "Preventive Checkup", href: "/preventive-checkup", icon: Shield },
  { name: "Mental Health", href: "/mental-health", icon: Brain },
  { name: "Call Center", href: "/call-center", icon: Phone },
  { name: "Medicine Reminder", href: "/medicine-reminder", icon: Bell },
  { name: "Insurance Help", href: "/insurance-assistance", icon: Umbrella },
  { name: "Pharma Updates", href: "/pharma-updates", icon: Newspaper },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">MediVerse</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-colors">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-1"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] glass-card rounded-xl shadow-xl p-4 grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <s.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/emergency-ambulance" className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-colors">
              Emergency
            </Link>
            <Link href="/call-center" className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-colors">
              Contact
            </Link>
            <Link href="/login" className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-colors">
              Login
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/emergency-ambulance"
              className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <Ambulance className="h-4 w-4" />
              SOS
            </Link>
            <Link
              href="/video-consultation"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              Book Consultation
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-white/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-primary/10 font-medium">
              Home
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/10"
              >
                <s.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{s.name}</span>
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/emergency-ambulance"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-center text-sm font-medium bg-red-500 text-white rounded-full"
              >
                Emergency SOS
              </Link>
              <Link
                href="/video-consultation"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-center text-sm font-medium bg-primary text-primary-foreground rounded-full"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}