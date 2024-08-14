import clsx from "clsx";
import { FormMainMaterialSelect } from "./components/form-main-material-select";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/shadcn/ui/button";
import { ThemeProvider } from "./components/theme-provider";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className={clsx("max-w-7xl", "border border-red-400 p-10")}>
          <h1>Blacksmith Simulator</h1>
          <Button>Button</Button>

          <FormMainMaterialSelect />
          <footer>
            <ModeToggle />
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

