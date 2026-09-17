# Erros de Deploy e Soluções Implementadas

## 1. Erro: rotas retornando 404 após o deploy no Netlify

### Problema

Após o deploy da aplicação Next.js no Netlify, as rotas da aplicação
retornavam `404` em produção, apesar de o build do Next.js reconhecer as
rotas.

No build eram apresentadas, entre outras:

``` text
Route (app)
○ /
ƒ /[locale]
```

As rotas localizadas envolvidas eram:

``` text
/pt
/en
/es
/ja
```

### Solução implementada

Foi corrigida a configuração do deploy no Netlify para que a aplicação
Next.js fosse tratada corretamente como aplicação Next.js SSR.

A configuração utilizada no processo foi ajustada considerando a
estrutura do repositório:

``` text
/
└── leonardosousa-portfolio/
```

Com:

``` text
Build command:
npm run build
```

e publicação do output `.next`.

Também foi mantido o `next.config.ts` sem:

``` ts
output: "export"
```

A aplicação permaneceu utilizando Next.js App Router/SSR.

Não foi utilizada uma regra SPA:

``` text
/* /index.html 200
```

### Resultado

O deploy passou a disponibilizar a aplicação em produção e as páginas
localizadas puderam ser carregadas normalmente.

------------------------------------------------------------------------

## 2. Erro: Netlify Secret Scanning bloqueando o deploy

### Problema

O Netlify interrompeu um deploy porque o Secret Scanning identificou
dois valores no build como possíveis secrets:

``` text
NEXT_PUBLIC_FARO_APP_NAME
NEXT_PUBLIC_FARO_APP_VERSION
```

Os valores identificados eram:

``` text
leonardosousa-portfolio
1.0.0
```

Essas variáveis eram utilizadas na configuração pública do Grafana Faro
e não eram secrets privados.

### Solução implementada

Foi utilizada a configuração do Netlify:

``` text
SECRETS_SCAN_OMIT_KEYS
```

para informar ao scanner quais variáveis públicas não deveriam ser
tratadas como secrets.

As variáveis públicas envolvidas no projeto foram consideradas nessa
configuração:

``` text
NEXT_PUBLIC_FARO_APP_NAME
NEXT_PUBLIC_FARO_APP_VERSION
NEXT_PUBLIC_FARO_URL
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

A configuração utiliza os nomes das variáveis separados por vírgulas.

### Resultado

O falso positivo do Secret Scanning deixou de bloquear o deploy,
mantendo o Secret Scanning habilitado.

------------------------------------------------------------------------

## 3. Erro: configuração incorreta durante o preenchimento do Secret Scanning

### Problema

Durante a configuração do Netlify, houve confusão entre os campos:

``` text
Key
```

e:

``` text
Value
```

A lista das variáveis públicas foi inicialmente tratada como se fosse o
nome da configuração.

### Solução implementada

A configuração foi organizada como:

``` text
Key:
SECRETS_SCAN_OMIT_KEYS
```

e os nomes das variáveis foram colocados no campo:

``` text
Value:
NEXT_PUBLIC_FARO_APP_NAME,NEXT_PUBLIC_FARO_APP_VERSION,NEXT_PUBLIC_FARO_URL,NEXT_PUBLIC_EMAILJS_SERVICE_ID,NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### Resultado

O Netlify passou a interpretar corretamente a configuração do Secret
Scanning.

------------------------------------------------------------------------

## 4. Erro: persistência do tema não era aplicada corretamente após o carregamento

### Problema

Em produção, o navegador possuía:

``` text
localStorage.theme = "light"
```

mas o documento não apresentava:

``` text
data-theme="light"
```

A leitura:

``` js
document.documentElement.getAttribute("data-theme")
```

retornava:

``` text
null
```

Quando o atributo era aplicado manualmente:

``` js
document.documentElement.setAttribute("data-theme", "light")
```

o tema era alterado corretamente.

### Solução implementada

Foi adicionado um inicializador de tema no `<head>` do `app/layout.tsx`,
antes da aplicação da interface:

``` ts
const themeInitializer = `
(function () {
  try {
    var savedTheme = localStorage.getItem("theme");
    var theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;
```

E o script foi inserido no `<head>`:

``` tsx
<script
  dangerouslySetInnerHTML={{
    __html: themeInitializer,
  }}
/>
```

### Resultado

A inicialização do tema passou a ocorrer no `<head>,` utilizando o valor
persistido em:

``` text
localStorage.theme
```

------------------------------------------------------------------------

## 5. Erro: Grafana Faro não capturava inicialmente durante o teste

### Problema

Durante a validação do Grafana Faro no navegador Brave, a telemetria
inicialmente não era capturada.

### Solução implementada

Foi tratado o bloqueio realizado pelo navegador durante o teste.

Após o ajuste, a aplicação passou a enviar os dados de telemetria
normalmente.

### Resultado

O Grafana Faro passou a capturar dados da aplicação em produção.

Foram observados:

``` text
Page Loads
Errors
TTFB
FCP
LCP
CLS
INP
HTTP
```

Resultado observado no teste:

``` text
Page Loads: 1
Errors: 0
TTFB: ~1315 ms
FCP/LCP: ~1.65 s
CLS: 0
INP: 0
```

------------------------------------------------------------------------

## 6. Teste de carga: 10 VUs

### Problema

Foi necessário validar o comportamento HTTP da aplicação em produção sob
carga.

### Solução implementada

Foi utilizado o k6 portátil para realizar o teste contra:

``` text
https://leonardosousa.dev.br/pt
```

O teste utilizou uma carga progressiva até:

``` text
10 VUs
```

### Resultado

O teste foi aprovado com:

``` text
p95: ~109 ms
HTTP failures: 0%
Checks: 200/200
Requests: 200
```

------------------------------------------------------------------------

## 7. Teste de carga: aproximadamente 100 VUs

### Problema

Foi realizado um teste de carga superior para verificar o comportamento
da aplicação sob uma quantidade maior de usuários virtuais.

### Solução implementada

Foi executado um teste k6 chegando a aproximadamente:

``` text
100 VUs
```

### Resultado

O teste apresentou aproximadamente:

``` text
27%–29% de falhas
```

com:

``` text
p95: ~103–108 ms
```

e máximo próximo de:

``` text
19,3 s
```

com aproximadamente:

``` text
723–745 requests
```

O resultado foi aceito para o cenário atual de lançamento, considerando
a carga esperada para o projeto.

------------------------------------------------------------------------

## 8. Estado final após as correções

As correções implementadas envolveram:

``` text
404 nas rotas
↓
configuração do deploy Next.js/Netlify

Secret Scanning
↓
SECRETS_SCAN_OMIT_KEYS

Configuração Key/Value
↓
correção dos campos da variável

Persistência do tema
↓
themeInitializer no <head>

Grafana Faro
↓
tratamento do bloqueio do navegador

Validação HTTP
↓
testes k6
```

O checkpoint de produção registrado foi:

``` text
v0.1.15 — Production SSR Release
```
