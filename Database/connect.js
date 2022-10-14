const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/testfinal',{
    useNewUrlParser: true,
    useUnifiedTopology: true   
}).then(()=> {
    console.log('MongoDB Connected')
}).catch(error=> {
    console.log('error connecting to database')
});