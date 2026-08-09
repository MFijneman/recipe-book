import TopHeader from '@/components/TopHeader';
import { PropsWithChildren } from 'react';

interface BasicLayoutProps extends PropsWithChildren {
  showTopHeader?: boolean;
}

export default function BasicLayout({ children, showTopHeader = true }: BasicLayoutProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {showTopHeader && <TopHeader />}
      {children}
    </div>
  );
}
