# Usage

> Omg the cookie is being changed, but where? Give me a breakpoint when JS changes my cookies!

    debugAccess(document, 'cookie');

> Some JS is getting the `scrollTop` value causing massive Recalculate Styles costs.. Who is the perpetrator?

    debugAccess(document.body,'scrollTop', true)
