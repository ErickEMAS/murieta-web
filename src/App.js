import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider,} from 'react-query'
import Routes from "./routes";
import theme from "./theme";

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}> <CssBaseline/> <Routes /> </ThemeProvider>;
        </QueryClientProvider>
    )
}
export default App;