const Form = require('../model/form');

// Post Contact Form Data
async function form(req, res){
    try {
        const form = await Form.create(req.body);
        res.json({ success: true, form });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    form
}