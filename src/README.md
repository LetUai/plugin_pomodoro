## Instruções para o desenvolvimento com o Browserify
> instale o browserify em modo global
``` bash
$ npm install -g browserify

```
> instale as dependências do projeto
``` bash
$ npm install 
```
> Após as devidas modificações no arquivo content_no_build.js  gere uma nova versão do content.js
``` bash 
$ browserify content_no_build.js > content.js
```
> E pronto! O novo arquivo content foi criado já contendo tudo necessário para o uso dos modulos.  
