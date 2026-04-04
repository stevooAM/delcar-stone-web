import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2.5 font-body font-medium tracking-widest uppercase transition-all duration-200 rounded-sm border cursor-pointer',
          {
            'bg-gold border-gold text-white hover:bg-[#7a5f1a] active:scale-[0.98]': variant === 'primary',
            'bg-transparent border-white/30 text-white hover:border-white': variant === 'outline',
            'bg-transparent border-transparent text-current hover:text-gold': variant === 'ghost',
            'text-[11px] px-5 py-2.5': size === 'sm',
            'text-[13px] px-8 py-4': size === 'md',
            'text-[14px] px-10 py-5': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
