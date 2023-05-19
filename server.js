const {connectdb}=require('./connect');
const controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});


app.post('/api/student', controller.insertStudent);
app.post('/api/faculty', controller.insertFaculty);
app.post('/api/event', controller.insertEvent);
app.post('/api/eventhis', controller.insertEventhistory );
app.post('/api/project', controller.insertProject);
app.get('/api/student',controller.getallst);
app.get('api/faculty',controller.getallft);
app.get('api/event',controller.getallev);
app.get('api/eventhis',controller.getallevh);
app.get('api/project',controller.getallpro);
app.get('api/student/:studentid',controller.getonestu);
app.get('api/faculty/:facultyid',controller.getoneft);
app.get('api/event/:rollno',controller.getoneev);
app.put('api/student/',controller.updatest);
app.put('api/faculty',controller.updateft);
app.put('api/event',controller.updateev);
app.put('api/eventhis',controller.updateevh);
app.put('api/project',controller.updatepro);
app.delete('app/student/:studentid',controller.deletest);
app.delete('api/faculty/:facultyid',controller.deleteft);
app.delete('api/event/:rollno',controller.deleteev);
app.delete('api/eventhis/name',controller.deleteevh);
app.delete('api/project/:projectname',controller.deletepro);

const port = 5000;
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
})

