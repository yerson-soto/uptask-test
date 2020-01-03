// const Project = require('../models/Project');

class ProjectController {
    static index(req, res) {
        res.send('Index');
    }

    static create(req, res) {
        res.send('Create');
    }

    static store(req, res) {
        res.send('Store');
    }
    
    static show(req, res) {
        res.send('Show');
    }

    static edit(req, res) {
        res.send('Edit');
    }

    static update(req, res) {
        res.send('Uptate');
    }

    static delete(req, res) {
        res.send('Delete');
    }
}

module.exports = ProjectController;