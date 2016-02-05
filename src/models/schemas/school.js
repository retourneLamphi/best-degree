import mongoose from 'mongoose';
import mongoosastic from 'mongoosastic';

let Schema = new mongoose.Schema({
  type: {
    type: String
  },
  name: {
    type: String
  },
  acronym: {
    type: String
  },
  status: {
    type: String
  },
  tutor: {
    type: String
  },
  university: {
    type: String
  },
  adress: {
    type: String
  },
  zip: {
    type: String
  },
  town: {
    type: String
  },
  department: {
    type: String
  },
  academy: {
    type: String
  },
  region: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  }
});

Schema.plugin(mongoosastic);

export default Schema;

