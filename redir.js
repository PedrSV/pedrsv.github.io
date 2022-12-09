// SCRIPT EXPERIMENTAL PARA REDIRECIONAMENTO
const link = new URLSearchParams(document.location.search);
if(link.get('')) {
    switch(link.get('')){
        case 'portalfamepi':
            window.location.href = 'http://inscricoes.fundacaomatiasmachline.org.br/FrameHTML/web/app/edu/PortalEducacional/login/'; break;
        case 'famepi':
            window.location.href = 'https://www.famepi.org.br'; break;
        case 'github':
            window.location.href = 'http://github.com/pedrsv'; break;
        case 'google':
            window.location.href = 'http://www.google.com.br'; break;
        case 'instagram':
            window.location.href = 'https://www.instagram.com/pedrsv/'; break;
        case 'denver':
            window.location.href = 'https://joaofefes.github.io/denver/'; break;
        case 'linkedin':
            window.location.href = 'https://br.linkedin.com/in/pedrolucas-sds'; break;
        case 'links':
            window.location.href = 'https://pedrsv.github.io/links'; break;
        default:
            if (confirm('Não foi possível redirecionar para "' + link.get('') + '".\nVerifique o link e tente novamente.')) {
                window.location.href = 'about:blank'; // Em outro momento, testar com window.close();
            } else {
                window.location.href = 'about:blank';
            }
    }
}
