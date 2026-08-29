import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { CTAButton } from '../common/CTAButton';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/BrandIcons';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable async transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#FF6B00', '#00F0FF', '#FFA000', '#ffffff'],
        });
      } catch (e) {
        // Fallback gracefully
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        number="08"
        tag="CONTACT"
        title="LET'S BUILD SOMETHING TOGETHER"
        subtitle="Open for full-stack Android software opportunities, technical collaborations, and engineering discussions."
      />

      {/* Large Rounded Container */}
      <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] bg-[#0A0A10] border border-white/15 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl">
        {/* Glow Halo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-warm/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* LEFT COLUMN: Contact Info & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-accent-warm font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-warm" />
                DIRECT COMMUNICATION
              </span>

              <h3 className="text-3xl sm:text-4xl font-black font-heading text-white">
                Bhavesh Dattuji <br />
                Rewatkar
              </h3>

              <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                Whether you have an Android application to build, a backend API to integrate, or a technical inquiry, feel free to reach out.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href="mailto:bhaveshrewatkardev@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-warm/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-warm/10 border border-accent-warm/30 flex items-center justify-center text-accent-warm group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-textMuted uppercase tracking-wider">Email Address</p>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent-warm transition-colors">
                    bhaveshrewatkardev@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:9359072319"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-cyan/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-textMuted uppercase tracking-wider">Phone / WhatsApp</p>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-accent-cyan transition-colors">
                    +91 9359072319
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-textMuted uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium text-xs sm:text-sm">
                    Katol, Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels & Resume */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                Social Profiles & Documents:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/BhaveshxAndDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bhavesh GitHub profile"
                  className="w-11 h-11 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-accent-warm transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhavesh-rewatkar-82b8a03a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bhavesh LinkedIn profile"
                  className="w-11 h-11 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-accent-cyan hover:border-accent-cyan transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1QFqZgEbEH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bhavesh Facebook profile"
                  className="w-11 h-11 rounded-2xl bg-card border border-white/10 flex items-center justify-center text-white/80 hover:text-blue-400 hover:border-blue-400 transition-all"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <CTAButton
                  href="/resume/Bhavesh-Rewatkar-Resume.pdf"
                  variant="glass"
                  size="sm"
                  iconType="external"
                  target="_blank"
                  download="Bhavesh-Rewatkar-Resume.pdf"
                  className="ml-auto"
                >
                  Resume
                </CTAButton>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0F0F18] border border-white/10 p-6 sm:p-8 relative">
            <h4 className="font-heading font-black text-xl text-white mb-2">
              Send a Transmission
            </h4>
            <p className="font-mono text-xs text-textMuted mb-6">
              Fill out the parameters below to initiate a direct message.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h5 className="font-heading font-black text-2xl text-white">
                    Transmission Dispatched!
                  </h5>
                  <p className="text-sm text-textMuted max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been received, and I will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-card border border-white/15 text-white font-mono text-xs hover:border-accent-warm transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase text-white/70 tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Bhavesh Rewatkar"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500/60 focus:ring-red-500'
                            : 'border-white/10 focus:border-accent-warm focus:ring-accent-warm'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs uppercase text-white/70 tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500/60 focus:ring-red-500'
                            : 'border-white/10 focus:border-accent-warm focus:ring-accent-warm'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase text-white/70 tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="Project Collaboration / Android Development"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? 'border-red-500/60 focus:ring-red-500'
                          : 'border-white/10 focus:border-accent-warm focus:ring-accent-warm'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase text-white/70 tracking-wider">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Hi Bhavesh, I'd like to talk about a full-stack Android application..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500/60 focus:ring-red-500'
                          : 'border-white/10 focus:border-accent-warm focus:ring-accent-warm'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-accent-warm via-accent-orange to-red-600 text-white font-mono font-bold uppercase tracking-wider shadow-glow-orange hover:shadow-glow-orange-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>DISPATCHING TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
