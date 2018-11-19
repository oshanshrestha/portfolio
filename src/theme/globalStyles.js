import { injectGlobal } from 'styled-components'

// eslint-disable
injectGlobal`
    @import url('./VT323-Regular.ttf');
    @import url('https://fonts.googleapis.com/css?family=VT323');

    body {
        font-family: 'VT323', monospace;
        font-size: 18px;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        font-weight: normal;
    }
`