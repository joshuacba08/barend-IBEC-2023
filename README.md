# barend-IBEC-2023




### Encriptar una contraseña

Necesitamos instalar la librería bycript

```shell
npm i bcrypt
```

Es necesario procesar la contraseña con esta librería antes de enviarla a la base de datos


```javascript
const bcrypt = require('bcrypt'); // importo bcryptjs para encriptar la contraseña

 // antes de crear un usuario, vamos a encriptar la contraseña
        const salt = bcrypt.genSaltSync(); // genero un salt, un salt es una cadena aleatoria que se agrega a la contraseña para que sea más difícil de descifrar
        req.body.password = bcrypt.hashSync(req.body.password, salt); // encripto la contraseña (req.body.password) con el salt (salt generado en la línea anterior)


```
