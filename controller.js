const { student, faculty, event,history ,project } = require('./schema');
module.exports. insertStudent= async (req,res) => {
    const student = new Student({
        studentid:Number(req.body.studentid),
        name: req.body.name,
        mobno:Number(req.body.mobno)
        
    })
    await student.save();
    res.send({msg:"student added sucessfully !"});
}
module.exports.insertFaculty = async (req,res) => {
    const faculty = new Faculty({
        facultyid:req.body.facultyid,
        name: req.body.name,
        mobno:Number(req.body.mobno),
       
    })
    await faculty.save();
    res.send({msg:"faculty Added Sucessfully !"});
}
module.exports.insertEvent = async (req,res) => {
    const event = new Eventnew({
        name:req.body.name,
        rollno:req.body.rollno,
        department:req.body.department,
        event1:req.body.event1,
        event2:req.body.event2,
        event3:req.body.event3,
        event4:req.body.event4

    })
    await event.save();
    res.send({msg:"event is registered Sucessfully !"});
}
module.exports.insertEventhistory = async (req,res) => {
    const eventhis= new Eventhistory({
        name:req.body.name,
        date:req.body.date

    })
    await eventhis.save();
    res.send({msg:"eventhistory is added sucessfully!"});
}
module.exports.insertProject = async (req,res) => {
    const compro= new Project({
        projectname:req.body.name,
        category:req.body.date

    })
    await compro.save();
    res.send({msg:"project is added sucessfully!"});
}

//getall student
module.exports.getallst = async (req,res) => {
    const student = await Student.find({});
    // res.send({msg:"request received"});
    console.log(student);
    res.send(student)
}
module.exports.getallft = async (req,res) => {
    const faculty= await Faculty.find({});
    // res.send({msg:"request received"});
    console.log(faculty);
    res.send(faculty)
}
module.exports.getallev = async (req,res) => {
    const event= await Eventnew.find({});
    // res.send({msg:"request received"});
    console.log(event);
    res.send(event)
}
module.exports.getallevh = async (req,res) => {
    const eventhis = await Eventhistory.find({});
    console.log(eventhis);
    res.send(eventhis)
}
module.exports.getallpro = async (req,res) => {
    const project = await Project.find({});
    console.log(project);
    res.send(project)
}


//getone
module.exports.getonestu=async(req,res)=>{
    const student=await Student.findOne({studentid:Number(req.params.studentid)});
    console.log(student);
    res.send(student)
    if(!student)
      return res.send({msg:"student not found!"});
    res.send(student);
    
}

module.exports.getoneft=async(req,res)=>{
    const faculty=await Faculty.findOne({facultyid:Number(req.params.facultyid)});
    console.log(faculty);
    res.send(faculty)
    if(!faculty)
      return res.send({msg:"student not found!"});
    res.send(faculty);
    
}

module.exports.getoneev=async(req,res)=>{
    const event=await Eventnew.findOne({rollno:Number(req.params.rollno)});
    console.log(event);
    res.send(event)
    if(!event)
      return res.send({msg:"student not found!"});
    res.send(event);
    
}

//update
module.exports.updateft=async(req,res)=>{
    var data = {
        name: req.body.name,
        mobno:Number(req.body.mobno)};
    console.log(req.body.facultyid)
    await Faculty.findOneAndUpdate({facultyid:req.body.facultyid},data);
    const faculty = await Faculty.findOne({facultyid:req.body.facultyid})
    if(!faculty)
    return res.send({msg:"faculty not fount"})
    res.send(faculty);
    if(faculty){
        return res.send({msg:"faculty exit in db"});
    }
        const saved_ft=await faculty.save();
        res.send(saved_ft);
 }


module.exports.updatest=async(req,res)=>{
    var data = {
        name: req.body.name,
        mobno:Number(req.body.mobno)};
    console.log(req.body.studentid)
    await Student.findOneAndUpdate({studentid:req.body.studentid},data);
    const student= await Student.findOne({studentid:req.body.studentid})
    if(!student)
    return res.send({msg:"student not fount"})
    res.send(student);
    if(student){
        return res.send({msg:"student exit in db"});
    }
        const saved_st=await student.save();
        res.send(saved_st);
 }
 module.exports.updateev=async(req,res)=>{
    var data = {
        name:req.body.name,
       
        department:req.body.department,
        event1:req.body.event1,
        event2:req.body.event2,
        event3:req.body.event3,
        event4:req.body.event4};
    console.log(req.body.rollno)
    await Eventnew.findOneAndUpdate({rollno:req.body.rollno},data);
    const event = await Eventnew.findOne({rollno:req.body.rollno})
    if(!event)
    return res.send({msg:"event not fount"})
    res.send(event);
    if(event){
        return res.send({msg:"event exit in db"});
    }
        const saved_ev=await event.save();
        res.send(saved_ev);
 }

 module.exports.updateevh=async(req,res)=>{
    var data = {
        name:req.body.name,
        date:req.body.date};
    console.log(req.body.name)
    await Eventhistory.findOneAndUpdate({name:req.body.name},data);
    const eventhis= await Eventhistory.findOne({name:req.body.name})
    if(!eventhis)
    return res.send({msg:"event not fount"})
    res.send(eventhis);
    if(eventhis){
        return res.send({msg:"event exit in db"});
    }
        const saved_evh=await eventhis.save();
        res.send(saved_evh);
 }

 module.exports.updatepro=async(req,res)=>{
    var data = {
        projectname:req.body.name,
        category:req.body.date};
    console.log(req.body.projectname)
    await Project.findOneAndUpdate({projectname:req.body.projectname},data);
    const project= await Project.findOne({projectname:req.body.projectname})
    if(!project)
    return res.send({msg:"project not fount"})
    res.send(project);
    if(project){
        return res.send({msg:"project exit in db"});
    }
        const saved_pro=await project.save();
        res.send(saved_pro);
 }

 //delete
 module.exports.deletest=async(req,res)=>{
    const student = await Student.findOneAndDelete({studentid:req.params.studentid});
    if(!student)
      return res.send({msg:"student not found"})
    res.send({msg:"student deleted"});
 }
 module.exports.deleteft=async(req,res)=>{
    const faculty = await Faculty.findOneAndDelete({facultyid:req.params.facultyid});
    if(!faculty)
      return res.send({msg:"faculty not found"})
    res.send({msg:"faculty deleted"});

 }
 module.exports.deleteev=async(req,res)=>{
    const event = await Eventnew.findOneAndDelete({studentid:req.params.studentid});
    if(!event)
      return res.send({msg:"event not found"})
    res.send({msg:"sevent deleted"});
 }
 module.exports.deleteevh=async(req,res)=>{
    const eventhis = await Eventhistory.findOneAndDelete({studentid:req.params.studentid});
    if(!eventhis)
      return res.send({msg:"event not found"})
    res.send({msg:"event deleted"});
 }

 module.exports.deletepro=async(req,res)=>{
    const project = await Project.findOneAndDelete({studentid:req.params.studentid});
    if(!project)
      return res.send({msg:"event not found"})
    res.send({msg:"event deleted"});
 }
