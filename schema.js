const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentid:{
        type: Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
   
    mobno: {
        type: Number,
        required: true,
        unique:true
    }
   
});

const FacultyScehma= new mongoose.Schema({
    facultyid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobno: {
        type: Number,
        required: true,
        unique:true
    }
   
});
const  EventSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno: {
        type: String,
        required: true
    },
    department: {
        type: Number,
        required: true
    },
    event1: {
        type:String,
        required:true
    },
    event2: {
        type:String,
        required:true
    },
    event3: {
        type:String,
        required:true
    },
    event4: {
        type:String,
        required:true
    }
});
const  EventhistorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const  ProjectSchema= new mongoose.Schema({
    projectname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
    
});
const student = mongoose.model('student', StudentSchema);
const faculty = mongoose.model('faculty',FacultyScehma );
const event = mongoose.model('event',EventSchema);
const history=mongoose.model('history',EventhistorySchema);
const project=mongoose.model('project',ProjectSchema);

module.exports = { student, faculty, event,history,project };   