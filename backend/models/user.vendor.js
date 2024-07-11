import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({

  vendorName: {
    type: String,
    required: true,
    
  },
  contact: {
    type: String,
    required: true,
   
  },
  emailId: {
    type: String,
    required: true,
    // unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"]
  },
  address: {
    type: String,
    required: true,
 
  },
  GST: {
    type: String,
    required: true,
    // unique: true
  }

});


const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
