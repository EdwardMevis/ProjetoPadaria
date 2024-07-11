const db = require('./banco')

const Produtos = db.sequelize.define( //produtos
    'produtos', { //produtos
        nome: {
            type: db.Sequelize.STRING
        },
        preco: { //preco
            type: db.Sequelize.FLOAT //float
        },
        quantidade: { //quantidade
            type: db.Sequelize.INTEGER  //integer
        }
    
    }
)

//Produtos.sync({force: true}) //produtos

module.exports = Produtos;  //produtos