// import { primary, secondary, info } from "./colors";

const components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                scrollBehavior: 'smooth',
            }
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                fontSize: '16px',
                letterSpacing: '1.75px'
            }
        }
    },
    // MuiPaper: {
    //     styleOverrides: {
    //         root: {
    //             backgroundColor: info.dark,
    //             border: `1px solid ${info.light}`,
    //             color: info.main
    //         }
    //     }
    // },
    // MuiInputBase: {
    //     styleOverrides: {
    //         input: {
    //             color: info.main
    //         }
    //     }
    // },
    // MuiInputLabel: {
    //     styleOverrides: {
    //         root: {
    //             color: info.main,
    //             '&.Mui-focused': { color: info.main }
    //         }
    //     }
    // }
}

export default components;