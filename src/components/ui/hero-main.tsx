"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

const Waves = dynamic(() => import('@/components/ui/waves'), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroMain() {
  const t = useTranslations("HeroMain");
  const { resolvedTheme } = useTheme();
  const wavesBg = resolvedTheme === "dark" ? "#000000" : "#f4f4f8";
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── WAVES BACKGROUND — sadece desktop (mobilde performans tasarrufu) ── */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Waves
          strokeColor="#ec2027"
          backgroundColor={wavesBg}
          lineCount={14}
          waveSpeedX={0.0007}
          waveSpeedY={0.0005}
          waveAmpX={36}
          waveAmpY={22}
          xGap={16}
          yGap={34}
          friction={0.93}
          tension={0.0035}
          maxCursorMove={80}
        />
      </div>
      {/* Mobil için sade gradient arka plan */}
      <div className="md:hidden absolute inset-0 z-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-[#0a0a0f] dark:via-[#0d0005] dark:to-[#0a0a0f]" />

      {/* ── SCHOOL IMAGE BACKGROUND ──────────────────────────── */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <Image
          src="/okul2/okul2.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.08]"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── VIGNETTE OVERLAY ─────────────────────────────────── */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,rgba(255,255,255,0.82)_100%)] dark:bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,rgba(0,0,0,0.82)_100%)]" />

      {/* ── PURPLE GLOW ──────────────────────────────────────── */}
      <motion.div
        className="absolute z-[2] w-[720px] h-[720px] rounded-full blur-[160px] opacity-[0.18]"
        style={{
          background: "radial-gradient(circle, #ec2027 0%, #12648f 50%, transparent 80%)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: [1, 1.07, 0.97, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── CONTENT (z-10) ───────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ec2027]/30 bg-[#ec2027]/10 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ec2027] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ec2027]/80">
            Halkalı · Küçükçekmece / İstanbul
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.04] text-slate-900 dark:text-white mb-8"
        >
          {t("title_prefix")}{" "}
          <span className="bg-gradient-to-r from-[#ec2027] via-[#f06060] to-[#12648f] bg-clip-text text-transparent">
            {t("title_highlight")}
          </span>
          <br />
          {t("title_suffix")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-slate-500 dark:text-white/40 font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setContactModalOpen(true)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ec2027] hover:bg-[#c8191f] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_32px_rgba(236,32,39,0.45)] hover:shadow-[0_0_48px_rgba(236,32,39,0.6)]"
          >
            <MessageCircle className="w-4 h-4" />
            {t("cta")}
            <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform" />
          </button>
        </motion.div>
      </div>
      {/* ── CONTACT MODAL ───────────────────────────────────────── */}
      <AnimatePresence>
        {contactModalOpen && (
          <motion.div
            key="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            onClick={() => setContactModalOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px]" />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-white dark:bg-[#111118] rounded-3xl shadow-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08]"
            >
              {/* Close */}
              <button
                onClick={() => setContactModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/[0.06] dark:bg-white/[0.08] flex items-center justify-center text-black/40 dark:text-white/40 hover:bg-black/10 dark:hover:bg-white/15 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ec2027]/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-[#ec2027]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">İletişime Geç</h3>
                  <p className="text-sm text-slate-500 dark:text-white/40">Kayıt ve bilgi için bizi arayın</p>
                </div>

                {/* Phone display */}
                <div className="bg-black/[0.04] dark:bg-white/[0.04] rounded-2xl px-5 py-4 mb-6 text-center">
                  <span className="text-2xl font-bold tracking-wider text-slate-900 dark:text-white">0542 825 08 68</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/905428250868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1fb558] text-white font-semibold text-base transition-all duration-200 active:scale-[0.97] shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp ile Yaz
                  </a>
                  <a
                    href="tel:+905428250868"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#ec2027] hover:bg-[#c8191f] text-white font-semibold text-base transition-all duration-200 active:scale-[0.97] shadow-[0_4px_16px_rgba(236,32,39,0.25)]"
                  >
                    <Phone className="w-5 h-5" />
                    Hemen Ara
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ── BOTTOM FADE ──────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[2] bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
