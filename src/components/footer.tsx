import Link from "next/link";
import {
  Stethoscope,
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
  Heart,
  Mail,
  MapPinned,
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
  { name: "Insurance Assistance", href: "/insurance-assistance", icon: Umbrella },
  { name: "Pharma Updates", href: "/pharma-updates", icon: Newspaper },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-background">MediVerse</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60 mb-6">
              Your comprehensive digital healthcare companion. Access world-class medical services anytime, anywhere.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Trusted by 2M+ patients</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-background/60 hover:text-background transition-colors flex items-center gap-2">
                    <s.icon className="h-3.5 w-3.5" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2.5">
              {services.slice(6).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-background/60 hover:text-background transition-colors flex items-center gap-2">
                    <s.icon className="h-3.5 w-3.5" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider mb-4">Emergency</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-xs text-background/60">24/7 Helpline</p>
                  <p className="text-sm font-semibold text-background">1800-1100-01</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ambulance className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-xs text-background/60">Ambulance</p>
                  <p className="text-sm font-semibold text-background">108 / 112</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-background/60">Email</p>
                  <p className="text-sm font-semibold text-background">help@medicare.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-background/60">Head Office</p>
                  <p className="text-sm text-background">New Bus Stand Rode, Berhampur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">&copy; {new Date().getFullYear()} MediVerse. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-background/40 hover:text-background/60 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-background/40 hover:text-background/60 cursor-pointer">Terms of Service</span>
            <span className="text-xs text-background/40 hover:text-background/60 cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
