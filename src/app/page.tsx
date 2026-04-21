import Link from "next/link";
import {
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
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  Heart,
  Stethoscope,
  CheckCircle,
} from "lucide-react";

const services = [
  { name: "Video Consultation", desc: "Connect with top doctors via HD video calls. Get prescriptions and medical advice from home.", href: "/video-consultation", icon: Video,image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef", color: "bg-blue-500/10 text-blue-600" },
  { name: "Digital Health Records", desc: "Securely store and access your complete medical history, lab reports, and prescriptions.", href: "/health-records", icon: FileText,image: "https://images.unsplash.com/photo-1588776814546-ec7e43f5f3d7", color: "bg-emerald-500/10 text-emerald-600" },
  { name: "Medicine Delivery", desc: "Order medicines online with same-day delivery. Upload prescriptions and get genuine medicines.", href: "/medicine-delivery", icon: Pill, image: "https://images.unsplash.com/photo-1585435557343-3b092031a831",color: "bg-violet-500/10 text-violet-600" },
  { name: "Health Monitoring", desc: "Track vital signs, fitness metrics, and health goals with real-time dashboards.", href: "/health-monitoring", icon: Activity,image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322", color: "bg-rose-500/10 text-rose-600" },
  { name: "Emergency Ambulance", desc: "One-tap ambulance booking with GPS tracking. Average response time under 8 minutes.", href: "/emergency-ambulance", icon: Ambulance,image: "https://images.unsplash.com/photo-1600959907703-125ba1374a12", color: "bg-red-500/10 text-red-600" },
  { name: "Hospital Finder", desc: "Find nearby hospitals, clinics, and specialists. Compare ratings, facilities, and availability.", href: "/hospital-finder", icon: MapPin,image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3", color: "bg-orange-500/10 text-orange-600" },
  { name: "Preventive Checkup", desc: "Book comprehensive health packages. Early detection saves lives with regular screening.", href: "/preventive-checkup", icon: Shield,image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54", color: "bg-teal-500/10 text-teal-600" },
  { name: "Mental Health Support", desc: "Confidential therapy sessions, self-help tools, and 24/7 crisis support.", href: "/mental-health", icon: Brain, image: "https://images.unsplash.com/photo-1604881991720-f91add269bed", color: "bg-purple-500/10 text-purple-600" },
  { name: "24/7 Call Center", desc: "Speak with healthcare professionals anytime. Multilingual support available.", href: "/call-center", icon: Phone, color: "bg-cyan-500/10 text-cyan-600" },
  { name: "Medicine Reminder", desc: "Never miss a dose. Smart reminders with dosage tracking and refill alerts.", href: "/medicine-reminder", icon: Bell, color: "bg-amber-500/10 text-amber-600" },
  { name: "Insurance Assistance", desc: "Hassle-free claim processing, policy comparison, and coverage guidance.", href: "/insurance-assistance", icon: Umbrella, color: "bg-indigo-500/10 text-indigo-600" },
  { name: "Pharma Updates", desc: "Latest pharmaceutical news, drug approvals, research breakthroughs, and health alerts.", href: "/pharma-updates", icon: Newspaper, color: "bg-pink-500/10 text-pink-600" },
];

const stats = [
  { label: "Active Patients", value: "2M+", icon: Users },
  { label: "Verified Doctors", value: "15K+", icon: Stethoscope },
  { label: "Avg Response", value: "<3 min", icon: Clock },
  { label: "Patient Rating", value: "4.9/5", icon: Star },
];

const testimonials = [
  { name: "Subhrajeet", role: "Patient", quote: "MediVerse saved my father's life with their quick ambulance service. The response was incredibly fast.", rating: 5 },
  { name: "Dr. Amit Khuntia", role: "Cardiologist", quote: "The video consultation platform is excellent. I can effectively diagnose and treat patients remotely.", rating: 5 },
  { name: "Rahul ", role: "Regular User", quote: "Medicine delivery is so convenient. I never miss my medications thanks to the reminder feature.", rating: 5 },
];

export default function Home() {
  return (
    <>
  
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                <Heart className="h-4 w-4" />
                Trusted by 2 Million+ Patients
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                Your Health,{" "}
                <span className="gradient-text">Our Priority</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Access world-class healthcare from anywhere. Consult doctors, order medicines, track your health, and get emergency help - all in one platform.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/video-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                >
                  <Video className="h-5 w-5" />
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/emergency-ambulance"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors shadow-lg shadow-red-500/25"
                >
                  <Ambulance className="h-5 w-5" />
                  Emergency SOS
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  24/7 Available
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Verified Doctors
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass-card rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col items-center gap-3 p-5 rounded-2xl hover:bg-muted/50 transition-colors"
                      >
                        <div className={`p-3 rounded-xl ${s.color}`}>
                          <s.icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium text-center">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-green-700">142 Doctors Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold">4.9</span>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold">2M+</span>
                    <span className="text-xs text-muted-foreground">Patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <Award className="h-4 w-4" />
              Complete Healthcare Suite
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need for Your Health
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultations to emergencies, we have got every aspect of your healthcare covered with cutting-edge technology.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl ${s.color} mb-4`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Get started in just 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create Your Profile", desc: "Sign up in seconds. Add your medical history and preferences for personalized care." },
              { step: "02", title: "Choose a Service", desc: "Browse our 12+ healthcare services. Book consultations, order medicines, or get emergency help." },
              { step: "03", title: "Get Expert Care", desc: "Connect with verified healthcare professionals and receive quality treatment from anywhere." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground">Join millions who trust MediVerse for their healthcare needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 sm:p-16 text-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Your Health Journey Starts Here
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Join over 2 million patients who trust MediVerse for their healthcare needs. Get started with a free consultation today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/video-consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/call-center"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
