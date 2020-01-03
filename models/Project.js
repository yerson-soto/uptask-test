const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Project extends Model {}

Project.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING
}, {
    sequelize,
    modelName: 'project'
});

Project.sync()
    .then(() => {
        Project.create({
            title: 'New Project',
            slug: 'new-project'
        })
    })
    .catch(err => console.error("Error creating project table: "))

module.exports = Project;