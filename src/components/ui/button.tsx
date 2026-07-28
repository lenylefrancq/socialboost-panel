import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variants: Record<string, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-400 shadow-glow-sm hover:shadow-glow-md',
  secondary: 'bg-base-700 text-ink-50 hover:bg-base-600 border border-base-600',
  ghost: 'bg-transparent text-ink-100 hover:bg-base-800',
  danger: 'bg-danger/90 text-white hover:bg-danger',
  outline: 'bg-transparent border border-brand-500/40 text-brand-300 hover:bg-brand-500/10',
};

const sizes: Record<string, string> = {
  sm: 'text-xs px-3 py-1.5 rounded-lg',
  md: 'text-sm px-4 py-2.5 rounded-xl',
  lg: 'text-base px-6 py-3.5 rounded-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-base-950',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
