
const crypto = require('crypto');
exports.seed = async function(knex) {
  //truncate all existing tables
  // knex.raw('TRUNCATE TABLE "user" CASCADE')
  // Deletes ALL existing entries
  await knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        { role:'Employee' },
        { role:'Team Lead' },
        { role:'HR' },
        { role:'Admin' },
        { role:'Manager' }
      ]);
    });
  return knex('users').del().then(function(){
    return knex('users').insert([
      {email:'badsha@sample.net',employee_name:'Badsha',password:crypto.createHash('md5').update('Badsha@123#').digest("hex"),user_role:1},
      {email:'hr1@sample.net',employee_name:'HR1',password:crypto.createHash('md5').update('hr@123#').digest("hex"),user_role:3},
      {email:'manager1@sample.net',employee_name:'Manager1',password:crypto.createHash('md5').update('manager@123#').digest("hex"),user_role:5},
      {email:'Fteamlead1@sample.net',employee_name:'Fteamlead1',password:crypto.createHash('md5').update('teamlead@123#').digest("hex"),user_role:2},
      {email:'admin@sample.net',employee_name:'admin',password:crypto.createHash('md5').update('admin@123#').digest("hex"),user_role:4},
      {email:'test1@sample.net',employee_name:'test',password:crypto.createHash('md5').update('testlead@123#').digest("hex"),user_role:2},
      {email:'manager2@sample.net',employee_name:'Manager2',password:crypto.createHash('md5').update('manager2@123#').digest("hex"),user_role:5},
      {email:'Emp2@sample.net',employee_name:'Emp2',password:crypto.createHash('md5').update('Emp2@123#').digest("hex"),user_role:1},
    ]);
  })
};
