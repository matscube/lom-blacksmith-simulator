import clsx from 'clsx';
import { FormMainMaterialSelect } from './components/form-main-material-select';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className={clsx('max-w-7xl min-h-screen', 'flex flex-col')}>
          <header className={clsx('w-full', 'px-4 py-2', 'flex justify-between items-center')}>
            <h1 className={clsx('p-4', 'text-3xl font-bold')}>Blacksmith Simulator</h1>
            <ModeToggle />
          </header>
          <main className={clsx('px-4 py-2')}>
            <FormMainMaterialSelect className='p-4' />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

const Footer = () => {
  return (
    <footer className={clsx('mt-auto', 'bg-gray-800 text-white py-6')}>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='text-sm'>
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
