import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import theme from "./theme";

const App = () => <ThemeProvider theme={theme}> <CssBaseline/> <Routes /> </ThemeProvider>;
export default App;