import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'cyber';
  size?: 'sm' | 'md' | 'lg';
  iconType?: 'arrow' | 'external' | 'none';
  download?: boolean | string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  iconType = 'arrow',
  download,
  target,
  rel,
  className = '',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-sm font-semibold tracking-wider',
    lg: 'px-8 py-4 text-base font-bold tracking-wider',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-accent-warm via-accent-orange to-red-600 text-white shadow-glow-orange hover:shadow-glow-orange-lg hover:brightness-110 active:scale-[0.98] border border-orange-400/30',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md hover:border-accent-warm/60 active:scale-[0.98]',
    glass:
      'bg-card/70 hover:bg-card text-white border border-white/10 backdrop-blur-xl hover:border-accent-cyan/50 shadow-glass-card active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/50 active:scale-[0.98]',
    cyber:
      'bg-surface text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/10 hover:border-accent-cyan shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)] active:scale-[0.98]',
  };

  const baseClasses = `group relative inline-flex items-center justify-center gap-2.5 rounded-full font-mono uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-warm focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const renderIcon = () => {
    if (iconType === 'arrow') {
      return (
        <span className="relative flex items-center justify-center w-4 h-4 overflow-hidden">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:hidden" />
          <ArrowUpRight className="w-4 h-4 hidden transition-transform duration-300 group-hover:inline-block" />
        </span>
      );
    }
    if (iconType === 'external') {
      return <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    }
    return null;
  };

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
