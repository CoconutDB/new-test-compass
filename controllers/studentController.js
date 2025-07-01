const Student = require("../models/Student");

const StudentController = {
    createStudent: async(req, res) => {
        try{
            const {
                name,
                email,
                enrollmentNo
            } = req.body

            const newstudnt = await Student.create({
                name: name,
                email: email,
                enrollmentNo: enrollmentNo
            })

            res.json({ Status: "Success"})
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = StudentController; 