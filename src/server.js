import app from './app';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:admin@linkapi-puzju.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(3001);
