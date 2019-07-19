const mongoose = require('mongoose');
const URL_MONGO = 'mongodb+srv://ScomRay:raysc5coca@scomray-alk4c.gcp.mongodb.net/test';

mongoose.connect(URL_MONGO, {useNewUrlParser: true}, (err) => {
    if (!err) console.log('Conexión exitosa');
});

const Schema = mongoose.Schema;

const movieRaySchema = new Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    anio: String,
    sinopsis: {
        type: String,
    },
    duracion: {
        type: Number,
        default: 90
    },
    genero: {
        type: String,
        enum: ['CO','DA','TE'],
        required: true
    },
    actores: [String],
    directores: {
        type: [{
            fullName: String,
            edad: {
                type: Number,
                default: 18
            },
            nacionalidad: {
                type: String,
                enum: ['MX','US'],
                required: true
            }
        }]
    }
}, {timestamps: true});

const MovieRay = mongoose.model('MovieRay', movieRaySchema);

module.exports = {MovieRay};