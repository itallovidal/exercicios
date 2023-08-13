import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global.styled.ts";
import {lightTheme} from "./styles/themes.ts";
import GlobalContextProvider from "./contexts/GlobalContextProvider.tsx";


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <GlobalContextProvider>
              <Routes>
                <Route index element={<SignUp/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
              </Routes>
            </GlobalContextProvider>
        </BrowserRouter>
        <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
