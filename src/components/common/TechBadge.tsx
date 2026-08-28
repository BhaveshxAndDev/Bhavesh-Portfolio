import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'orange' | 'cyan' | 'purple' | 'subtle';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-white/[0.04] text-white/90 border-white/10 hover:border-white/20',
    orange: 'bg-accent-orange/10 text-orange-400 border-accent-orange/30 hover:border-accent-orange/50',
    cyan: 'bg-accent-cyan/10 text-cyan-300 border-accent-cyan/30 hover:border-accent-cyan/50',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-500/50',
    subtle: 'bg-surface/60 text-textMuted border-white/5',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-[11px] font-mono',
    md: 'px-3 py-1.5 text-xs font-mono',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md transition-colors duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      <span>{name}</span>
    </span>
  );
};
