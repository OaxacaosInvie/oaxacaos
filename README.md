# Oaxacaos

> Un proyecto para mejorar la vialidad de la ciudad de Oaxaca

## Sigue estas instrucciones para descargar y probar el proyecto, antes asegurate de tener la ultima version espable de node

Debes escribir lo siguiente el tu terminal, omitiendo el simbolo de dólar.

``` bash
# descarga el proyecto
$ git clone https://github.com/OaxacaosInvie/oaxacaos.git

# entra a la carpeta del proyecto
$ cd oaxacaos

# instala las dependencias del proyecto
$ npm install
```

Antes de inicializar el proyecto debes obtener tu ip

``` bash
$ ifconfig
```
Te mostrará una serie de datos, debes ubicar la parte donde dice en0

![alt text](/static/ip.png)

Lo que debes hacer ahora es copiarla y pegarla en nuxt.config.js, esto debe ser en "server", que se encuentra al final del archivo

![alt text](/static/changeip.png)

Reemplaza ese espacio con tu ip

``` bash
# corre la aplicación
$ npm run dev
```
Abre el link que te aparece en tu terminal, se debe de ver así: http://tuip:1234/

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
