import clsx from 'clsx';
import Link from 'next/link';
import { UrlObject } from 'url';

export function LayoutFull(props: {
  title?: string;
  children: React.ReactNode;
  backLink?: {
    label: string;
    href: string | UrlObject;
  };
}) {
  const hasBackLink = props.backLink !== undefined;
  return (
    <main className='flex flex-col items-center justify-between text-white'>
      {hasBackLink && (
        <div className='self-start'>
          <Link
            href={props.backLink!.href}
            className={clsx('hover:opacity-50 transition transition-opacity')}
          >
            〈 &nbsp;Back to {props.backLink!.label}
          </Link>
        </div>
      )}
      {props.title && (
        <h1 className={clsx('w-full', 'text-4xl text-white font-bold text-left', 'py-4')}>
          {props.title}
        </h1>
      )}
      <div className={clsx('w-full', 'flex flex-col py-4 gap-y-4 text-white')}>
        {props.children}
      </div>
    </main>
  );
}
