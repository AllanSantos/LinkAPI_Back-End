import mongoose from 'mongoose';

const BlingSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: Date,
    required: true
  },
  totalvenda: {
    type: Number,
    required: true
  }
},{
  timestamps: true,
})

export default mongoose.model('Bling', BlingSchema);