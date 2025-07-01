const Joi = require('joi');
const Model = require('coconutdb');

const studentSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    enrollmentNo: Joi.string().required(),
});

class StudentModel extends Model {
    constructor() {
        super('students', studentSchema);
    }
}

module.exports = new StudentModel();