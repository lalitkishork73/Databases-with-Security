const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/TestDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
)
  .then(() => console.log("MongoDb is connected!"))
  .catch((err) => console.log(err));
  