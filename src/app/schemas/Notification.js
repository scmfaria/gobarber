// esta sera a representação dos dados dentro do mongo
// no mongo pode-se usar os tipos primitivos conhecidos, como:
// array, string, number ...
import  mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Number,
        required: true,
    },
    read: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true, // aqui esta dizendo para criar os campos updatedAt e CreatedAt
});

export default mongoose.model('Notification', NotificationSchema);