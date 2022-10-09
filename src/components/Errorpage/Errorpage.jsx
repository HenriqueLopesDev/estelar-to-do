import "./error-page.css"


function ErrorPage(){

    setTimeout(function() {window.location.href = "http://127.0.0.1:5173/"}, 4000);

    return(
        <div class="error-page">
            <h1 class="error-title">Oops!</h1>
            <p class="message">Parece que você entrou em uma página que não existe</p>
            <p class="message">Redirecionando para a página principal em 3 segundos...</p>
        </div>
    )
}

export default ErrorPage;