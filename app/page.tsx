"use client";

import { useState, useEffect } from "react";
import {
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Sparkles,
  Globe,
  Shield,
} from "lucide-react";

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const NAV_LINKS = ["Features", "Pricing", "How It Works", "Creators"];

const FEATURES = [
  {
    icon: Sparkles,
    color: "#2563EB",
    title: "AI-Powered Matching",
    description:
      "Our proprietary AI analyzes 50+ data points to connect brands with perfect-fit influencers. Zero guesswork, 10x ROI.",
  },
  {
    icon: BarChart3,
    color: "#F97316",
    title: "Real-Time Analytics",
    description:
      "Track every metric that matters — reach, engagement, conversions — with live dashboards built for performance marketers.",
  },
  {
    icon: Shield,
    color: "#8B5CF6",
    title: "Fraud Detection",
    description:
      "Advanced bot detection and authenticity scoring protects your budget. Only partner with real, engaged audiences.",
  },
  {
    icon: Globe,
    color: "#EC4899",
    title: "Global Creator Network",
    description:
      "Access 2M+ verified creators across TikTok, Instagram, YouTube, and emerging platforms worldwide.",
  },
  {
    icon: Zap,
    color: "#F97316",
    title: "Instant Outreach",
    description:
      "AI-drafted personalized pitches, contract management, and payment processing — all in one seamless workflow.",
  },
  {
    icon: TrendingUp,
    color: "#2563EB",
    title: "Campaign Intelligence",
    description:
      "Predictive analytics tell you which campaigns will hit targets before you launch. Plan smarter, scale faster.",
  },
];

const STATS = [
  { value: 2, suffix: "M+", label: "Verified Creators" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "x", label: "Average ROI" },
  { value: 500, suffix: "K+", label: "Campaigns Launched" },
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CMO at NovaBrand",
    avatar: "SC",
    color: "#2563EB",
    text: "EZ Influencer 360 cut our campaign setup time by 80%. The AI matching is genuinely uncanny — every creator felt hand-picked.",
    stars: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Founder, GrowthLab",
    avatar: "MR",
    color: "#EC4899",
    text: "We scaled from 5 to 50 influencer partnerships in one quarter. The analytics dashboard alone is worth the subscription.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of Partnerships, Luxe Co.",
    avatar: "PS",
    color: "#8B5CF6",
    text: "The fraud detection saved us from wasting $40K on fake audiences. This platform is a must for any serious brand.",
    stars: 5,
  },
];

const PLANS = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for emerging brands testing influencer marketing",
    color: "#6b7280",
    features: [
      "50 creator searches/month",
      "5 active campaigns",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: 899,
    description: "For brands ready to scale with data-driven campaigns",
    color: "#2563EB",
    popular: true,
    features: [
      "Unlimited creator searches",
      "25 active campaigns",
      "Real-time analytics + AI insights",
      "Fraud detection",
      "Priority support",
      "API access",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions for large brands and agencies",
    color: "#8B5CF6",
    features: [
      "Everything in Growth",
      "White-label platform",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
  },
];

export default function LandingPage() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Check if stats section is visible
      const statsEl = document.getElementById("stats-section");
      if (statsEl) {
        const rect = statsEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && !statsVisible) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [statsVisible]);

  const stat0 = useCounter(STATS[0].value, 2000, statsVisible);
  const stat1 = useCounter(STATS[1].value, 2000, statsVisible);
  const stat2 = useCounter(STATS[2].value, 2000, statsVisible);
  const stat3 = useCounter(STATS[3].value, 2000, statsVisible);
  const statValues = [stat0, stat1, stat2, stat3];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2563EB, #8B5CF6)" }}
            >
              <Zap size={16} className="text-white" />
            </div>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-righteous)" }}
            >
              EZ<span style={{ color: "#F97316" }}>360</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
              Log In
            </button>
            <button
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
          style={{ background: "#2563EB" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-glow"
          style={{ background: "#8B5CF6", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "#EC4899" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10">
            <Sparkles size={14} style={{ color: "#F97316" }} />
            <span className="text-sm text-gray-300" style={{ fontFamily: "var(--font-poppins)" }}>
              Powered by Next-Gen AI · Trusted by 10,000+ Brands
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-righteous)" }}
          >
            The Future of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB, #8B5CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Influencer
            </span>
            <br />
            Marketing is Here
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Connect with 2M+ verified creators. Launch data-driven campaigns in minutes.
            Watch your brand explode — with AI-powered matching, real-time analytics, and
            guaranteed authentic audiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                boxShadow: "0 0 40px rgba(37,99,235,0.4)",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Start Free Trial <ArrowRight size={18} />
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border border-[#1e1e2e] text-gray-300 hover:border-[#2563EB]/50 hover:text-white transition-all"
              onClick={() => setVideoPlaying(true)}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Play size={18} style={{ color: "#F97316" }} /> Watch Demo
            </button>
          </div>

          {/* Hero Video/Dashboard Preview */}
          <div
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#1e1e2e]"
            style={{ boxShadow: "0 0 80px rgba(37,99,235,0.2), 0 40px 80px rgba(0,0,0,0.5)" }}
          >
            {/* Simulated Dashboard UI */}
            <div className="bg-[#12121a] p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-[#1e1e2e] rounded-lg px-4 py-1 text-xs text-gray-500">
                  app.ezinfluencer360.com/dashboard
                </div>
                <div className="w-16" />
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Active Campaigns", value: "24", color: "#2563EB" },
                  { label: "Total Reach", value: "8.4M", color: "#F97316" },
                  { label: "Avg Engagement", value: "6.2%", color: "#EC4899" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-[#0a0a0f] rounded-xl p-4 border border-[#1e1e2e]"
                  >
                    <div className="text-2xl font-bold mb-1" style={{ color: card.color, fontFamily: "var(--font-righteous)" }}>
                      {card.value}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "var(--font-poppins)" }}>
                      {card.label}
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-[#1e1e2e]">
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: "70%",
                          background: card.color,
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Creator Cards Row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Maya K.", niche: "Lifestyle", followers: "1.2M", match: "98%", color: "#EC4899" },
                  { name: "Jake P.", niche: "Tech", followers: "890K", match: "95%", color: "#2563EB" },
                  { name: "Aria S.", niche: "Beauty", followers: "2.1M", match: "93%", color: "#8B5CF6" },
                  { name: "Tom R.", niche: "Gaming", followers: "4.5M", match: "91%", color: "#F97316" },
                ].map((creator) => (
                  <div
                    key={creator.name}
                    className="bg-[#0a0a0f] rounded-xl p-3 border border-[#1e1e2e]"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2"
                      style={{ background: `${creator.color}20`, color: creator.color }}
                    >
                      {creator.name[0]}
                    </div>
                    <div className="text-xs font-semibold text-white">{creator.name}</div>
                    <div className="text-xs text-gray-500">{creator.niche}</div>
                    <div className="text-xs text-gray-400 mt-1">{creator.followers}</div>
                    <div
                      className="text-xs font-bold mt-2"
                      style={{ color: "#10B981" }}
                    >
                      {creator.match} match
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section id="stats-section" className="py-20 border-y border-[#1e1e2e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-righteous)",
                    background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {statValues[i]}
                  {stat.suffix}
                </div>
                <div
                  className="text-sm text-gray-400"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES SECTION ─── */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-righteous)" }}
            >
              Everything You Need to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F97316, #EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dominate
              </span>
            </h2>
            <p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              One platform to discover creators, manage campaigns, and measure impact.
              No more spreadsheets, no more guessing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl border border-[#1e1e2e] bg-[#12121a] hover:border-opacity-60 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "#1e1e2e",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = feature.color + "60";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${feature.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1e1e2e";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}20` }}
                  >
                    <Icon size={24} style={{ color: feature.color }} />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-24 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-righteous)" }}
            >
              Launch in{" "}
              <span style={{ color: "#2563EB" }}>3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Define Your Campaign",
                desc: "Tell our AI your goals. budget, and target audience. It builds a campaign brief in seconds.",
                color: "#2563EB",
              },
              {
                step: "02",
                title: "Discover & Connect",
                desc: "Browse AI-matched creators. Review analytics, audience demographics, and authenticity scores.",
                color: "#8B5CF6",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "Manage contracts, payments, and content approvals in one place. Track results live.",
                color: "#EC4899",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="text-7xl font-bold mb-4 opacity-20"
                  style={{ fontFamily: "var(--font-righteous)", color: item.color }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-poppins)", color: item.color }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-righteous)" }}
            >
              Brands Love{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                EZ360
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#12121a]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#F97316"
                      style={{ color: "#F97316" }}
                    />
                  ))}
                </div>
                <p
                  className="text-gray-300 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: `${t.color}20`, color: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-24 bg-[#12121a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-righteous)" }}
            >
              Simple, Transparent{" "}
              <span style={{ color: "#F97316" }}>Pricing</span>
            </h2>
            <p
              className="text-gray-400"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-[#2563EB]/60"
                    : "border-[#1e1e2e]"
                } bg-[#0a0a0f]`}
                style={
                  plan.popular
                    ? { boxShadow: "0 0 40px rgba(37,99,235,0.2)" }
                    : {}
                }
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="text-sm font-semibold mb-2"
                  style={{ color: plan.color, fontFamily: "var(--font-poppins)" }}
                >
                  {plan.name}
                </div>
                <div className="mb-4">
                  {plan.price ? (
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "var(--font-righteous)" }}
                    >
                      ${plan.price}
                      <span className="text-lg text-gray-400 font-normal">/mo</span>
                    </span>
                  ) : (
                    <span
                      className="text-4xl font-bold text-white"
                      style={{ fontFamily: "var(--font-righteous)" }}
                    >
                      Custom
                    </span>
                  )}
                </div>
                <p
                  className="text-sm text-gray-400 mb-6"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-gray-300"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      <CheckCircle size={16} style={{ color: plan.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    background: plan.popular
                      ? "linear-gradient(135deg, #2563EB, #8B5CF6)"
                      : `${plan.color}20`,
                    color: plan.popular ? "#fff" : plan.color,
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, #2563EB, #8B5CF6, #EC4899)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-righteous)" }}
          >
            Ready to Go{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F97316, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Viral?
            </span>
          </h2>
          <p
            className="text-gray-400 text-lg mb-10"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Join 10,000+ brands already crushing their influencer marketing goals.
            Start your free 14-day trial — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="flex items-center gap-2 px-10 py-4 rounded-full text-base font-semibold transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2563EB, #8B5CF6)",
                boxShadow: "0 0 40px rgba(37,99,235,0.5)",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Start Free Trial <ArrowRight size={18} />
            </button>
            <button
              className="flex items-center gap-2 px-10 py-4 rounded-full text-base border border-[#1e1e2e] text-gray-300 hover:text-white hover:border-gray-600 transition-all"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Users size={18} style={{ color: "#F97316" }} /> Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 border-t border-[#1e1e2e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #2563EB, #8B5CF6)" }}
              >
                <Zap size={16} className="text-white" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-righteous)" }}
              >
                EZ<span style={{ color: "#F97316" }}>360</span>
              </span>
            </div>
            <p
              className="text-sm text-gray-500 text-center"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              © 2026 Mad EZ Media Partners LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              {["Privacy", "Terms", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoPlaying(false)}
        >
          <div className="text-center p-12">
            <div
              className="text-6xl mb-4"
              style={{ fontFamily: "var(--font-righteous)", color: "#2563EB" }}
            >
              🎬
            </div>
            <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Demo Video Coming Soon
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
              Click anywhere to close
            </p>
          </div>
        </div>
        )}
    </div>
    );
}
