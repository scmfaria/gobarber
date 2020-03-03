import multer from 'multer'; // biblioteca para suportar upload de arquivos de diversas extensoes
import crypto from 'crypto';
import { extname, resolve } from "path";

export default {
    // essa storage poderia ser por exemplo a AWS ou GCP ...
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => { // filename controla tudo sobre o nome da imagem
            crypto.randomBytes(16, (err, res) => {
                if(err) return cb(err);

                return cb(null, res.toString('hex') + extname(file.originalname));
                // nesse caso o nome do arquivo dentro da pasta tmp ficaria mais ou menos assim: 85dsfdkljneemvp885.png
            })
        },
    }),
};

// crypto - biblioteca dentro do node usado para gerar caracteres aleatorios, etc