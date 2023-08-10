import 'styled-components'
import {lightTheme} from "./themes.ts";

type MyTheme = typeof lightTheme

declare module 'styled-components'{
    export interface DefaultTheme extends MyTheme{}
}
