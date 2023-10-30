import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  district: {
    type: String,
    required: [true, "Please add a district"],
  },
  province: {
    type: String,
    required: [true, "Please add a province"],
  },
  postalcode: {
    type: String,
    required: [true, "Please add a postalcode"],
    maxlength: [5, "Postalcode cannot be more than 5 digits"],
  },
  tel: {
    type: String,
  },
  picture: {
    type: String,
  },
});

const hospitalInit = () => mongoose.model("Hospital", HospitalSchema);

const Hospital = (mongoose.models.Hospital ??
  hospitalInit()) as unknown as ReturnType<typeof hospitalInit>;

export default Hospital;
