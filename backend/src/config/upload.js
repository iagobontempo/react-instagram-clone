const multer = require('multer')
const path = require('path') // Bilioteca que formata caminhos para ficarem iguais em Unix e Linux

//Objeto de configuração do multer. Para saber qual tipo de storage usado
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // Manda um caminho relativo (neste caso para pasta uploads)
        filename: function(req, file, callback) { //Funcao para retornar o nome exato imagem
            callback(null, file.originalname)
        }
    })
}